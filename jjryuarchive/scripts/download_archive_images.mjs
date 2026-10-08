import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetDir = path.join(__dirname, '../public/images/archives');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const IMAGES_TO_DOWNLOAD = [
  {
    filename: 'musil_jongtaek.jpg',
    url: 'http://www.khs.go.kr/unisearch/images/folklore_material/1658656.jpg',
    desc: '무실종택 전경'
  },
  {
    filename: 'samsanjeong.jpg',
    url: 'http://www.khs.go.kr/unisearch/images/tangible_cult_prop/1640604.jpg',
    desc: '삼산정 전경'
  },
  {
    filename: 'giyang_seodang.jpg',
    url: 'http://www.khs.go.kr/unisearch/images/folklore_material/1658466.jpg',
    desc: '기양서당 및 세덕사'
  },
  {
    filename: 'suaedang.jpg',
    url: 'http://www.khs.go.kr/unisearch/images/cultural_material/1662456.jpg',
    desc: '수애당 고택'
  },
  {
    filename: 'gibong_jeongsa.jpg',
    url: 'http://www.khs.go.kr/unisearch/images/imp_folklore_material/1635356.jpg',
    desc: '기봉정사 및 수곡고택'
  },
  {
    filename: 'sangbyeon_tonggo.jpg',
    url: 'http://www.khs.go.kr/unisearch/images/tangible_cult_prop/1640745.jpg',
    desc: '상변통고 유교책판 목판'
  },
  {
    filename: 'samsan_jib.jpg',
    url: 'http://www.khs.go.kr/unisearch/images/tangible_cult_prop/1640757.jpg',
    desc: '삼산집 목판본'
  },
  {
    filename: 'gibong_jib.jpg',
    url: 'http://www.khs.go.kr/unisearch/images/tangible_cult_prop/2018102214361400.jpg',
    desc: '기봉집 목판 및 초간본'
  },
  {
    filename: 'partition_deed.jpg',
    url: 'http://www.khs.go.kr/unisearch/images/tangible_cult_prop/1640254.jpg',
    desc: '수곡파 분재기 및 화회문기'
  },
  {
    filename: 'yean_righteous_army.jpg',
    url: 'http://www.khs.go.kr/unisearch/images/tangible_cult_prop/1641052.jpg',
    desc: '예안의병일기 및 고문서'
  },
  {
    filename: 'hogowa_jib.jpg',
    url: 'http://www.khs.go.kr/unisearch/images/tangible_cult_prop/1641102.jpg',
    desc: '호고와집 목판'
  },
  {
    filename: 'genealogy_woodblocks.jpg',
    url: 'http://www.khs.go.kr/unisearch/images/tangible_cult_prop/1640983.jpg',
    desc: '전주류씨 세보 목판'
  }
];

async function downloadAll() {
  console.log('사료 이미지 다운로드를 시작합니다...');
  for (const item of IMAGES_TO_DOWNLOAD) {
    const dest = path.join(targetDir, item.filename);
    try {
      const res = await fetch(item.url, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
      });
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(dest, Buffer.from(buffer));
        console.log(`[완료] ${item.filename} (${item.desc}) - ${buffer.byteLength} bytes`);
      } else {
        console.warn(`[실패: ${res.status}] ${item.filename}`);
      }
    } catch (e) {
      console.error(`[오류] ${item.filename}:`, e.message);
    }
  }
  console.log('사료 이미지 다운로드 완료.');
}

downloadAll();
