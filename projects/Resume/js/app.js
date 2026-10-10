import { showStatus, saveLocalDraft, getLocalDraft, exportToJSONFile, loadFromAWS, submitToAWS } from './storage.js';
import { addProject, addEducation, addCourse, addLanguage, initDragAndDrop, reorderSectionsByValue } from './section-manager.js';
import { collectFormData, generateResume } from './resume-generator.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Wire Dynamic Row Buttons
    document.getElementById('btnAddProject').addEventListener('click', () => addProject());
    document.getElementById('btnAddEducation').addEventListener('click', () => addEducation());
    document.getElementById('btnAddCourse').addEventListener('click', () => addCourse());
    document.getElementById('btnAddLanguage').addEventListener('click', () => addLanguage());

    // 2. Wire Header Controls
    document.getElementById('btnLoadAWS').addEventListener('click', async () => {
        try {
            const id = document.getElementById('employeeId').value.trim();
            const data = await loadFromAWS(id);
            populateForm(data);
        } catch (e) {
            showStatus(e.message, true);
        }
    });

    document.getElementById('btnSaveAWS').addEventListener('click', async () => {
        try {
            const data = collectFormData();
            await submitToAWS(data);
        } catch (e) {
            showStatus(e.message, true);
        }
    });

    document.getElementById('btnExportJSON').addEventListener('click', () => {
        const data = collectFormData();
        exportToJSONFile(data);
    });

    document.getElementById('jsonFileInput').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                populateForm(data);
                showStatus("Loaded successfully from JSON file!");
            } catch (err) {
                showStatus("Invalid JSON file formatting", true);
            }
        };
        reader.readAsText(file);
    });

    document.getElementById('btnGenerate').addEventListener('click', () => {
        const data = collectFormData();
        saveLocalDraft(data);
        generateResume(data);
    });

    document.getElementById('btnClear').addEventListener('click', () => {
        if (confirm("Clear all data?")) {
            localStorage.clear();
            location.reload();
        }
    });

    document.getElementById('btnBackToForm').addEventListener('click', () => {
        document.getElementById('preview-section').style.display = 'none';
        document.getElementById('form-section').style.display = 'block';
    });

    document.getElementById('btnPrintPDF').addEventListener('click', () => {
        window.print();
    });

    // 3. Section Order input changes
    document.querySelectorAll('.section-order-val').forEach(input => {
        input.addEventListener('change', () => reorderSectionsByValue());
    });

    // 4. Initialize Drag and Drop
    initDragAndDrop();

    // 5. Restore Local Draft or Seed Defaults
    const draft = getLocalDraft();
    if (draft) {
        populateForm(draft);
    } else {
        addProject();
        addEducation();
        addCourse();
        addLanguage();
    }
});

function populateForm(data) {
    if (!data) return;
    if (data.employeeId) document.getElementById('employeeId').value = data.employeeId;
    if (data.layout) document.getElementById('resumeLayout').value = data.layout;
    
    document.getElementById('empName').value = data.name || "";
    if (data.contact) {
        document.getElementById('empEmail').value = data.contact.email || "";
        document.getElementById('empPhone').value = data.contact.phone || "";
        document.getElementById('empLinkedIn').value = data.contact.linkedin || "";
        document.getElementById('empGitHub').value = data.contact.github || "";
    }

    document.getElementById('profileSummaryText').value = data.profileSummary || "";
    document.getElementById('compDomain').value = data.competences?.domain || "";
    document.getElementById('compTasks').value = (data.competences?.tasks || []).join('\n');

    // Populate Dynamic Lists
    const prjContainer = document.getElementById('projects-container');
    prjContainer.innerHTML = '';
    (data.projects || []).forEach(p => addProject(p));

    const eduContainer = document.getElementById('education-container');
    eduContainer.innerHTML = '';
    (data.education || []).forEach(e => addEducation(e));

    const crsContainer = document.getElementById('course-container');
    crsContainer.innerHTML = '';
    (data.courses || []).forEach(c => addCourse(c));

    const langContainer = document.getElementById('language-container');
    langContainer.innerHTML = '';
    (data.languages || []).forEach(l => addLanguage(l));

    // Restore section order and inclusion if saved
    if (data.sectionConfig) {
        Object.entries(data.sectionConfig).forEach(([key, cfg]) => {
            const sec = document.querySelector(`.section-group[data-section-key="${key}"]`);
            if (sec) {
                sec.querySelector('.section-order-val').value = cfg.order;
                sec.querySelector('.section-include').checked = cfg.included;
            }
        });
        reorderSectionsByValue();
    }
}