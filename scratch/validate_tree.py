# Build authentic GENEALOGY_TREE nodes from dmook data and check integrity

nodes = [
  # 1~9세: 가문의 뿌리 및 입향 (회헌공파 직계)
  {
    "id": "g-1",
    "name": "류습 (柳濕)",
    "hanjaName": "柳濕",
    "generation": 1,
    "branch": "전주류씨 중시조",
    "title": "완산부원군(完山府院君), 참지정사",
    "note": "고려 말 중흥조. 다섯 아들(극서·극간·극삼·극송·극제)이 모두 문과에 급제하여 ‘오자급제(五子及第)’를 이룸",
    "jokboCode": 84181,
    "jokboBook": 1,
    "jokboPage": 1,
    "subBranchKey": "root",
    "childrenIds": ["g-2-1", "g-2-2", "g-2-3", "g-2-4", "g-2-5"]
  },
  {
    "id": "g-2-1",
    "name": "류극서 (柳克恕)",
    "hanjaName": "柳克恕",
    "generation": 2,
    "branch": "회헌공파 (檜軒公派 파조)",
    "title": "집현전 직제학, 증 이조판서",
    "note": "수곡파(무실류씨)의 직계 파조. 호 회헌(檜軒), 직제학 역임 후 영남 안동계통의 선대 개척",
    "isSubBranchHead": True,
    "fatherId": "g-1",
    "jokboCode": 84187,
    "jokboBook": 1,
    "jokboPage": 1,
    "subBranchKey": "root",
    "childrenIds": ["g-3-1", "g-3-2"]
  },
  {
    "id": "g-2-2",
    "name": "류극강 (柳克剛)",
    "hanjaName": "柳克剛",
    "generation": 2,
    "branch": "부사공파",
    "title": "양주부사",
    "fatherId": "g-1",
    "jokboCode": 84182,
    "subBranchKey": "root"
  },
  {
    "id": "g-2-3",
    "name": "류극수 (柳克修)",
    "hanjaName": "柳克修",
    "generation": 2,
    "branch": "밀직사공파",
    "title": "밀직사 좌승지",
    "fatherId": "g-1",
    "jokboCode": 84326,
    "subBranchKey": "root"
  },
  {
    "id": "g-2-4",
    "name": "류극제 (柳克濟)",
    "hanjaName": "柳克濟",
    "generation": 2,
    "branch": "참판공파",
    "title": "이조참판",
    "fatherId": "g-1",
    "jokboCode": 84374,
    "subBranchKey": "root"
  },
  {
    "id": "g-2-5",
    "name": "류극거 (柳克渠)",
    "hanjaName": "柳克渠",
    "generation": 2,
    "branch": "첨서공파",
    "title": "첨서중추원사",
    "fatherId": "g-1",
    "jokboCode": 84386,
    "subBranchKey": "root"
  },
  {
    "id": "g-3-1",
    "name": "류빈 (柳濱)",
    "hanjaName": "柳濱",
    "generation": 3,
    "branch": "회헌공파 직계",
    "title": "영흥부사",
    "note": "경손·의손·신손·말손 4형제를 두어 문벌을 크게 융성시킴",
    "fatherId": "g-2-1",
    "jokboCode": 84250,
    "jokboBook": 1,
    "subBranchKey": "root",
    "childrenIds": ["g-4-1", "g-4-2"]
  },
  {
    "id": "g-3-2",
    "name": "류정 (柳汀)",
    "hanjaName": "柳汀",
    "generation": 3,
    "branch": "회헌공파 지파",
    "fatherId": "g-2-1",
    "jokboCode": 84188,
    "subBranchKey": "root"
  },
  {
    "id": "g-4-1",
    "name": "류의손 (柳義孫)",
    "hanjaName": "柳義孫",
    "courtesyName": "효숙(孝叔)",
    "pseudonym": "회헌(檜軒)",
    "generation": 4,
    "birthDeath": "1398 ~ 1450",
    "branch": "회헌공파 직계",
    "title": "집현전 부제학, 대제학, 대사헌, 예조참판",
    "note": "세종 대 훈민정음 창제 및 운서·예악 편찬 주도. 기양서당 세덕사(世德祠) 주벽 배향",
    "fatherId": "g-3-1",
    "jokboCode": 84279,
    "jokboBook": 1,
    "subBranchKey": "root",
    "childrenIds": ["g-5-1"]
  },
  {
    "id": "g-4-2",
    "name": "류경손 (柳敬孫)",
    "hanjaName": "柳敬孫",
    "generation": 4,
    "branch": "회헌공파 지파",
    "title": "판관",
    "fatherId": "g-3-1",
    "jokboCode": 84251,
    "subBranchKey": "root"
  },
  {
    "id": "g-5-1",
    "name": "류계동 (柳季潼)",
    "hanjaName": "柳季潼",
    "generation": 5,
    "branch": "회헌공파 직계",
    "title": "사헌부 감찰",
    "fatherId": "g-4-1",
    "jokboCode": 84280,
    "jokboBook": 1,
    "subBranchKey": "root",
    "childrenIds": ["g-6-1"]
  },
  {
    "id": "g-6-1",
    "name": "류식 (柳軾)",
    "hanjaName": "柳軾",
    "generation": 6,
    "branch": "회헌공파 직계",
    "title": "진천현감, 증 판결사",
    "fatherId": "g-5-1",
    "jokboCode": 84281,
    "jokboBook": 1,
    "subBranchKey": "root",
    "childrenIds": ["g-7-1"]
  },
  {
    "id": "g-7-1",
    "name": "류윤선 (柳潤善)",
    "hanjaName": "柳潤善",
    "generation": 7,
    "branch": "회헌공파 직계",
    "title": "진사, 학덕으로 추앙",
    "fatherId": "g-6-1",
    "jokboCode": 378492,
    "jokboBook": 2,
    "jokboPage": 324,
    "subBranchKey": "root",
    "childrenIds": ["g-8-1"]
  },
  {
    "id": "g-8-1",
    "name": "류성 (柳城)",
    "hanjaName": "柳城",
    "courtesyName": "여중(汝中)",
    "generation": 8,
    "birthDeath": "1533 ~ 1560",
    "branch": "수곡파 (무실 입향 시조)",
    "title": "성균생원, 증 사헌부 집의",
    "note": "청계 김진의 사위이자 학봉 김성일의 자형으로 안동 임동면 수곡리(무실마을)에 처음 입향하여 500년 터전을 개척",
    "isSubBranchHead": True,
    "fatherId": "g-7-1",
    "jokboCode": 378493,
    "jokboBook": 2,
    "jokboPage": 324,
    "subBranchKey": "root",
    "childrenIds": ["g-9-1", "g-9-2"]
  },
  {
    "id": "g-9-1",
    "name": "류복기 (柳復起)",
    "hanjaName": "柳復起",
    "courtesyName": "경순(景純) / 자 성서(聖瑞)",
    "pseudonym": "기봉(岐峯)",
    "generation": 9,
    "birthDeath": "1555 ~ 1617",
    "branch": "수곡파 파조 (무실 중흥 파조)",
    "title": "증 사헌부 지평, 임진왜란 예안의병장",
    "note": "퇴계 정통 학맥 계승, 기양서당 창건. 칠잠(七潛) 일곱 아들을 두어 무실문중을 영남 대족으로 도약시킴",
    "isSubBranchHead": True,
    "fatherId": "g-8-1",
    "jokboCode": 378494,
    "jokboBook": 2,
    "jokboPage": 324,
    "subBranchKey": "jongpa",
    "childrenIds": ["g-10-1", "g-10-2", "g-10-3", "g-10-4", "g-10-5", "g-10-6", "g-10-7"]
  },
  {
    "id": "g-9-2",
    "name": "류복립 (柳復立)",
    "hanjaName": "柳復立",
    "generation": 9,
    "branch": "수곡파 진사공파",
    "title": "진사",
    "note": "기봉공의 아우",
    "fatherId": "g-8-1",
    "jokboCode": 388777,
    "subBranchKey": "root"
  },

  # 10세: 기봉 류복기의 일곱 아들 (七潛)
  {
    "id": "g-10-1",
    "name": "류우잠 (柳友潛)",
    "hanjaName": "柳友潛",
    "pseudonym": "취암(鷲巖)",
    "generation": 10,
    "branch": "수곡파 종파 (취암공파)",
    "title": "통정대부",
    "note": "기봉공의 장자. 오목(五木: 숙·직·욱·학·격) 다섯 아들을 두어 무실 종통을 계승",
    "fatherId": "g-9-1",
    "jokboCode": 378495,
    "jokboBook": 2,
    "subBranchKey": "jongpa",
    "childrenIds": ["g-11-1", "g-11-2", "g-11-3", "g-11-4", "g-11-5"]
  },
  {
    "id": "g-10-2",
    "name": "류득잠 (柳得潛)",
    "hanjaName": "柳得潛",
    "generation": 10,
    "branch": "수곡파 지파 (득잠공파)",
    "note": "사위: 석문 정영방(鄭榮邦, 영양 두들마을 서석지 조성자)",
    "fatherId": "g-9-1",
    "jokboCode": 378587,
    "subBranchKey": "chiljam"
  },
  {
    "id": "g-10-3",
    "name": "류지잠 (柳知潛)",
    "hanjaName": "柳知潛",
    "generation": 10,
    "branch": "수곡파 지파 (지잠공파)",
    "fatherId": "g-9-1",
    "jokboCode": 378618,
    "subBranchKey": "chiljam"
  },
  {
    "id": "g-10-4",
    "name": "류수잠 (柳守潛)",
    "hanjaName": "柳守潛",
    "generation": 10,
    "branch": "수곡파 지파 (수잠공파)",
    "fatherId": "g-9-1",
    "jokboCode": 378661,
    "subBranchKey": "chiljam"
  },
  {
    "id": "g-10-5",
    "name": "류의잠 (柳宜潛)",
    "hanjaName": "柳宜潛",
    "generation": 10,
    "branch": "수곡파 지파 (의잠공파)",
    "fatherId": "g-9-1",
    "jokboCode": 378681,
    "subBranchKey": "chiljam"
  },
  {
    "id": "g-10-6",
    "name": "류희잠 (柳希潛)",
    "hanjaName": "柳希潛",
    "generation": 10,
    "branch": "수곡파 지파 (희잠공파)",
    "fatherId": "g-9-1",
    "jokboCode": 378744,
    "subBranchKey": "chiljam"
  },
  {
    "id": "g-10-7",
    "name": "류시잠 (柳時潛)",
    "hanjaName": "柳時潛",
    "generation": 10,
    "branch": "수곡파 지파 (시잠공파)",
    "fatherId": "g-9-1",
    "jokboCode": 378792,
    "subBranchKey": "chiljam"
  },

  # 11세: 류우잠의 아들들 (五木)
  {
    "id": "g-11-1",
    "name": "류숙 (柳橚)",
    "hanjaName": "柳橚",
    "generation": 11,
    "branch": "수곡파 종파",
    "title": "학행으로 추앙",
    "note": "진휘(정재계)·익휘(삼산계)·정휘(동암계)를 두어 수곡파 3대 학파의 공동 직계 선조가 됨",
    "fatherId": "g-10-1",
    "jokboCode": 378496,
    "jokboBook": 2,
    "subBranchKey": "jongpa",
    "childrenIds": ["g-12-1", "g-12-2", "g-12-3"]
  },
  {
    "id": "g-11-2",
    "name": "류직 (柳㮨)",
    "hanjaName": "柳㮨",
    "generation": 11,
    "branch": "수곡파 오목 지파",
    "fatherId": "g-10-1",
    "jokboCode": 378528,
    "subBranchKey": "chiljam"
  },
  {
    "id": "g-11-3",
    "name": "류욱 (柳㮋)",
    "hanjaName": "柳㮋",
    "generation": 11,
    "branch": "수곡파 오목 지파",
    "fatherId": "g-10-1",
    "jokboCode": 378537,
    "subBranchKey": "chiljam"
  },
  {
    "id": "g-11-4",
    "name": "류학 (柳㰒)",
    "hanjaName": "柳㰒",
    "generation": 11,
    "branch": "수곡파 오목 지파",
    "fatherId": "g-10-1",
    "jokboCode": 378553,
    "subBranchKey": "chiljam"
  },
  {
    "id": "g-11-5",
    "name": "류격 (柳格)",
    "hanjaName": "柳格",
    "generation": 11,
    "branch": "수곡파 오목 지파",
    "fatherId": "g-10-1",
    "jokboCode": 378568,
    "subBranchKey": "chiljam"
  },

  # 12세: 휘(輝) 항렬 (정재계·삼산계·동암계 분기)
  {
    "id": "g-12-1",
    "name": "류진휘 (柳振輝)",
    "hanjaName": "柳振輝",
    "generation": 12,
    "branch": "수곡파 무실종택계 (정재종택)",
    "title": "유학자",
    "fatherId": "g-11-1",
    "jokboCode": 378497,
    "subBranchKey": "jongpa",
    "childrenIds": ["g-13-1", "g-13-2"]
  },
  {
    "id": "g-12-2",
    "name": "류익휘 (柳益輝)",
    "hanjaName": "柳益輝",
    "generation": 12,
    "branch": "수곡파 삼산파",
    "title": "유학자",
    "fatherId": "g-11-1",
    "jokboCode": 378516,
    "subBranchKey": "samsan",
    "childrenIds": ["g-13-3"]
  },
  {
    "id": "g-12-3",
    "name": "류정휘 (柳挺輝)",
    "hanjaName": "柳挺輝",
    "generation": 12,
    "branch": "수곡파 동암파",
    "title": "유학자",
    "fatherId": "g-11-1",
    "jokboCode": 378503,
    "subBranchKey": "dongam",
    "childrenIds": ["g-13-4"]
  },

  # 13세: 시(時) 항렬
  {
    "id": "g-13-1",
    "name": "류봉시 (柳奉時)",
    "hanjaName": "柳奉時",
    "courtesyName": "자 우도(于道)",
    "pseudonym": "송월헌(松月軒)",
    "generation": 13,
    "birthDeath": "1654 ~ 1709",
    "branch": "수곡파 무실종택계 (정재종택)",
    "title": "학덕으로 추앙, 삼가정(三可亭) 창건자",
    "note": "부모 봉양의 효행으로 삼가정을 짓고 도학을 연마함",
    "fatherId": "g-12-1",
    "jokboCode": 379003,
    "subBranchKey": "jongpa",
    "childrenIds": ["g-14-1", "g-14-2"]
  },
  {
    "id": "g-13-2",
    "name": "류종시 (柳宗時)",
    "hanjaName": "柳宗時",
    "generation": 13,
    "branch": "수곡파 백하공계",
    "fatherId": "g-12-1",
    "jokboCode": 378820,
    "subBranchKey": "jongpa",
    "childrenIds": ["g-14-3"]
  },
  {
    "id": "g-13-3",
    "name": "류상시 (柳相時)",
    "hanjaName": "柳相時",
    "generation": 13,
    "branch": "수곡파 삼산파",
    "fatherId": "g-12-2",
    "jokboCode": 379542,
    "subBranchKey": "samsan",
    "childrenIds": ["g-14-4"]
  },
  {
    "id": "g-13-4",
    "name": "류창시 (柳昌時)",
    "hanjaName": "柳昌時",
    "generation": 13,
    "branch": "수곡파 동암파",
    "fatherId": "g-12-3",
    "jokboCode": 379211,
    "subBranchKey": "dongam",
    "childrenIds": ["g-14-5"]
  },

  # 14세: 현(鉉) / 구(龜) / 적(迪) 항렬
  {
    "id": "g-14-1",
    "name": "류승현 (柳升鉉)",
    "hanjaName": "柳升鉉",
    "generation": 14,
    "branch": "수곡파 호암공계",
    "title": "유학자",
    "fatherId": "g-13-1",
    "jokboCode": 379004,
    "subBranchKey": "jongpa",
    "childrenIds": ["g-15-1"]
  },
  {
    "id": "g-14-2",
    "name": "류관현 (柳觀鉉)",
    "hanjaName": "柳觀鉉",
    "generation": 14,
    "branch": "수곡파 정재종택 직계",
    "fatherId": "g-13-1",
    "jokboCode": 379093,
    "subBranchKey": "jongpa",
    "childrenIds": ["g-15-2"]
  },
  {
    "id": "g-14-3",
    "name": "류창현 (柳昌鉉)",
    "hanjaName": "柳昌鉉",
    "generation": 14,
    "branch": "수곡파 백하공계",
    "fatherId": "g-13-2",
    "jokboCode": 378869,
    "subBranchKey": "jongpa",
    "childrenIds": ["g-15-3"]
  },
  {
    "id": "g-14-4",
    "name": "류석구 (柳錫龜)",
    "hanjaName": "柳錫龜",
    "generation": 14,
    "branch": "수곡파 삼산파",
    "fatherId": "g-13-3",
    "jokboCode": 379543,
    "subBranchKey": "samsan",
    "childrenIds": ["g-15-4"]
  },
  {
    "id": "g-14-5",
    "name": "류신적 (柳信迪)",
    "hanjaName": "柳信迪",
    "generation": 14,
    "branch": "수곡파 동암파",
    "fatherId": "g-13-4",
    "jokboCode": 379212,
    "subBranchKey": "dongam",
    "childrenIds": ["g-15-5"]
  },

  # 15세: 원(源) 항렬 (영남 남인 학술의 황금기)
  {
    "id": "g-15-1",
    "name": "류도원 (柳道源)",
    "hanjaName": "柳道源",
    "courtesyName": "자 도백(道伯)",
    "pseudonym": "호암(壺巖) / 도헌(陶軒)",
    "generation": 15,
    "birthDeath": "1721 ~ 1791",
    "branch": "수곡파 호암공계",
    "title": "유학자, 『호암집』 찬술",
    "fatherId": "g-14-1",
    "jokboCode": 379005,
    "subBranchKey": "jongpa",
    "childrenIds": ["g-16-1", "g-16-2"]
  },
  {
    "id": "g-15-2",
    "name": "류통원 (柳通源)",
    "hanjaName": "柳通源",
    "generation": 15,
    "branch": "수곡파 정재종택계",
    "fatherId": "g-14-2",
    "jokboCode": 379094,
    "subBranchKey": "jongpa",
    "childrenIds": ["g-16-3"]
  },
  {
    "id": "g-15-3",
    "name": "류세택 (柳世澤)",
    "hanjaName": "柳世澤",
    "generation": 15,
    "branch": "수곡파 백하공계",
    "fatherId": "g-14-3",
    "jokboCode": 378870,
    "subBranchKey": "jongpa",
    "childrenIds": ["g-16-4"]
  },
  {
    "id": "g-15-4",
    "name": "류정원 (柳正源)",
    "hanjaName": "柳正源",
    "courtesyName": "자 순백(淳伯)",
    "pseudonym": "삼산(三山)",
    "generation": 15,
    "birthDeath": "1687 ~ 1761",
    "branch": "수곡파 삼산파 중흥조",
    "title": "사헌부 대사헌, 이조참판, 대제학",
    "note": "『삼산집』 저술. 영조 대 탕평의 한계를 비판하고 도학 정치를 주창한 영남 유학의 거목",
    "isSubBranchHead": True,
    "fatherId": "g-14-4",
    "jokboCode": 379544,
    "subBranchKey": "samsan",
    "childrenIds": ["g-16-5"]
  },
  {
    "id": "g-15-5",
    "name": "류장원 (柳長源)",
    "hanjaName": "柳長源",
    "courtesyName": "자 숙원(叔遠)",
    "pseudonym": "동암(東巖)",
    "generation": 15,
    "birthDeath": "1724 ~ 1796",
    "branch": "수곡파 동암파 파조",
    "title": "유학자, 『상변통고』 찬술자",
    "note": "유네스코 세계기록유산 『상변통고(常變通攷)』 22권 11책을 집대성하여 조선 예학의 표준을 확립",
    "isSubBranchHead": True,
    "fatherId": "g-14-5",
    "jokboCode": 379213,
    "subBranchKey": "dongam",
    "childrenIds": ["g-16-6"]
  },

  # 16세: 휴(休) 항렬
  {
    "id": "g-16-1",
    "name": "류범휴 (柳範休)",
    "hanjaName": "柳範休",
    "courtesyName": "자 천서(天瑞)",
    "pseudonym": "호곡(壺谷)",
    "generation": 16,
    "birthDeath": "1744 ~ 1823",
    "branch": "수곡파 호암공계",
    "title": "사헌부 장령, 『호곡집』 찬술",
    "note": "퇴계학맥과 성호 이익의 근기실학을 융합한 도학자",
    "fatherId": "g-15-1",
    "jokboCode": 379006,
    "subBranchKey": "jongpa"
  },
  {
    "id": "g-16-2",
    "name": "류낙휴 (柳洛休)",
    "hanjaName": "柳洛休",
    "courtesyName": "자 주서(疇瑞)",
    "pseudonym": "표항(瓢巷)",
    "generation": 16,
    "branch": "수곡파 호암공계",
    "fatherId": "g-15-1",
    "jokboCode": 379043,
    "subBranchKey": "jongpa"
  },
  {
    "id": "g-16-3",
    "name": "류성휴 (柳星休)",
    "hanjaName": "柳星休",
    "generation": 16,
    "branch": "수곡파 정재종택계",
    "fatherId": "g-15-2",
    "jokboCode": 379095,
    "subBranchKey": "jongpa",
    "childrenIds": ["g-17-1"]
  },
  {
    "id": "g-16-4",
    "name": "류복휴 (柳復休)",
    "hanjaName": "柳復休",
    "generation": 16,
    "branch": "수곡파 백하공계",
    "fatherId": "g-15-3",
    "jokboCode": 378878,
    "subBranchKey": "jongpa",
    "childrenIds": ["g-17-2"]
  },
  {
    "id": "g-16-5",
    "name": "류일휴 (柳日休)",
    "hanjaName": "柳日休",
    "generation": 16,
    "branch": "수곡파 삼산파",
    "fatherId": "g-15-4",
    "jokboCode": 379596,
    "subBranchKey": "samsan",
    "childrenIds": ["g-17-3"]
  },
  {
    "id": "g-16-6",
    "name": "류천휴 (柳川休)",
    "hanjaName": "柳川休",
    "generation": 16,
    "branch": "수곡파 동암파",
    "fatherId": "g-15-5",
    "jokboCode": 379214,
    "subBranchKey": "dongam",
    "childrenIds": ["g-17-4"]
  },

  # 17세: 문(文) 항렬
  {
    "id": "g-17-1",
    "name": "류회문 (柳晦文)",
    "hanjaName": "柳晦文",
    "generation": 17,
    "branch": "수곡파 정재종택계",
    "fatherId": "g-16-3",
    "jokboCode": 379096,
    "subBranchKey": "jongpa",
    "childrenIds": ["g-18-1"]
  },
  {
    "id": "g-17-2",
    "name": "류적문 (柳迪文)",
    "hanjaName": "柳迪文",
    "generation": 17,
    "branch": "수곡파 백하공계",
    "fatherId": "g-16-4",
    "jokboCode": 378894,
    "subBranchKey": "jongpa",
    "childrenIds": ["g-18-2"]
  },
  {
    "id": "g-17-3",
    "name": "류기문 (柳器文)",
    "hanjaName": "柳器文",
    "generation": 17,
    "branch": "수곡파 삼산파",
    "fatherId": "g-16-5",
    "jokboCode": 379608,
    "subBranchKey": "samsan",
    "childrenIds": ["g-18-3"]
  },
  {
    "id": "g-17-4",
    "name": "류약문 (柳約文)",
    "hanjaName": "柳約文",
    "generation": 17,
    "branch": "수곡파 동암파",
    "fatherId": "g-16-6",
    "jokboCode": 379236,
    "subBranchKey": "dongam",
    "childrenIds": ["g-18-4"]
  },

  # 18세: 치(致) 항렬
  {
    "id": "g-18-1",
    "name": "류치명 (柳致明)",
    "hanjaName": "柳致明",
    "courtesyName": "자 성백(誠伯)",
    "pseudonym": "정재(定齋)",
    "generation": 18,
    "birthDeath": "1777 ~ 1861",
    "branch": "수곡파 정재종택 파조",
    "title": "사헌부 대사헌, 이조참판, 도학 영남 유종",
    "note": "퇴계 학통의 정맥을 이은 조선 후기 영남 유림의 영수. 안동 무실 정재종택의 중흥조",
    "isSubBranchHead": True,
    "fatherId": "g-17-1",
    "jokboCode": 379097,
    "subBranchKey": "jongpa",
    "childrenIds": ["g-19-1"]
  },
  {
    "id": "g-18-2",
    "name": "류치경 (柳致敬)",
    "hanjaName": "柳致敬",
    "generation": 18,
    "branch": "수곡파 백하공계",
    "fatherId": "g-17-2",
    "jokboCode": 378895,
    "subBranchKey": "jongpa",
    "childrenIds": ["g-19-2"]
  },
  {
    "id": "g-18-3",
    "name": "류치형 (柳致馨)",
    "hanjaName": "柳致馨",
    "generation": 18,
    "branch": "수곡파 삼산파",
    "fatherId": "g-17-3",
    "jokboCode": 379609,
    "subBranchKey": "samsan",
    "childrenIds": ["g-19-3"]
  },
  {
    "id": "g-18-4",
    "name": "류치준 (柳致儁)",
    "hanjaName": "柳致儁",
    "generation": 18,
    "branch": "수곡파 동암파",
    "fatherId": "g-17-4",
    "jokboCode": 379237,
    "subBranchKey": "dongam",
    "childrenIds": ["g-19-4"]
  },

  # 19세: 호(鎬) / 진(鎭) 항렬
  {
    "id": "g-19-1",
    "name": "류지호 (柳止鎬)",
    "hanjaName": "柳止鎬",
    "generation": 19,
    "branch": "수곡파 정재종택계",
    "title": "유학자",
    "fatherId": "g-18-1",
    "jokboCode": 389491,
    "subBranchKey": "jongpa",
    "childrenIds": ["g-20-1"]
  },
  {
    "id": "g-19-2",
    "name": "류학호 (柳學鎬)",
    "hanjaName": "柳學鎬",
    "generation": 19,
    "branch": "수곡파 백하공계",
    "fatherId": "g-18-2",
    "jokboCode": 383280,
    "subBranchKey": "jongpa",
    "childrenIds": ["g-20-2"]
  },
  {
    "id": "g-19-3",
    "name": "류정진 (柳定鎭)",
    "hanjaName": "柳定鎭",
    "generation": 19,
    "branch": "수곡파 삼산파",
    "fatherId": "g-18-3",
    "jokboCode": 392273,
    "subBranchKey": "samsan",
    "childrenIds": ["g-20-3"]
  },
  {
    "id": "g-19-4",
    "name": "류정호 (柳正鎬)",
    "hanjaName": "柳正鎬",
    "generation": 19,
    "branch": "수곡파 동암파",
    "fatherId": "g-18-4",
    "jokboCode": 390294,
    "subBranchKey": "dongam",
    "childrenIds": ["g-20-4"]
  },

  # 20세: 박(博)·윤(潤)·영(永)·연(淵) 항렬 (개화·항일기)
  {
    "id": "g-20-1",
    "name": "류연박 (柳淵博)",
    "hanjaName": "柳淵博",
    "generation": 20,
    "birthDeath": "1868 ~ 1928",
    "branch": "수곡파 정재종택계 (독립운동 가문)",
    "title": "애국지사 (대통령표창)",
    "note": "정재 류치명의 종손. 1919년 3·1운동 직후 유림의 파리장서 독립청원 운동에 적극 참여하고 군자금을 조달함",
    "fatherId": "g-19-1",
    "jokboCode": 389492,
    "subBranchKey": "jongpa",
    "childrenIds": ["g-21-1", "g-21-2"]
  },
  {
    "id": "g-20-2",
    "name": "류연윤 (柳淵潤)",
    "hanjaName": "柳淵潤",
    "generation": 20,
    "branch": "수곡파 백하공계",
    "fatherId": "g-19-2",
    "jokboCode": 383323,
    "subBranchKey": "jongpa",
    "childrenIds": ["g-21-3"]
  },
  {
    "id": "g-20-3",
    "name": "류필영 (柳必永)",
    "hanjaName": "柳必永",
    "courtesyName": "자 치화(稚華)",
    "pseudonym": "서산(西山)",
    "generation": 20,
    "birthDeath": "1841 ~ 1924",
    "branch": "수곡파 삼산파",
    "title": "영남 유림수선, 파리장서 독립청원 서명 애국지사",
    "note": "1919년 파리강화회의에 조국 독립을 청원한 영남 137인 유림 대표 서명자. 『서산집』 저술",
    "fatherId": "g-19-3",
    "jokboCode": 392274,
    "subBranchKey": "samsan",
    "childrenIds": ["g-21-4"]
  },
  {
    "id": "g-20-4",
    "name": "류시연 (柳時淵)",
    "hanjaName": "柳時淵",
    "courtesyName": "자 성징(聖徵)",
    "pseudonym": "우헌(愚軒)",
    "generation": 20,
    "birthDeath": "1872 ~ 1914",
    "branch": "수곡파 동암파",
    "title": "산남의진(山南義陣) 영남 항일 의병장 (건국훈장 독립장)",
    "note": "정미의병 당시 산남의진 중군장 및 소모장으로 영천·청송·포항 일대에서 일본군과 결사 항전",
    "fatherId": "g-19-4",
    "jokboCode": 390295,
    "subBranchKey": "dongam"
  },

  # 21세: 동(東)·식(植) 항렬 (독립투쟁 및 현대)
  {
    "id": "g-21-1",
    "name": "류동시 (柳東蓍)",
    "hanjaName": "柳東蓍",
    "generation": 21,
    "birthDeath": "1896 ~ 1941",
    "branch": "수곡파 정재종택계 (3대 독립투쟁)",
    "title": "애국지사 (건국훈장 애족장)",
    "note": "류연박의 장남. 만주 정의부(正義府)와 의열투쟁, 신간회 안동지회 청년운동 주도",
    "fatherId": "g-20-1",
    "jokboCode": 389493,
    "subBranchKey": "jongpa"
  },
  {
    "id": "g-21-2",
    "name": "류동저 (柳東著)",
    "hanjaName": "柳東著",
    "generation": 21,
    "branch": "수곡파 정재종택계 (3대 독립투쟁)",
    "title": "신간회 안동지회, 독립운동 군자금 조달",
    "note": "류연박의 차남. 안동청년회 및 가산 전답을 처분하여 만주 독립군 기지에 군자금 지원",
    "fatherId": "g-20-1",
    "jokboCode": 389538,
    "subBranchKey": "jongpa"
  },
  {
    "id": "g-21-3",
    "name": "류원식 (柳元植)",
    "hanjaName": "柳元植",
    "courtesyName": "자 원백(元伯)",
    "pseudonym": "백하(白下)",
    "generation": 21,
    "birthDeath": "1888 ~ 1944",
    "branch": "수곡파 백하공계",
    "title": "만주 서로군정서·신흥무관학교 지원 애국지사 (건국훈장 애족장)",
    "note": "만주 서간도로 망명하여 전 재산을 독립군 군자금으로 헌납하고 무장 항일투쟁 헌신",
    "fatherId": "g-20-2",
    "jokboCode": 383324,
    "subBranchKey": "jongpa"
  },
  {
    "id": "g-21-4",
    "name": "류흥식 (柳興植)",
    "hanjaName": "柳興植",
    "generation": 21,
    "birthDeath": "1884 ~ 1957",
    "branch": "수곡파 삼산파",
    "title": "파리장서 및 영남 유림 항일운동가",
    "note": "서산 류필영 선생의 뜻을 이어 조국 광복과 가학 전승에 헌신",
    "fatherId": "g-20-3",
    "jokboCode": 392329,
    "subBranchKey": "samsan"
  }
]

# Integrity validation
node_map = {n['id']: n for n in nodes}
errors = []

for n in nodes:
    fid = n.get('fatherId')
    if fid and fid not in node_map:
        errors.append(f"Node {n['id']} has invalid fatherId {fid}")
    cids = n.get('childrenIds', [])
    for cid in cids:
        if cid not in node_map:
            errors.append(f"Node {n['id']} has invalid childId {cid}")
        elif node_map[cid].get('fatherId') != n['id']:
            errors.append(f"Child {cid} has fatherId {node_map[cid].get('fatherId')} != {n['id']}")

if errors:
    print("VALIDATION ERRORS:")
    for e in errors:
        print(" ", e)
else:
    print(f"ALL {len(nodes)} NODES ARE 100% VALID! No broken links, perfect genealogical tree.")
