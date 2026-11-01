const groups = [
  {id:"roman",title:"Roman et récit",subtitle:"Du Moyen Âge au XXIe siècle"},
  {id:"idees",title:"Littérature d'idées",subtitle:"Du XVIe au XVIIIe siècle"},
  {id:"theatre",title:"Théâtre",subtitle:"Du XVIIe au XXIe siècle"},
  {id:"poesie",title:"Poésie",subtitle:"Du XIXe au XXIe siècle"}
];

const $ = (selector) => document.querySelector(selector);
const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, c => ({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
}[c]));

function getSelected() {
  try { return JSON.parse(localStorage.getItem("studyroom-selected") || "[]"); }
  catch { return []; }
}
function saveSelected(ids) {
  localStorage.setItem("studyroom-selected", JSON.stringify(ids));
}

function renderLibrary() {
  const root = $("#library-groups");
  if (!root) return;

  const search = ($("#search")?.value || "").trim().toLocaleLowerCase("fr");
  const filter = $("#filter")?.value || "all";
  const sort = $("#sort")?.value || "order";

  let visible = works.filter(w => {
    const matchesText = `${w.title} ${w.author} ${w.parcours}`.toLocaleLowerCase("fr").includes(search);
    return matchesText && (filter === "all" || w.group === filter);
  });

  if (sort === "title") visible.sort((a,b) => a.title.localeCompare(b.title, "fr"));
  if (sort === "author") visible.sort((a,b) => a.author.localeCompare(b.author, "fr"));

  $("#work-count").textContent = `${visible.length} œuvre${visible.length > 1 ? "s" : ""}`;

  root.innerHTML = groups.map(group => {
    const list = visible.filter(w => w.group === group.id);
    if (!list.length) return "";
    return `
      <section class="work-group">
        <div class="group-heading"><div><p class="eyebrow">${escapeHTML(group.subtitle)}</p><h3>${escapeHTML(group.title)}</h3></div><span>${list.length.toString().padStart(2,"0")}</span></div>
        <div class="work-grid">
          ${list.map(w => `
            <article class="work-card">
              <div class="card-top"><span>${escapeHTML(w.period)}</span><button class="mark-button ${getSelected().includes(w.id) ? "is-selected" : ""}" data-select="${w.id}" aria-label="Ajouter à mon programme">${getSelected().includes(w.id) ? "✓" : "+"}</button></div>
              <p class="card-author">${escapeHTML(w.author)}</p>
              <h4>${escapeHTML(w.title)}</h4>
              <p class="card-path">${escapeHTML(w.parcours)}</p>
              <a class="card-link" href="oeuvre.html?id=${encodeURIComponent(w.id)}">Découvrir la fiche <span>↗</span></a>
            </article>`).join("")}
        </div>
      </section>`;
  }).join("");

  $("#empty-state")?.classList.toggle("hidden", visible.length !== 0);
}

function renderProgram() {
  const selected = getSelected();
  const count = Math.min(selected.length, 4);
  const countEl = $("#selected-count");
  if (!countEl) return;
  countEl.textContent = `${count} / 4`;
  $("#program-progress").style.width = `${count / 4 * 100}%`;

  const chosen = works.filter(w => selected.includes(w.id));
  $("#selected-list").innerHTML = chosen.length
    ? chosen.map(w => `<a href="oeuvre.html?id=${encodeURIComponent(w.id)}">${escapeHTML(w.title)} <span>— ${escapeHTML(w.groupLabel)}</span></a>`).join("")
    : '<p class="muted">Tu n’as pas encore sélectionné d’œuvre.</p>';
}

function toggleSelected(id) {
  let selected = getSelected();
  if (selected.includes(id)) selected = selected.filter(x => x !== id);
  else {
    const item = works.find(w => w.id === id);
    const alreadyInGroup = selected.some(x => works.find(w => w.id === x)?.group === item.group);
    if (alreadyInGroup) {
      alert("Tu as déjà sélectionné une œuvre dans cet objet d’étude. Décoche-la d’abord si tu souhaites la remplacer.");
      return;
    }
    if (selected.length >= 4) {
      alert("Tu peux sélectionner une œuvre par objet d’étude, soit quatre au total.");
      return;
    }
    selected.push(id);
  }
  saveSelected(selected);
  renderLibrary();
  renderProgram();
}

function renderDetail() {
  const root = $("#work-detail");
  if (!root) return;
  const id = new URLSearchParams(location.search).get("id");
  const w = works.find(item => item.id === id);

  if (!w) {
    const sheet = studySheets[w.id] || {};
  const section = (id, number, title, items) => `<section class="detail-section" id="${id}"><p class="eyebrow">${number}</p><h2>${title}</h2><ul class="study-list">${(items || []).map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul></section>`;
  root.innerHTML = `
    <a class="back-link" href="index.html#library">← Retour à la bibliothèque</a>
    <section class="detail-heading">
      <p class="eyebrow">${escapeHTML(w.groupLabel)} · ${escapeHTML(w.period)}</p>
      <h1>${escapeHTML(w.title)}</h1>
      <p class="detail-author">${escapeHTML(w.author)}</p>
      <div class="path-label">PARCOURS ASSOCIÉ</div>
      <p class="detail-path">${escapeHTML(w.parcours)}</p>
      ${w.note ? `<p class="small-note">${escapeHTML(w.note)}</p>` : ""}
      <button class="outline-button" id="detail-select">${getSelected().includes(w.id) ? "✓ Dans mon programme" : "+ Ajouter à mon programme"}</button>
    </section>
    <div class="detail-columns">
      <aside class="detail-index"><p class="eyebrow">DANS CETTE FICHE</p><a href="#overview">Présentation</a><a href="#summary">Résumé</a><a href="#context">Repères</a><a href="#figures">Personnages / figures</a><a href="#themes">Thèmes</a><a href="#analysis">Pistes d'analyse</a><a href="#bac">Parcours et bac</a><a href="#oral">Questions d'oral</a><a href="#quiz">Quiz</a></aside>
      <div class="detail-content">
        <section class="detail-section" id="overview"><p class="eyebrow">01 · PRÉSENTATION</p><h2>Comprendre l'œuvre</h2><p>${escapeHTML(w.description)}</p><div class="fact-box"><span>Repère littéraire</span><strong>${escapeHTML(w.repere || w.period)}</strong></div></section>
        ${section("summary","02 · REPÈRES NARRATIFS","Résumé et progression",sheet.summary)}
        <section class="detail-section" id="context"><p class="eyebrow">03 · CONTEXTE</p><h2>Repères littéraires</h2><div class="fact-box"><span>Période</span><strong>${escapeHTML(w.period)}</strong></div><div class="fact-box"><span>Parcours</span><strong>${escapeHTML(w.parcours)}</strong></div><p>Replace toujours l'œuvre dans son époque : contexte historique, mouvements littéraires, débats intellectuels et choix d'écriture. Les repères propres à ton édition et à ton cours restent prioritaires.</p></section>
        ${section("figures","04 · PERSONNAGES","Personnages et figures importantes",sheet.figures)}
        <section class="detail-section" id="themes"><p class="eyebrow">05 · GRANDS ENJEUX</p><h2>Thèmes principaux</h2><div class="tag-list">${(w.themes || []).map(t => `<span>${escapeHTML(t)}</span>`).join("")}</div></section>
        ${section("analysis","06 · LECTURE ANALYTIQUE","Pistes d'analyse",sheet.analysis)}
        ${section("bac","07 · OBJECTIF BAC","Relier l'œuvre au parcours",sheet.bac)}
        ${section("oral","08 · S'ENTRAÎNER","Questions possibles à l'oral",sheet.oral)}
        <section class="detail-section"><p class="eyebrow">À COMPLÉTER</p><h2>Mes notes de cours</h2><p>Ajoute ici tes citations exactes, les pages de ton édition, les analyses de textes et les remarques de ton professeur. Les citations ne sont volontairement pas inventées.</p></section>
        <section class="detail-section quiz-section" id="quiz"><p class="eyebrow">09 · MÉMORISATION</p><h2>Vérifier ses connaissances</h2><p class="muted">Réponds aux questions puis relis les explications.</p><div class="quiz-box"><div class="quiz-progress"><span id="quiz-progress"></span></div><p class="quiz-count" id="quiz-count"></p><h3 id="quiz-question"></h3><div id="quiz-answers" class="quiz-answers"></div><p id="quiz-feedback" aria-live="polite"></p><button id="quiz-next" class="solid-button" disabled>Question suivante</button><div id="quiz-result" class="hidden"><h3 id="quiz-score"></h3><p id="quiz-message"></p><button id="quiz-restart" class="outline-button">Recommencer</button></div></div></section>
      </div>
    </div>`;

  $("#detail-select").addEventListener("click", () => {
    toggleSelected(w.id);
    $("#detail-select").textContent = getSelected().includes(w.id) ? "✓ Dans mon programme" : "+ Ajouter à mon programme";
  });

  setupQuiz(w);
}

function setupQuiz(w) {
  const questions = w.quiz || [
    {q:`Quel est l'auteur de « ${w.title} » ?`,a:[w.author,"Victor Hugo","Molière"],c:0,e:`L'auteur de cette œuvre est ${w.author}.`},
    {q:"Quel est le parcours associé à cette œuvre ?",a:[w.parcours,"Mensonge et comédie","Émancipations créatrices"],c:0,e:`Le parcours associé est : ${w.parcours}.`},
    {q:`Dans quel objet d'étude se trouve « ${w.title} » ?`,a:[w.groupLabel,"La poésie","Le théâtre"],c:0,e:`Cette œuvre appartient à l'objet d'étude « ${w.groupLabel} ».`}
  ];
  let index = 0, score = 0, answered = false;
  const question = $("#quiz-question"), answers = $("#quiz-answers"), next = $("#quiz-next");
  function show() {
    answered = false;
    const q = questions[index];
    $("#quiz-count").textContent = `QUESTION ${index+1} / ${questions.length}`;
    $("#quiz-progress").style.width = `${(index+1)/questions.length*100}%`;
    question.textContent = q.q;
    $("#quiz-feedback").textContent = "";
    next.disabled = true;
    answers.innerHTML = q.a.map((a,i) => `<button class="answer-option" data-answer="${i}">${escapeHTML(a)}</button>`).join("");
    answers.querySelectorAll("button").forEach(btn => btn.addEventListener("click", () => choose(Number(btn.dataset.answer))));
  }
  function choose(choice) {
    if (answered) return;
    answered = true;
    const q = questions[index];
    if (choice === q.c) { score++; $("#quiz-feedback").textContent = `Bonne réponse ! ${q.e}`; }
    else $("#quiz-feedback").textContent = `Pas tout à fait. ${q.e}`;
    answers.querySelectorAll("button").forEach((btn,i) => {
      btn.disabled = true;
      if (i === q.c) btn.classList.add("correct");
      else if (i === choice) btn.classList.add("incorrect");
    });
    next.disabled = false;
    next.textContent = index === questions.length-1 ? "Voir mon résultat" : "Question suivante";
  }
  next.addEventListener("click", () => {
    if (!answered) return;
    index++;
    if (index < questions.length) { next.textContent = "Question suivante"; show(); }
    else {
      question.classList.add("hidden");
      answers.classList.add("hidden");
      next.classList.add("hidden");
      $("#quiz-count").classList.add("hidden");
      $("#quiz-feedback").classList.add("hidden");
      $("#quiz-result").classList.remove("hidden");
      $("#quiz-score").textContent = `${score} / ${questions.length}`;
      $("#quiz-message").textContent = score === questions.length ? "Excellent, tous les repères sont corrects !" : "Bien joué ! Relis les explications et réessaie pour consolider tes connaissances.";
    }
  });
  $("#quiz-restart").addEventListener("click", () => {
    index = 0; score = 0;
    question.classList.remove("hidden"); answers.classList.remove("hidden");
    next.classList.remove("hidden"); $("#quiz-count").classList.remove("hidden");
    $("#quiz-feedback").classList.remove("hidden"); $("#quiz-result").classList.add("hidden");
    next.textContent = "Question suivante";
    show();
  });
  show();
}

document.addEventListener("click", event => {
  const button = event.target.closest("[data-select]");
  if (button) toggleSelected(button.dataset.select);
});

if ($("#library-groups")) {
  $("#search").addEventListener("input", renderLibrary);
  $("#filter").addEventListener("change", renderLibrary);
  $("#sort").addEventListener("change", renderLibrary);
  renderLibrary();
  renderProgram();
}
renderDetail();