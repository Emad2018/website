import { API_URL, LOCAL_STORAGE_KEY } from './config.js';

export function showStatus(message, isError = false) {
    const el = document.getElementById('statusNotification');
    if (el) {
        el.innerText = message;
        el.style.color = isError ? "#ff4d4f" : "#00f2fe";
        setTimeout(() => { el.innerText = ""; }, 4000);
    }
}

export function saveLocalDraft(data) {
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
        console.warn("Could not save local draft", e);
    }
}

export function getLocalDraft() {
    try {
        const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch (e) {
        return null;
    }
}

export function exportToJSONFile(data) {
    const filename = `${data.employeeId || 'resume'}_data.json`;
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    showStatus("Exported to Local JSON!");
}

export async function loadFromAWS(employeeId) {
    if (!employeeId) throw new Error("Enter Profile ID");
    showStatus("Fetching cloud record...");
    const res = await fetch(`${API_URL}?employeeId=${encodeURIComponent(employeeId)}`);
    const data = await res.json();
    if (!data || data.message === "No data found") {
        throw new Error(`No record found for ID '${employeeId}'`);
    }
    showStatus("Loaded successfully from AWS Cloud!");
    return data;
}

export async function submitToAWS(data) {
    if (!data.employeeId) throw new Error("Profile ID required!");
    showStatus("Saving to AWS Cloud...");
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error("AWS request failed");
    showStatus("Saved to AWS Cloud successfully!");
}