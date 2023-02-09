const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')
const correctAnswers = ['A', 'B', 'B', 'D']

const scoreCalculator = (event) => {
    event.preventDefault()
    let score = 0
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]

    const addScore = () => {
        return score += 25
    }

    const setScore = () => {
        finalResult.querySelector('span').textContent = `${counter}%`
        counter++
    }

    const iterateThroughArray = (userAnswer, index) => {
        const validateAnswer = userAnswer === correctAnswers[index]
        if (validateAnswer) {
            addScore()
        }
    }

    userAnswers.forEach(iterateThroughArray)
    
    scrollTo(0,0)
    finalResult.classList.remove('d-none')

    let counter = 0
    const stopCounter = () => {
        const validateScore = counter === score
        if (validateScore) {
            clearInterval(timer)
        }
        setScore()
    }
    const timer = setInterval(stopCounter, 13);
}

form.addEventListener('submit', scoreCalculator)
