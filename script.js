// Daftar kata-kata per hari (0 = Minggu, 6 = Sabtu)
const quotes = [
  "Jangan dengarkan apa kata orang, tetap fokus pada tujuanmu.",
  "Kegagalan adalah bukti bahwa kamu sedang berusaha. Bangkit lagi, jangan berhenti di sini.!",
  "Selasa penuh inspirasi, terus melangkah jangan berhenti!",
  "Jangan biarkan penghinaan menjatuhkanmu. Justru jadikan itu alasan untuk bangkit dan semakin kuat.",
  "Putus asa hanya membuatmu berhenti, padahal keberhasilan bisa jadi tinggal selangkah lagi.",
  "Tetaplah berjuang, jangan biarkan rasa putus asa merampas mimpimu.",
  "Penghinaan bukan penghalang, kegagalan bukan alasan… tetap gas, jangan lupa order ya bosku 😁🚀"
];

function typeWriter(text, elementId, speed = 50) {
  let i = 0;
  const el = document.getElementById(elementId);
  el.textContent = "";
  function typing() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

function showDailyQuote() {
  const day = new Date().getDay(); // ambil hari sekarang
  typeWriter(quotes[day], "daily-quote", 45);
}

showDailyQuote(); // tampil saat halaman dibuka


// Format tanggal Indonesia
const formatOptions = { day: "2-digit", month: "long", year: "numeric" };

// Waktu sekarang
const now = new Date();
document.getElementById("last-update").textContent =
  "Update Terakhir: " + now.toLocaleDateString("id-ID", formatOptions);

// Set expired = BESOK JAM 12:00 WIB
const expire = new Date();
expire.setDate(expire.getDate() + 1);
expire.setHours(00, 0, 0, 0);

document.getElementById("expired-date").textContent =
  "Expired: " + expire.toLocaleDateString("id-ID", formatOptions);

// COUNTDOWN
setInterval(() => {
  const today = new Date().getTime();
  const distance = expire.getTime() - today;

  if (distance <= 0) {
    document.getElementById("timer").innerHTML = "EXPIRED";
    return;
  }

  const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    (d < 10 ? "0" + d : d) + " : " +
    (h < 10 ? "0" + h : h) + " : " +
    (m < 10 ? "0" + m : m) + " : " +
    (s < 10 ? "0" + s : s);
}, 1000);



  function copyCode(id, btn){
  let text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(()=>{
    btn.innerText = "✅ Disalin!";
    setTimeout(()=>{ btn.innerText = "Salin kode"; },1500);
  });
  }
