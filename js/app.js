const EXERCISES = {
  supino: {
    title: 'Supino Máquina',
    subtitle: 'Peito, tríceps e ombros anteriores.',
    video: 'videos/supino.mp4',
    poster: 'img/poster-padrao.png',
    muscles: ['Peitoral maior', 'Tríceps', 'Deltoide anterior'],
    tips: [
      'Mantenha os pés firmes no chão.',
      'Empurre de forma controlada, sem travar os cotovelos.',
      'Desça o movimento com controle.'
    ],
    errors: [
      'Levantar o quadril do banco.',
      'Fazer o movimento rápido demais.',
      'Abrir os cotovelos em excesso.'
    ],
    warning: 'Use uma carga compatível com seu nível. Em caso de dor ou desconforto, pare o exercício e procure um instrutor.'
  },
  legpress: {
    title: 'Leg Press 45°',
    subtitle: 'Quadríceps, glúteos e posteriores.',
    video: 'videos/legpress.mp4',
    poster: 'img/poster-padrao.png',
    muscles: ['Quadríceps', 'Glúteos', 'Posteriores da coxa'],
    tips: [
      'Apoie a lombar no encosto.',
      'Empurre pela planta dos pés.',
      'Desça até a amplitude segura para você.'
    ],
    errors: [
      'Tirar a lombar do banco.',
      'Fechar muito os joelhos.',
      'Descer mais do que sua mobilidade permite.'
    ],
    warning: 'Nunca solte a trava sem estar posicionado corretamente. Procure orientação antes de aumentar a carga.'
  },
  puxada: {
    title: 'Puxada Frontal',
    subtitle: 'Costas e bíceps.',
    video: 'videos/puxada.mp4',
    poster: 'img/poster-padrao.png',
    muscles: ['Latíssimo do dorso', 'Bíceps', 'Redondo maior'],
    tips: [
      'Mantenha o peito aberto.',
      'Puxe a barra em direção à parte alta do peito.',
      'Retorne devagar, controlando a subida.'
    ],
    errors: [
      'Puxar atrás da nuca.',
      'Balançar o tronco para roubar no movimento.',
      'Subir a barra de uma vez.'
    ],
    warning: 'Evite compensações com a lombar. Se estiver começando, peça ajuste de carga a um instrutor.'
  },
  nenem: {
    title: 'Arremesso de Nena',
    subtitle: 'Costas e bíceps.',
    video: 'videos/nenem.mp4',
    poster: 'img/poster-padrao.png',
    muscles: ['Latíssimo do dorso', 'Bíceps', 'Redondo maior'],
    tips: [
      'mantenha as maos firmes.',
      'nao deixe o nenem cair.',
      'nao jogue muito alto.'
    ],
    errors: [
      'derrubar o nenem no chao.',
      'Balançar o tronco para roubar no movimento.',
      'machucar o nenem.'
    ],
    warning: 'Evite compensações com a lombar. Se estiver começando, peça ajuda a um instrutor.'
  },
  elevacaopelvicamaquina: {
  title: 'Elevação Pélvica Máquina',
  subtitle: 'Glúteos e posteriores.',
  video: 'videos/elevacaopelvicamaquina.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Glúteos', 'Posteriores da coxa'],
  tips: [
    'Empurre o peso com o calcanhar.',
    'Contraia bem os glúteos no topo.',
    'Mantenha o core firme durante todo o movimento.'
  ],
  errors: [
    'Subir usando a lombar.',
    'Descer muito rápido.',
    'Não completar a extensão do quadril.'
  ],
  warning: 'Use carga adequada e mantenha controle do movimento. Em caso de dúvida procure um instrutor.'
},

elevacaopelvicaaparelho: {
  title: 'Elevação Pélvica Aparelho',
  subtitle: 'Glúteos e posteriores.',
  video: 'videos/elevacaopelvicaaparelho.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Glúteos', 'Posteriores da coxa'],
  tips: [
    'Apoie bem as costas.',
    'Empurre com os calcanhares.',
    'Segure a contração no topo.'
  ],
  errors: [
    'Arquear a lombar.',
    'Usar impulso.',
    'Descer sem controle.'
  ],
  warning: 'Evite sobrecarga na lombar e mantenha o movimento controlado. Em caso de dúvida procure um instrutor.'
},

hackinvertido: {
  title: 'Hack Invertido',
  subtitle: 'Glúteos e quadríceps.',
  video: 'videos/hackinvertido.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Glúteos', 'Quadríceps'],
  tips: [
    'Mantenha os pés bem posicionados.',
    'Desça controlando o movimento.',
    'Empurre com força pelos calcanhares.'
  ],
  errors: [
    'Descer rápido demais.',
    'Tirar os pés da posição.',
    'Forçar os joelhos para dentro.'
  ],
  warning: 'Ajuste a posição corretamente antes de iniciar. Em caso de dúvida procure um instrutor.'
},

gluteonocross: {
  title: 'Glúteo no Cross',
  subtitle: 'Glúteos.',
  video: 'videos/gluteonocross.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Glúteos'],
  tips: [
    'Mantenha o tronco firme.',
    'Faça o movimento controlado.',
    'Contraia o glúteo no final.'
  ],
  errors: [
    'Balançar o corpo.',
    'Usar impulso.',
    'Perder o alinhamento do tronco.'
  ],
  warning: 'Evite cargas altas que prejudiquem a execução. Em caso de dúvida procure um instrutor.'
},

abducaocross: {
  title: 'Abdução Cross',
  subtitle: 'Glúteo médio.',
  video: 'videos/abducaocross.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Glúteo médio'],
  tips: [
    'Movimento lateral controlado.',
    'Mantenha o core firme.',
    'Segure no final do movimento.'
  ],
  errors: [
    'Girar o tronco.',
    'Usar impulso.',
    'Movimento curto demais.'
  ],
  warning: 'Controle a execução para melhor ativação muscular. Em caso de dúvida procure um instrutor.'
},

coicenapolia: {
  title: 'Coice na Polia',
  subtitle: 'Glúteos.',
  video: 'videos/coicenapolia.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Glúteos'],
  tips: [
    'Chute para trás controlado.',
    'Mantenha o abdômen firme.',
    'Contraia o glúteo no final.'
  ],
  errors: [
    'Arquear a lombar.',
    'Usar impulso.',
    'Não controlar a volta.'
  ],
  warning: 'Evite compensações na lombar. Em caso de dúvida procure um instrutor.'
},

abdutorempé: {
  title: 'Abdutor em Pé',
  subtitle: 'Glúteo médio.',
  video: 'videos/abdutorempe.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Glúteo médio'],
  tips: [
    'Movimento lateral firme.',
    'Postura ereta.',
    'Controle na volta.'
  ],
  errors: [
    'Inclinar o corpo.',
    'Movimento rápido.',
    'Falta de controle.'
  ],
  warning: 'Mantenha o corpo alinhado durante todo o exercício. Em caso de dúvida procure um instrutor.'
},

abdutorsentado: {
  title: 'Abdutor Sentado',
  subtitle: 'Glúteo médio.',
  video: 'videos/abdutorsentado.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Glúteo médio'],
  tips: [
    'Abra as pernas controladamente.',
    'Segure a contração.',
    'Mantenha a postura.'
  ],
  errors: [
    'Fechar rápido demais.',
    'Inclinar o tronco.',
    'Usar impulso.'
  ],
  warning: 'Use carga moderada e controle o movimento. Em caso de dúvida procure um instrutor.'
},

bulgarolivre: {
  title: 'Búlgaro Livre',
  subtitle: 'Glúteos e quadríceps.',
  video: 'videos/bulgarolivre.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Glúteos', 'Quadríceps'],
  tips: [
    'Mantenha equilíbrio.',
    'Desça controlado.',
    'Joelho alinhado.'
  ],
  errors: [
    'Perder equilíbrio.',
    'Joelho para dentro.',
    'Descer rápido.'
  ],
  warning: 'Execute com controle para evitar lesões. Em caso de dúvida procure um instrutor.'
},

bulgaroaparelho: {
  title: 'Búlgaro Aparelho',
  subtitle: 'Glúteos e quadríceps.',
  video: 'videos/bulgaroaparelho.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Glúteos', 'Quadríceps'],
  tips: [
    'Ajuste o aparelho corretamente.',
    'Mantenha postura firme.',
    'Desça controlado.'
  ],
  errors: [
    'Posicionamento errado.',
    'Movimento rápido.',
    'Joelho desalinhado.'
  ],
  warning: 'Regule o equipamento antes de iniciar. Em caso de dúvida procure um instrutor.'
},

levantamentoterrasumo: {
  title: 'Levantamento Terra Sumô',
  subtitle: 'Glúteos, posteriores e adutores.',
  video: 'videos/levantamentoterrasumo.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Glúteos', 'Posteriores', 'Adutores'],
  tips: [
    'Pés bem abertos.',
    'Coluna reta.',
    'Suba com força pelos calcanhares.'
  ],
  errors: [
    'Curvar a lombar.',
    'Subir com as costas.',
    'Movimento rápido.'
  ],
  warning: 'Mantenha a postura correta para evitar lesões. Em caso de dúvida procure um instrutor.'
},

gluteoempeaparelho: {
  title: 'Glúteo em Pé Aparelho',
  subtitle: 'Glúteos.',
  video: 'videos/gluteoempeaparelho.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Glúteos'],
  tips: [
    'Movimento controlado.',
    'Contraia no final.',
    'Mantenha postura firme.'
  ],
  errors: [
    'Usar impulso.',
    'Arquear a lombar.',
    'Movimento curto.'
  ],
  warning: 'Foque na execução correta para melhor resultado. Em caso de dúvida procure um instrutor.'
},

gluteo4apoiosaparelho: {
  title: 'Glúteo 4 Apoios Aparelho',
  subtitle: 'Glúteos.',
  video: 'videos/gluteo4apoiosaparelho.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Glúteos'],
  tips: [
    'Empurre para trás controlado.',
    'Contraia o glúteo.',
    'Mantenha o core firme.'
  ],
  errors: [
    'Arquear a lombar.',
    'Usar impulso.',
    'Não controlar a volta.'
  ],
  warning: 'Evite sobrecarregar a lombar. Em caso de dúvida procure um instrutor.'
}
};

function qs(selector) {
  return document.querySelector(selector);
}

function getExerciseKey() {
  const params = new URLSearchParams(window.location.search);
  return (params.get('ex') || 'supino').toLowerCase().trim();
}

function setList(selector, items) {
  const el = qs(selector);
  el.innerHTML = '';

  if (!items || !items.length) {
    el.innerHTML = '<li class="empty">Sem informações cadastradas.</li>';
    return;
  }

  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    el.appendChild(li);
  });
}

function renderExerciseLinks() {
  const box = qs('#exerciseLinks');
  box.innerHTML = '';

  Object.entries(EXERCISES).forEach(([key, item]) => {
    const a = document.createElement('a');
    a.className = 'exercise-link';
    a.href = `?ex=${encodeURIComponent(key)}`;
    a.innerHTML = `<strong>${item.title}</strong><small>${window.location.origin}${window.location.pathname}?ex=${key}</small>`;
    box.appendChild(a);
  });
}

function renderExercise() {
  const key = getExerciseKey();
  const item = EXERCISES[key] || EXERCISES.supino;

  qs('#exerciseTitle').textContent = item.title;
  qs('#exerciseSubtitle').textContent = item.subtitle;

  const video = qs('#exerciseVideo');
  video.src = item.video;
  video.setAttribute('poster', item.poster || '');
  video.load();

  qs('#warningText').textContent = item.warning || 'Procure um instrutor em caso de dúvidas.';

  setList('#musclesList', item.muscles);
  setList('#tipsList', item.tips);
  setList('#errorsList', item.errors);
}

function bindEvents() {
  qs('#replayBtn').addEventListener('click', () => {
    const video = qs('#exerciseVideo');
    video.currentTime = 0;
    video.play().catch(() => {});
  });
}

renderExercise();
renderExerciseLinks();
bindEvents();
