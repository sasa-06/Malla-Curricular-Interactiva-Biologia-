// === Datos de la malla ===
const courses = [
  // Semestre 1
  {id:"alg", name:"Algebra y trigonometría", credits:3, semester:1, prereq:[], coreq:[]},
  {id:"quim_anal", name:"Fundamentos de Química Analítica", credits:3, semester:1, prereq:[], coreq:[]},
  {id:"ciencias", name:"Fundamentación en Ciencias", credits:3, semester:1, prereq:[], coreq:[]},
  {id:"bio_fund", name:"Fundamentos en biología", credits:3, semester:1, prereq:[], coreq:[]},
  {id:"esp", name:"Español Académico", credits:3, semester:1, prereq:[], coreq:[]},

  // Semestre 2
  {id:"datos", name:"Fundamentación en Ciencia de Datos", credits:3, semester:2, prereq:[], coreq:[]},
  {id:"quim_org", name:"Química Orgánica", credits:3, semester:2, prereq:["quim_anal"], coreq:[]},
  {id:"bio_cel1", name:"Biología Celular y Molecular 1", credits:4, semester:2, prereq:["bio_fund"], coreq:[]},
  {id:"bio_plants", name:"Biología de las Plantas", credits:4, semester:2, prereq:["bio_fund"], coreq:[]},
  {id:"ing1", name:"Inglés 1", credits:2, semester:2, prereq:[], coreq:[]},

  // Semestre 3
  {id:"calc_dif", name:"Cálculo Diferencial", credits:3, semester:3, prereq:["alg"], coreq:[]},
  {id:"bioq", name:"Bioquímica", credits:3, semester:3, prereq:["quim_org"], coreq:[]},
  {id:"bio_cel2", name:"Biología Celular y Molecular 2", credits:4, semester:3, prereq:["bio_cel1"], coreq:[]},
  {id:"bio_an1", name:"Biología Animal 1", credits:4, semester:3, prereq:[], coreq:[]},
  {id:"ing2", name:"Inglés 2", credits:2, semester:3, prereq:["ing1"], coreq:[]},

  // Semestre 4
  {id:"calc_int", name:"Cálculo Integral", credits:3, semester:4, prereq:["calc_dif"], coreq:["prob_est"]},
  {id:"prob_est", name:"Probabilidad y Estadística", credits:3, semester:4, prereq:["calc_dif"], coreq:["calc_int"]},
  {id:"gen", name:"Genética", credits:4, semester:4, prereq:["bio_cel2"], coreq:[]},
  {id:"bio_an2", name:"Biología Animal 2", credits:4, semester:4, prereq:["bio_an1"], coreq:[]},
  {id:"ing3", name:"Inglés 3", credits:2, semester:4, prereq:["ing2"], coreq:[]},

  // Semestre 5
  {id:"biofis", name:"Biofísica", credits:3, semester:5, prereq:["calc_int"], coreq:[]},
  {id:"bioest", name:"Bioestadística", credits:3, semester:5, prereq:["prob_est"], coreq:[]},
  {id:"evo", name:"Evolución Biológica", credits:3, semester:5, prereq:["gen"], coreq:[]},
  {id:"eco", name:"Ecología", credits:4, semester:5, prereq:["bio_an1","prob_est"], coreq:[]},
  {id:"ing4", name:"Inglés 4", credits:2, semester:5, prereq:["ing3"], coreq:[]},
  {id:"des_hum", name:"Desarrollo Humano", credits:2, semester:5, prereq:[], coreq:[]},

  // Semestre 6
  {id:"fisicoq", name:"Fisicoquímica", credits:3, semester:6, prereq:["biofis"], coreq:[]},
  {id:"micro", name:"Microbiología", credits:4, semester:6, prereq:["evo"], coreq:[]},
  {id:"sist", name:"Sistemática Filogenética", credits:3, semester:6, prereq:["evo"], coreq:[]},
  {id:"des_bio", name:"Biología del desarrollo", credits:3, semester:6, prereq:["evo"], coreq:[]},
  {id:"ing5", name:"Inglés 5", credits:2, semester:6, prereq:["ing4"], coreq:[]},
  {id:"hist", name:"Historia Política y Estética", credits:2, semester:6, prereq:["des_hum"], coreq:[]},

  // Semestre 7
  {id:"elec7a", name:"Electiva Biológica", credits:3, semester:7, prereq:[], coreq:[]},
  {id:"biotec", name:"Biotecnología", credits:4, semester:7, prereq:["micro"], coreq:[]},
  {id:"fisio", name:"Fisiología", credits:4, semester:7, prereq:["eco"], coreq:[]},
  {id:"conserv", name:"Biología de la conservación", credits:3, semester:7, prereq:["eco"], coreq:[]},
  {id:"elec7b", name:"Electiva Biológica", credits:3, semester:7, prereq:[], coreq:[]},

  // Semestre 8
  {id:"elec8a", name:"Electiva Biológica", credits:3, semester:8, prereq:[], coreq:[]},
  {id:"elec8b", name:"Electiva Biológica", credits:3, semester:8, prereq:[], coreq:[]},
  {id:"elec8c", name:"Electiva Biológica", credits:3, semester:8, prereq:[], coreq:[]},
  {id:"sem8", name:"Electiva Seminario", credits:2, semester:8, prereq:[], coreq:[]},
  {id:"inv", name:"Fundamentos de Investigación", credits:3, semester:8, prereq:[], coreq:["etica"]},
  {id:"etica", name:"Ética e Integridad Científica", credits:1, semester:8, prereq:[], coreq:["inv"]},

  // Semestre 9
  {id:"sem9a", name:"Electiva Seminario", credits:2, semester:9, prereq:[], coreq:[]},
  {id:"sem9b", name:"Electiva Seminario", credits:2, semester:9, prereq:[], coreq:[]},
  {id:"trab_sem", name:"Seminario de trabajo de grado", credits:10, semester:9, prereq:["inv"], coreq:[]},
  {id:"ciudad", name:"Cátedra de Formación Ciudadana y Constitucional", credits:3, semester:9, prereq:["etica"], coreq:[]},

  // Semestre 10
  {id:"sem10", name:"Electiva Seminario", credits:2, semester:10, prereq:[], coreq:[]},
  {id:"trab", name:"Trabajo de Grado", credits:10, semester:10, prereq:["trab_sem"], coreq:[]},
  {id:"amb", name:"Cátedra Ambiental UdeA", credits:2, semester:10, prereq:["ciudad"], coreq:[]}
];

// Estados posibles: planned (no vista), inprogress, passed, locked
let state = {}; 

// === Inicialización ===
document.addEventListener("DOMContentLoaded", ()=>{
  const grid = document.getElementById("grid");
  const totalCredits = courses.reduce((a,c)=>a+c.credits,0);
  document.getElementById("total-credits").textContent = totalCredits;

  // Restaurar estado guardado
  const saved = localStorage.getItem("biocourses");
  if(saved){ state = JSON.parse(saved); }

  // Crear tarjetas
  courses.forEach(c=>{
    if(!state[c.id]) state[c.id] = {status:"planned", grade:null};
    const div = document.createElement("div");
    div.className = `course ${state[c.id].status}`;
    div.id = c.id;
    div.innerHTML = `
      <strong>${c.name}</strong><br>
      <small>Sem: ${c.semester} — ${c.credits}cr</small>
      <input type="number" step="0.1" min="0" max="5" placeholder="Nota" value="${state[c.id].grade ?? ""}"/>
    `;
    div.addEventListener("click",e=>{
      if(e.target.tagName==="INPUT") return;
      cycleStatus(c.id);
    });
    div.querySelector("input").addEventListener("input",e=>{
      state[c.id].grade = parseFloat(e.target.value)||null;
      updateStats();
    });
    grid.appendChild(div);
  });

  updateUnlocks();
  updateStats();

  document.getElementById("save").onclick=()=>{
    localStorage.setItem("biocourses", JSON.stringify(state));
    alert("Progreso guardado!");
  };
  document.getElementById("reset").onclick=()=>{
    localStorage.removeItem("biocourses");
    location.reload();
  };
});

// === Funciones ===
function cycleStatus(id){
  const order=["planned","inprogress","passed","planned"];
  let cur = state[id].status;
  let next = order[(order.indexOf(cur)+1)%order.length];
  state[id].status = next;
  document.getElementById(id).className = `course ${next}`;
  updateUnlocks();
  updateStats();
}

function updateUnlocks(){
  courses.forEach(c=>{
    if(state[c.id].status==="passed") return;
    // check prereqs
    let locked = c.prereq.some(pr=>state[pr].status!=="passed");
    // check coreqs: at least one must be taken
    let coreqOk = c.coreq.length===0 || c.coreq.some(cr=>["inprogress","passed"].includes(state[cr].status));
    if(locked || !coreqOk){
      if(state[c.id].status!=="passed") state[c.id].status="locked";
    } else {
      if(state[c.id].status==="locked") state[c.id].status="planned";
    }
    document.getElementById(c.id).className=`course ${state[c.id].status}`;
  });
}

function updateStats(){
  let approvedCredits=0, weighted=0, totalWithGrades=0;
  courses.forEach(c=>{
    if(state[c.id].status==="passed"){
      approvedCredits+=c.credits;
      if(state[c.id].grade){
        weighted += state[c.id].grade * c.credits;
        totalWithGrades+=c.credits;
      }
    }
  });

  document.getElementById("approved-credits").textContent = approvedCredits;
  const total = courses.reduce((a,c)=>a+c.credits,0);
  const pct = Math.round((approvedCredits/total)*100);
  document.getElementById("progress-bar").style.width=pct+"%";
  document.getElementById("progress-text").textContent=pct+"%";

  const gpa = totalWithGrades>0 ? (weighted/totalWithGrades).toFixed(2):"—";
  document.getElementById("overall-gpa").textContent=gpa;

  // Por semestre
  const semDiv = document.getElementById("semester-averages");
  semDiv.innerHTML="";
  let sems = [...new Set(courses.map(c=>c.semester))];
  sems.forEach(s=>{
    let semCourses = courses.filter(c=>c.semester===s);
    let w=0,cr=0;
    semCourses.forEach(c=>{
      if(state[c.id].status==="passed" && state[c.id].grade){
        w+=state[c.id].grade*c.credits;
        cr+=c.credits;
      }
    });
    const avg = cr>0?(w/cr).toFixed(2):"—";
    semDiv.innerHTML+=`<div><strong>Sem ${s}:</strong> ${avg}</div>`;
  });
}
