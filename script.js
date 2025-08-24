const materias = [
    { id: 'algebra-y-trigonometria', nombre: 'Álgebra y Trigonometría', creditos: 3, semestre: 1, estado: 'pendiente', prerrequisitos: [] },
    { id: 'fundamentos-de-quimica-analitica', nombre: 'Fundamentos de Química Analítica', creditos: 3, semestre: 1, estado: 'pendiente', prerrequisitos: [] },
    { id: 'fundamentacion-en-ciencias', nombre: 'Fundamentación en Ciencias', creditos: 3, semestre: 1, estado: 'pendiente', prerrequisitos: [] },
    { id: 'fundamentos-en-biologia', nombre: 'Fundamentos en Biología', creditos: 3, semestre: 1, estado: 'pendiente', prerrequisitos: [] },
    { id: 'espanol-academico', nombre: 'Español Académico', creditos: 3, semestre: 1, estado: 'pendiente', prerrequisitos: [] },
    
    { id: 'fundamentacion-en-ciencia-de-datos', nombre: 'Fundamentación en Ciencia de Datos', creditos: 3, semestre: 2, estado: 'pendiente', prerrequisitos: [] },
    { id: 'quimica-organica', nombre: 'Química Orgánica', creditos: 3, semestre: 2, estado: 'pendiente', prerrequisitos: ['fundamentos-de-quimica-analitica'] },
    { id: 'biologia-celular-y-molecular-1', nombre: 'Biología Celular y Molecular 1', creditos: 4, semestre: 2, estado: 'pendiente', prerrequisitos: ['fundamentos-en-biologia'] },
    { id: 'biologia-de-las-plantas', nombre: 'Biología de las Plantas', creditos: 4, semestre: 2, estado: 'pendiente', prerrequisitos: ['fundamentos-en-biologia'] },
    { id: 'ingles-1', nombre: 'Inglés 1', creditos: 2, semestre: 2, estado: 'pendiente', prerrequisitos: [] },
    
    { id: 'calculo-diferencial', nombre: 'Cálculo Diferencial', creditos: 3, semestre: 3, estado: 'pendiente', prerrequisitos: ['algebra-y-trigonometria'] },
    { id: 'bioquimica', nombre: 'Bioquímica', creditos: 3, semestre: 3, estado: 'pendiente', prerrequisitos: ['quimica-organica'] },
    { id: 'biologia-celular-y-molecular-2', nombre: 'Biología Celular y Molecular 2', creditos: 4, semestre: 3, estado: 'pendiente', prerrequisitos: ['biologia-celular-y-molecular-1'] },
    { id: 'biologia-animal-1', nombre: 'Biología Animal 1', creditos: 4, semestre: 3, estado: 'pendiente', prerrequisitos: [] },
    { id: 'ingles-2', nombre: 'Inglés 2', creditos: 2, semestre: 3, estado: 'pendiente', prerrequisitos: ['ingles-1'] },
    
    { id: 'calculo-integral', nombre: 'Cálculo Integral', creditos: 3, semestre: 4, estado: 'pendiente', prerrequisitos: ['calculo-diferencial'], correquisitos: ['probabilidad-y-estadistica'] },
    { id: 'probabilidad-y-estadistica', nombre: 'Probabilidad y Estadística', creditos: 3, semestre: 4, estado: 'pendiente', prerrequisitos: ['calculo-diferencial'], correquisitos: ['calculo-integral'] },
    { id: 'genetica', nombre: 'Genética', creditos: 4, semestre: 4, estado: 'pendiente', prerrequisitos: ['biologia-celular-y-molecular-2'] },
    { id: 'biologia-animal-2', nombre: 'Biología Animal 2', creditos: 4, semestre: 4, estado: 'pendiente', prerrequisitos: ['biologia-animal-1'] },
    { id: 'ingles-3', nombre: 'Inglés 3', creditos: 2, semestre: 4, estado: 'pendiente', prerrequisitos: ['ingles-2'] },
    
    { id: 'biofisica', nombre: 'Biofísica', creditos: 3, semestre: 5, estado: 'pendiente', prerrequisitos: ['calculo-integral'] },
    { id: 'bioestadistica', nombre: 'Bioestadística', creditos: 3, semestre: 5, estado: 'pendiente', prerrequisitos: ['probabilidad-y-estadistica'] },
    { id: 'evolucion-biologica', nombre: 'Evolución Biológica', creditos: 3, semestre: 5, estado: 'pendiente', prerrequisitos: ['genetica'] },
    { id: 'ecologia', nombre: 'Ecología', creditos: 4, semestre: 5, estado: 'pendiente', prerrequisitos: ['biologia-animal-1', 'probabilidad-y-estadistica'] },
    { id: 'ingles-4', nombre: 'Inglés 4', creditos: 2, semestre: 5, estado: 'pendiente', prerrequisitos: ['ingles-3'] },
    { id: 'desarrollo-humano', nombre: 'Desarrollo Humano', creditos: 2, semestre: 5, estado: 'pendiente', prerrequisitos: [] },
    
    { id: 'fisicoquimica', nombre: 'Fisicoquímica', creditos: 3, semestre: 6, estado: 'pendiente', prerrequisitos: ['biofisica'] },
    { id: 'microbiologia', nombre: 'Microbiología', creditos: 4, semestre: 6, estado: 'pendiente', prerrequisitos: ['evolucion-biologica'] },
    { id: 'sistematica-filogenetica', nombre: 'Sistemática Filogenética', creditos: 3, semestre: 6, estado: 'pendiente', prerrequisitos: ['evolucion-biologica'] },
    { id: 'biologia-del-desarrollo', nombre: 'Biología del Desarrollo', creditos: 3, semestre: 6, estado: 'pendiente', prerrequisitos: ['evolucion-biologica'] },
    { id: 'ingles-5', nombre: 'Inglés 5', creditos: 2, semestre: 6, estado: 'pendiente', prerrequisitos: ['ingles-4'] },
    { id: 'historia-politica-y-estetica', nombre: 'Historia Política y Estética', creditos: 2, semestre: 6, estado: 'pendiente', prerrequisitos: ['desarrollo-humano'] },
    
    { id: 'electiva-biologica-1', nombre: 'Electiva Biológica 1', creditos: 3, semestre: 7, estado: 'pendiente', prerrequisitos: [] },
    { id: 'biotecnologia', nombre: 'Biotecnología', creditos: 4, semestre: 7, estado: 'pendiente', prerrequisitos: ['microbiologia'] },
    { id: 'fisiologia', nombre: 'Fisiología', creditos: 4, semestre: 7, estado: 'pendiente', prerrequisitos: ['ecologia'] },
    { id: 'biologia-de-la-conservacion', nombre: 'Biología de la Conservación', creditos: 3, semestre: 7, estado: 'pendiente', prerrequisitos: ['ecologia'] },
    { id: 'electiva-biologica-2', nombre: 'Electiva Biológica 2', creditos: 3, semestre: 7, estado: 'pendiente', prerrequisitos: [] },
    
    { id: 'electiva-biologica-3', nombre: 'Electiva Biológica 3', creditos: 3, semestre: 8, estado: 'pendiente', prerrequisitos: [] },
    { id: 'electiva-biologica-4', nombre: 'Electiva Biológica 4', creditos: 3, semestre: 8, estado: 'pendiente', prerrequisitos: [] },
    { id: 'electiva-biologica-5', nombre: 'Electiva Biológica 5', creditos: 3, semestre: 8, estado: 'pendiente', prerrequisitos: [] },
    { id: 'electiva-seminario-1', nombre: 'Electiva Seminario 1', creditos: 2, semestre: 8, estado: 'pendiente', prerrequisitos: [] },
    { id: 'fundamentos-de-investigacion', nombre: 'Fundamentos de Investigación', creditos: 3, semestre: 8, estado: 'pendiente', prerrequisitos: [], correquisitos: ['etica-e-integridad-cientifica'] },
    { id: 'etica-e-integridad-cientifica', nombre: 'Ética e Integridad Científica', creditos: 1, semestre: 8, estado: 'pendiente', prerrequisitos: [], correquisitos: ['fundamentos-de-investigacion'] },
    
    { id: 'electiva-seminario-2', nombre: 'Electiva Seminario 2', creditos: 2, semestre: 9, estado: 'pendiente', prerrequisitos: [] },
    { id: 'electiva-seminario-3', nombre: 'Electiva Seminario 3', creditos: 2, semestre: 9, estado: 'pendiente', prerrequisitos: [] },
    { id: 'seminario-de-trabajo-de-grado', nombre: 'Seminario de Trabajo de Grado', creditos: 10, semestre: 9, estado: 'pendiente', prerrequisitos: ['fundamentos-de-investigacion'] },
    { id: 'catedra-de-formacion-ciudadana-y-constitucional', nombre: 'Cátedra de Formación Ciudadana y Constitucional', creditos: 3, semestre: 9, estado: 'pendiente', prerrequisitos: ['etica-e-integridad-cientifica'] },
    
    { id: 'electiva-seminario-4', nombre: 'Electiva Seminario 4', creditos: 2, semestre: 10, estado: 'pendiente', prerrequisitos: [] },
    { id: 'trabajo-de-grado', nombre: 'Trabajo de Grado', creditos: 10, semestre: 10, estado: 'pendiente', prerrequisitos: ['seminario-de-trabajo-de-grado'] },
    { id: 'catedra-ambiental-udea', nombre: 'Cátedra Ambiental UdeA', creditos: 2, semestre: 10, estado: 'pendiente', prerrequisitos: ['catedra-de-formacion-ciudadana-y-constitucional'] }
];

const container = document.getElementById('malla-container');

function renderMalla() {
    container.innerHTML = '';
    
    const semestres = [...new Set(materias.map(materia => materia.semestre))].sort((a, b) => a - b);
    
    semestres.forEach(semestreNum => {
        const semestreDiv = document.createElement('div');
        semestreDiv.className = 'semestre';
        semestreDiv.innerHTML = `<h2>Semestre ${semestreNum}</h2>`;
        
        const materiasDelSemestre = materias.filter(materia => materia.semestre === semestreNum);
        
        materiasDelSemestre.forEach(materia => {
            const div = document.createElement('div');
            div.classList.add('materia', materia.estado);
            div.innerHTML = `<h3>${materia.nombre}</h3><p>Créditos: ${materia.creditos}</p>`;
            div.dataset.id = materia.id;
            
            // Añadir información de prerrequisitos y correquisitos si existen
            if (materia.prerrequisitos.length > 0) {
                div.dataset.prerrequisitos = materia.prerrequisitos.join(',');
            }
            if (materia.correquisitos && materia.correquisitos.length > 0) {
                div.dataset.correquisitos = materia.correquisitos.join(',');
            }
            
            semestreDiv.appendChild(div);
        });
        container.appendChild(semestreDiv);
    });
}

function handleMateriaClick(event) {
    const clickedMateria = event.target.closest('.materia');
    if (!clickedMateria) return;
    
    const materiaId = clickedMateria.dataset.id;
    const materiaData = materias.find(m => m.id === materiaId);
    
    if (materiaData) {
        if (materiaData.estado === 'pendiente') {
            materiaData.estado = 'cursando';
        } else if (materiaData.estado === 'cursando') {
            materiaData.estado = 'aprobado';
        } else {
            materiaData.estado = 'pendiente';
        }
    }
    renderMalla();
}

renderMalla();
container.addEventListener('click', handleMateriaClick);
