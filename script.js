// Tema değiştirme butonunu seç
const toggleBtn = document.getElementById('theme-toggle');

// Olay dinleyici: tıklanınca çalışır
toggleBtn.addEventListener('click', () => {
  // Body'ye dark-mode sınıfını ekle/kaldır
  document.body.classList.toggle('dark-mode');

  // Buton simgesini değiştir
  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️'; // Gündüz modu simgesi
  } else {
    toggleBtn.textContent = '🌙'; // Gece modu simgesi
  }
});
