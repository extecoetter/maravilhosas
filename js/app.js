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

abdutorempe: {
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
},
  abdominalrolinho: {
  title: 'Abdominal Rolinho',
  subtitle: 'Abdômen, core e estabilizadores.',
  video: 'videos/abdominalrolinho.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Reto abdominal', 'Oblíquos', 'Core'],
  tips: [
    'Mantenha o abdômen firme durante todo o movimento.',
    'Avance o rolinho com controle, sem perder a postura.',
    'Volte devagar, evitando compensar com a lombar.'
  ],
  errors: [
    'Arquear demais a lombar.',
    'Ir além da amplitude que consegue controlar.',
    'Fazer o movimento rápido demais.'
  ],
  warning: 'Evite perder o alinhamento do tronco durante a execução. Em caso de dúvida procure um instrutor.'
},

afundo: {
  title: 'Afundo',
  subtitle: 'Quadríceps, glúteos e posteriores.',
  video: 'videos/afundo.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Quadríceps', 'Glúteos', 'Posteriores da coxa'],
  tips: [
    'Mantenha o tronco firme e alinhado.',
    'Desça controlando o movimento.',
    'Empurre o chão com o pé da frente para subir.'
  ],
  errors: [
    'Deixar o joelho cair para dentro.',
    'Perder o equilíbrio por falta de controle.',
    'Dar passos curtos demais.'
  ],
  warning: 'Faça o movimento com estabilidade e amplitude compatível com seu nível. Em caso de dúvida procure um instrutor.'
},

agachamentonabarraguiada: {
  title: 'Agachamento na Barra Guiada',
  subtitle: 'Quadríceps, glúteos e posteriores.',
  video: 'videos/agachamentonabarraguiada.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Quadríceps', 'Glúteos', 'Posteriores da coxa'],
  tips: [
    'Posicione os pés de forma confortável e estável.',
    'Mantenha o abdômen firme.',
    'Desça controlando e suba empurrando pelos calcanhares.'
  ],
  errors: [
    'Descer sem controle.',
    'Joelhos fechando para dentro.',
    'Tirar os calcanhares do apoio.'
  ],
  warning: 'Ajuste bem a posição antes de iniciar e evite sobrecarga sem domínio da técnica. Em caso de dúvida procure um instrutor.'
},

agachamentonabarralivre: {
  title: 'Agachamento na Barra Livre',
  subtitle: 'Quadríceps, glúteos e core.',
  video: 'videos/agachamentonabarralivre.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Quadríceps', 'Glúteos', 'Core'],
  tips: [
    'Mantenha a coluna neutra durante o movimento.',
    'Apoie bem os pés no chão.',
    'Suba com controle, sem perder a postura.'
  ],
  errors: [
    'Curvar a lombar.',
    'Descer rápido demais.',
    'Deixar os joelhos colapsarem para dentro.'
  ],
  warning: 'Use carga compatível com sua técnica e priorize a execução correta. Em caso de dúvida procure um instrutor.'
},

agachamentotrx: {
  title: 'Agachamento TRX',
  subtitle: 'Quadríceps, glúteos e core.',
  video: 'videos/agachamentotrx.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Quadríceps', 'Glúteos', 'Core'],
  tips: [
    'Use as alças para ajudar no equilíbrio, sem depender totalmente delas.',
    'Mantenha o peito aberto.',
    'Desça e suba de forma controlada.'
  ],
  errors: [
    'Puxar excessivamente com os braços.',
    'Curvar o tronco para frente.',
    'Fazer o movimento rápido demais.'
  ],
  warning: 'Controle a descida e mantenha a postura alinhada do início ao fim. Em caso de dúvida procure um instrutor.'
},

bancoextensor: {
  title: 'Banco Extensor',
  subtitle: 'Lombar, glúteos e posteriores.',
  video: 'videos/bancoextensor.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Eretores da espinha', 'Glúteos', 'Posteriores da coxa'],
  tips: [
    'Mantenha a coluna alinhada durante o exercício.',
    'Suba apenas até alinhar o tronco.',
    'Contraia glúteos e abdômen para estabilizar.'
  ],
  errors: [
    'Hiperestender a lombar no topo.',
    'Descer solto demais.',
    'Usar impulso para subir.'
  ],
  warning: 'Evite exagerar na amplitude para não sobrecarregar a lombar. Em caso de dúvida procure um instrutor.'
},

bancoisometrico: {
  title: 'Banco Isométrico',
  subtitle: 'Quadríceps e glúteos.',
  video: 'videos/bancoisometrico.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Quadríceps', 'Glúteos'],
  tips: [
    'Mantenha as costas bem apoiadas.',
    'Deixe os joelhos alinhados com os pés.',
    'Segure a posição com abdômen firme.'
  ],
  errors: [
    'Subir e descer durante a isometria.',
    'Joelhos entrando para dentro.',
    'Apoiar pouco as costas.'
  ],
  warning: 'Respeite o tempo de permanência e a postura correta durante a isometria. Em caso de dúvida procure um instrutor.'
},

facepull: {
  title: 'Face Pull',
  subtitle: 'Ombros posteriores e parte alta das costas.',
  video: 'videos/facepull.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Deltoide posterior', 'Trapézio', 'Manguito rotador'],
  tips: [
    'Puxe a corda em direção ao rosto com controle.',
    'Mantenha os cotovelos altos.',
    'Segure brevemente a contração no final.'
  ],
  errors: [
    'Usar carga excessiva e roubar no movimento.',
    'Puxar para baixo em vez de trazer ao rosto.',
    'Perder a postura do tronco.'
  ],
  warning: 'Priorize a técnica e o controle, não a carga. Em caso de dúvida procure um instrutor.'
},

hack: {
  title: 'Hack',
  subtitle: 'Quadríceps, glúteos e posteriores.',
  video: 'videos/hack.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Quadríceps', 'Glúteos', 'Posteriores da coxa'],
  tips: [
    'Apoie bem as costas no encosto.',
    'Mantenha os pés firmes na base.',
    'Desça controlado e suba empurrando pelos calcanhares.'
  ],
  errors: [
    'Tirar os quadris do apoio.',
    'Descer além do que consegue controlar.',
    'Joelhos fechando para dentro.'
  ],
  warning: 'Ajuste a posição dos pés e respeite sua amplitude segura. Em caso de dúvida procure um instrutor.'
},

legpressunilateral: {
  title: 'Leg Press Unilateral',
  subtitle: 'Quadríceps, glúteos e posteriores.',
  video: 'videos/legpressunilateral.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Quadríceps', 'Glúteos', 'Posteriores da coxa'],
  tips: [
    'Mantenha a lombar apoiada no banco.',
    'Empurre a plataforma com controle usando um lado por vez.',
    'Controle bem a descida.'
  ],
  errors: [
    'Deixar o quadril girar no banco.',
    'Descer além da mobilidade segura.',
    'Empurrar de forma explosiva demais.'
  ],
  warning: 'Foque na estabilidade do tronco e no alinhamento da perna ativa. Em caso de dúvida procure um instrutor.'
},

passada: {
  title: 'Passada',
  subtitle: 'Quadríceps, glúteos e posteriores.',
  video: 'videos/passada.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Quadríceps', 'Glúteos', 'Posteriores da coxa'],
  tips: [
    'Dê um passo confortável e estável.',
    'Mantenha o tronco alinhado.',
    'Desça controladamente e suba com firmeza.'
  ],
  errors: [
    'Passo muito curto.',
    'Joelho da frente desalinhado.',
    'Perder o equilíbrio por falta de controle.'
  ],
  warning: 'Faça o movimento com estabilidade e atenção ao alinhamento dos joelhos. Em caso de dúvida procure um instrutor.'
},

pulldown: {
  title: 'Pull Down',
  subtitle: 'Costas e bíceps.',
  video: 'videos/pulldown.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Latíssimo do dorso', 'Bíceps', 'Redondo maior'],
  tips: [
    'Mantenha o peito aberto durante a puxada.',
    'Puxe com controle, focando nas costas.',
    'Retorne devagar sem soltar o peso.'
  ],
  errors: [
    'Roubar com o tronco.',
    'Encolher os ombros demais.',
    'Soltar a volta sem controle.'
  ],
  warning: 'Evite compensações e mantenha o movimento limpo do início ao fim. Em caso de dúvida procure um instrutor.'
},

pulleyfrente: {
  title: 'Pulley Frente',
  subtitle: 'Costas e bíceps.',
  video: 'videos/pulleyfrente.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Latíssimo do dorso', 'Bíceps', 'Trapézio inferior'],
  tips: [
    'Puxe a barra em direção à frente do peito.',
    'Mantenha o peito aberto e a postura firme.',
    'Controle a subida da barra.'
  ],
  errors: [
    'Puxar atrás da nuca.',
    'Balançar o corpo para ajudar.',
    'Subir a barra de uma vez.'
  ],
  warning: 'Use carga que permita controle total da execução. Em caso de dúvida procure um instrutor.'
},

pulleytriangulo: {
  title: 'Pulley Triângulo',
  subtitle: 'Costas e bíceps.',
  video: 'videos/pulleytriangulo.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Latíssimo do dorso', 'Bíceps', 'Romboides'],
  tips: [
    'Mantenha o tronco firme.',
    'Puxe o acessório com controle.',
    'Retorne devagar para manter tensão.'
  ],
  errors: [
    'Usar impulso no tronco.',
    'Encolher os ombros em excesso.',
    'Perder o controle na volta.'
  ],
  warning: 'Foque em puxar com as costas, sem depender do embalo. Em caso de dúvida procure um instrutor.'
},

remadaarticuladaneutra: {
  title: 'Remada Articulada Neutra',
  subtitle: 'Costas e bíceps.',
  video: 'videos/remadaarticuladaneutra.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Latíssimo do dorso', 'Romboides', 'Bíceps'],
  tips: [
    'Mantenha o peito apoiado ou estável, se houver apoio.',
    'Puxe os braços para trás com controle.',
    'Aproxime as escápulas no final do movimento.'
  ],
  errors: [
    'Usar impulso para puxar.',
    'Encolher os ombros.',
    'Soltar o peso rapidamente.'
  ],
  warning: 'Priorize a contração das costas e o controle da volta. Em caso de dúvida procure um instrutor.'
},

remadaarticuladapronada: {
  title: 'Remada Articulada Pronada',
  subtitle: 'Costas e bíceps.',
  video: 'videos/remadaarticuladapronada.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Latíssimo do dorso', 'Romboides', 'Bíceps'],
  tips: [
    'Mantenha o tronco firme durante a remada.',
    'Puxe com os cotovelos para trás.',
    'Faça a volta de forma controlada.'
  ],
  errors: [
    'Roubar com o corpo.',
    'Perder a postura do peito.',
    'Fazer o movimento rápido demais.'
  ],
  warning: 'Evite compensações e mantenha o foco na musculatura das costas. Em caso de dúvida procure um instrutor.'
},

remadabaixapronada: {
  title: 'Remada Baixa Pronada',
  subtitle: 'Costas e bíceps.',
  video: 'videos/remadabaixapronada.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Latíssimo do dorso', 'Romboides', 'Bíceps'],
  tips: [
    'Mantenha o tronco firme e o peito aberto.',
    'Puxe levando os cotovelos para trás.',
    'Retorne devagar, mantendo controle do peso.'
  ],
  errors: [
    'Arredondar as costas.',
    'Puxar com impulso do tronco.',
    'Soltar a volta de uma vez.'
  ],
  warning: 'Use carga que permita postura correta durante todo o exercício. Em caso de dúvida procure um instrutor.'
},

remadabaixasupinada: {
  title: 'Remada Baixa Supinada',
  subtitle: 'Costas e bíceps.',
  video: 'videos/remadabaixasupinada.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Latíssimo do dorso', 'Bíceps', 'Romboides'],
  tips: [
    'Mantenha os ombros organizados durante a puxada.',
    'Puxe com controle até próximo ao tronco.',
    'Controle bem o retorno.'
  ],
  errors: [
    'Jogar o corpo para trás.',
    'Encolher os ombros.',
    'Fazer a volta sem controle.'
  ],
  warning: 'Mantenha a execução estável e sem embalo para melhor ativação. Em caso de dúvida procure um instrutor.'
},

remadabaixatriangulo: {
  title: 'Remada Baixa Triângulo',
  subtitle: 'Costas e bíceps.',
  video: 'videos/remadabaixatriangulo.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Latíssimo do dorso', 'Romboides', 'Bíceps'],
  tips: [
    'Mantenha o peito aberto e o abdômen firme.',
    'Puxe o triângulo em direção ao abdômen.',
    'Volte devagar para manter o controle.'
  ],
  errors: [
    'Arredondar as costas.',
    'Balançar o tronco.',
    'Perder a tensão na volta.'
  ],
  warning: 'Evite usar embalo e mantenha a postura estável durante a remada. Em caso de dúvida procure um instrutor.'
},

remadacavalinhocross: {
  title: 'Remada Cavalinho Cross',
  subtitle: 'Costas, bíceps e parte média das costas.',
  video: 'videos/remadacavalinhocross.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Latíssimo do dorso', 'Romboides', 'Bíceps'],
  tips: [
    'Mantenha a base firme no chão.',
    'Puxe com os cotovelos para trás.',
    'Controle a fase de retorno.'
  ],
  errors: [
    'Usar impulso do tronco.',
    'Curvar demais a lombar.',
    'Deixar os ombros subirem demais.'
  ],
  warning: 'Mantenha estabilidade e foco na execução, não apenas na carga. Em caso de dúvida procure um instrutor.'
},

remadacavalinholivre: {
  title: 'Remada Cavalinho Livre',
  subtitle: 'Costas, bíceps e lombar estabilizadora.',
  video: 'videos/remadacavalinholivre.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Latíssimo do dorso', 'Romboides', 'Bíceps'],
  tips: [
    'Mantenha a coluna neutra e o abdômen firme.',
    'Puxe o peso com controle.',
    'Aproxime as escápulas no final do movimento.'
  ],
  errors: [
    'Arredondar as costas.',
    'Roubar com impulso.',
    'Soltar o peso rapidamente.'
  ],
  warning: 'Tenha atenção à postura da coluna durante toda a remada. Em caso de dúvida procure um instrutor.'
},

remadacurvadabarra: {
  title: 'Remada Curvada Barra',
  subtitle: 'Costas, bíceps e estabilizadores.',
  video: 'videos/remadacurvadabarra.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Latíssimo do dorso', 'Romboides', 'Bíceps'],
  tips: [
    'Incline o tronco mantendo a coluna neutra.',
    'Puxe a barra com controle em direção ao tronco.',
    'Mantenha o abdômen firme para estabilizar.'
  ],
  errors: [
    'Curvar a lombar.',
    'Usar embalo excessivo.',
    'Subir o tronco durante a puxada.'
  ],
  warning: 'Use carga adequada para não perder a postura do exercício. Em caso de dúvida procure um instrutor.'
},

remadacurvadacross: {
  title: 'Remada Curvada Cross',
  subtitle: 'Costas e bíceps.',
  video: 'videos/remadacurvadacross.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Latíssimo do dorso', 'Romboides', 'Bíceps'],
  tips: [
    'Mantenha a postura firme e estável.',
    'Puxe com controle, sem perder o alinhamento do tronco.',
    'Retorne devagar mantendo tensão.'
  ],
  errors: [
    'Arredondar as costas.',
    'Usar muito impulso.',
    'Deixar os ombros dominarem o movimento.'
  ],
  warning: 'Foque na musculatura das costas e mantenha a técnica do início ao fim. Em caso de dúvida procure um instrutor.'
},

remadaunilateral: {
  title: 'Remada Unilateral',
  subtitle: 'Costas e bíceps.',
  video: 'videos/remadaunilateral.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Latíssimo do dorso', 'Romboides', 'Bíceps'],
  tips: [
    'Mantenha o tronco estável durante a puxada.',
    'Puxe com o cotovelo para trás.',
    'Controle o retorno sem girar o corpo.'
  ],
  errors: [
    'Rodar o tronco para ajudar.',
    'Encolher o ombro.',
    'Fazer o movimento rápido demais.'
  ],
  warning: 'Execute de forma controlada para evitar compensações do corpo. Em caso de dúvida procure um instrutor.'
},
  crucifixo: {
  title: 'Crucifixo',
  subtitle: 'Peito e ombros anteriores.',
  video: 'videos/crucifixo.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Peitoral maior', 'Deltoide anterior'],
  tips: [
    'Mantenha leve flexão nos cotovelos.',
    'Abra o movimento com controle.',
    'Contraia o peito no final.'
  ],
  errors: [
    'Esticar demais os braços.',
    'Descer rápido demais.',
    'Perder o controle na volta.'
  ],
  warning: 'Evite sobrecarregar os ombros. Em caso de dúvida procure um instrutor.'
},

crucifixoarticulado: {
  title: 'Crucifixo Articulado',
  subtitle: 'Peito.',
  video: 'videos/crucifixoarticulado.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Peitoral maior'],
  tips: [
    'Ajuste o banco corretamente.',
    'Movimento controlado.',
    'Aproxime bem as mãos no final.'
  ],
  errors: [
    'Usar impulso.',
    'Abrir demais os braços.',
    'Descer sem controle.'
  ],
  warning: 'Regule o equipamento antes de iniciar. Em caso de dúvida procure um instrutor.'
},

crucifixocross: {
  title: 'Crucifixo Cross',
  subtitle: 'Peito.',
  video: 'videos/crucifixocross.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Peitoral maior'],
  tips: [
    'Mantenha o tronco firme.',
    'Feche os braços na linha do peito.',
    'Controle a volta.'
  ],
  errors: [
    'Balançar o corpo.',
    'Abrir rápido demais.',
    'Usar carga excessiva.'
  ],
  warning: 'Priorize a execução ao invés da carga. Em caso de dúvida procure um instrutor.'
},

peckdeckhalter: {
  title: 'Peck Deck Halter',
  subtitle: 'Peito.',
  video: 'videos/peckdeckhalter.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Peitoral maior'],
  tips: [
    'Controle a abertura dos braços.',
    'Mantenha leve flexão nos cotovelos.',
    'Contraia o peito no final do movimento.'
  ],
  errors: [
    'Descer rápido demais.',
    'Esticar completamente os cotovelos.',
    'Perder o controle dos halteres.'
  ],
  warning: 'Evite exagerar na amplitude para não sobrecarregar os ombros. Em caso de dúvida procure um instrutor.'
},

supinobarralivre: {
  title: 'Supino Barra Livre',
  subtitle: 'Peito, tríceps e ombros anteriores.',
  video: 'videos/supinobarralivre.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Peitoral maior', 'Tríceps', 'Deltoide anterior'],
  tips: [
    'Mantenha os pés firmes no chão.',
    'Desça a barra com controle.',
    'Suba sem travar totalmente os cotovelos.'
  ],
  errors: [
    'Levantar o quadril do banco.',
    'Descer a barra rápido demais.',
    'Abrir os cotovelos em excesso.'
  ],
  warning: 'Use carga compatível com seu nível e prefira apoio ao treinar pesado. Em caso de dúvida procure um instrutor.'
},

supinohalter: {
  title: 'Supino Halter',
  subtitle: 'Peito, tríceps e ombros anteriores.',
  video: 'videos/supinohalter.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Peitoral maior', 'Tríceps', 'Deltoide anterior'],
  tips: [
    'Mantenha os halteres alinhados.',
    'Controle a descida em ambos os lados.',
    'Suba de forma firme e equilibrada.'
  ],
  errors: [
    'Descer torto.',
    'Perder estabilidade no movimento.',
    'Fazer o exercício rápido demais.'
  ],
  warning: 'Tenha cuidado com a estabilidade dos halteres durante toda a execução. Em caso de dúvida procure um instrutor.'
},

tricepscordacross: {
  title: 'Tríceps Corda Cross',
  subtitle: 'Tríceps.',
  video: 'videos/tricepscordacross.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Tríceps'],
  tips: [
    'Mantenha os cotovelos fixos ao lado do corpo.',
    'Abra a corda no final do movimento.',
    'Retorne com controle.'
  ],
  errors: [
    'Mexer os cotovelos para frente e para trás.',
    'Usar impulso do tronco.',
    'Subir rápido demais.'
  ],
  warning: 'Foque na contração do tríceps e não no embalo. Em caso de dúvida procure um instrutor.'
},

roscadiretacross: {
  title: 'Rosca Direta Cross',
  subtitle: 'Bíceps.',
  video: 'videos/roscadiretacross.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Bíceps'],
  tips: [
    'Mantenha os cotovelos próximos ao corpo.',
    'Suba controlando o cabo.',
    'Desça devagar para manter tensão.'
  ],
  errors: [
    'Balançar o corpo para ajudar.',
    'Subir muito rápido.',
    'Usar carga que prejudique a técnica.'
  ],
  warning: 'Evite roubar no movimento para ativar melhor o bíceps. Em caso de dúvida procure um instrutor.'
},

subidanobanco: {
  title: 'Subida no Banco',
  subtitle: 'Glúteos e quadríceps.',
  video: 'videos/subidanobanco.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Glúteos', 'Quadríceps'],
  tips: [
    'Suba com controle.',
    'Empurre pelo calcanhar da perna de apoio.',
    'Desça devagar e com estabilidade.'
  ],
  errors: [
    'Usar impulso da perna de trás.',
    'Descer muito rápido.',
    'Perder o equilíbrio.'
  ],
  warning: 'Use um banco estável e mantenha atenção ao apoio dos pés. Em caso de dúvida procure um instrutor.'
},

desenvolvimentoarticulado: {
  title: 'Desenvolvimento Articulado',
  subtitle: 'Ombros.',
  video: 'videos/desenvolvimentoarticulado.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Deltoide anterior', 'Deltoide lateral', 'Tríceps'],
  tips: [
    'Mantenha a postura firme no banco.',
    'Suba sem travar totalmente os cotovelos.',
    'Controle a descida.'
  ],
  errors: [
    'Arquear a lombar.',
    'Descer rápido demais.',
    'Usar impulso.'
  ],
  warning: 'Ajuste o equipamento e controle a carga para proteger os ombros. Em caso de dúvida procure um instrutor.'
},

remadaaltacross: {
  title: 'Remada Alta Cross',
  subtitle: 'Ombros e trapézio.',
  video: 'videos/remadaaltacross.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Trapézio', 'Deltoide lateral', 'Deltoide anterior'],
  tips: [
    'Puxe com os cotovelos apontando para cima.',
    'Mantenha o tronco firme.',
    'Faça o movimento de forma controlada.'
  ],
  errors: [
    'Subir os braços além do necessário.',
    'Usar impulso do corpo.',
    'Perder a postura.'
  ],
  warning: 'Evite cargas altas que prejudiquem o movimento. Em caso de dúvida procure um instrutor.'
},

elevacaofrontalcross: {
  title: 'Elevação Frontal Cross',
  subtitle: 'Ombro anterior.',
  video: 'videos/elevacaofrontalcross.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Deltoide anterior'],
  tips: [
    'Suba até a altura dos ombros.',
    'Mantenha o abdômen firme.',
    'Controle a descida.'
  ],
  errors: [
    'Subir além da linha dos ombros.',
    'Usar impulso.',
    'Descer rápido demais.'
  ],
  warning: 'Use carga moderada para manter a execução limpa. Em caso de dúvida procure um instrutor.'
},

crucifixoinverso: {
  title: 'Crucifixo Inverso',
  subtitle: 'Ombro posterior e parte alta das costas.',
  video: 'videos/crucifixoinverso.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Deltoide posterior', 'Romboides'],
  tips: [
    'Abra os braços com controle.',
    'Mantenha o peito apoiado ou tronco firme.',
    'Contraia atrás no final do movimento.'
  ],
  errors: [
    'Usar impulso.',
    'Abrir rápido demais.',
    'Perder a postura do tronco.'
  ],
  warning: 'Foque na técnica e não apenas na carga. Em caso de dúvida procure um instrutor.'
},

bancoadutor: {
  title: 'Banco Adutor',
  subtitle: 'Adutores.',
  video: 'videos/bancoadutor.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Adutores'],
  tips: [
    'Feche as pernas com controle.',
    'Mantenha a postura no encosto.',
    'Retorne devagar.'
  ],
  errors: [
    'Soltar o peso na volta.',
    'Usar impulso.',
    'Perder a postura no banco.'
  ],
  warning: 'Ajuste o banco corretamente antes de iniciar. Em caso de dúvida procure um instrutor.'
},

mesaflexora: {
  title: 'Mesa Flexora',
  subtitle: 'Posteriores da coxa.',
  video: 'videos/mesaflexora.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Posteriores da coxa'],
  tips: [
    'Mantenha o quadril apoiado.',
    'Flexione os joelhos com controle.',
    'Desça devagar.'
  ],
  errors: [
    'Tirar o quadril do banco.',
    'Usar impulso.',
    'Voltar rápido demais.'
  ],
  warning: 'Regule o aparelho conforme sua altura. Em caso de dúvida procure um instrutor.'
},

roscafemural: {
  title: 'Rosca Femural',
  subtitle: 'Posteriores da coxa.',
  video: 'videos/roscafemural.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Posteriores da coxa'],
  tips: [
    'Faça o movimento com controle.',
    'Mantenha o alinhamento das pernas.',
    'Retorne devagar.'
  ],
  errors: [
    'Usar impulso.',
    'Subir e descer rápido.',
    'Perder a posição no aparelho.'
  ],
  warning: 'Priorize amplitude segura e controle total do movimento. Em caso de dúvida procure um instrutor.'
},

beltsquat: {
  title: 'Belt Squat',
  subtitle: 'Quadríceps e glúteos.',
  video: 'videos/beltsquat.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Quadríceps', 'Glúteos', 'Adutores'],
  tips: [
    'Mantenha o tronco firme.',
    'Desça controlando o movimento.',
    'Empurre o chão com os calcanhares.'
  ],
  errors: [
    'Descer rápido demais.',
    'Joelhos fechando para dentro.',
    'Perder a postura.'
  ],
  warning: 'Ajuste bem o cinturão antes de iniciar. Em caso de dúvida procure um instrutor.'
},

goodmorning: {
  title: 'Good Morning',
  subtitle: 'Posteriores, glúteos e lombar.',
  video: 'videos/goodmorning.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Posteriores da coxa', 'Glúteos', 'Eretores da espinha'],
  tips: [
    'Mantenha a coluna neutra.',
    'Projete o quadril para trás.',
    'Suba controlando o tronco.'
  ],
  errors: [
    'Curvar a lombar.',
    'Descer além do que consegue controlar.',
    'Fazer o movimento rápido.'
  ],
  warning: 'Exercício que exige bastante postura. Use carga segura. Em caso de dúvida procure um instrutor.'
},

bancoflexor: {
  title: 'Banco Flexor',
  subtitle: 'Posteriores da coxa.',
  video: 'videos/bancoflexor.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Posteriores da coxa'],
  tips: [
    'Ajuste o aparelho corretamente.',
    'Flexione os joelhos com controle.',
    'Desça devagar.'
  ],
  errors: [
    'Usar impulso.',
    'Perder o apoio do corpo.',
    'Voltar rápido demais.'
  ],
  warning: 'Mantenha o movimento controlado do início ao fim. Em caso de dúvida procure um instrutor.'
},

pullover: {
  title: 'Pullover',
  subtitle: 'Costas e peitoral.',
  video: 'videos/pullover.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Latíssimo do dorso', 'Peitoral maior', 'Serrátil'],
  tips: [
    'Mantenha os braços levemente flexionados.',
    'Controle bem a descida.',
    'Faça o retorno sem pressa.'
  ],
  errors: [
    'Dobrar demais os cotovelos.',
    'Descer sem controle.',
    'Usar carga excessiva.'
  ],
  warning: 'Evite exagerar na amplitude para não sobrecarregar os ombros. Em caso de dúvida procure um instrutor.'
},

panturrilhasentada: {
  title: 'Panturrilha Sentada',
  subtitle: 'Panturrilhas.',
  video: 'videos/panturrilhasentada.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Sóleo', 'Gastrocnêmio'],
  tips: [
    'Suba o máximo que conseguir.',
    'Desça alongando bem a panturrilha.',
    'Mantenha ritmo controlado.'
  ],
  errors: [
    'Fazer repetições curtas.',
    'Usar impulso.',
    'Movimento rápido demais.'
  ],
  warning: 'Controle toda a amplitude para melhor ativação. Em caso de dúvida procure um instrutor.'
},

panturrilhalivre: {
  title: 'Panturrilha Livre',
  subtitle: 'Panturrilhas.',
  video: 'videos/panturrilhalivre.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Gastrocnêmio', 'Sóleo'],
  tips: [
    'Apoie bem a ponta dos pés.',
    'Suba controlando o movimento.',
    'Desça alongando bem.'
  ],
  errors: [
    'Movimento curto.',
    'Usar impulso do corpo.',
    'Descer rápido demais.'
  ],
  warning: 'Faça o exercício em base segura e estável. Em caso de dúvida procure um instrutor.'
},

roscascott: {
  title: 'Rosca Scott',
  subtitle: 'Bíceps.',
  video: 'videos/roscascott.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Bíceps'],
  tips: [
    'Mantenha os braços apoiados no banco.',
    'Suba com controle.',
    'Desça devagar até quase estender.'
  ],
  errors: [
    'Tirar o braço do apoio.',
    'Usar impulso.',
    'Descer sem controle.'
  ],
  warning: 'Evite cargas que façam perder a postura no banco. Em caso de dúvida procure um instrutor.'
},

tricepsbanco: {
  title: 'Tríceps Banco',
  subtitle: 'Tríceps.',
  video: 'videos/tricepsbanco.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Tríceps'],
  tips: [
    'Desça com controle.',
    'Mantenha os cotovelos apontando para trás.',
    'Suba de forma firme.'
  ],
  errors: [
    'Abrir demais os cotovelos.',
    'Descer muito rápido.',
    'Jogar o corpo para frente.'
  ],
  warning: 'Evite amplitude excessiva se sentir desconforto nos ombros. Em caso de dúvida procure um instrutor.'
},

tricepstesta: {
  title: 'Tríceps Testa',
  subtitle: 'Tríceps.',
  video: 'videos/tricepstesta.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Tríceps'],
  tips: [
    'Mantenha os cotovelos firmes.',
    'Desça controlado.',
    'Suba sem perder alinhamento.'
  ],
  errors: [
    'Abrir os cotovelos.',
    'Usar impulso.',
    'Descer rápido demais.'
  ],
  warning: 'Foque no controle do movimento para proteger os cotovelos. Em caso de dúvida procure um instrutor.'
},

tricepsfranceshalter: {
  title: 'Tríceps Francês Halter',
  subtitle: 'Tríceps.',
  video: 'videos/tricepsfranceshalter.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Tríceps'],
  tips: [
    'Mantenha os cotovelos apontados para cima.',
    'Desça o halter com controle.',
    'Suba de forma firme.'
  ],
  errors: [
    'Abrir muito os cotovelos.',
    'Arquear a lombar.',
    'Usar impulso.'
  ],
  warning: 'Use carga moderada para manter o alinhamento. Em caso de dúvida procure um instrutor.'
},

roscadiretahalter: {
  title: 'Rosca Direta Halter',
  subtitle: 'Bíceps.',
  video: 'videos/roscadiretahalter.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Bíceps'],
  tips: [
    'Mantenha os cotovelos próximos ao corpo.',
    'Suba com controle.',
    'Desça devagar.'
  ],
  errors: [
    'Balançar o tronco.',
    'Subir rápido demais.',
    'Usar carga alta demais.'
  ],
  warning: 'Evite roubar no movimento para melhor ativação muscular. Em caso de dúvida procure um instrutor.'
},

roscamartelohalter: {
  title: 'Rosca Martelo Halter',
  subtitle: 'Bíceps e antebraço.',
  video: 'videos/roscamartelohalter.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Bíceps', 'Braquial', 'Antebraço'],
  tips: [
    'Mantenha a pegada neutra.',
    'Suba sem mexer os cotovelos.',
    'Retorne devagar.'
  ],
  errors: [
    'Balançar o corpo.',
    'Perder a posição dos punhos.',
    'Descer rápido demais.'
  ],
  warning: 'Faça o movimento limpo e sem embalo. Em caso de dúvida procure um instrutor.'
},

roscaalternada: {
  title: 'Rosca Alternada',
  subtitle: 'Bíceps.',
  video: 'videos/roscaalternada.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Bíceps'],
  tips: [
    'Suba um braço de cada vez com controle.',
    'Mantenha o tronco firme.',
    'Desça devagar.'
  ],
  errors: [
    'Balançar o corpo.',
    'Subir os dois lados desorganizado.',
    'Usar impulso.'
  ],
  warning: 'Controle o ritmo para manter a execução correta. Em caso de dúvida procure um instrutor.'
},

elevacaolateralhalter: {
  title: 'Elevação Lateral Halter',
  subtitle: 'Ombros.',
  video: 'videos/elevacaolateralhalter.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Deltoide lateral'],
  tips: [
    'Suba até a linha dos ombros.',
    'Mantenha leve flexão nos cotovelos.',
    'Desça com controle.'
  ],
  errors: [
    'Usar impulso do tronco.',
    'Subir demais os braços.',
    'Descer rápido.'
  ],
  warning: 'Use carga moderada para não perder a técnica. Em caso de dúvida procure um instrutor.'
},

elevacaofrontalhalter: {
  title: 'Elevação Frontal Halter',
  subtitle: 'Ombro anterior.',
  video: 'videos/elevacaofrontalhalter.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Deltoide anterior'],
  tips: [
    'Suba até a altura dos ombros.',
    'Mantenha o abdômen firme.',
    'Desça controlando o peso.'
  ],
  errors: [
    'Subir além da linha dos ombros.',
    'Usar impulso.',
    'Fazer o movimento rápido.'
  ],
  warning: 'Evite excesso de carga para manter a execução correta. Em caso de dúvida procure um instrutor.'
},

desenvolvimentohalter: {
  title: 'Desenvolvimento Halter',
  subtitle: 'Ombros e tríceps.',
  video: 'videos/desenvolvimentohalter.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Deltoide anterior', 'Deltoide lateral', 'Tríceps'],
  tips: [
    'Mantenha os halteres alinhados.',
    'Suba sem travar completamente os cotovelos.',
    'Controle bem a descida.'
  ],
  errors: [
    'Arquear a lombar.',
    'Descer rápido demais.',
    'Perder estabilidade.'
  ],
  warning: 'Mantenha postura firme e use carga compatível. Em caso de dúvida procure um instrutor.'
},

stiff: {
  title: 'Stiff',
  subtitle: 'Posteriores, glúteos e lombar.',
  video: 'videos/stiff.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Posteriores da coxa', 'Glúteos', 'Eretores da espinha'],
  tips: [
    'Mantenha a coluna neutra.',
    'Desça levando o quadril para trás.',
    'Suba contraindo glúteos e posteriores.'
  ],
  errors: [
    'Curvar a lombar.',
    'Descer além da amplitude segura.',
    'Usar impulso para subir.'
  ],
  warning: 'Exercício que exige bastante atenção à postura. Em caso de dúvida procure um instrutor.'
},
  supinoarticulado: {
  title: 'Supino Articulado',
  subtitle: 'Peito, tríceps e ombros anteriores.',
  video: 'videos/supinoarticulado.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Peitoral maior', 'Tríceps', 'Deltoide anterior'],
  tips: [
    'Ajuste o banco na altura correta.',
    'Empurre com movimento controlado.',
    'Retorne devagar sem soltar o peso.'
  ],
  errors: [
    'Descer rápido demais.',
    'Travar totalmente os cotovelos.',
    'Perder a postura no banco.'
  ],
  warning: 'Regule o equipamento antes de iniciar e use carga compatível com seu nível. Em caso de dúvida procure um instrutor.'
},

supinobarraguiada: {
  title: 'Supino Barra Guiada',
  subtitle: 'Peito, tríceps e ombros anteriores.',
  video: 'videos/supinobarraguiada.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Peitoral maior', 'Tríceps', 'Deltoide anterior'],
  tips: [
    'Mantenha os pés firmes no chão.',
    'Desça a barra com controle.',
    'Suba sem travar totalmente os cotovelos.'
  ],
  errors: [
    'Levantar o quadril do banco.',
    'Descer a barra rápido demais.',
    'Abrir os cotovelos em excesso.'
  ],
  warning: 'Ajuste o banco e a posição da barra antes de começar. Em caso de dúvida procure um instrutor.'
},

crucifixovoador: {
  title: 'Crucifixo Voador',
  subtitle: 'Peito e ombros anteriores.',
  video: 'videos/crucifixovoador.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Peitoral maior', 'Deltoide anterior'],
  tips: [
    'Mantenha o peito aberto durante o movimento.',
    'Feche os braços com controle.',
    'Retorne devagar para manter tensão.'
  ],
  errors: [
    'Usar impulso no movimento.',
    'Abrir demais os braços sem controle.',
    'Soltar o peso na volta.'
  ],
  warning: 'Use carga moderada para manter a execução correta. Em caso de dúvida procure um instrutor.'
},

agachamentosumokettlebell: {
  title: 'Agachamento Sumô Kettlebell',
  subtitle: 'Glúteos, quadríceps e adutores.',
  video: 'videos/agachamentosumokettlebell.mp4',
  poster: 'img/poster-padrao.png',
  muscles: ['Glúteos', 'Quadríceps', 'Adutores'],
  tips: [
    'Mantenha os pés bem abertos.',
    'Segure o kettlebell com firmeza.',
    'Desça controlando e suba pelos calcanhares.'
  ],
  errors: [
    'Curvar a lombar.',
    'Deixar os joelhos fecharem para dentro.',
    'Descer rápido demais.'
  ],
  warning: 'Mantenha o tronco firme e respeite sua amplitude segura. Em caso de dúvida procure um instrutor.'
},
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
