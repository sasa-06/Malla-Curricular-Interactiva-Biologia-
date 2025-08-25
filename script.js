document.addEventListener('DOMContentLoaded', () => {
    const mallaContainer = document.getElementById('malla-container');
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = document.getElementById('progress-percentage');
    const semesterAverageEl = document.getElementById('semester-average');
    const careerAverageEl = document.getElementById('career-average');
    
    const courses = [
        { name: 'Algebra y trigonometría', credits: 3, semester: 1, prereq: [] },
        { name: 'Fundamentos de Química Analítica', credits: 3, semester: 1, prereq: [] },
        { name: 'Fundamentación en Ciencias', credits: 3, semester: 1, prereq: [] },
        { name: 'Fundamentos en biología', credits: 3, semester: 1, prereq: [] },
        { name: 'Español Académico', credits: 3, semester: 1, prereq: [] },
        
        { name: 'Fundamentación en Ciencia de Datos', credits: 3, semester: 2, prereq: [] },
        { name: 'Química Orgánica', credits: 3, semester: 2, prereq: ['Fundamentos de Química Analítica'] },
        { name: 'Biología Celular y Molecular 1', credits: 4, semester: 2, prereq: ['Fundamentos en biología'] },
        { name: 'Biología de las Plantas', credits: 4, semester: 2, prereq: ['Fundamentos en biología'] },
        { name: 'Ingles 1', credits: 2, semester: 2, prereq: [] },
        
        { name: 'Calculo Diferencial', credits: 3, semester: 3, prereq: ['Algebra y trigonometría'] },
        { name: 'Bioquímica', credits: 3, semester: 3, prereq: ['Química Orgánica'] },
        { name: 'Biología Celular y Molecular 2', credits: 4, semester: 3, prereq: ['Biología Celular y Molecular 1'] },
        { name: 'Biología Animal 1', credits: 4, semester: 3, prereq: [] },
        { name: 'Ingles 2', credits: 2, semester: 3, prereq: ['Ingles 1'] },
        
        { name: 'Calculo Integral', credits: 3, semester: 4, prereq: ['Calculo Diferencial'] },
        { name: 'Probabilidad y Estadística', credits: 3, semester: 4, prereq: ['Calculo Diferencial'] },
        { name: 'Genética', credits: 4, semester: 4, prereq: ['Biología Celular y Molecular 2'] },
        { name: 'Biología Animal 2', credits: 4, semester: 4, prereq: ['Biología Animal 1'] },
        { name: 'Ingles 3', credits: 2, semester: 4, prereq: ['Ingles 2'] },

        { name: 'Biofísica', credits: 3, semester: 5, prereq: ['Calculo Integral'] },
        { name: 'Bioestadística', credits: 3, semester: 5, prereq: ['Probabilidad y Estadística'] },
        { name: 'Evolución Biológica', credits: 3, semester: 5, prereq: ['Genética'] },
        { name: 'Ecología', credits: 4, semester: 5, prereq: ['Biología Animal 1', 'Probabilidad y Estadística'] },
        { name: 'Ingles 4', credits: 2, semester: 5, prereq: ['Ingles 3'] },
        { name: 'Desarrollo Humano', credits: 2, semester: 5, prereq: [] },

        { name: 'Fisicoquímica', credits: 3, semester: 6, prereq: ['Biofísica'] },
        { name: 'Microbiología', credits: 4, semester: 6, prereq: ['Evolución Biológica'] },
        { name: 'Sistemática Filogenética', credits: 3, semester: 6, prereq: ['Evolución Biológica'] },
        { name: 'Biología del desarrollo', credits: 3, semester: 6, prereq: ['Evolución Biológica'] },
        { name: 'Ingles 5', credits: 2, semester: 6, prereq: ['Ingles 4'] },
        { name: 'Historia Política y Estética', credits: 2, semester: 6, prereq: ['Desarrollo Humano'] },

        { name: 'Electiva Biológica 1', credits: 3, semester: 7, prereq: [] },
        { name: 'Biotecnología', credits: 4, semester: 7, prereq: ['Microbiología'] },
        { name: 'Fisiología', credits: 4, semester: 7, prereq: ['Ecología'] },
        { name: 'Biología de la conservación', credits: 3, semester: 7, prereq: ['Ecología'] },
        { name: 'Electiva Biológica 2', credits: 3, semester: 7, prereq: [] },

        { name: 'Electiva Biológica 3', credits: 3, semester: 8, prereq: [] },
        { name: 'Electiva Biológica 4', credits: 3, semester: 8, prereq: [] },
        { name: 'Electiva Biológica 5', credits: 3, semester: 8, prereq: [] },
        { name: 'Electiva Seminario 1', credits: 2, semester: 8, prereq: [] },
        { name: 'Fundamentos de Investigación', credits: 3, semester: 8, prereq: [] },
        { name: 'Ética e Integridad Científica', credits: 1, semester: 8, prereq: [] },

        { name: 'Electiva Seminario 2', credits: 2, semester: 9, prereq: [] },
        { name: 'Electiva Seminario 3', credits: 2, semester: 9, prereq: [] },
        { name: 'Seminario de trabajo de grado', credits: 10, semester: 9, prereq: ['Fundamentos de Investigación'] },
        { name: 'Catedra de Formación Ciudadana y Constitucional', credits: 3, semester: 9, prereq: ['Ética e Integridad Científica'] },
        
        { name: 'Electiva Seminario 4', credits: 2, semester: 10, prereq: [] },
        { name: 'Trabajo de Grado', credits: 10, semester: 10, prereq: ['Seminario de trabajo de grado'] },
        { name: 'Catedra Ambiental UdeA', credits: 2, semester: 10, prereq: ['Catedra de Formación Ciudadana y Constitucional'] }
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
                const prereqMet = course.prereq.every(prereq => approvedCourses.includes(prereq));
                
                if (isApproved) {
                    courseEl.classList.add('aprobada');
                } else if (prereqMet) {
                    courseEl.classList.add('cursando');
                } else {
                    courseEl.classList.add('no-disponible');
                }
                
                courseEl.dataset.courseName = course.name;

                courseEl.innerHTML = `
                    <h3>${course.name}</h3>
                    <p>Créditos: ${course.credits}</p>
                    <div class="course-status"></div>
                `;

                courseEl.addEventListener('click', (e) => {
                    if (e.target.tagName.toLowerCase() === 'input') {
                        return;
                    }
                    toggleCourseStatus(course.name);
                });
                
                if (isApproved) {
                    const noteInput = document.createElement('input');
                    noteInput.type = 'number';
                    noteInput.step = '0.1';
                    noteInput.min = '1.0';
                    noteInput.max = '5.0';
                    noteInput.placeholder = 'Nota';
                    noteInput.className = 'course-note-input';
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
                }

                semesterEl.appendChild(courseEl);
            });
            mallaContainer.appendChild(semesterEl);
        }
        updateProgress();
        updateAverages();
    };

    const toggleCourseStatus = (courseName) => {
        const isApproved = approvedCourses.includes(courseName);

        if (isApproved) {
            const hasDependents = courses.some(c => c.prereq.includes(courseName) && approvedCourses.includes(c.name));
            if (hasDependents) {
                alert('No puedes desaprobar esta materia porque es prerrequisito de una materia que ya has aprobado.');
                return;
            }
            const index = approvedCourses.indexOf(courseName);
            if (index > -1) {
                approvedCourses.splice(index, 1);
            }
            delete courseNotes[courseName];
        } else {
            const course = courses.find(c => c.name === courseName);
            if (course.prereq.every(prereq => approvedCourses.includes(prereq))) {
                approvedCourses.push(courseName);
            }
        }
        
        localStorage.setItem('approvedCourses', JSON.stringify(approvedCourses));
        localStorage.setItem('courseNotes', JSON.stringify(courseNotes));
        renderMalla();
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
});
