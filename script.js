// Datos de ejemplo: estructura para poder crecer a edición e interactividad
const subjects = [
    {
        semester: 1,
        name: "Algebra y trigonometría",
        credits: 3,
        state: "pending", // 'pending', 'current', 'approved'
        grade: null,
        prereq: "No",
        coreq: "No"
    },
    {
        semester: 1,
        name: "Fundamentos de Química Analítica",
        credits: 3,
        state: "pending",
        grade: null,
        prereq: "No",
        coreq: "No"
    },
    {
        semester: 1,
        name: "Fundamentación en Ciencias",
        credits: 3,
        state: "pending",
        grade: null,
        prereq: "No",
        coreq: "No"
    },
    {
        semester: 1,
        name: "Fundamentos en biología",
        credits: 3,
        state: "pending",
        grade: null,
        prereq: "No",
        coreq: "No"
    },
    {
        semester: 1,
        name: "Español Académico",
        credits: 3,
        state: "pending",
        grade: null,
        prereq: "No",
        coreq: "No"
    },
    // ... Agrega el resto de materias siguiendo la estructura
];

// Renderiza la malla por semestre
function renderCurriculum() {
    const container = document.getElementById('curriculum-content');
    container.innerHTML = '';
    // Agrupar materias por semestre
    const semesters = {};
    subjects.forEach(s => {
        if (!semesters[s.semester]) semesters[s.semester] = [];
        semesters[s.semester].push(s);
    });
    // Renderizar cada semestre
    Object.keys(semesters).sort((a, b) => a - b).forEach(sem => {
        const block = document.createElement('div');
        block.className = 'semester-block';
        const semTitle = document.createElement('div');
        semTitle.className = 'semester-title';
        semTitle.textContent = `Semestre ${sem}`;
        block.appendChild(semTitle);

        const subjList = document.createElement('div');
        subjList.className = 'subject-list';

        semesters[sem].forEach((subj, idx) => {
            const card = document.createElement('div');
            card.className = 'subject-card';
            if(subj.state === "approved") card.classList.add('approved');
            if(subj.state === "current") card.classList.add('current');

            // Estado
            let icon = "";
            if(subj.state === "approved") icon = "✅";
            else if(subj.state === "current") icon = "🔄";
            card.innerHTML = `
                <span class="subject-state">${icon}</span>
                <div class="subject-title">${subj.name}</div>
                <div class="subject-info">Créditos: ${subj.credits}</div>
                <div class="subject-prereq">Prerrequisito: ${subj.prereq}</div>
                <div class="subject-prereq">Correquisito: ${subj.coreq}</div>
            `;
            subjList.appendChild(card);
        });
        block.appendChild(subjList);
        container.appendChild(block);
    });
}

renderCurriculum();
