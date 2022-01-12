document.addEventListener("DOMContentLoaded", () => {
  //card
  const cardArray = [
    {
      name: "first",
      img: "images/first.jpeg",
    },
    {
      name: "first",
      img: "images/first.jpeg",
    },
    {
      name: "second",
      img: "images/second.jpeg",
    },
    {
      name: "second",
      img: "images/second.jpeg",
    },
    {
      name: "third",
      img: "images/third.jpeg",
    },
    {
      name: "third",
      img: "images/third.jpeg",
    },
    {
      name: "fourth",
      img: "images/fourth.jpeg",
    },
    {
      name: "fourth",
      img: "images/fourth.jpeg",
    },
    {
      name: "five",
      img: "images/five.jpeg",
    },
    {
      name: "five",
      img: "images/five.jpeg",
    },
    {
      name: "six",
      img: "images/six.jpeg",
    },
    {
      name: "six",
      img: "images/six.jpeg",
    },
  ]

  cardArray.sort(() => 0.5 - Math.random())
  let grid = document.querySelector(".grid")
  let resultDisply = document.querySelector("#result")
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img")
      card.setAttribute("src", "images/thinky.png")
      card.setAttribute("data-id", i)
      card.addEventListener("click", flipcard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    let cards = document.querySelectorAll("img")
    let optionOneId = cardsChosenId[0]
    let optionTwoId = cardsChosenId[1]

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/thinky.png")
      cards[optionTwoId].setAttribute("src", "images/thinky.png")
    } else if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute("src", "images/star.jpg")
      cards[optionTwoId].setAttribute("src", "images/star.jpg")
      cards[optionOneId].removeEventListener("click", flipcard)
      cards[optionTwoId].removeEventListener("click", flipcard)

      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute("src", "images/thinky.png")
      cards[optionTwoId].setAttribute("src", "images/thinky.png")
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisply.innerHTML = cardsWon.length
    if (cardsWon.length == cardArray.length / 2) {
      resultDisply.innerHTML = "congratulations! you found them all!"
    }
  }
  //flip your card
  function flipcard() {
    let cardId = this.getAttribute("data-id")
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute("src", cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }
  createBoard()
})
