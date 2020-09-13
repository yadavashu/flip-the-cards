<<<<<<< HEAD
document.addEventListener('DOMContentLoaded',() => {
    const incards=[
        {
            name:"harry",
            img:"images/harry.jpg"
        },
        {
            name:"harry",
            img:"images/vold.jpg"
        },
        {
            name:"ron",
            img:"images/ron.jpg"
        },
        {
            name:"ron",
            img:"images/her.jpg"
        },
        {
            name:"snape",
            img:"images/snap.jpg"
        },
        {
            name:"snape",
            img:"images/syth.jpg"
        },
        {
            name:"albus",
            img:"images/albus.jpg"
        },
        {
            name:"albus",
            img:"images/phoe.jpg"
        },
        {
            name:"hagrid",
            img:"images/hag.jpg"
        },
        {
            name:"hagrid",
            img:"images/spi.jfif"
        },
        {
            name:"gryffindor",
            img:"images/gryf.jpg"
        },
        {
            name:"gryffindor",
            img:"images/sword.jpg"
        }

    ]
     incards.sort(() => 0.5 - Math.random())
    const resultDisplay = document.getElementById('result')
    const grid=document.getElementById("main-frame")
    var cardsChosen=[]
    var cardsChosenId=[]
    var cardsWon=[]
    function createBoard(){
        for(var i=0;i<incards.length;i++)
        {
            var card=document.createElement('img')
            card.setAttribute('src',"images/snow.jpg")
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }
    function checkforMatch(){
        var cards=document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        
        if(optionOneId == optionTwoId) {
          cards[optionOneId].setAttribute('src', "images/snow.jpg")
          cards[optionTwoId].setAttribute('src',"images/snow.jpg")
          alert('You have clicked the same image!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
          alert('You found a match')
          cards[optionOneId].setAttribute('src', 'images/trio.jpg')
          cards[optionTwoId].setAttribute('src', 'images/trio.jpg')
          cards[optionOneId].removeEventListener('click', flipCard)
          cards[optionTwoId].removeEventListener('click', flipCard)
          cardsWon.push(cardsChosen)
        } else {
          cards[optionOneId].setAttribute('src', 'images/snow.jpg')
          cards[optionTwoId].setAttribute('src', 'images/snow.jpg')
          alert('Sorry, try again')
        }
        cardsChosen = []
    cardsChosenId = []
    resultDisplay.value= cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.value = 'Congratulations! You found them all!'
    }
        
    }
    function flipCard(){
        var carId=this.getAttribute('data-id')
        cardsChosen.push(incards[carId].name)
        cardsChosenId.push(carId)
        this.setAttribute('src',incards[carId].img)
        if(cardsChosen.length === 2)
        {
            setTimeout(checkforMatch,500)
        }
    }
    createBoard()
=======
document.addEventListener('DOMContentLoaded',() => {
    const incards=[
        {
            name:"harry",
            img:"images/harry.jpg"
        },
        {
            name:"harry",
            img:"images/vold.jpg"
        },
        {
            name:"ron",
            img:"images/ron.jpg"
        },
        {
            name:"ron",
            img:"images/her.jpg"
        },
        {
            name:"snape",
            img:"images/snap.jpg"
        },
        {
            name:"snape",
            img:"images/syth.jpg"
        },
        {
            name:"albus",
            img:"images/albus.jpg"
        },
        {
            name:"albus",
            img:"images/phoe.jpg"
        },
        {
            name:"hagrid",
            img:"images/hag.jpg"
        },
        {
            name:"hagrid",
            img:"images/spi.jfif"
        },
        {
            name:"gryffindor",
            img:"images/gryf.jpg"
        },
        {
            name:"gryffindor",
            img:"images/sword.jpg"
        }

    ]
     incards.sort(() => 0.5 - Math.random())
    const resultDisplay = document.getElementById('result')
    const grid=document.getElementById("main-frame")
    var cardsChosen=[]
    var cardsChosenId=[]
    var cardsWon=[]
    function createBoard(){
        for(var i=0;i<incards.length;i++)
        {
            var card=document.createElement('img')
            card.setAttribute('src',"images/snow.jpg")
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }
    function checkforMatch(){
        var cards=document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        
        if(optionOneId == optionTwoId) {
          cards[optionOneId].setAttribute('src', "images/snow.jpg")
          cards[optionTwoId].setAttribute('src',"images/snow.jpg")
          alert('You have clicked the same image!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
          alert('You found a match')
          cards[optionOneId].setAttribute('src', 'images/trio.jpg')
          cards[optionTwoId].setAttribute('src', 'images/trio.jpg')
          cards[optionOneId].removeEventListener('click', flipCard)
          cards[optionTwoId].removeEventListener('click', flipCard)
          cardsWon.push(cardsChosen)
        } else {
          cards[optionOneId].setAttribute('src', 'images/snow.jpg')
          cards[optionTwoId].setAttribute('src', 'images/snow.jpg')
          alert('Sorry, try again')
        }
        cardsChosen = []
    cardsChosenId = []
    resultDisplay.value= cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.value = 'Congratulations! You found them all!'
    }
        
    }
    function flipCard(){
        var carId=this.getAttribute('data-id')
        cardsChosen.push(incards[carId].name)
        cardsChosenId.push(carId)
        this.setAttribute('src',incards[carId].img)
        if(cardsChosen.length === 2)
        {
            setTimeout(checkforMatch,500)
        }
    }
    createBoard()
>>>>>>> 879c37f83d1c6b83883fc4955d588deedbce1286
})