export function togglePresent(checkbox) {
    const row = checkbox.closest('.dynamic-group');
    const toInput = row.querySelector('.to-date');
    if (toInput) {
        toInput.disabled = checkbox.checked;
        if (checkbox.checked) toInput.value = "";
    }
}

export function removeRow(btn) {
    const row = btn.closest('.dynamic-group');
    row.style.opacity = '0';
    setTimeout(() => row.remove(), 150);
}

function createBaseRow(className, html) {
    const div = document.createElement('div');
    div.className = `dynamic-group ${className}`;
    div.innerHTML = html;
    setupItemDrag(div);
    return div;
}

export function addProject(data = null) {
    const container = document.getElementById('projects-container');
    const html = `
        <div class="card-controls">
            <span class="drag-handle" style="cursor:grab; color:#aaa;">::: DRAG :::</span>
            <button type="button" class="btn-delete">✕ Delete</button>
        </div>
        <div class="project-grid" style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
            <input type="text" class="prj-name" placeholder="Project Name (Optional)" style="grid-column: span 2;">
            <input type="text" class="prj-customer" placeholder="Customer / Company">
            <input type="text" class="prj-location" placeholder="Location (e.g. Munich, Germany)">
            <input type="text" class="prj-roles" placeholder="Role Title">
            <div style="grid-column: span 2; display:flex; gap:10px; align-items:center;">
                <label>From: <input type="month" class="prj-from"></label>
                <label>To: <input type="month" class="prj-to to-date"></label>
                <label><input type="checkbox" class="prj-present"> Present</label>
            </div>
            <textarea class="prj-resp" placeholder="Key Responsibilities / Achievements (one per line)" style="grid-column: span 2;" rows="3"></textarea>
            <input type="text" class="prj-tools" placeholder="Tools / Tech (comma separated)">
            <input type="text" class="prj-platform" placeholder="Platform / Environment">
        </div>`;
    const row = createBaseRow('project-item', html);
    
    row.querySelector('.btn-delete').addEventListener('click', () => removeRow(row.querySelector('.btn-delete')));
    row.querySelector('.prj-present').addEventListener('change', (e) => togglePresent(e.target));

    if (data) {
        row.querySelector('.prj-name').value = data.name || "";
        row.querySelector('.prj-from').value = data.from || "";
        if (data.to === "Present") {
            row.querySelector('.prj-present').checked = true;
            row.querySelector('.prj-to').disabled = true;
        } else row.querySelector('.prj-to').value = data.to || "";
        row.querySelector('.prj-resp').value = Array.isArray(data.responsibilities) ? data.responsibilities.join('\n') : data.responsibilities || "";
        row.querySelector('.prj-tools').value = Array.isArray(data.tools) ? data.tools.join(', ') : data.tools || "";
        row.querySelector('.prj-platform').value = data.platform || "";
        row.querySelector('.prj-customer').value = data.customer || "";
        row.querySelector('.prj-location').value = data.location || "";
        row.querySelector('.prj-roles').value = data.roles || "";
    }
    container.appendChild(row);
}

export function addEducation(data = null) {
    const container = document.getElementById('education-container');
    const html = `
        <div class="card-controls">
            <span class="drag-handle" style="cursor:grab; color:#aaa;">::: DRAG :::</span>
            <button type="button" class="btn-delete">✕ Delete</button>
        </div>
        <div class="date-group" style="display:flex; gap:10px; align-items:center; margin-bottom:8px;">
            <label>From: <input type="month" class="edu-from"></label>
            <label>To: <input type="month" class="edu-to to-date"></label>
            <label><input type="checkbox" class="edu-present"> Present</label>
        </div>
        <div class="input-grid">
            <input type="text" class="edu-degree" placeholder="Degree (e.g. B.Sc. Computer Science)" style="grid-column: span 2;">
            <input type="text" class="edu-university" placeholder="University / Institution" style="grid-column: span 2;">
        </div>`;
    const row = createBaseRow('education-item', html);
    row.querySelector('.btn-delete').addEventListener('click', () => removeRow(row.querySelector('.btn-delete')));
    row.querySelector('.edu-present').addEventListener('change', (e) => togglePresent(e.target));

    if (data) {
        row.querySelector('.edu-from').value = data.from || "";
        if (data.to === "Present") {
            row.querySelector('.edu-present').checked = true;
            row.querySelector('.edu-to').disabled = true;
        } else row.querySelector('.edu-to').value = data.to || "";
        row.querySelector('.edu-degree').value = data.degree || "";
        row.querySelector('.edu-university').value = data.university || "";
    }
    container.appendChild(row);
}

export function addCourse(data = null) {
    const container = document.getElementById('course-container');
    const html = `
        <div class="card-controls">
            <span class="drag-handle" style="cursor:grab; color:#aaa;">::: DRAG :::</span>
            <button type="button" class="btn-delete">✕ Delete</button>
        </div>
        <div class="input-grid">
            <input type="text" class="crs-name" placeholder="Course / Certification" style="grid-column: span 2;">
            <input type="text" class="crs-provider" placeholder="Provider / Issuer">
            <input type="text" class="crs-year" placeholder="Year (e.g. 2024)">
        </div>`;
    const row = createBaseRow('course-item', html);
    row.querySelector('.btn-delete').addEventListener('click', () => removeRow(row.querySelector('.btn-delete')));

    if (data) {
        row.querySelector('.crs-name').value = data.name || "";
        row.querySelector('.crs-provider').value = data.provider || "";
        row.querySelector('.crs-year').value = data.year || "";
    }
    container.appendChild(row);
}

export function addLanguage(data = null) {
    const container = document.getElementById('language-container');
    const html = `
        <div class="card-controls">
            <span class="drag-handle" style="cursor:grab; color:#aaa;">::: DRAG :::</span>
            <button type="button" class="btn-delete">✕ Delete</button>
        </div>
        <div class="input-grid">
            <input type="text" class="lang-name" placeholder="Language (e.g. German)">
            <select class="lang-level">
                <option value="Native">Native</option>
                <option value="Fluent">Fluent</option>
                <option value="Advanced C1">Advanced C1</option>
                <option value="Intermediate B2">Intermediate B2</option>
                <option value="Basic A2">Basic A2</option>
                <option value="A2">A2</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
                <option value="C1">C1</option>
            </select>
        </div>`;
    const row = createBaseRow('language-item', html);
    row.querySelector('.btn-delete').addEventListener('click', () => removeRow(row.querySelector('.btn-delete')));

    if (data) {
        row.querySelector('.lang-name').value = data.name || "";
        
        const select = row.querySelector('.lang-level');
        const levelVal = data.level || "Native";
        let match = [...select.options].find(opt => opt.value.toLowerCase() === levelVal.toLowerCase());
        if (!match) {
            match = document.createElement('option');
            match.value = levelVal;
            match.innerText = levelVal;
            select.appendChild(match);
        }
        select.value = match.value;
    }
    container.appendChild(row);
}

function setupItemDrag(el) {
    el.draggable = true;
    el.addEventListener('dragstart', () => el.classList.add('dragging'));
    el.addEventListener('dragend', () => el.classList.remove('dragging'));
}

export function initDragAndDrop() {
    document.querySelectorAll('.drag-container').forEach(container => {
        container.addEventListener('dragover', e => {
            e.preventDefault();
            const dragging = document.querySelector('.dynamic-group.dragging');
            if (!dragging) return;
            const afterElement = getDragAfterElement(container, e.clientY, '.dynamic-group:not(.dragging)');
            if (afterElement == null) container.appendChild(dragging);
            else container.insertBefore(dragging, afterElement);
        });
    });

    const wrapper = document.getElementById('sections-wrapper');
    document.querySelectorAll('.section-group').forEach(sec => {
        sec.draggable = true;
        sec.addEventListener('dragstart', () => sec.classList.add('dragging'));
        sec.addEventListener('dragend', () => {
            sec.classList.remove('dragging');
            syncSectionOrdersFromDOM();
        });
    });

    wrapper.addEventListener('dragover', e => {
        e.preventDefault();
        const dragging = document.querySelector('.section-group.dragging');
        if (!dragging) return;
        const afterElement = getDragAfterElement(wrapper, e.clientY, '.section-group:not(.dragging)');
        if (afterElement == null) wrapper.appendChild(dragging);
        else wrapper.insertBefore(dragging, afterElement);
    });
}

function syncSectionOrdersFromDOM() {
    const sections = [...document.querySelectorAll('.section-group')];
    sections.forEach((sec, idx) => {
        const input = sec.querySelector('.section-order-val');
        if (input) input.value = idx + 1;
    });
}

export function reorderSectionsByValue() {
    const wrapper = document.getElementById('sections-wrapper');
    const sections = [...document.querySelectorAll('.section-group')];
    sections.sort((a, b) => {
        const valA = parseInt(a.querySelector('.section-order-val').value) || 0;
        const valB = parseInt(b.querySelector('.section-order-val').value) || 0;
        return valA - valB;
    });
    sections.forEach(sec => wrapper.appendChild(sec));
}

function getDragAfterElement(container, y, selector) {
    const draggableElements = [...container.querySelectorAll(selector)];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) return { offset: offset, element: child };
        else return closest;
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}