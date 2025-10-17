const TEXT_LEVELS = [
  {
    level: "Niveau 1",
    blocks: [
      {
        title: "Lettre formelle — Relance du programme écologique",
        prompt: `
Tâche 1 — Lettre formelle
Vous êtes coordinateur bénévole du collectif "Quartier Durable". La maison de quartier a annoncé la suspension des conférences sur la transition écologique faute de participation. Vous écrivez à la directrice pour défendre le programme.
Dans votre lettre, vous :
- exposez les raisons du recul de fréquentation ;
- proposez un plan pour relancer l'intérêt du public ;
- offrez votre soutien pour mettre en œuvre ce plan.
        `,
        text: `
Madame la Directrice,

En ma qualité de coordinateur du collectif "Quartier Durable", je souhaite attirer votre attention sur la décision de suspendre les conférences consacrées à la transition écologique. Les derniers événements ont souffert d'une communication tardive et d'un horaire peu compatible avec les obligations professionnelles de notre public cible.

Je propose d'établir un cycle repensé selon trois axes : programmer les rencontres à 19 heures, associer les commerçants locaux pour relayer l'information et offrir un format hybride permettant la diffusion en direct. Ce dispositif favoriserait l'engagement des actifs et des jeunes familles tout en valorisant l'image innovante de la maison de quartier.

Notre collectif se tient prêt à élaborer le calendrier, assurer la modération des échanges et mobiliser nos partenaires afin de garantir un nombre minimal de participants à chaque séance. Je reste à votre disposition pour convenir d'une réunion de travail dans les prochains jours.

Je vous prie d'agréer, Madame la Directrice, l'expression de ma considération distinguée.
        `,
      },
      {
        title: "Lettre informelle — Séjour d'éco-volontariat",
        prompt: `
Tâche 1 — Lettre informelle
Votre amie Clara envisage une pause professionnelle. Vous avez participé à un séjour d'éco-volontariat en Bretagne et souhaitez l'inviter à rejoindre la prochaine édition.
Dans votre lettre, vous :
- racontez ce que vous avez vécu et ce que cela vous a apporté ;
- expliquez en quoi l'expérience correspond à ses aspirations ;
- proposez une organisation concrète pour qu'elle participe avec vous.
        `,
        text: `
Salut Clara,

Je prends enfin le temps de te raconter le séjour d'éco-volontariat auquel j'ai participé le mois dernier sur la côte bretonne. Pendant une semaine, nous avons aidé les biologistes marins à restaurer les zones de nidification et animé des ateliers auprès des lycéens du coin. C'était intensif mais incroyablement stimulant : on apprend autant sur l'écologie que sur sa propre capacité à fédérer un groupe.

Tu me disais rêver d'un projet porteur de sens avant de reprendre le travail. Ce programme valoriserait ton talent pour la communication responsable et te reconnecterait à la mer que tu aimes tant. Les organisateurs cherchent justement quelqu'un pour coordonner leurs podcasts, un format que tu maîtrises sur le bout des doigts.

L'édition d'automne commence le 15 octobre. Si tu es partante, je peux te pré-inscrire avant la fin de la semaine et t'héberger à Rennes la veille du départ. Appelle-moi quand tu veux ; on regardera ensemble les billets de train.

À très vite,
Léa
        `,
      },
      {
        title: "Essai argumentatif — Semaine de quatre jours",
        prompt: `
Tâche 2 — Essai argumentatif
Vous contribuez à une revue citoyenne qui traite de l'évolution du monde du travail. Le débat du mois : "Faut-il généraliser la semaine de quatre jours sans diminution de salaire ?"
Dans votre texte, vous :
- exprimez clairement votre position ;
- développez au moins trois arguments étayés d'exemples ;
- concluez en suggérant une mesure d'accompagnement.
        `,
        text: `
Sujet : Faut-il généraliser la semaine de quatre jours sans diminution de salaire ?

Introduction :
La semaine de quatre jours, longtemps expérimentée à la marge, s'invite désormais au cœur des politiques sociales. Cette réorganisation du temps de travail constitue-t-elle une réponse pertinente aux enjeux économiques et humains contemporains ?

Premier argument :
Réduire le temps de présence hebdomadaire accroît la productivité horaire. L'entreprise islandaise Alfur enregistre depuis 2021 une hausse de 22 % de son chiffre d'affaires tout en offrant un jour de repos supplémentaire à ses équipes.

Deuxième argument :
Cette mesure renforce la santé mentale et réduit l'absentéisme. Des études menées en Belgique démontrent une baisse notable des burn-out lorsque les salariés disposent d'un temps long pour se ressourcer.

Troisième argument :
En outre, la semaine condensée constitue un levier écologique. Moins de trajets domicile-travail signifie une diminution mesurable des émissions de CO₂, particulièrement dans les métropoles congestionnées.

Conclusion :
Généraliser la semaine de quatre jours me paraît souhaitable, à condition d'accompagner la réforme par des formations managériales et une évaluation trimestrielle des résultats afin d'ajuster les modalités sectorielles.
        `,
      },
    ],
  },
  {
    level: "Niveau 2",
    blocks: [
      {
        title: "Lettre formelle — Maintien de l'atelier théâtre",
        prompt: `
Tâche 1 — Lettre formelle
Vous êtes membre du conseil d'administration d'un lycée français à l'étranger. Le proviseur envisage de supprimer la classe théâtre optionnelle au profit d'activités numériques. Vous écrivez pour défendre le maintien de l'atelier.
Dans votre lettre, vous :
- rappelez les bénéfices pédagogiques de l'atelier ;
- proposez un mode de financement durable ;
- invitez le proviseur à une action concrète.
        `,
        text: `
Monsieur le Proviseur,

Membre du conseil d'administration, je me permets de revenir sur le projet de fermeture de notre atelier théâtre au profit d'activités exclusivement numériques. Cette orientation me semble fragiliser l'équilibre pédagogique que nous revendiquons auprès des familles francophones et francophiles.

Au-delà de la maîtrise de la langue, le théâtre développe la confiance en soi, l'écoute et la capacité d'improvisation, compétences recherchées par les universités partenaires. Les excellents résultats obtenus lors du concours régional de Doha en témoignent.

Je propose de financer la prochaine saison en mobilisant le fonds de soutien des anciens élèves et en organisant, avec l'alliance française locale, une tournée de représentations bilingues. Cette solution limiterait l'impact budgétaire tout en accroissant notre visibilité.

Je vous invite à réunir, d'ici la fin du mois, une commission mixte enseignants-parents afin d'étudier ces propositions et de sécuriser le maintien de l'atelier. Je vous remercie de l'attention portée à cette démarche et reste à votre disposition pour en assurer le pilotage.

Je vous prie d'agréer, Monsieur le Proviseur, l'expression de ma haute considération.
        `,
      },
      {
        title: "Lettre informelle — Festival pluridisciplinaire",
        prompt: `
Tâche 1 — Lettre informelle
Votre amie Najat hésite à venir animer un atelier d'écriture lors du festival culturel que vous organisez à Rabat. Vous souhaitez la convaincre de participer.
Dans votre lettre, vous :
- décrivez l'esprit du festival et le public attendu ;
- montrez en quoi sa présence apporterait une valeur unique ;
- proposez des solutions logistiques pour faciliter sa venue.
        `,
        text: `
Chère Najat,

Je sais que ton agenda déborde, mais laisse-moi te parler du festival "Cartes sensibles" que nous préparons pour la fin septembre. L'idée est de mêler littérature, arts visuels et musiques du monde pour un public de jeunes adultes avides de formats innovants. Les éditions précédentes ont rassemblé plus de 800 personnes sur trois jours.

Ton atelier d'écriture autobiographique apporterait exactement la profondeur qui manque au programme. Les inscriptions explosent dès que nous évoquons la réconciliation entre mémoire intime et récit collectif, un terrain sur lequel tu excelles. Tu pourrais également présenter ton dernier roman lors d'une rencontre animée par la journaliste Amal Benyahia.

Côté logistique, nous prenons en charge ton vol Paris-Casablanca, l'hébergement au riad partenaire et la captation vidéo de ton atelier pour ta chaîne. Dis-moi simplement quelles dates te conviennent, je réserve tout avant la semaine prochaine.

J'espère vraiment que tu accepteras : le festival n'aura pas la même saveur sans toi.

Avec toute mon amitié,
Yasmine
        `,
      },
      {
        title: "Essai argumentatif — Régulation du tourisme",
        prompt: `
Tâche 2 — Essai argumentatif
Vous intervenez sur une plateforme dédiée aux politiques urbaines. Le sujet proposé : "Les grandes villes devraient-elles limiter l'accès des touristes à certaines périodes de l'année ?"
Dans votre texte, vous :
- prenez position sur la question ;
- exposez trois arguments illustrés ;
- suggérez une mesure pour concilier attractivité et qualité de vie.
        `,
        text: `
Sujet : Les grandes villes devraient-elles limiter l'accès des touristes à certaines périodes de l'année ?

Introduction :
De Barcelone à Kyoto, la fréquentation touristique atteint des records qui saturent l'espace public. Faut-il réguler plus strictement l'afflux des visiteurs pour préserver la qualité de vie des habitants ?

Premier argument :
La surfréquentation fragilise les infrastructures. À Venise, la gestion des déchets explose durant l'été, obligeant la municipalité à multiplier les rotations maritimes au détriment de la sécurité.

Deuxième argument :
Limiter certains flux permet de protéger le patrimoine. Les autorités de Dubrovnik ont démontré qu'en plafonnant le nombre de passagers de croisière, l'érosion des remparts avait diminué.

Troisième argument :
Une régulation intelligente stimule le tourisme alternatif. En étalant la demande sur l'année, on favorise les séjours culturels de longue durée, plus respectueux des communautés locales.

Conclusion :
Je plaide donc pour un système de quotas saisonniers couplé à une billetterie intelligente qui réinvestit une partie des recettes dans les services publics locaux. Cette régulation préserverait l'attractivité tout en garantissant une ville habitable.
        `,
      },
    ],
  },
  {
    level: "Niveau 3",
    blocks: [
      {
        title: "Lettre formelle — Sauvegarde des fonds francophones",
        prompt: `
Tâche 1 — Lettre formelle
Vous êtes consultante pour un réseau de bibliothèques francophones. L'une des bibliothèques partenaires souhaite réduire le budget dédié aux fonds documentaires en langue française. Vous écrivez à la directrice pour plaider le maintien des acquisitions.
Dans votre lettre, vous :
- soulignez les risques d'une telle réduction ;
- proposez des partenariats ou ressources complémentaires ;
- demandez une rencontre pour finaliser un plan d'action.
        `,
        text: `
Madame la Directrice,

En tant que consultante pour le réseau "Lire sans frontières", je viens de prendre connaissance de votre intention de réduire de 30 % le budget consacré aux ouvrages francophones. Cette décision, si elle se confirmait, compromettrait la mission de diffusion culturelle confiée à votre établissement.

Réduire l'offre en langue française entraînerait une baisse des adhésions universitaires et ferait perdre à la bibliothèque sa position de référence pour les chercheurs en sciences humaines. Les statistiques de prêt des deux dernières années attestent pourtant d'une demande croissante pour les essais contemporains et les revues spécialisées.

Je propose de formaliser un partenariat avec l'Institut français et de recourir aux licences numériques mutualisées qui divisent par deux le coût d'acquisition. Nous pourrions également solliciter le mécénat d'entreprises franco-marocaines très présentes dans votre ville.

Afin de définir ensemble un plan de financement équilibré, je vous suggère de nous rencontrer la semaine prochaine, en visioconférence si nécessaire. Je suis convaincue qu'une solution concertée permettra de préserver l'ambition francophone de votre réseau.

Je vous prie d'agréer, Madame la Directrice, l'expression de mes salutations respectueuses.
        `,
      },
      {
        title: "Lettre informelle — Résidence d'écriture immersive",
        prompt: `
Tâche 1 — Lettre informelle
Votre ami Luca hésite à accepter une résidence d'écriture immersive sur le thème "Humanités et intelligences artificielles" en Suisse. Vous souhaitez le convaincre de se joindre au projet.
Dans votre lettre, vous :
- partagez ce qui vous attire dans la résidence ;
- montrez comment son profil enrichirait le programme ;
- proposez une organisation pratique pour partir ensemble.
        `,
        text: `
Cher Luca,

Je viens de recevoir la confirmation pour la résidence "Humanités et intelligences artificielles" à Neuchâtel, et je sais que tu hésites encore à candidater. Cette immersion réunit quinze auteurs, chercheurs et développeurs pour imaginer des récits augmentés : exactement le pont que tu cherches entre poésie et code.

Ta façon d'explorer la mémoire collective à travers des installations interactives apporterait un contrepoint essentiel à nos échanges. Les organisateurs cherchent justement un regard qui questionne l'éthique des algorithmes à partir de récits migrants, ton terrain de jeu favori.

La résidence débute le 3 novembre. Je pars en train depuis Paris et peux réserver ta place dans la même cabine couchettes ; l'hébergement et les repas sont pris en charge. Dis-moi avant vendredi si tu te lances, je ferai suivre ta lettre de motivation aux coordinateurs.

J'espère vraiment partager cette aventure avec toi.

À bientôt,
Maya
        `,
      },
      {
        title: "Essai argumentatif — Créativité et intelligences artificielles",
        prompt: `
Tâche 2 — Essai argumentatif
Vous écrivez pour un site d'analyse sociale. Le thème proposé : "Le développement des intelligences artificielles menace-t-il la créativité humaine ?"
Dans votre texte, vous :
- affirmez votre point de vue ;
- construisez trois arguments appuyés sur des exemples précis ;
- concluez en ouvrant sur une recommandation concrète.
        `,
        text: `
Sujet : Le développement des intelligences artificielles menace-t-il la créativité humaine ?

Introduction :
L'essor fulgurant des intelligences artificielles génératives questionne la place de l'humain dans la création artistique. Constituent-elles un risque de standardisation ou, au contraire, un stimulant inédit ?

Premier argument :
L'intelligence artificielle automatise les tâches répétitives, libérant du temps pour l'exploration. Les studios de design de Montréal s'appuient déjà sur ces outils pour générer des maquettes préliminaires, puis concentrer leurs équipes sur la scénarisation.

Deuxième argument :
Ces technologies favorisent l'hybridation des disciplines. En combinant bases de données musicales et archives littéraires, des chercheurs de Lausanne ont conçu des performances mêlant slam et jazz algorithmique, preuve que l'IA élargit le champ des possibles.

Troisième argument :
Néanmoins, un usage non régulé peut homogénéiser les productions. La prolifération de visuels générés sans curation affaiblit la diversité des imaginaires, comme l'ont signalé plusieurs festivals de cinéma d'animation.

Conclusion :
Plutôt que de craindre la disparition de la créativité humaine, je défends l'instauration de chartes éthiques et de résidences artistiques hybrides qui associent créateurs et ingénieurs. Cette gouvernance partagée garantirait la singularité des œuvres tout en exploitant pleinement le potentiel des intelligences artificielles.
        `,
      },
    ],
  },
];

const DROPOUT_RATE = 0.18; // Chance to hide a word when dropout mode is active

const elements = {
  textDisplay: document.getElementById("textDisplay"),
  inputArea: document.getElementById("inputArea"),
  errors: document.getElementById("errors"),
  wordCount: document.getElementById("wordCount"),
  elapsedTime: document.getElementById("elapsedTime"),
  typingSpeed: document.getElementById("typingSpeed"),
  dropoutToggle: document.getElementById("dropoutToggle"),
  resetButton: document.getElementById("resetButton"),
  levelSelect: document.getElementById("levelSelect"),
};

const state = {
  words: [],
  blocks: [],
  levels: [],
  selectedLevelIndex: 0,
  wordIndex: 0,
  errors: 0,
  completedWords: 0,
  inError: false,
  dropoutEnabled: false,
  dropoutSet: new Set(),
  loopCount: 0,
  timerRunning: false,
  startTime: 0,
  elapsedMs: 0,
  timerId: null,
  idleTimeoutId: null,
};

function parseBlocks(blocks) {
  const words = [];

  blocks.forEach((block, blockIdx) => {
    const content =
      typeof block === "string"
        ? block
        : String(block.text ?? "").trim();
    const level =
      typeof block === "string" ? "" : String(block.level ?? "").trim();

    if (!content) {
      return;
    }

    const paragraphs = content
      .trim()
      .split(/\n\s*\n/)
      .map((paragraph) => paragraph.replace(/\s+/g, " ").trim())
      .filter(Boolean);

    paragraphs.forEach((paragraph, paraIdx) => {
      const parts = paragraph.split(" ").filter(Boolean);

      parts.forEach((part, partIdx) => {
        const isLastWord = partIdx === parts.length - 1;
        const hasBreakAfter =
          isLastWord &&
          (paraIdx < paragraphs.length - 1 || blockIdx < blocks.length - 1);

        words.push({
          text: part,
          element: null,
          breakAfter: hasBreakAfter,
          blockIndex: blockIdx,
          level,
        });
      });
    });
  });

  return words;
}

function renderWords() {
  elements.textDisplay.innerHTML = "";
  let currentBlock = -1;
  let currentLevel = "";

  state.words.forEach((word, idx) => {
    if (word.blockIndex !== currentBlock) {
      currentBlock = word.blockIndex;
      const blockInfo = state.blocks[currentBlock];
      const blockLevel = blockInfo?.level?.trim?.() ?? "";

      if (blockLevel && blockLevel !== currentLevel) {
        currentLevel = blockLevel;
        const levelElement = document.createElement("div");
        levelElement.className = "level";
        levelElement.textContent = blockLevel;
        elements.textDisplay.appendChild(levelElement);
      }

      if (blockInfo?.title) {
        const titleElement = document.createElement("div");
        titleElement.className = "block-title";
        titleElement.textContent = blockInfo.title.trim();
        elements.textDisplay.appendChild(titleElement);
      }

      if (blockInfo?.prompt) {
        const promptElement = document.createElement("div");
        promptElement.className = "prompt";
        promptElement.textContent = blockInfo.prompt.trim();
        elements.textDisplay.appendChild(promptElement);
      }
    }

    const span = document.createElement("span");
    span.textContent = word.text;
    span.className = "pending";
    span.dataset.index = String(idx);
    word.element = span;
    elements.textDisplay.appendChild(span);

    if (!word.breakAfter) {
      elements.textDisplay.appendChild(document.createTextNode(" "));
    } else {
      elements.textDisplay.appendChild(document.createElement("br"));
      elements.textDisplay.appendChild(document.createElement("br"));
    }
  });
}

function updateStats() {
  elements.errors.textContent = `Erreurs: ${state.errors}`;
  elements.wordCount.textContent = `Mot: ${state.wordIndex + 1} / ${
    state.words.length
  }`;
  updateTimingDisplay();
}

function updateWordClasses() {
  state.words.forEach((word, idx) => {
    if (!word.element) {
      return;
    }

    const classes = [];

    if (idx < state.wordIndex) {
      classes.push("correct");
    } else if (idx === state.wordIndex) {
      classes.push(state.inError ? "error" : "active");
    } else {
      classes.push("pending");
    }

    if (state.dropoutSet.has(idx)) {
      classes.push("dropped");
    }

    word.element.className = classes.join(" ");
  });

  const active = state.words[state.wordIndex]?.element;
  if (active) {
    active.scrollIntoView({ block: "nearest" });
  }
}

function rerollDropout() {
  state.dropoutSet.clear();

  if (!state.dropoutEnabled) {
    updateWordClasses();
    return;
  }

  state.words.forEach((_, idx) => {
    if (Math.random() < DROPOUT_RATE) {
      state.dropoutSet.add(idx);
    }
  });

  updateWordClasses();
}

function handleSuccessfulWord() {
  const currentIndex = state.wordIndex;
  const currentWord = state.words[currentIndex];

  state.completedWords += 1;

  if (currentWord?.element) {
    currentWord.element.classList.remove("error");
    currentWord.element.classList.add("correct");
  }

  if (state.dropoutSet.has(currentIndex)) {
    state.dropoutSet.delete(currentIndex);
  }

  state.wordIndex += 1;
  state.inError = false;

  if (state.wordIndex >= state.words.length) {
    state.wordIndex = 0;
    state.loopCount += 1;
    rerollDropout();
  }

  elements.inputArea.value = "";
  updateStats();
  updateWordClasses();
  updateTimingDisplay();
}

function handleInput() {
  const rawValue = elements.inputArea.value;
  const normalized = rawValue.replace(/\r?\n/g, " ");
  const trimmed = normalized.trimEnd();
  const expectedWord = state.words[state.wordIndex]?.text ?? "";

  if (!state.timerRunning && rawValue.length > 0) {
    startTimer();
  }

  const endsWithWhitespace = /\s$/.test(normalized);
  const isPrefix = expectedWord.startsWith(trimmed);

  if (!isPrefix && trimmed.length > 0) {
    if (!state.inError) {
      state.errors += 1;
      state.inError = true;
      updateStats();
    }
    updateWordClasses();
  } else if (isPrefix && state.inError) {
    state.inError = false;
    updateWordClasses();
  }

  if (endsWithWhitespace) {
    if (trimmed === expectedWord) {
      handleSuccessfulWord();
    } else if (trimmed.length > 0) {
      if (!state.inError) {
        state.errors += 1;
        state.inError = true;
        updateStats();
      }
      elements.inputArea.value = trimmed;
      updateWordClasses();
    } else {
      elements.inputArea.value = "";
    }
  }

  scheduleIdleTimer();
}

function resetState() {
  setLevel(state.selectedLevelIndex);
}

function populateLevelOptions() {
  if (!elements.levelSelect) {
    return;
  }

  elements.levelSelect.innerHTML = "";

  state.levels.forEach((level, idx) => {
    const option = document.createElement("option");
    option.value = String(idx);
    option.textContent = level.level || `Niveau ${idx + 1}`;
    elements.levelSelect.appendChild(option);
  });

  elements.levelSelect.value = String(state.selectedLevelIndex);
}

function clearIdleTimer() {
  if (state.idleTimeoutId) {
    window.clearTimeout(state.idleTimeoutId);
    state.idleTimeoutId = null;
  }
}

function scheduleIdleTimer() {
  clearIdleTimer();
  state.idleTimeoutId = window.setTimeout(() => {
    state.idleTimeoutId = null;
    if (state.timerRunning) {
      stopTimer(false);
    }
  }, 1000);
}

function startTimer() {
  if (state.timerRunning) {
    return;
  }

  clearIdleTimer();

  const baseElapsed = Math.max(state.elapsedMs, 0);
  state.timerRunning = true;
  state.startTime =
    baseElapsed > 0 ? performance.now() - baseElapsed : performance.now();

  if (state.timerId) {
    window.clearInterval(state.timerId);
  }

  state.timerId = window.setInterval(() => {
    updateTimingDisplay();
  }, 250);

  updateTimingDisplay();
}

function stopTimer(reset = false) {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }

  clearIdleTimer();

  if (state.timerRunning) {
    state.elapsedMs = performance.now() - state.startTime;
  }

  state.timerRunning = false;

  if (reset) {
    state.startTime = 0;
    state.elapsedMs = 0;
  }

  updateTimingDisplay();
}

function getElapsedMs() {
  if (state.timerRunning) {
    return Math.max(performance.now() - state.startTime, 0);
  }
  return Math.max(state.elapsedMs, 0);
}

function updateTimingDisplay() {
  if (!elements.elapsedTime || !elements.typingSpeed) {
    return;
  }

  const elapsed = getElapsedMs();
  const totalSeconds = Math.floor(elapsed / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
  elements.elapsedTime.textContent = `Temps: ${formattedTime}`;

  const elapsedMinutes = elapsed / 60000;
  const wpm =
    elapsedMinutes > 0 ? Math.round(state.completedWords / elapsedMinutes) : 0;
  elements.typingSpeed.textContent = `Vitesse: ${wpm} WPM`;
}

function setLevel(levelIndex) {
  if (!state.levels.length) {
    return;
  }

  stopTimer(true);

  const clampedIndex = Math.min(
    Math.max(Number(levelIndex) || 0, 0),
    state.levels.length - 1
  );
  const levelInfo = state.levels[clampedIndex];

  if (!levelInfo) {
    return;
  }

  state.selectedLevelIndex = clampedIndex;
  state.blocks = levelInfo.blocks.map((block) => ({
    level: levelInfo.level,
    title: block.title,
    prompt: block.prompt,
    text: block.text,
  }));
  state.words = parseBlocks(state.blocks);
  state.wordIndex = 0;
  state.errors = 0;
  state.completedWords = 0;
  state.inError = false;
  state.loopCount = 0;
  state.dropoutSet.clear();

  renderWords();
  updateStats();
  rerollDropout();

  if (elements.levelSelect) {
    const targetValue = String(clampedIndex);
    if (elements.levelSelect.value !== targetValue) {
      elements.levelSelect.value = targetValue;
    }
  }

  if (elements.inputArea) {
    elements.inputArea.value = "";
    elements.inputArea.focus();
  }

  updateTimingDisplay();
}

function bootstrap() {
  state.levels = TEXT_LEVELS.map((level) => ({
    level: String(level.level ?? "").trim(),
    blocks: (level.blocks ?? []).map((block) => ({
      title: String(block.title ?? "").trim(),
      prompt: String(block.prompt ?? "").trim(),
      text: String(block.text ?? "").trim(),
    })),
  }));

  populateLevelOptions();
  setLevel(0);

  elements.inputArea.addEventListener("input", handleInput);
  elements.dropoutToggle.addEventListener("change", (event) => {
    state.dropoutEnabled = event.target.checked;
    rerollDropout();
  });
  elements.resetButton.addEventListener("click", resetState);
  elements.levelSelect?.addEventListener("change", (event) => {
    const nextIndex = Number.parseInt(event.target.value, 10);
    if (!Number.isNaN(nextIndex)) {
      setLevel(nextIndex);
    }
  });

  elements.inputArea.focus();
}

document.addEventListener("DOMContentLoaded", bootstrap);
