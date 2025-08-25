/* ========= DATOS DE LA CARRERA =========
   Estados: planned (rosa), inprogress (lavanda), passed (verde), locked (crema)
   Bloqueo SOLO por PRERREQUISITOS (los correquisitos se muestran, no bloquean).
*/
const courses = [
  // --- Semestre 1 ---
  { id:"alg",   name:"Álgebra y trigonometría",       credits:3, semester:1, prereqs:[], coreqs:[] },
  { id:"fqa",   name:"Fundamentos de Química Analítica", credits:3, semester:1, prereqs:[], coreqs:[] },
  { id:"fcien", name:"Fundamentación en Ciencias",    credits:3, semester:1, prereqs:[], coreqs:[] },
  { id:"fbiol", name:"Fundamentos en biología",        credits:3, semester:1, prereqs:[], coreqs:[] },
  { id:"esp",   name:"Español Académico",              credits:3, semester:1, prereqs:[], coreqs:[] },

  // --- Semestre 2 ---
  { id:"fcd",   name:"Fundamentación en Ciencia de Datos", credits:3, semester:2, prereqs:[], coreqs:[] },
  { id:"qo",    name:"Química Orgánica",               credits:3, semester:2, prereqs:["fqa"], coreqs:[] },
  { id:"bcm1",  name:"Biología Celular y Molecular 1", credits:4, semester:2, prereqs:["fbiol"], coreqs:[] },
  { id:"plant", name:"Biología de las Plantas",        credits:4, semester:2, prereqs:["fbiol"], coreqs:[] },
  { id:"ing1",  name:"Inglés 1",                       credits:2, semester:2, prereqs:[], coreqs:[] },

  // --- Semestre 3 ---
  { id:"calc1", name:"Cálculo Diferencial",            credits:3, semester:3, prereqs:["alg"], coreqs:[] },
  { id:"bioq",  name:"Bioquímica",                     credits:3, semester:3, prereqs:["qo"], coreqs:[] },
  { id:"bcm2",  name:"Biología Celular y Molecular 2", credits:4, semester:3, prereqs:["bcm1"], coreqs:[] },
  { id:"ban1",  name:"Biología Animal 1",              credits:4, semester:3, prereqs:[], coreqs:[] },
  { id:"ing2",  name:"Inglés 2",                       credits:2, semester:3, prereqs:["ing1"], coreqs:[] },

  // --- Semestre 4 ---
  { id:"calc2", name:"Cálculo Integral",               credits:3, semester:4, prereqs:["calc1"], coreqs:["prob"] },
  { id:"prob",  name:"Probabilidad y Estadística",     credits:3, semester:4, prereqs:["calc1"], coreqs:["calc2"] },
  { id:"gen",   name:"Genética",                       credits:4, semester:4, prereqs:["bcm2"], coreqs:[] },
  { id:"ban2",  name:"Biología Animal 2",              credits:4, semester:4, prereqs:["ban1"], coreqs:[] },
  { id:"ing3",  name:"Inglés 3",                       credits:2, semester:4, prereqs:["ing2"], coreqs:[] },

  // --- Semestre 5 ---
  { id:"biof",  name:"Biofísica",                      credits:3, semester:5, prereqs:["calc2"], coreqs:[] },
  { id:"bioest",name:"Bioestadística",                 credits:3, semester:5, prereqs:["prob"], coreqs:[] },
  { id:"evol",  name:"Evolución Biológica",            credits:3, semester:5, prereqs:["gen"], coreqs:[] },
  { id:"eco",   name:"Ecología",                       credits:4, semester:5, prereqs:["ban1","prob"], coreqs:[] },
  { id:"ing4",  name:"Inglés 4",                       credits:2, semester:5, prereqs:["ing3"], coreqs:[] },
  { id:"deshum",name:"Desarrollo Humano",              credits:2, semester:5, prereqs:[], coreqs:[] },

  // --- Semestre 6 ---
  { id:"fisq",  name:"Fisicoquímica",                  credits:3, semester:6, prereqs:["biof"], coreqs:[] },
  { id:"micro", name:"Microbiología",                  credits:4, semester:6, prereqs:["evol"], coreqs:[] },
  { id:"sist",  name:"Sistemática Filogenética",       credits:3, semester:6, prereqs:["evol"], coreqs:[] },
  { id:"biod",  name:"Biología del desarrollo",        credits:3, semester:6, prereqs:["evol"], coreqs:[] },
  { id:"ing5",  name:"Inglés 5",                       credits:2, semester:6, prereqs:["ing4"], coreqs:[] },
  { id:"hist",  name:"Historia Política y Estética",   credits:2, semester:6, prereqs:["deshum"], coreqs:[] },

  // --- Semestre 7 ---
  { id:"elec7a",name:"Electiva Biológica",             credits:3, semester:7, prereqs:[], coreqs:[] },
  { id:"biotec",name:"Biotecnología",                  credits:4, semester:7, prereqs:["micro"], coreqs:[] },
  { id:"fisio", name:"Fisiología",                     credits:4, semester:7, prereqs:["eco"], coreqs:[] },
  { id:"conserv",name:"Biología de la conservación",   credits:3, semester:7, prereqs:["eco"], coreqs:[] },
  { id:"elec7b",name:"Electiva Biológica",             credits:3, semester:7, prereqs:[], coreqs:[] },

  // --- Semestre 8 ---
  { id:"elec8a",name:"Electiva Biológica",             credits:3, semester:8, prereqs:[], coreqs:[] },
  { id:"elec8b",name:"Electiva Biológica",             credits:3, semester:8, prereqs:[], coreqs:[] },
  { id:"elec8c",name:"Electiva Biológica",             credits:3, semester:8, prereqs:[], coreqs:[] },
  { id:"sem8",  name:"Electiva Seminario",             credits:2, semester:8, prereqs:[], coreqs:[] },
  { id:"inv",   name:"Fundamentos de Investigación",   credits:3, semester:8, prereqs:[], coreqs:["etica"] },
  { id:"etica", name:"Ética e Integridad Científica",  credits:1, semester:8, prereqs:[], coreqs:["inv"] },

  // --- Semestre 9 ---
  { id:"sem9a", name:"Electiva Seminario",             credits:2, semester:9, prereqs:[], coreqs:[] },
  { id:"sem9b", name:"Electiva Seminario",             credits:2, semester:9, prereqs:[], coreqs:[] },
  { id:"semtg", name:"Seminario de trabajo de grado",  credits:10, semester:9, prereqs:["inv"], coreqs:[] },
  { id:"ciudad",name:"Cátedra de Formación Ciudadana y Constitucional", credits:3, semester:9, prereqs:["etica"], coreqs:[] },

  // --- Semestre 10 ---
  { id:"sem10", name:"Electiva Seminario",             credits:2, semester:10, prereqs:[], coreqs:[] },
  { id:"tg",    name:"Trabajo de Grado",               credits:10, semester:10, prereqs:["semtg"], coreqs:[] },
  { id:"amb",   name:"Cátedra Ambiental UdeA",         credits:2, semester:10, prereqs:["ciudad"], coreqs:[] }
];

// --- Constantes y estado ---
const STORAGE_KEY = "bio-malla-v2";
const Status = { PLANNED:"planned", INPROGRESS:"inprogress", PASSED:"passed", LOCKED:"locked" };
let state = {}; // id -> {status, grade}

const bySemester = courses.reduce((a,c)=>{ (a[c.semester]??=[]).push(c); return a; },{});
const totalCredits = courses.reduce((s,c)=>s+c.credits,0);

// --- Utilidades ---
function loadState(){
  try{ state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }catch{ state = {}; }
}
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

// --- Render inicial ---
function createCourseEl(course){
  const el = document.createElement("div");
  el.className = "course";
  el.id = `c-${course.id}`;

  const left = document.createElement("div");
  const title = document.createElement("div");
  title.className = "title";
  title.textContent = course.name;
  const meta = document.createElement("div");
  meta.className = "meta";
  meta.innerHTML = `Créditos: <strong>${course.credits}</strong>${
    course.prereqs.length ? " • Prerrequisitos: " + course.prereqs.map(id=>courses.find(x=>x.id===id).name).join(", ") : ""
  }${
    course.coreqs.length ? " • Correquisitos: " + course.coreqs.map(id=>courses.find(x=>x.id===id).name).join(", ") : ""
  }`;
  left.appendChild(title); left.appendChild(meta);

  const right = document.createElement("div");
  right.className = "right";
  const badge = document.createElement("span"); badge.id = `b-${course.id}`; badge.className = "badge";
  const grade = document.createElement("label");
  grade.className = "grade";
  grade.innerHTML = `Nota: <input type="number" min="0" max="5" step="0.1" id="g-${course.id}" placeholder="—">`;
  right.appendChild(badge); right.appendChild(grade);

  el.appendChild(left); el.appendChild(right);

  // Click para cambiar estado (evita cuando se escribe la nota)
  el.addEventListener("click",(ev)=>{
    if(ev.target.tagName.toLowerCase()==="input") return;
    if(state[course.id].status===Status.LOCKED) return;
    const cur = state[course.id].status;
    const next = cur===Status.PLANNED ? Status.INPROGRESS :
                 cur===Status.INPROGRESS ? Status.PASSED :
                 cur===Status.PASSED ? Status.PLANNED : Status.LOCKED;
    state[course.id].status = next;
    updateAll();
  });

  grade.querySelector("input").addEventListener("input",(ev)=>{
    const v = parseFloat(ev.target.value);
    state[course.id].grade = isNaN(v) ? null : v;
    updateAll();
  });

  return el;
}

function render(){
  document.getElementById("total-credits").textContent = totalCredits;
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  Object.keys(bySemester).sort((a,b)=>a-b).forEach(sem=>{
    const wrap = document.createElement("div");
    wrap.className = "semester";
    const h = document.createElement("h3");
    h.textContent = `Semestre ${sem}`;
    wrap.appendChild(h);

    bySemester[sem].forEach(c=>{
      // estado inicial: bloqueado si tiene prerrequisitos, sino planned
      state[c.id] ??= { status: c.prereqs.length? Status.LOCKED : Status.PLANNED, grade: null };
      wrap.appendChild(createCourseEl(c));
    });

    grid.appendChild(wrap);
  });
}

// --- Lógica de bloqueo (solo por prerrequisitos) ---
function recomputeLocks(){
  courses.forEach(c=>{
    const passedAll = c.prereqs.every(pid => state[pid]?.status === Status.PASSED);
    const cur = state[c.id].status;

    if(cur===Status.PASSED || cur===Status.INPROGRESS){
      // mantener si ya la empezó o aprobó
      return;
    }
    state[c.id].status = passedAll ? Status.PLANNED : Status.LOCKED;
  });
}

// --- Aplicar estilos y badges ---
function applyStyles(){
  courses.forEach(c=>{
    const el = document.getElementById(`c-${c.id}`);
    const badge = document.getElementById(`b-${c.id}`);
    const input = document.getElementById(`g-${c.id}`);

    const st = state[c.id].status;
    el.classList.remove("planned","inprogress","passed","locked");
    el.classList.add(st);

    badge.textContent = st===Status.PASSED ? "Aprobada" :
                        st===Status.INPROGRESS ? "Cursando" :
                        st===Status.PLANNED ? "No vista" : "Bloqueada";
    input.disabled = (st===Status.LOCKED);
  });
}

// --- Cálculos de progreso y promedios ---
function updateProgress(){
  const approved = courses.filter(c=>state[c.id].status===Status.PASSED);
  const approvedCredits = approved.reduce((s,c)=>s+c.credits,0);
  const pct = Math.round((approvedCredits/totalCredits)*100);
  document.getElementById("approved-credits").textContent = approvedCredits;
  document.getElementById("progress-bar").style.width = pct + "%";
  document.getElementById("progress-text").textContent = pct + "%";

  // Promedio ponderado general y por semestre (solo materias Aprobadas con nota)
  const semWrap = document.getElementById("semester-averages");
  semWrap.innerHTML = "";
  let totalW=0, totalCr=0;

  Object.keys(bySemester).sort((a,b)=>a-b).forEach(sem=>{
    let w=0, cr=0;
    bySemester[sem].forEach(c=>{
      const st = state[c.id].status;
      const gr = state[c.id].grade;
      if(st===Status.PASSED && typeof gr === "number"){
        w += gr * c.credits;
        cr += c.credits;
      }
    });
    const gpa = cr>0 ? (w/cr).toFixed(2) : "—";
    if(cr>0){ totalW += w; totalCr += cr; }

    const card = document.createElement("div");
    card.className = "sem-avg";
    card.innerHTML = `<strong>Semestre ${sem}</strong><br>${gpa}`;
    semWrap.appendChild(card);
  });

  document.getElementById("overall-gpa").textContent = totalCr>0 ? (totalW/totalCr).toFixed(2) : "—";
}

// --- Guardar/Reset ---
function attachControls(){
  document.getElementById("save").addEventListener("click",()=>{ saveState(); alert("Progreso guardado."); });
  document.getElementById("reset").addEventListener("click",()=>{
    if(confirm("¿Reiniciar toda la malla?")){ localStorage.removeItem(STORAGE_KEY); state={}; render(); updateAll(); }
  });
}

// --- Ciclo de actualización ---
function updateAll(){
  recomputeLocks();
  applyStyles();
  updateProgress();
  saveState();
}

// --- Inicio ---
window.addEventListener("DOMContentLoaded", ()=>{
  loadState();
  render();
  updateAll();
  attachControls();
});
