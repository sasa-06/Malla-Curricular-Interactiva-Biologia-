document.addEventListener('DOMContentLoaded', () => {
    const mallaContainer = document.getElementById('malla-container');
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = document.getElementById('progress-percentage');
    const semesterAverageEl = document.getElementById('semester-average');
    const careerAverageEl = document.getElementById('career-average');

    // Malla Curricular con créditos y prerrequisitos
    const courses = [
        { name: 'Algebra y trigonometría', credits: 3, semester: 1, prereq: [], coreq: [] },
        { name: 'Fundamentos de Química Analítica', credits: 3, semester: 1, prereq: [], coreq: [] },
        { name: 'Fundamentación en Ciencias', credits: 3, semester: 1, prereq: [], coreq: [] },
        { name: 'Fundamentos en biología', credits: 3, semester: 1, prereq: [], coreq: [] },
        { name: 'Español Académico', credits: 3, semester: 1, prereq: [], coreq: [] },

        { name: 'Fundamentación en Ciencia de Datos', credits: 3, semester: 2, prereq: [], coreq: [] },
        { name: 'Química Orgánica', credits: 3, semester: 2, prereq: ['Fundamentos de Química Analítica'], coreq: [] },
        { name: 'Biología Celular y Molecular 1', credits: 4, semester: 2, prereq: ['Fundamentos en biología'], coreq: [] },
        { name: 'Biología de las Plantas', credits: 4, semester: 2, prereq: ['Fundamentos en biología'], coreq: [] },
        { name: 'Ingles 1', credits: 2, semester: 2, prereq: [], coreq: [] },

        { name: 'Calculo Diferencial', credits: 3, semester: 3, prereq: ['Algebra y trigonometría'], coreq: [] },
        { name: 'Bioquímica', credits: 3, semester: 3, prereq: ['Química Orgánica'], coreq: [] },
        { name: 'Biología Celular y Molecular 2', credits: 4, semester: 3, prereq: ['Biología Celular y Molecular 1'], coreq: [] },
        { name: 'Biología Animal 1', credits: 4, semester: 3, prereq: [], coreq: [] },
        { name: 'Ingles 2', credits: 2, semester: 3, prereq: ['Ingles 1'], coreq: [] },
        
        { name: 'Calculo Integral', credits: 3, semester: 4, prereq: ['Calculo Diferencial'], coreq: ['Probabilidad y Estadística'] },
        { name: 'Probabilidad y Estadística', credits: 3, semester: 4, prereq: ['Calculo Diferencial'], coreq: ['Calculo Integral'] },
        { name: 'Genética', credits: 4, semester: 4, prereq: ['Biología Celular y Molecular 2'], coreq: [] },
        { name: 'Biología Animal 2', credits: 4, semester: 4, prereq: ['Biología Animal 1'], coreq: [] },
        { name: 'Ingles 3', credits: 2, semester: 4, prereq: ['Ingles 2'], coreq: [] },

        { name: 'Biofísica', credits: 3, semester: 5, prereq: ['Calculo Integral'], coreq: [] },
        { name: 'Bioestadística', credits: 3, semester: 5, prereq: ['Probabilidad y Estadística'], coreq: [] },
        { name: 'Evolución Biológica', credits: 3, semester: 5, prereq: ['Genética'], coreq: [] },
        { name: 'Ecología', credits: 4, semester: 5, prereq: ['Biología Animal 1', 'Probabilidad y Estadística'], coreq: [] },
        { name: 'Ingles 4', credits: 2, semester: 5, prereq: ['Ingles 3'], coreq: [] },
        { name: 'Desarrollo Humano', credits: 2, semester: 5, prereq: [], coreq: [] },

        { name: 'Fisicoquímica', credits: 3, semester: 6, prereq: ['Biofísica'], coreq: [] },
        { name: 'Microbiología', credits: 4, semester: 6, prereq: ['Evolución Biológica'], coreq: [] },
        { name: 'Sistemática Filogenética', credits: 3, semester: 6, prereq: ['Evolución Biológica'], coreq: [] },
        { name: 'Biología del desarrollo', credits: 3, semester: 6, prereq: ['Evolución Biológica'], coreq: [] },
        { name: 'Ingles 5', credits: 2, semester: 6, prereq: ['Ingles 4'], coreq: [] },
        { name: 'Historia Política y Estética', credits: 2, semester: 6, prereq: ['Desarrollo Humano'], coreq: [] },

        { name: 'Electiva Biológica 1', credits: 3, semester: 7, prereq: [], coreq: [] },
        { name: 'Biotecnología', credits: 4, semester: 7, prereq: ['Microbiología'], coreq: [] },
        { name: 'Fisiología', credits: 4, semester: 7, prereq: ['Ecología'], coreq: [] },
        { name: 'Biología de la conservación', credits: 3, semester: 7, prereq: ['Ecología'], coreq: [] },
        { name: 'Electiva Biológica 2', credits: 3, semester: 7, prereq: [], coreq: [] },

        { name: 'Electiva Biológica 3', credits: 3, semester: 8, prereq: [], coreq: [] },
        { name: 'Electiva Biológica 4', credits: 3, semester: 8, prereq: [], coreq: [] },
        { name: 'Electiva Biológica 5', credits: 3, semester: 8, prereq: [], coreq: [] },
        { name: 'Electiva Seminario 1', credits: 2, semester: 8, prereq: [], coreq: [] },
        { name: 'Fundamentos de Investigación', credits: 3, semester: 8, prereq: [], coreq: ['Ética e Integridad Científica'] },
        { name: 'Ética e Integridad Científica', credits: 1, semester: 8, prereq: [], coreq: ['Fundamentos de Investigación'] },

        { name: 'Electiva Seminario 2', credits: 2, semester: 9, prereq: [], coreq: [] },
        { name: 'Electiva Seminario 3', credits: 2, semester: 9, prereq: [], coreq: [] },
        { name: 'Seminario de trabajo de grado', credits: 10, semester: 9, prereq: ['Fundamentos de Investigación'], coreq: [] },
        { name: 'Catedra de Formación Ciudadana y Constitucional', credits: 3, semester: 9, prereq: ['Ética e Integridad Científica'], coreq: [] },
        
        { name: 'Electiva Seminario 4', credits: 2, semester: 10, prereq: [], coreq: [] },
        { name: 'Trabajo de Grado', credits: 10, semester: 10, prereq: ['Seminario de trabajo de grado'], coreq: [] },
        { name: 'Catedra Ambiental UdeA', credits: 2, semester: 10, prereq: ['Catedra de Formación Ciudadana y Constitucional'], coreq: [] }
    ];

    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);

    let approvedCourses = JSON.parse(localStorage.getItem('approvedCourses')) || [];
    let courseNotes = JSON.parse(localStorage.getItem('courseNotes')) || {};

    const renderMalla = () => {
        mallaContainer.innerHTML = '';
        const semesters = {};

        courses.forEach(course => {
            if (!semesters[course.semester]) {
                semesters[course.semester] = [];
            }
            semesters[course.semester].push(course);
        });

        for (const semesterNum in semesters) {
            const semesterEl = document.createElement('div');
            semesterEl.className = 'semester';
            semesterEl.innerHTML = `<h2>Semestre ${semesterNum}</h2>`;

            semesters[semesterNum].forEach(course => {
                const courseEl = document.createElement('div');
                courseEl.className = 'course';
                
                const isApproved = approvedCourses.includes(course.name);
                const isAvailable = course.prereq.every(prereq => approvedCourses.includes(prereq));

                if (isApproved) {
                    courseEl.classList.add('aprobada');
                } else if (isAvailable) {
                    courseEl.classList.add('no-vista');
                } else {
                    courseEl.classList.add('no-disponible');
                }
                
                courseEl.dataset.courseName = course.name;

                courseEl.innerHTML = `
                    <h3>${course.name}</h3>
                    <p>Créditos: ${course.credits}</p>
                    <div class="course-status ${isApproved ? 'aprobada' : (isAvailable ? 'no-vista' : 'no-disponible')}"></div>
                `;

                if (isAvailable && !isApproved) {
                    courseEl.addEventListener('click', () => {
                        toggleCourseStatus(course.name);
                    });
                }
                
                const noteInput = document.createElement('input');
                noteInput.type = 'number';
                noteInput.step = '0.1';
                noteInput.min = '1.0';
                noteInput.max = '5.0';
                noteInput.placeholder = 'Nota';
                noteInput.className = 'course-note-input';
                noteInput.style.display = isApproved ? 'block' : 'none';
                noteInput.value = courseNotes[course.name] || '';
                
                noteInput.addEventListener('change', (e) => {
                    const note = parseFloat(e.target.value);
                    if (!isNaN(note) && note >= 1.0 && note <= 5.0) {
                        courseNotes[course.name] = note;
                    } else {
                        delete courseNotes[course.name];
                    }
                    localStorage.setItem('courseNotes', JSON.stringify(courseNotes));
                    updateAverages();
                });

                courseEl.appendChild(noteInput);
                semesterEl.appendChild(courseEl);
            });
            mallaContainer.appendChild(semesterEl);
        }
    };

    const toggleCourseStatus = (courseName) => {
        if (!approvedCourses.includes(courseName)) {
            approvedCourses.push(courseName);
            localStorage.setItem('approvedCourses', JSON.stringify(approvedCourses));
            renderMalla();
            updateProgress();
            updateAverages();
        }
    };

    const updateProgress = () => {
        const approvedCredits = courses.filter(c => approvedCourses.includes(c.name)).reduce((sum, c) => sum + c.credits, 0);
        const percentage = (approvedCredits / totalCredits) * 100;
        progressBar.style.width = `${percentage}%`;
        progressPercentage.textContent = `${percentage.toFixed(2)}%`;
    };

    const updateAverages = () => {
        let semesterNotes = {};
        courses.forEach(course => {
            if (approvedCourses.includes(course.name) && courseNotes[course.name]) {
                if (!semesterNotes[course.semester]) {
                    semesterNotes[course.semester] = { sum: 0, credits: 0 };
                }
                semesterNotes[course.semester].sum += courseNotes[course.name] * course.credits;
                semesterNotes[course.semester].credits += course.credits;
            }
        });

        const currentSemester = Math.max(...courses.filter(c => approvedCourses.includes(c.name)).map(c => c.semester), 0);
        
        if (semesterNotes[currentSemester]) {
            const avg = semesterNotes[currentSemester].sum / semesterNotes[currentSemester].credits;
            semesterAverageEl.textContent = avg.toFixed(2);
        } else {
            semesterAverageEl.textContent = 'N/A';
        }

        let careerTotalSum = 0;
        let careerTotalCredits = 0;
        for (const sem in semesterNotes) {
            careerTotalSum += semesterNotes[sem].sum;
            careerTotalCredits += semesterNotes[sem].credits;
        }

        if (careerTotalCredits > 0) {
            const careerAvg = careerTotalSum / careerTotalCredits;
            careerAverageEl.textContent = careerAvg.toFixed(2);
        } else {
            careerAverageEl.textContent = 'N/A';
        }
    };

    renderMalla();
    updateProgress();
    updateAverages();
});
