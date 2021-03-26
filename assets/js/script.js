const api = "https://api.imgflip.com/get_memes";
const changeMemeBtn = document.querySelector("button");
const memeTitle = document.querySelector("h3");
const memeImg = document.querySelector("img");

fetch(api)
  .then((res) => res.json())
  .then((data) => {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    let randomMeme = data.data.memes[randomNum];

    memeTitle.textContent = randomMeme.name;
    memeImg.src = randomMeme.url;

    changeMemeBtn.addEventListener("click", () => {
      let randomNum = Math.floor(Math.random() * 100) + 1;
      let randomMeme = data.data.memes[randomNum];

      memeTitle.textContent = randomMeme.name;
      memeImg.src = randomMeme.url;
    });
  });
