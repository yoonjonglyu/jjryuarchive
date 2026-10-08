export interface Person {
  id: string;
  name: string;
  hanjaName: string;
  courtesyName?: string; // 자 (字)
  pseudonym?: string; // 호 (號)
  generation: number; // 몇 세손/세
  birthDeath?: string;
  branch: string; // 분파 (예: 시조계, 수곡파 등)
  title?: string; // 관직 및 증직
  category: 'progenitor' | 'scholar' | 'patriot' | 'official' | 'ancestor';
  summary: string;
  achievements: string[];
  writings?: string[];
  relics?: string[];
  fatherId?: string;
}

export interface GenealogyNode {
  id: string;
  name: string;
  hanjaName: string;
  generation: number;
  branch: string;
  title?: string;
  pseudonym?: string;
  birthDeath?: string;
  fatherId?: string;
  childrenIds?: string[];
  isSubBranchHead?: boolean; // 파조 여부
  note?: string;
}

export interface ArchiveItem {
  id: string;
  title: string;
  hanjaTitle?: string;
  category: 'document' | 'historic_site' | 'submerged_history' | 'calligraphy' | 'photo';
  categoryLabel: string;
  dateOrEra: string;
  location?: string;
  description: string;
  significance: string;
  imageUrl?: string;
  tag: string[];
  sourceOrKeeper: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  category: 'origin' | 'settlement' | 'achievement' | 'tragedy' | 'archive';
  description: string;
}

// 1. 주요 인물 데이터
export const PEOPLE: Person[] = [
  {
    id: 'ryu-hon',
    name: '류혼',
    hanjaName: '柳渾',
    generation: 1,
    branch: '전주류씨 시조',
    title: '고려 완산백(完山伯)',
    category: 'progenitor',
    summary: '전주류씨의 시조. 고려조에 완산백(完山伯)에 봉해져 후손들이 전주(완산)를 본관으로 삼게 되었습니다.',
    achievements: [
      '전주류씨의 시조로서 가문의 터전을 닦음',
      '고려 왕조에서 완산백에 봉해지며 명문가로서의 기틀을 확립'
    ],
    relics: ['전주 시조 묘역 및 제단'],
  },
  {
    id: 'ryu-seub',
    name: '류습',
    hanjaName: '柳濕',
    generation: 2,
    branch: '전주류씨 중흥조',
    title: '완산부원군(完山府院君)',
    category: 'progenitor',
    summary: '고려 말 참지정사 등을 지내고 완산부원군에 추봉되었으며, 다섯 아들이 모두 과거에 급제하여 가문을 크게 일으켰습니다.',
    achievements: [
      '오자급제(五子及第)의 영예로 가문을 영남과 호남의 대족으로 성장시킴',
      '조선 초 사대부 가문으로의 기반을 공고히 함'
    ],
  },
  {
    id: 'ryu-geukseo',
    name: '류극서',
    hanjaName: '柳克恕',
    generation: 3,
    branch: '묵계공파 파조',
    title: '직제학(直提學), 이조판서 추증',
    category: 'scholar',
    summary: '고려 말 정당문학을 거쳐 조선 초 집현전 직제학 등을 역임하였으며 학문과 청백리로 이름을 떨쳤습니다.',
    achievements: [
      '유학의 진흥과 훈민정음 창제 시기 학문적 기여',
      '묵계공파의 파조로서 영남 안동 입향의 교두보를 마련'
    ],
  },
  {
    id: 'ryu-bokgi',
    name: '류복기',
    hanjaName: '柳復起',
    courtesyName: '경순(景純)',
    pseudonym: '기봉(岐峯)',
    generation: 7,
    birthDeath: '1555 ~ 1617',
    branch: '수곡파 (무실류씨) 입향 파조',
    title: '사헌부 지평 증직, 임진왜란 예안의병장',
    category: 'patriot',
    summary: '안동 무실(수곡)에 입향하여 수곡파의 기틀을 세운 인물. 임진왜란이 일어나자 향산 이홍문 등과 함께 예안에서 의병을 일으켜 왜적을 격퇴하고 향토를 수호하였습니다.',
    achievements: [
      '임진왜란 예안 의병장으로 창의(倡義)하여 영남 북부 지역 방어',
      '안동 수곡리(무실마을)에 터를 잡고 문중의 영구적 집성촌 형성',
      '퇴계 이황의 문인들과 교유하며 도학(道學)과 절의(節義)의 가풍 확립'
    ],
    writings: ['기봉문집(岐峯文集)'],
    relics: ['기봉정사(岐峯精舍, 경북 문화유산자료)', '의병 창의 격문'],
  },
  {
    id: 'ryu-jungwon',
    name: '류정원',
    hanjaName: '柳正源',
    courtesyName: '순백(淳伯)',
    pseudonym: '삼산(三山)',
    generation: 11,
    birthDeath: '1687 ~ 1761',
    branch: '수곡파',
    title: '사헌부 대사헌, 이조참판, 홍문관 제학',
    category: 'scholar',
    summary: '조선 후기 영남학파를 대표하는 대유학자이자 명신. 대사헌, 이조참판 등을 지내며 올곧은 직언을 서슴지 않았고, 주자학과 예학에 깊은 성취를 이루어 『삼산집』을 남겼습니다.',
    achievements: [
      '영조 연간 대사헌으로 붕당의 폐해를 지적하고 탕평책의 실질적 실천을 진언',
      '퇴계학을 계승·발전시켜 영남 유학의 정통성을 수호',
      '수곡마을을 영남의 대표적 유학 문향으로 위상을 드높임'
    ],
    writings: ['삼산집(三山集 14권)', '동사강목 서문 및 예학 변론서'],
    relics: ['삼산정(三山亭, 경북 유형문화유산)', '삼산종택'],
    fatherId: 'ryu-bokgi-line',
  },
  {
    id: 'ryu-pilyoung',
    name: '류필영',
    hanjaName: '柳必永',
    courtesyName: '무백(茂伯)',
    pseudonym: '서산(西山)',
    generation: 15,
    birthDeath: '1841 ~ 1924',
    branch: '수곡파',
    title: '통정대부 비서원승, 파리장서 독립청원 서명인',
    category: 'patriot',
    summary: '한말의 거유(巨儒)이자 애국지사. 1919년 3·1운동 직후 전국의 유림들이 파리강화회의에 조국의 독립을 호소한 파리장서(巴里長書)에 서명하여 옥고를 치렀습니다.',
    achievements: [
      '1919년 유림 파리장서 독립운동 주도적 참여 및 서명',
      '일제의 회유와 탄압에도 지조를 굽히지 않고 척사위정 및 항일 민족의식 고취',
      '건국포장 추서 (애국장)'
    ],
    writings: ['서산집(西山集)'],
    relics: ['파리장서 초고 사본', '서산 유묵'],
  },
  {
    id: 'ryu-jumok',
    name: '류주목',
    hanjaName: '柳疇睦',
    courtesyName: '치용(稚容)',
    pseudonym: '묵재(默齋)',
    generation: 13,
    birthDeath: '1813 ~ 1872',
    branch: '수곡파',
    title: '조선 말기 유학자',
    category: 'scholar',
    summary: '수곡파 가문의 학풍을 계승하고 족보 편찬과 선조들의 유문 정리에 평생을 바친 학자입니다.',
    achievements: [
      '수곡파 족보(세보) 중간(重刊) 총괄',
      '기봉집 및 삼산집 속집 정본 간행 기여'
    ],
    writings: ['묵재문집(默齋文集)'],
  },
  {
    id: 'ryu-wonsik',
    name: '류원식',
    hanjaName: '柳元植',
    pseudonym: '백하(白下)',
    generation: 16,
    birthDeath: '1890 ~ 1945',
    branch: '수곡파',
    title: '독립운동가 (건국훈장 애족장)',
    category: 'patriot',
    summary: '가문의 전 재산을 정리하고 만주로 망명하여 신흥무관학교 설립 지원 및 서로군정서에서 무장 독립투쟁을 지원하였습니다.',
    achievements: [
      '만주 서간도 망명 및 독립군 군자금 조달',
      '임시정부 연계 독립운동 및 후진 양성'
    ],
    relics: ['독립유공 건국훈장 서훈록'],
  }
];

// 2. 계보 트리 데이터 (시조부터 수곡파 주요 계통)
export const GENEALOGY_TREE: GenealogyNode[] = [
  {
    id: 'g-1',
    name: '류혼 (柳渾)',
    hanjaName: '柳渾',
    generation: 1,
    branch: '전주류씨',
    title: '고려 완산백(完山伯)',
    note: '전주류씨 시조',
    childrenIds: ['g-2']
  },
  {
    id: 'g-2',
    name: '류습 (柳濕)',
    hanjaName: '柳濕',
    generation: 2,
    branch: '전주류씨',
    title: '완산부원군(完山府院君)',
    fatherId: 'g-1',
    childrenIds: ['g-3-1', 'g-3-2', 'g-3-3', 'g-3-4', 'g-3-5']
  },
  {
    id: 'g-3-1',
    name: '류극서 (柳克恕)',
    hanjaName: '柳克恕',
    generation: 3,
    branch: '묵계공파 (안동계통 파조)',
    title: '집현전 직제학',
    isSubBranchHead: true,
    fatherId: 'g-2',
    childrenIds: ['g-4-1']
  },
  {
    id: 'g-3-2',
    name: '류극간 (柳克侃)',
    hanjaName: '柳克侃',
    generation: 3,
    branch: '밀직사공파',
    title: '밀직사 좌승지',
    fatherId: 'g-2'
  },
  {
    id: 'g-3-3',
    name: '류극삼 (柳克三)',
    hanjaName: '柳克三',
    generation: 3,
    branch: '참판공파',
    title: '이조참판',
    fatherId: 'g-2'
  },
  {
    id: 'g-3-4',
    name: '류극강 (柳克綱)',
    hanjaName: '柳克綱',
    generation: 3,
    branch: '부사공파',
    title: '양주부사',
    fatherId: 'g-2'
  },
  {
    id: 'g-3-5',
    name: '류극창 (柳克昌)',
    hanjaName: '柳克昌',
    generation: 3,
    branch: '첨서공파',
    title: '첨서중추원사',
    fatherId: 'g-2'
  },
  {
    id: 'g-4-1',
    name: '류이순 (柳以淳)',
    hanjaName: '柳以淳',
    generation: 4,
    branch: '묵계공파',
    title: '통례원 좌통례',
    fatherId: 'g-3-1',
    childrenIds: ['g-5-1']
  },
  {
    id: 'g-5-1',
    name: '류지 (柳芝)',
    hanjaName: '柳芝',
    generation: 5,
    branch: '묵계공파',
    title: '진사, 학덕으로 추앙',
    fatherId: 'g-4-1',
    childrenIds: ['g-6-1']
  },
  {
    id: 'g-6-1',
    name: '류성추 (柳成秋)',
    hanjaName: '柳成秋',
    generation: 6,
    branch: '묵계공파',
    title: '증 이조참판',
    fatherId: 'g-5-1',
    childrenIds: ['g-7-1', 'g-7-2']
  },
  {
    id: 'g-7-1',
    name: '류복기 (柳復起)',
    hanjaName: '柳復起',
    generation: 7,
    branch: '수곡파 (무실류씨 입향조)',
    pseudonym: '호 기봉(岐峯)',
    title: '임진왜란 예안의병장, 사헌부 지평 증직',
    isSubBranchHead: true,
    fatherId: 'g-6-1',
    note: '안동 무실(수곡리)에 입향하여 수곡파를 형성함',
    childrenIds: ['g-8-1', 'g-8-2', 'g-8-3', 'g-8-4']
  },
  {
    id: 'g-7-2',
    name: '류복립 (柳復立)',
    hanjaName: '柳復立',
    generation: 7,
    branch: '수곡파 일계',
    title: '진사',
    fatherId: 'g-6-1'
  },
  {
    id: 'g-8-1',
    name: '류우잠 (柳友潛)',
    hanjaName: '柳友潛',
    generation: 8,
    branch: '수곡파 (종파)',
    pseudonym: '호 취암(鷲巖)',
    title: '통정대부',
    fatherId: 'g-7-1',
    childrenIds: ['g-9-1']
  },
  {
    id: 'g-8-2',
    name: '류득잠 (柳得潛)',
    hanjaName: '柳得潛',
    generation: 8,
    branch: '수곡파 지파',
    fatherId: 'g-7-1'
  },
  {
    id: 'g-8-3',
    name: '류지잠 (柳知潛)',
    hanjaName: '柳知潛',
    generation: 8,
    branch: '수곡파 지파',
    fatherId: 'g-7-1'
  },
  {
    id: 'g-8-4',
    name: '류시잠 (柳時潛)',
    hanjaName: '柳時潛',
    generation: 8,
    branch: '수곡파 지파',
    fatherId: 'g-7-1'
  },
  {
    id: 'g-9-1',
    name: '류삼달 (柳三達)',
    hanjaName: '柳三達',
    generation: 9,
    branch: '수곡파',
    title: '학행으로 천거',
    fatherId: 'g-8-1',
    childrenIds: ['g-10-1']
  },
  {
    id: 'g-10-1',
    name: '류세구 (柳世龜)',
    hanjaName: '柳世龜',
    generation: 10,
    branch: '수곡파',
    title: '성균관 전적',
    fatherId: 'g-9-1',
    childrenIds: ['g-11-1']
  },
  {
    id: 'g-11-1',
    name: '류정원 (柳正源)',
    hanjaName: '柳正源',
    generation: 11,
    branch: '수곡파 중흥조',
    pseudonym: '호 삼산(三山)',
    title: '대사헌, 이조참판, 대제학',
    note: '『삼산집』 저술, 영남학파 거유',
    fatherId: 'g-10-1',
    childrenIds: ['g-12-1']
  },
  {
    id: 'g-12-1',
    name: '류장원 (柳長源)',
    hanjaName: '柳長源',
    generation: 12,
    branch: '수곡파',
    pseudonym: '호 동암(東巖)',
    title: '유학자, 『상변통고』 편찬 주도',
    fatherId: 'g-11-1',
    childrenIds: ['g-13-1']
  },
  {
    id: 'g-13-1',
    name: '류주목 (柳疇睦)',
    hanjaName: '柳疇睦',
    generation: 13,
    branch: '수곡파',
    pseudonym: '호 묵재(默齋)',
    title: '학자, 수곡파 세보 증보 편찬',
    fatherId: 'g-12-1',
    childrenIds: ['g-14-1']
  },
  {
    id: 'g-14-1',
    name: '류도수 (柳道秀)',
    hanjaName: '柳道秀',
    generation: 14,
    branch: '수곡파',
    title: '통정대부',
    fatherId: 'g-13-1',
    childrenIds: ['g-15-1']
  },
  {
    id: 'g-15-1',
    name: '류필영 (柳必永)',
    hanjaName: '柳必永',
    generation: 15,
    branch: '수곡파',
    pseudonym: '호 서산(西山)',
    title: '파리장서 독립청원 서명 애국지사',
    fatherId: 'g-14-1',
    childrenIds: ['g-16-1']
  },
  {
    id: 'g-16-1',
    name: '류원식 (柳元植)',
    hanjaName: '柳元植',
    generation: 16,
    branch: '수곡파',
    pseudonym: '호 백하(白下)',
    title: '만주 독립투쟁 무장활동 (건국훈장)',
    fatherId: 'g-15-1'
  }
];

// 3. 기록물(아카이브) 데이터
export const ARCHIVE_ITEMS: ArchiveItem[] = [
  {
    id: 'arch-sangbyeon-tonggo',
    title: '『상변통고(常變通攷)』 목판 (유네스코 세계기록유산)',
    hanjaTitle: '常變通攷 木板 (UNESCO 世界記錄遺産)',
    category: 'document',
    categoryLabel: '문헌·고서',
    dateOrEra: '조선 정조 7년 (1783년 찬술, 1830년대 판각)',
    location: '한국국학진흥원 장판각 (유교책판)',
    imageUrl: '/images/archives/sangbyeon_tonggo.jpg',
    description: '동암(東巖) 류장원(柳長源, 1724~1796) 선생이 한강 정구의 『오선생예설분류』 등을 보완하여 조선 유학 예학(禮學)의 모든 쟁점과 의례 절차를 집대성한 22권 11책의 기념비적 예서 목판입니다. 2015년 유네스코 세계기록유산으로 등재된 한국의 유교책판 중 대표적인 저작입니다.',
    significance: '조선 후기 예학의 최고 표준서로 공인받아 중앙과 영남 사림의 전례 논쟁을 정리한 1급 학술 기록유산입니다.',
    tag: ['상변통고', '유네스코', '세계기록유산', '동암 류장원', '한국국학진흥원', '예학'],
    sourceOrKeeper: '한국국학진흥원 장판각 기탁'
  },
  {
    id: 'arch-samsan-jib',
    title: '삼산집(三山集) 목판본 및 필사본',
    hanjaTitle: '三山集 木板本 및 筆寫本',
    category: 'document',
    categoryLabel: '문헌·고서',
    dateOrEra: '조선 정조 연간 (1700년대 후반)',
    location: '한국국학진흥원 기탁 보관',
    imageUrl: '/images/archives/samsan_jib.jpg',
    description: '대사헌 삼산 류정원(1687~1761)의 시문과 소(疏), 서(書), 잡저 등을 집대성한 문집. 영조 대 붕당의 폐해를 바로잡으려는 강직한 상소문과 퇴계 학통을 심화시킨 성리설이 망라되어 있습니다.',
    significance: '영남 유학과 조선 후기 정치사·사상사를 이해하는 데 있어 필수불가결한 1급 사료입니다.',
    tag: ['문집', '삼산 류정원', '한국국학진흥원', '영남학파'],
    sourceOrKeeper: '전주류씨 수곡파 종중 / 국학진흥원'
  },
  {
    id: 'arch-gibong-jib',
    title: '『기봉집(岐峯集)』 목판 및 초간본',
    hanjaTitle: '岐峯集 木板 및 初刊本',
    category: 'document',
    categoryLabel: '문헌·고서',
    dateOrEra: '조선 현종 연간 (1660년대 판각 간행)',
    location: '한국국학진흥원 기탁 보관',
    imageUrl: '/images/archives/gibong_jib.jpg',
    description: '임진왜란 예안의병장 기봉 류복기(1555~1617) 선생의 시문과 의병 활동 격문, 안동 선비들과 주고받은 서간 등을 수록한 문집 목판입니다. 한강 정구와 여헌 장현광 등 당대 석학들이 선생의 충절과 행적을 상찬한 서문이 수록되어 있습니다.',
    significance: '임진왜란 초기 영남 북부지역 의병 창의와 낙동강 방어전의 실상을 실증하는 국방·전쟁사 1차 사료입니다.',
    tag: ['기봉집', '기봉 류복기', '예안의병', '임진왜란', '한국국학진흥원'],
    sourceOrKeeper: '전주류씨 기봉문중 / 국학진흥원'
  },
  {
    id: 'arch-musil-jongtaek',
    title: '전주류씨 수곡파 무실종택(水谷宗宅)',
    hanjaTitle: '全州柳氏 洙谷派 務實宗宅',
    category: 'historic_site',
    categoryLabel: '유적·종택',
    dateOrEra: '16세기 중엽 창건 (1988년 수몰지구 해체 이건)',
    location: '경상북도 안동시 임동면 수곡용계로 402',
    imageUrl: '/images/archives/musil_jongtaek.jpg',
    description: '수곡파의 입향조 류성과 기봉 류복기 이래 400여 년간 무실마을의 구심점 역할을 해온 대종택입니다. 안동 지방 양반 가옥의 전형적인 □자형 배치 구조를 간직하고 있으며, 댐 건설 당시 원형 그대로 고지대로 이건되었습니다.',
    significance: '경상북도 민속문화유산 제47호로 지정되어, 수몰의 수난 속에서도 가문의 맥과 건축 양식을 온전히 지켜낸 상징적 유적입니다.',
    tag: ['무실종택', '수곡종택', '민속문화유산', '종택건축', '이건'],
    sourceOrKeeper: '경상북도 민속문화유산 (수곡파 대종회 관리)'
  },
  {
    id: 'arch-gibong-jeongsa',
    title: '기봉정사(岐峯精舍) 전경 및 상량문',
    hanjaTitle: '岐峯精舍 全景 및 上樑文',
    category: 'historic_site',
    categoryLabel: '유적·종택',
    dateOrEra: '조선 선조~인조 (1600년대 초 건립, 1975년 이건)',
    location: '경상북도 안동시 임동면 수곡용계로',
    imageUrl: '/images/archives/gibong_jeongsa.jpg',
    description: '임진왜란 예안 의병장 기봉 류복기 선생의 덕업을 기리기 위해 건립된 정사. 본래 안동군 임동면 수곡리 무실마을 중심부에 위치하였으나, 안동댐 건설로 수몰 위기에 처하자 현재의 고지대로 해체 이건되었습니다.',
    significance: '수곡파의 시원(始原)이자 안동 사림의 의병 정신을 상징하는 대표적 건축 문화유산입니다.',
    tag: ['기봉정사', '임진왜란', '의병', '안동댐 이건'],
    sourceOrKeeper: '경상북도 문화유산자료'
  },
  {
    id: 'arch-giyang-seodang',
    title: '기양서당(岐陽書堂)과 세덕사(世德祠)',
    hanjaTitle: '岐陽書堂 및 世德祠',
    category: 'historic_site',
    categoryLabel: '유적·종택',
    dateOrEra: '1615년 창건, 1716년 중건 (1988년 이건)',
    location: '경상북도 안동시 임동면 수곡용계로 400',
    imageUrl: '/images/archives/giyang_seodang.jpg',
    description: '기봉 류복기 선생이 후학을 훈도하기 위해 세운 서재에서 비롯된 서당입니다. 경내의 세덕사에는 고려 말 조선 초의 명신 회헌(檜軒) 류의손과 기봉 류복기 선생의 위패를 봉안하여 춘추로 향사를 봉행합니다.',
    significance: '경상북도 민속문화유산으로 지정된 문중 서당으로, 수곡파 문중 교육과 제향의 핵심 공간입니다.',
    tag: ['기양서당', '세덕사', '회헌 류의손', '기봉 류복기', '민속문화유산'],
    sourceOrKeeper: '경상북도 민속문화유산'
  },
  {
    id: 'arch-suaedang',
    title: '수애당(水愛堂) 고택',
    hanjaTitle: '水愛堂 古宅',
    category: 'historic_site',
    categoryLabel: '유적·종택',
    dateOrEra: '1939년 건립 (조선 후기 사대부 양식 계승)',
    location: '경상북도 안동시 임동면 수곡용계로 429',
    imageUrl: '/images/archives/suaedang.jpg',
    description: '수애 류진걸(柳震杰) 선생이 건립한 전통 가옥으로, 3간 겹집 구조와 정교한 목조 가구 기법이 돋보입니다. 수곡리 수몰 직전 현재 위치로 옮겨 세웠으며, 고택 체험과 문중 학술 모임 공간으로 널리 활용되고 있습니다.',
    significance: '경상북도 문화유산자료로 지정되어, 근대 전환기 안동 사대부 가옥의 건축사적 진화와 수몰 극복사를 증명합니다.',
    tag: ['수애당', '류진걸', '문화유산자료', '전통고택'],
    sourceOrKeeper: '경상북도 문화유산자료'
  },
  {
    id: 'arch-samsanjeong',
    title: '삼산정(三山亭)과 편액 유묵',
    hanjaTitle: '三山亭 扁額 및 遺墨',
    category: 'calligraphy',
    categoryLabel: '유묵·현판',
    dateOrEra: '조선 영조 44년 (1768년 건립)',
    location: '경상북도 안동시 임동면',
    imageUrl: '/images/archives/samsanjeong.jpg',
    description: '삼산 류정원 선생의 학덕을 추모하기 위해 후학들과 문중이 세운 정자. 정자 내에 걸린 삼산정 편액과 제영록은 당대 명필과 영남 유학 거두들의 필적이 온전히 보존되어 있습니다.',
    significance: '경상북도 유형문화유산으로 지정되어 조선 후기 정자 건축미와 서예 예술의 정수를 보여줍니다.',
    tag: ['삼산정', '현판', '서예', '유형문화유산'],
    sourceOrKeeper: '전주류씨 삼산문중'
  },
  {
    id: 'arch-submerged-musil',
    title: '수몰 전 무실마을(수곡리) 전경 사진',
    hanjaTitle: '洙谷里(水室) 水沒前 全景 寫眞',
    category: 'submerged_history',
    categoryLabel: '수몰사 기록',
    dateOrEra: '1980년대 (임하댐 수몰 전)',
    location: '경북 안동시 임동면 수곡리 (구 수곡동 본마을)',
    imageUrl: '/images/archives/submerged_musil.jpg',
    description: '임하댐 건설로 마을 전역이 물속에 잠기기 전, 400여 년간 전주류씨 집성촌을 이루었던 무실마을(수곡리)의 실제 원경 기록 사진입니다. 마을 뒤편의 아기산과 유유히 흐르던 강줄기, 그리고 무실종택을 비롯한 고택들이 옹기종기 자리 잡았던 본래의 마을 풍경을 생생히 보여줍니다. (사진 제공: 류경림)',
    significance: '댐 건설로 수장되어 물리적으로 사라진 본향의 원형과 가문의 터전을 증명하는 대체 불가능한 1차 시각 기록유산입니다.',
    tag: ['수몰마을', '무실마을', '수곡리', '임하댐', '경북기록문화연구원', '고향'],
    sourceOrKeeper: '(사)경북기록문화연구원 사진아카이브 (P20180000006663)'
  },
  {
    id: 'arch-submerged-survey-map',
    title: '1974년 안동댐 수몰지구 문화재 지표조사도 및 마을 실측도',
    hanjaTitle: '1974年 安東댐 水沒地區 實測圖',
    category: 'submerged_history',
    categoryLabel: '수몰사 기록',
    dateOrEra: '1974년 ~ 1975년',
    location: '문화재청(국가유산청) 국립문화유산연구원 아카이브',
    imageUrl: '/images/archives/submerged_survey_map.jpg',
    description: '안동댐 담수를 앞두고 무실마을(수곡리) 전역의 고택 배치, 사당, 정자, 수목, 골목길의 위치를 정밀 실측한 도면 및 보고서입니다. 물에 잠기기 전 마을의 공간 구조와 가구별 소유 현황이 기록되어 있습니다.',
    significance: '수몰된 집성촌의 원형 지형과 공간 배치를 디지털 공간에 3D로 복원할 수 있는 결정적 기준 좌표 자료입니다.',
    tag: ['수몰지표조사', '마을실측도', '안동댐', '지적도', '디지털복원'],
    sourceOrKeeper: '영남 종택 소장 고지도 실물 (국가유산포털)'
  },
  {
    id: 'arch-paris-petition',
    title: '파리장서(巴里長書) 독립청원 서산 류필영 서명록',
    hanjaTitle: '巴里長書 獨立請願書 署名錄',
    category: 'document',
    categoryLabel: '문헌·고서',
    dateOrEra: '1919년 (대한민국 임시정부 원년)',
    location: '독립기념관 소장 자료 연계',
    imageUrl: '/images/archives/paris_petition.jpg',
    description: '1919년 김복한, 곽종석 등 영호남 유림 137인이 파리강화회의에 조국의 독립을 정식 청원한 국한문 독립선언서. 수곡파의 거유 서산 류필영 선생이 목숨을 걸고 서명에 동참하였습니다.',
    significance: '전통 유림 가문이 망국의 위기에서 근대적 민족 독립운동으로 전환했음을 입증하는 역사적 쾌거입니다.',
    tag: ['독립운동', '파리장서', '서산 류필영', '3·1운동'],
    sourceOrKeeper: '국가등록문화유산 제664호 독립선언서 실물 원본'
  },
  {
    id: 'arch-baekha-independence',
    title: '백하 류원식 만주 서로군정서 독립투쟁 군자금 영수증 및 서한',
    hanjaTitle: '白下 柳元植 西路軍政署 軍資金 領收證',
    category: 'document',
    categoryLabel: '문헌·고서',
    dateOrEra: '1910년대~1920년대',
    location: '독립기념관 독립운동사 자료집',
    imageUrl: '/images/archives/baekha_independence.jpg',
    description: '수곡파 16세손 백하 류원식 선생이 만주 서간도로 망명하여 신흥무관학교 건립 지원 및 서로군정서 독립군 부대에 문중 전답 매각 대금을 군자금으로 헌납한 내역과 임시정부 연계 비밀 통신문입니다.',
    significance: '영남의 전통 종가 가문이 노블레스 오블리주를 발휘하여 전 재산을 항일 무장투쟁에 바쳤음을 입증하는 독립운동 사료입니다.',
    tag: ['백하 류원식', '서로군정서', '신흥무관학교', '독립기념관', '애족장'],
    sourceOrKeeper: '국가등록문화유산 독립군 성립 서명문 실물'
  },
  {
    id: 'arch-genealogy-woodblocks',
    title: '전주류씨 수곡파 세보(世譜) 목판 및 정본',
    hanjaTitle: '全州柳氏 洙谷派 世譜 木板',
    category: 'document',
    categoryLabel: '문헌·고서',
    dateOrEra: '조선 순조 및 고종 연간',
    location: '문중 장판각 보관',
    imageUrl: '/images/archives/genealogy_woodblocks.jpg',
    description: '기봉 류복기 선생 이하 수곡파 후손들의 계통을 상세히 수록한 족보 목판본. 자손들의 관직, 혼인 관계, 묘소 위치 등이 실증적으로 기록되어 있습니다.',
    significance: '한국 족보 문화의 전형이자 가문의 혈통적 정체성을 규명하는 1차 사료입니다.',
    tag: ['족보', '세보', '목판', '계보'],
    sourceOrKeeper: '수곡파 종중 대종회'
  },
  {
    id: 'arch-partition-deed',
    title: '수곡파 가계 분재기(分財記) 및 화회문기(和會文記)',
    hanjaTitle: '洙谷派 家系 分財記 및 和會文記',
    category: 'document',
    categoryLabel: '문헌·고서',
    dateOrEra: '조선 숙종~영조 연간 (17~18세기)',
    location: '한국국학진흥원 수곡종택 기탁 고문서군',
    imageUrl: '/images/archives/partition_deed.jpg',
    description: '수곡파 종가에서 대대로 내려온 재산 분급 및 형제자매 간 합의 상속 기록 문서입니다. 전답, 가옥, 노비 등의 분배 내역과 서압(수결)이 고스란히 남아 있어 균분상속에서 적장자 우대 상속으로 이행하는 조선 후기 가족제도의 변화를 생생히 보여줍니다.',
    significance: '조선 후기 사회경제사 및 법제사, 영남 사림 가문의 가계 운영 방식을 연구하는 핵심 고문서입니다.',
    tag: ['분재기', '화회문기', '고문서', '한국국학진흥원', '사회경제사'],
    sourceOrKeeper: '한국국학진흥원 고문서 DB'
  },
  {
    id: 'arch-yean-righteous-army',
    title: '『예안의병일기(禮安義兵日記)』 및 창의격문',
    hanjaTitle: '禮安義兵日記 및 倡義檄文',
    category: 'document',
    categoryLabel: '문헌·고서',
    dateOrEra: '선조 25년 (1592년 임진왜란)',
    location: '국립중앙도서관 및 문중 필사본 전승',
    imageUrl: '/images/archives/yean_righteous_army.jpg',
    description: '임진왜란 발발 직후 기봉 류복기와 동생 류복립 등이 예안 및 안동 유림들과 함께 의병을 창의하며 작성한 통문, 작전 일지, 전공 기록입니다. 낙동강 동안 방어선 구축과 관군과의 연합 작전이 날짜별로 상술되어 있습니다.',
    significance: '왜란 초기 영남 북부 내륙의 호국 항쟁을 실록보다 구체적으로 증언하는 귀중한 전란 사료입니다.',
    tag: ['예안의병일기', '창의격문', '임진왜란', '의병', '호국'],
    sourceOrKeeper: '문중 고문서 / 한국학중앙연구원 연계'
  },
  {
    id: 'arch-hogowa-jib',
    title: '『호고와집(互古窩集)』 목판',
    hanjaTitle: '互古窩集 木板',
    category: 'document',
    categoryLabel: '문헌·고서',
    dateOrEra: '조선 순조 연간 (1800년대 초반)',
    location: '한국국학진흥원 장판각 (유교책판)',
    imageUrl: '/images/archives/hogowa_jib.jpg',
    description: '수곡파 학자 호고와 류휘문(1773~1827) 선생의 문집 목판입니다. 정재 류치명 선생의 종형이자 퇴계 이황 학통을 계승한 학자로, 성리학 심성론의 정치(精緻)한 분석과 향촌 사림의 교화 방안을 담고 있습니다.',
    significance: '유네스코 세계기록유산 유교책판 목록에 수록되어 있으며, 19세기 영남 성리학파의 사상적 성취를 보여줍니다.',
    tag: ['호고와집', '류휘문', '유교책판', '한국국학진흥원', '성리학'],
    sourceOrKeeper: '한국국학진흥원 장판각'
  }
];

// 4. 역사 타임라인
export const TIMELINE: TimelineEvent[] = [
  {
    year: '고려조',
    title: '전주류씨 시조 완산백(完山伯) 류혼 공 탄생 및 본관 확립',
    category: 'origin',
    description: '완산(전주)을 본향으로 삼고 충의와 도의를 가훈으로 삼아 번창하기 시작함.'
  },
  {
    year: '1300년대 말',
    title: '완산부원군 류습 공의 오자급제(五子及第)',
    category: 'origin',
    description: '다섯 아들이 모두 대과에 급제하여 명문 사대부 가문으로 확고한 위상을 정립함.'
  },
  {
    year: '1500년대 중엽',
    title: '기봉 류복기 선생 안동 수곡(무실) 입향',
    category: 'settlement',
    description: '예안 수곡리에 정착하여 400여 년간 번성할 영남 명문 집성촌 ‘무실마을’의 역사가 시작됨.'
  },
  {
    year: '1592년',
    title: '임진왜란 발발 및 예안 의병 창의(倡義)',
    category: 'achievement',
    description: '기봉 류복기 선생이 향내 선비들과 함께 예안의병을 결성하여 낙동강 방어선을 수호함.'
  },
  {
    year: '1700년대 중엽',
    title: '삼산 류정원 선생의 학문 융성과 『삼산집』 저술',
    category: 'achievement',
    description: '사헌부 대사헌을 지내며 퇴계 이황의 정통 성리학을 계승, 영남 사림의 영수로 추앙받음.'
  },
  {
    year: '1919년',
    title: '3·1운동과 유림 파리장서 독립청원 서명',
    category: 'achievement',
    description: '서산 류필영 선생을 비롯한 문중 인물들이 독립선언서에 서명하고 만주 무장투쟁 지원에 헌신함.'
  },
  {
    year: '1970~1980년대',
    title: '안동댐·임하댐 건설과 무실 집성촌 수몰',
    category: 'tragedy',
    description: '1970년대 안동댐에 이어 1980년대 후반 임하댐 담수로 인해 400여 년의 집성촌 마을 전역이 물속에 잠김. 무실종택, 기양서당, 수애당 등 종중 고택들은 현재의 고지대로 해체 이건되고 수많은 문중인들이 전국으로 흩어짐.'
  },
  {
    year: '현재',
    title: '전주류씨 디지털 오픈 아카이브 출범',
    category: 'archive',
    description: '물리적 공간은 사라졌으나, 가문의 모든 기록과 정신을 글로벌 오픈 저장소(GitHub)에 영구 보존하는 디지털 문헌 프로젝트 개시.'
  }
];
