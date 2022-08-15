const displayQuestions = document.querySelector("#questions");
const displayAnswer = document.querySelector("#answer");

const questions = [
    {
        id: 0,
        text: "Where would you rather vacation?",
        answers: [
            {
                text: "Tulum",
                image: "https://media.istockphoto.com/photos/cenote-dos-ojos-in-quintana-roo-mexico-people-swimming-and-snorkeling-picture-id872214036?b=1&k=20&m=872214036&s=170667a&w=0&h=nIYJZJcTbnM2C2HTCLlt4qR_9Ul2blWU4pC-sivpN38=",
                alt: "Tulum",
                credit: "Unsplash"
            },
            {
                text: "Miami",
                image: "https://media.istockphoto.com/photos/gorgeous-aerial-view-of-sunset-in-miami-beach-florida-from-a-drone-picture-id1341980349?b=1&k=20&m=1341980349&s=170667a&w=0&h=gIYaKmgta6YjrtgLHhJTLAW_Az2kowGeSHj1ZBHmv80=",
                alt: "Miami",
                credit: "Unsplash"
            },
            {
                text: "Dubai",
                image: "https://media.istockphoto.com/photos/panorama-of-dubai-marina-in-uae-modern-skyscrapers-and-port-with-picture-id1266923176?b=1&k=20&m=1266923176&s=170667a&w=0&h=BAcB2chj9gQJystJETo24W2MAZZSe03NW5b0f-475D0=",
                alt: "Dubai",
                credit: "Unsplash"
            },
            {
                text: "Las Vegas",
                image: "https://media.istockphoto.com/photos/aerial-view-of-las-vegas-strip-in-nevada-picture-id614973464?b=1&k=20&m=614973464&s=170667a&w=0&h=72lHkgF5EikOyqh7LHg3waf8rLmVILMFONNqVUq7faA=",
                alt: "Las Vegas",
                credit: "Unsplash"
            }
        ]

    },
    {
        id: 1,
        text: "What is your favorite bathroom design?",
        answers: [
            {
                text: "Modern",
                image: "https://media.istockphoto.com/photos/elegant-modern-bathroom-interior-with-marble-flooring-brown-bathtub-picture-id1357608243?b=1&k=20&m=1357608243&s=170667a&w=0&h=6GgQHX9jk_ODa75lax9JM5hQ9HiF9u0jaNyJ-W7SPU0=",
                alt: "Modern",
                credit: "Unsplash"
            },
            {
                text: "Traditional",
                image: "https://media.istockphoto.com/photos/double-vanity-with-vessel-sinks-picture-id1364539128?b=1&k=20&m=1364539128&s=170667a&w=0&h=tOoc_HCU84ZiYlMp-j8XMquBHrgXW8vwwMog00yBbhI=",
                alt: "Traditional",
                credit: "Unsplash"
            },
            {
                text: "Colorful",
                image: "https://media.istockphoto.com/photos/interior-of-green-bathroom-picture-id174494870?b=1&k=20&m=174494870&s=170667a&w=0&h=LJb1bBTzGESDr8cKHffBSheilnMpLGZGcerVlDwlQK4=",
                alt: "Colorful",
                credit: "Unsplash"
            },
            {
                text: "Industrial",
                image: "https://media.istockphoto.com/photos/industrial-style-bathroom-picture-id1134249590?b=1&k=20&m=1134249590&s=170667a&w=0&h=Kc80AWEI0s8875Qb0Z3rWK1V8OfWXOPvmQkmcLnlv50=",
                alt: "Industrial",
                credit: "Unsplash"
            }
        ]
    },
    {
        id: 2,
        text: "What is your favorite car?",
        answers: [
            {
                text: "Porsche",
                image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                alt: "Porsche",
                credit: "Unsplash"
            },
            {
                text: "Rolls Royce",
                image: "https://images.unsplash.com/photo-1627403677225-1e13c9db107e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
                alt: "Rolls Royce",
                credit: "Unsplash"
            },
            {
                text: "GWagon",
                image: "https://images.unsplash.com/photo-1648413653877-ade5eefd2f1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
                alt: "GWagon",
                credit: "Unsplash"
            },
            {
                text: "Dodge Hellcat",
                image: "https://images.unsplash.com/photo-1632686341231-0a65b83bafaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                alt: "Dodge Hellcat",
                credit: "Unsplash"
            }
        ]
    }
]

const answers = [
    {
        combination: ["Tulum", "Modern", "Porsche"],
        text: "You are Meg Thee Stallion!",
        image: "https://media.pitchfork.com/photos/626f4d9852b37c35365c730a/3:2/w_1875,h_1250,c_limit/megan-thee-stallion.jpg",
        alt: "Meg Thee Stallion"
    },
    {
        combination: ["Miami", "Traditional", "Rolls Royce"],
        text: "You are a City Girl!",
        image: "https://www.billboard.com/wp-content/uploads/media/City-Girls-bb01-2020-feat-billboard-cimnssip-1548.jpg",
        alt: "The City Girls" 
    },
    {
        combination: ["Dubai", "Colorful", "GWagon"],
        text: "You are Cardi B!",
        image: "https://am24.mediaite.com/lc/cnt/uploads/2022/01/cardi-b-1-1-1.jpg",
        alt: "Cardi B"
    },
    {
        combination: ["Las Vegas", "Industrial", "Dodge Hellcat"],
        text:"You are Flo-Milli!",
        image: "https://www.nme.com/wp-content/uploads/2022/03/NME-FLO-MILLI-Credit-Brandon-Almengo-3@2160x2700.jpg",
        alt: "Flo-Milli"
    }
]

const unansweredQuestions = [];
const chosenAnswers = [];

const showQuestions = () => {
    questions.forEach(question => {
        const titleArea = document.createElement('div')
        titleArea.id = question.id
        titleArea.classList.add('title-area')
        const titleHeading = document.createElement('h2')
        titleHeading.textContent =  question.text
        titleArea.append(titleHeading)
        displayQuestions.append(titleArea)

       const answersArea =  document.createElement('div')
       answersArea.id = question.id + "-questions"
       answersArea.classList.add('answer-options')

       unansweredQuestions.push(question.id)

       question.answers.forEach(answer => {
        const answerArea = document.createElement('div')
        answerArea.classList.add('answer-area')
        answerArea.addEventListener('click', () => handleClick(question.id, answer.text))
        const answerImage = document.createElement('img')
        answerImage.setAttribute('src', answer.image)
        answerImage.setAttribute('alt', answer.alt)

        const answerTitle = document.createElement('h3')
        answerTitle.textContent = answer.text
        
        const answerInfo = document.createElement('p')
        const imageLink = document.createElement('a')
        imageLink.setAttribute('href', answer.image)
        imageLink.textContent = answer.credit
        const sourceLink = document.createElement('a')
        sourceLink.textContent = 'Unsplash'
        sourceLink.setAttribute('src', 'https://www.unsplash.com')
        answerInfo.append(imageLink, ' to ', sourceLink)

        answerArea.append(answerImage, answerTitle, answerInfo)
        answersArea.append(answerArea)

       })
       displayQuestions.append(answersArea)
    })

}
showQuestions()

const handleClick = (questionId, chosenAnswer) => {
    if (unansweredQuestions.includes(questionId))
    chosenAnswers.push(chosenAnswer)
    const itemToRemove = unansweredQuestions.indexOf(questionId)

    if (itemToRemove > -1) {
        unansweredQuestions.splice(itemToRemove, 1)
    }
    console.log(chosenAnswers)
    console.log(unansweredQuestions)

    disableQuestionArea(questionId, chosenAnswer)
    const lowestQuestionId = Math.min(...unansweredQuestions)
    location.href = '#' + lowestQuestionId

    if (!unansweredQuestions.length) {
        location.href = '#answer'
        showAnswer()
    }
}

const showAnswer = () => {
    let result 
    answers.forEach(answer => {
        if (chosenAnswers.includes(answer.combination[0]) +
        chosenAnswers.includes(answer.combination[1]) + 
        chosenAnswers.includes(answer.combination[2])
        ) {
            result = answer

        } else if (!result) {
            result = answers[0]
        }
    })
    console.log(result)
    
    const answerBlock = document.createElement('div')
    answerBlock.classList.add('result-block')
    const answerTitle = document.createElement('h3')
    answerTitle.textContent = result.text
    const answerImage = document.createElement('img')
    answerImage.setAttribute('src', result.image)
    answerImage.setAttribute('alt', result.alt)

    answerBlock.append(answerTitle, answerImage)

    displayAnswer.append(answerBlock)

    const allAnswerBlocks = document.querySelectorAll('.answer-block')
    Array.from(allAnswerBlocks).forEach(answerBlock => (answerBlock.replaceWith.cloneNode(true)))
}

const disableQuestionArea = (questionId, chosenAnswer) => {
    const currentQuestionBlock = document.getElementById(questionId + "-questions")

    Array.from(currentQuestionBlock.children).forEach(block => {
        if (block.children.item(1).innerText !== chosenAnswer) {
            block.style.opacity = "50%"
        }
    })
}