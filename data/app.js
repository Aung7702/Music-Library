const first = document.querySelector(".first");
const second = document.querySelector(".second");
const artist = document.querySelector(".artist");

const category = document.querySelector(".cat-link");
const image = document.querySelector(".image");
const content = document.querySelector(".content");

const addPlist = document.querySelector(".add-plist");

const playList = document.querySelector(".play-link");
const catList = document.querySelector(".cat");
const recommandArt = document.querySelector(".recommand-art");
const plus = document.querySelector(".playlists");
//Artist
first.addEventListener("click", () => {
  artist.style.animation = "disappear 200ms both ease-out";
  artist.style.animation = "fade 200ms both ease-in-out ";
  artist.style.display = "inline-flex";
});

second.addEventListener("click", () => {
  artist.style.animation = "disappear 100ms both ease-out";
  artist.style.animation = "fade 200ms 2s both ease-in-out ";
  artist.style.display = "inline-flex";
});

//Category section
category.addEventListener("click", () => {
  category.classList.add("active");
  image.style.display = "none";
  content.style.animation = "up 200ms forwards ease-in ";
  catList.style.display = "block";
  recommandArt.style.display = "block";
  playList.style.display = "block";
  plus.style.display = "block";

  playList.classList.remove("active");
  favLink.classList.remove("active");
});
//Playlist section
playList.addEventListener("click", () => {
  playList.classList.add("active");
  image.style.display = "none";
  catList.style.display = "none";
  recommandArt.style.display = "none";
  content.style.animation = "up 200ms forwards ease-in ";
  plus.style.display = "block";

  category.classList.remove("active");
  favLink.classList.remove("active");
});

//Playlist add remove
const play = document.querySelector(".play");

addPlist.addEventListener("click", () => {
  const newPlist = document.createElement("div");
  const input = document.createElement("input");
  input.placeholder = "Enter Playlist Name...";

  const changeHandler = (event) => {
    const value = event.target.value;

    input.style.display = "none";
    const plistName = document.createElement("div");
    plistName.textContent = `( ${value} )`;
    plistName.classList.add("plist-name");
    newPlist.append(plistName, button);
  };

  input.onchange = changeHandler;

  input.classList.add("playlist-input");

  const button = document.createElement("button");
  button.innerHTML = "-";
  button.classList.add("playlist-button");

  newPlist.append(input);
  newPlist.classList.add("plist");
  play.append(newPlist);

  button.addEventListener("click", () => {
    newPlist.style.display = "none";
  });
});

//Favourite section
const favLink = document.querySelector(".fav-link");

favLink.addEventListener("click", () => {
  favLink.classList.add("active");
  image.style.display = "none";
  catList.style.display = "none";
  recommandArt.style.display = "none";
  content.style.animation = "up 200ms forwards ease-in ";
  plus.style.display = "none";

  category.classList.remove("active");
  playList.classList.remove("active");
});

const arr = [
  {
    id: 0,
    name: "Olivia Rodrigo",
    title: "Happier",
    File: "data/music/Olivia Rodrigo - Happier.mp3",
  },
  {
    id: 1,
    name: "Alan Walker",
    title: "Alone",
    File: "data/music/Alan Walker - Alone.mp3",
  },
  {
    id: 2,
    name: "Olivia Rodrigo",
    title: "deja vu",
    File: "data/music/Olivia Rodrigo - deja vu.mp3",
  },
  {
    id: 3,
    name: "Ed Sheeran",
    title: "I Don't Care",
    File: "data/music/Ed Sheeran - I Don't Care.mp3",
  },
  {
    id: 4,
    name: "Pink Sweat",
    title: "At My Worst",
    File: "data/music/Pink Sweat - At My Worst.mp3",
  },
];
let isPlaying = false;
const favourite = document.querySelector(".favourite");
const audioTag = document.querySelector(".audiotag");
for (let i = 0; i < arr.length; i++) {
  const favList = document.createElement("div");

  favList.classList.add("fav");
  const title = `${arr[i].id + 1} . ${arr[i].name} - ${arr[i].title}`;
  favList.textContent = title;
  const playIcon = document.createElement("i");
  playIcon.classList.add("fas", "fa-play-circle");

  const pauseIcon = document.createElement("i");
  pauseIcon.classList.add("fas", "fa-pause-circle");
  pauseIcon.style.display = "none";

  const favIcon = document.createElement("i");
  favIcon.classList.add("fas", "fa-heart");

  const dotIcon = document.createElement("i");
  dotIcon.classList.add("fas", "fa-ellipsis-v");
  favList.append(playIcon, pauseIcon, favIcon, dotIcon);
  favourite.append(favList);
  playIcon.addEventListener("click", () => {
    isPlaying = true;
    const file = arr[i].File;
    update();
    audioTag.src = file;
    audioTag.play();
  });
  pauseIcon.addEventListener("click", () => {
    isPlaying = false;
    update();
    audioTag.pause();
  });
  const update = () => {
    if (isPlaying) {
      playIcon.style.display = "none";
      pauseIcon.style.display = "inline";
    } else {
      pauseIcon.style.display = "none";
      playIcon.style.display = "inline";
    }
  };
}
// DarkMode
const toggle = document.getElementById("toggle");

const body = document.querySelector("body");
const h2 = document.querySelector("h2");
const h4 = document.querySelector("h4");
const span = document.querySelector("span");
const input = document.querySelector("input");
const search = document.querySelector(".search");
const container = document.querySelector(".container");
const sideBars = document.querySelector(".side-bars");
const catBg = document.querySelector(".category");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("fa-moon");
  if (toggle.classList.toggle("fa-sun")) {
    body.style.background = "#fff";
    body.style.color = "#000";
    search.style.background = "#eeeeee";
    input.style.background = "#eeeeee";
    h2.style.color = "#000";
    h4.style.color = "#000";
    content.style.background = "#eeeeee";
    container.style.background = "#fff";
    container.style.boxShadow = "#d6d6d6 0px 0px 10px";
    sideBars.style.background = "#fff";
    catBg.style.background = "#fff";
  } else {
    body.style.color = "#fff";
    body.style.background = "#212121";
    search.style.background = "#4e4e4e";
    input.style.background = "#4e4e4e";
    h2.style.color = "#fff";
    h4.style.color = "#fff";
    content.style.background = "#2e2e2e";
    container.style.background = "#2e2e2e";
    container.style.boxShadow = "#2e2e2e 0px 0px 0px";
    sideBars.style.background = "#212121";
    catBg.style.background = "#212121";
  }
});
