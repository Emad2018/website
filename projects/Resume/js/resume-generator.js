export function formatDate(dateStr) {
    if (!dateStr) return "";
    if (dateStr === "Present") return "Present";
    
    const parts = dateStr.split('-');
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
        const year = parts[0];
        const month = parts[1];
        const date = new Date(year, month - 1);
        return `${date.toLocaleString('default', { month: 'short' })}. ${year}`;
    }
    
    return dateStr;
}

export function collectFormData() {
    const sectionConfig = {};
    document.querySelectorAll('.section-group').forEach(sec => {
        const key = sec.dataset.sectionKey;
        sectionConfig[key] = {
            order: parseInt(sec.querySelector('.section-order-val').value) || 99,
            included: sec.querySelector('.section-include').checked
        };
    });

    return {
        employeeId: document.getElementById('employeeId').value,
        layout: document.getElementById('resumeLayout').value,
        name: document.getElementById('empName').value,
        contact: {
            email: document.getElementById('empEmail').value,
            phone: document.getElementById('empPhone').value,
            linkedin: document.getElementById('empLinkedIn').value,
            github: document.getElementById('empGitHub').value
        },
        profileSummary: document.getElementById('profileSummaryText').value,
        competences: {
            domain: document.getElementById('compDomain').value,
            tasks: document.getElementById('compTasks').value.split('\n').filter(t => t.trim())
        },
        projects: [...document.querySelectorAll('.project-item')].map(el => {
            const prj = {
                customer: el.querySelector('.prj-customer').value,
                location: el.querySelector('.prj-location').value,
                roles: el.querySelector('.prj-roles').value,
                from: el.querySelector('.prj-from').value,
                to: el.querySelector('.prj-present').checked ? "Present" : el.querySelector('.prj-to').value,
                responsibilities: el.querySelector('.prj-resp').value.split('\n').filter(t => t.trim()),
                tools: el.querySelector('.prj-tools').value.split(',').map(t => t.trim()).filter(t => t),
                platform: el.querySelector('.prj-platform').value
            };
            const prjName = el.querySelector('.prj-name')?.value.trim();
            if (prjName) prj.name = prjName;
            return prj;
        }),
        education: [...document.querySelectorAll('.education-item')].map(el => ({
            degree: el.querySelector('.edu-degree').value,
            university: el.querySelector('.edu-university').value,
            from: el.querySelector('.edu-from').value,
            to: el.querySelector('.edu-present').checked ? "Present" : el.querySelector('.edu-to').value
        })),
        courses: [...document.querySelectorAll('.course-item')].map(el => {
            const course = {
                name: el.querySelector('.crs-name').value,
                provider: el.querySelector('.crs-provider').value
            };
            const yearVal = el.querySelector('.crs-year')?.value.trim();
            if (yearVal) course.year = yearVal;
            return course;
        }),
        languages: [...document.querySelectorAll('.language-item')].map(el => ({
            name: el.querySelector('.lang-name').value,
            level: el.querySelector('.lang-level').value
        })),
        sectionConfig
    };
}

export function generateResume(data) {
    document.getElementById('form-section').style.display = 'none';
    document.getElementById('preview-section').style.display = 'block';

    const container = document.getElementById('resume-template');
    const config = data.sectionConfig || {};

    const isIncluded = (key) => config[key] ? config[key].included : true;

    if (data.layout === 'classic') {
        renderClassicLayout(container, data, isIncluded);
    } else {
        renderModernLayout(container, data, isIncluded);
    }
}

function renderClassicLayout(container, data, isIncluded) {
    const projHTML = data.projects.map(p => {
        const fromDate = formatDate(p.from);
        const toDate = formatDate(p.to);
        const dateRange = (fromDate || toDate) ? `${fromDate}${fromDate && toDate ? ' – ' : ''}${toDate}` : '';
        const companyLoc = `${p.customer || ''}${p.location ? ', ' + p.location : ''}`;
        const platformItems = p.platform ? p.platform.split(/[,/]+/).map(t => t.trim()).filter(t => t) : [];

        return `
        <div class="cv-project-block">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
                <span style="font-weight: bold; color: var(--primary); font-size: 1rem;">${p.roles || ''}</span>
                <span style="font-size: 0.88rem; font-weight: 600; color: #555;">${dateRange}</span>
            </div>
            ${companyLoc ? `<div style="font-size: 0.9rem; color: #333; font-style: italic; margin-top: 2px;">${companyLoc}</div>` : ''}
            
            <div style="font-size: 0.85rem; margin-top: 6px;">
                ${p.responsibilities.length ? `<p style="margin:2px 0;"><strong>Responsibilities:</strong></p><ul style="margin-top: 4px; padding-left: 18px;">${p.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>` : ''}
                ${p.tools.length ? `<div style="margin-top: 6px;">${p.tools.map(t => `<span class="tech-badge">${t}</span>`).join('')}</div>` : ''}
                ${platformItems.length ? `<div style="margin-top: 4px;">${platformItems.map(pl => `<span class="tech-badge">${pl}</span>`).join('')}</div>` : ''}
            </div>
        </div>`;
    }).join('');

    const eduHTML = data.education.map(e => `
        <div style="margin-bottom: 12px;">
            <div style="font-weight: bold;">${e.degree}</div>
            <div style="font-size: 0.9rem; color: #555;">${e.university} | ${formatDate(e.from)} — ${formatDate(e.to)}</div>
        </div>`).join('');

    const crsHTML = data.courses.map(c => `
        <div style="margin-bottom: 8px;">
            <span style="font-weight: bold;">${c.name}</span> ${c.provider ? '— ' + c.provider : ''} ${c.year ? '(' + c.year + ')' : ''}
        </div>`).join('');

    const langHTML = data.languages.map(l => `<li><strong>${l.name}:</strong> ${l.level}</li>`).join('');

    container.innerHTML = `
        ${isIncluded('contactInfo') ? `
        <div class="cv-header">
            <h1 style="color: var(--primary); margin:0;">${data.name || "CURRICULUM VITAE"}</h1>
            <div class="modern-contact" style="margin-top: 8px;">
                <div class="contact-line">
                    ${data.contact.email ? '<span>✉ ' + data.contact.email + '</span>' : ''}
                    ${data.contact.phone ? '<span>☎ ' + data.contact.phone + '</span>' : ''}
                </div>
                <div class="contact-line">
                    ${data.contact.linkedin ? '<span>🔗 ' + data.contact.linkedin + '</span>' : ''}
                    ${data.contact.github ? '<span>💻 ' + data.contact.github + '</span>' : ''}
                </div>
            </div>
        </div>` : ''}

        ${isIncluded('profileSummary') && data.profileSummary ? `
        <div class="cv-section">
            <div class="cv-title">PROFILE SUMMARY</div>
            <p style="line-height: 1.5; font-size: 0.92rem;">${data.profileSummary}</p>
        </div>` : ''}

        ${isIncluded('education') ? `
        <div class="cv-section">
            <div class="cv-title">ACADEMIC DEGREES</div>
            ${eduHTML || '<p>No education provided.</p>'}
        </div>` : ''}

        ${isIncluded('competences') ? `
        <div class="cv-section">
            <div class="cv-title">COMPETENCES & SKILLS</div>
            <p style="margin-bottom:6px;"><strong>Domain:</strong> ${data.competences.domain}</p>
            <div style="display:flex; flex-wrap:wrap; gap:6px;">
                ${data.competences.tasks.map(t => `<span class="tech-badge">${t}</span>`).join('')}
            </div>
        </div>` : ''}

        ${isIncluded('projects') ? `
        <div class="cv-section">
            <div class="cv-title">PROJECT DETAILS & RESPONSIBILITIES</div>
            ${projHTML || '<p>No projects provided.</p>'}
        </div>` : ''}

        ${isIncluded('courses') ? `
        <div class="cv-section">
            <div class="cv-title">COURSES & TRAINING</div>
            ${crsHTML || '<p>No courses provided.</p>'}
        </div>` : ''}

        ${isIncluded('languages') ? `
        <div class="cv-section">
            <div class="cv-title">LANGUAGES</div>
            <ul style="column-count: 2; list-style-type: square; padding-left: 20px;">
                ${langHTML || '<li>No languages provided.</li>'}
            </ul>
        </div>` : ''}
    `;
}

function renderModernLayout(container, data, isIncluded) {
    const modernProjects = data.projects.map(p => {
        const fromDate = formatDate(p.from);
        const toDate = formatDate(p.to);
        const dateRange = (fromDate || toDate) ? `${fromDate}${fromDate && toDate ? ' – ' : ''}${toDate}` : '';
        const companyLoc = `${p.customer || ''}${p.location ? ', ' + p.location : ''}`;
        const platformItems = p.platform ? p.platform.split(/[,/]+/).map(t => t.trim()).filter(t => t) : [];

        return `
        <div class="modern-job-block">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
                <span style="font-weight: bold; color: var(--primary); font-size: 0.98rem;">${p.roles || ''}</span>
                <span style="font-size: 0.85rem; font-weight: 600; color: #666;">${dateRange}</span>
            </div>
            ${companyLoc ? `<div style="font-size: 0.88rem; color: #444; font-style: italic; margin-top: 2px;">${companyLoc}</div>` : ''}

            ${p.responsibilities.length ? `
                <ul style="padding-left:18px; font-size:0.88rem; margin:5px 0 3px 0;">
                    ${p.responsibilities.map(r => `<li>${r}</li>`).join('')}
                </ul>` : ''}
            ${p.tools.length ? `
                <div style="margin-top:4px;">
                    ${p.tools.map(t => `<span class="tech-badge">${t}</span>`).join('')}
                </div>` : ''}
            ${platformItems.length ? `
                <div style="margin-top:4px;">
                    ${platformItems.map(pl => `<span class="tech-badge">${pl}</span>`).join('')}
                </div>` : ''}
        </div>
        `;
    }).join('');

    const modernEduFull = data.education.map(e => `
        <div style="margin-bottom: 8px; display: flex; justify-content: space-between; align-items: baseline;">
            <div>
                <span style="font-weight: bold; color: var(--primary);">${e.degree}</span>
                <span style="margin-left: 10px; font-size: 0.9rem; color: #444;">${e.university}</span>
            </div>
            <div style="font-size: 0.85rem; color: #666; font-weight: 600;">${formatDate(e.from)}${e.from && e.to ? ' – ' : ''}${formatDate(e.to)}</div>
        </div>
    `).join('');

    container.innerHTML = `
        ${isIncluded('contactInfo') ? `
        <div class="modern-header">
            <h1 style="color: var(--primary); font-size: 1.8rem; margin: 0 0 5px 0;">${data.name || "Abdelrahman Ibrahim"}</h1>
            <div class="modern-contact">
                <div class="contact-line">
                    ${data.contact.email ? '<span>✉ ' + data.contact.email + '</span>' : ''}
                    ${data.contact.phone ? '<span>☎ ' + data.contact.phone + '</span>' : ''}
                </div>
                <div class="contact-line">
                    ${data.contact.linkedin ? '<span>🔗 ' + data.contact.linkedin + '</span>' : ''}
                    ${data.contact.github ? '<span>💻 ' + data.contact.github + '</span>' : ''}
                </div>
            </div>
        </div>` : ''}

        ${isIncluded('profileSummary') && data.profileSummary ? `
        <div class="modern-section-group" style="margin-bottom: 16px;">
            <h2 class="modern-section-title">Profile</h2>
            <p style="font-size:0.88rem; line-height:1.45; margin-top:0;">${data.profileSummary}</p>
        </div>` : ''}

        ${isIncluded('education') ? `
        <div class="modern-section-group" style="margin-bottom: 16px;">
            <h2 class="modern-section-title">Education</h2>
            ${modernEduFull || '<p>No data</p>'}
        </div>` : ''}

        <div class="modern-layout">
            <div class="modern-sidebar">
                ${isIncluded('competences') ? `
                <div class="modern-section-group">
                    <h2 class="modern-section-title">Skills</h2>
                    <div style="display:flex; flex-wrap:wrap; gap:4px;">
                        ${data.competences.tasks.map(t => `<span class="tech-badge">${t}</span>`).join('')}
                    </div>
                </div>` : ''}

                ${isIncluded('languages') ? `
                <div class="modern-section-group">
                    <h2 class="modern-section-title">Languages</h2>
                    <ul class="modern-skills-list">
                        ${data.languages.map(l => `<li><strong>${l.name}:</strong> ${l.level}</li>`).join('')}
                    </ul>
                </div>` : ''}

                ${isIncluded('courses') ? `
                <div class="modern-section-group">
                    <h2 class="modern-section-title">Courses</h2>
                    <ul style="padding-left:15px; font-size:0.85rem; margin:0;">
                        ${data.courses.map(c => `<li>${c.name} ${c.year ? '(' + c.year + ')' : ''}</li>`).join('')}
                    </ul>
                </div>` : ''}
            </div>

            <div class="modern-main">
                ${isIncluded('projects') ? `
                <div class="modern-section-group">
                    <h2 class="modern-section-title">Projects & Experience</h2>
                    ${modernProjects || '<p>No projects listed.</p>'}
                </div>` : ''}
            </div>
        </div>
    `;
}