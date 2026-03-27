function showQuran() {
  fetch("https://api.alquran.cloud/v1/surah/1")
    .then(response => response.json())
    .then(data => {
      let verses = data.data.ayahs.map(a => `<p>${a.text}</p>`).join("");
      document.getElementById("content").innerHTML =
        "<h2>Surah Al-Fatiha</h2>" + verses;
    });
}
function playQuran() {
  document.getElementById("content").innerHTML =
    '<audio controls autoplay src="https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3"></audio>';
}
function showDuas() {
  document.getElementById("content").innerHTML = `
    <h2>Duas</h2>
    <p><b>Before Sleep:</b> Bismika Allahumma amutu wa ahya</p>
    <p><b>After Waking:</b> Alhamdulillahilladhi ahyana...</p>
    <p><b>Entering Home:</b> Allahumma inni as’aluka khairal mawlij...</p>
  `;
}
