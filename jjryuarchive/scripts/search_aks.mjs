import fs from 'fs';

async function search() {
  const keyword = '무실 전주유씨';
  const url = `https://archive.aks.ac.kr/search/searchResult.do?searchWord=${encodeURIComponent(keyword)}`;
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const text = await res.text();
    console.log('Status:', res.status, 'Length:', text.length);
    fs.writeFileSync('scripts/aks_result.html', text);
  } catch (err) {
    console.error(err);
  }
}
search();
