const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 6;

// Link text

playerLivesCount.textContent = playerLives;

// generate data

const getData = () => [
  { imgSrc: "./images/beatles.jpeg", id: 1, name: "beatles" },
  { imgSrc: "./images/blink182.jpeg", id: 2, name: "blink 182" },
  { imgSrc: "./images/fkatwigs.jpeg", id: 3, name: "fka twigs" },
  { imgSrc: "./images/fleetwood.jpeg", id: 4, name: "fleetwood" },
  { imgSrc: "./images/joy-division.jpeg", id: 5, name: "joy division" },
  { imgSrc: "./images/ledzep.jpeg", id: 6, name: "lep zeppelin" },
  { imgSrc: "./images/metallica.jpeg", id: 7, name: "metallica" },
  { imgSrc: "./images/pinkfloyd.jpeg", id: 8, name: "pink floyd" },
  { imgSrc: "./images/beatles.jpeg", id: 9, name: "beatles" },
  { imgSrc: "./images/blink182.jpeg", id: 10, name: "blink 182" },
  { imgSrc: "./images/fkatwigs.jpeg", id: 11, name: "fka twigs" },
  { imgSrc: "./images/fleetwood.jpeg", id: 12, name: "fleetwood" },
  { imgSrc: "./images/joy-division.jpeg", id: 13, name: "joy division" },
  { imgSrc: "./images/ledzep.jpeg", id: 14, name: "led zeppelin" },
  { imgSrc: "./images/metallica.jpeg", id: 15, name: "metallica" },
  { imgSrc: "./images/pinkfloyd.jpeg", id: 16, name: "pink floyd" },
];

// randomize cards

const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

// card generator function

const cardGenerator = () => {
  const cardData = randomize();
  // generate HTML
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    // attach info to cards
    face.src = item.imgSrc;
    card.setAttribute("name", item.name);
    // attach cards to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);
    });
  });
};

// check cards
const checkCards = (e) => {
  console.log(e);
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  // logic
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("Match");
    } else {
      console.log("wrong");
    }
  }
};

cardGenerator();
