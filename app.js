let audio = document.querySelector(".quranPlayer");
let soarhContainer = document.querySelector(".surah");
let ayah = document.querySelector(".ayah");

let next = document.querySelector(".next");
let play = document.querySelector(".play");
let prev = document.querySelector(".prev");

getSurah();
function getSurah() {
  fetch("https://api.alquran.cloud/v1/surah")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let i = 0; i < 115; i++) {
        soarhContainer.innerHTML += `
          <div>
           <p>${data.data[i].name}</p>
           <p>${data.data[i].englishName}</p>
           <p>عدد الآيات  ${data.data[i].numberOfAyahs} <span>مكان النزول ${data.data[i].revelationType}</span> </p>
           
           </div>  

        
        `;
      }

      let allSurahs = document.querySelectorAll(".surah > div");
      console.log(allSurahs);

      allSurahs.forEach((surah, index) => {
        surah.addEventListener("click", () => {
          let source = document.createElement("source");
          source.src = `/audio/00${index + 1}.mp3`;
          audio.appendChild(source);
        });
      });
    });
}
