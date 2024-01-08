const generateMemeBtn = document.querySelector(".meme-generator .meme-generator-button");
const memeTittle = document.querySelector(".meme-generator .meme-title ");
const memeImg = document.querySelector(".meme-generator img");
const memeAuthor = document.querySelector(".meme-generator .meme-author ");

const updateDetails = (url, title, author) => {
    memeImg.setAttribute("src", url);
    memeTittle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
};

const generateMeme = () => {
  fetch('https://meme-api.com/gimme/wholesomememes')
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};

generateMemeBtn.addEventListener('click', generateMeme);

generateMeme()