let currentQuestion = 1
const totalQuestions = 36
const progress = document.getElementById("progress")
const progressText = document.getElementById("progress-text")
class UbuntexIndex {
    constructor() {
        this.questions = [{
            // empathy (25%)
            text: "In general, when is it right to consider the needs of others?", //1
            choices: {
                A: ["Only after mine are met ", 2],
                B: ["Before mine are met" , 8],
                C: ["Together with mine ", 5],
                D: ["It's not important to consider the needs of others", 1]
            }},{
            text: "Do you feel that others care about your needs in general?", //2
            choices: {
                A: ["Only after theirs are met ", 6],
                B: ["Yes, above their own ", 4],
                C: ["Yes, at the same time as their needs", 3],
                D: ["Its not important for them to consider my needs", 5]
            }},{
            text: "Who in your opinion is to blame for the bad things that you face from time to time?", //3
            choices: {
                A: ["Others are usually to blame ", 1],
                B: ["I am normally the one to blame ", 6],
                C: ["A combination of me and others", 4],
                D: ["No one is to blame things just happen", 2],
            }},{
            text: "When comparing your status in life  to that of others around you, where would you like to be?", //4
            choices: {
                A: ["A lot better than others ", 1],
                B: ["Better than others", 2],
                C: ["Same as others ", 5],
                D: ["It does not matter", 7]
            }},{
            text: "How do you feel about working with others to achieve a common goal?", //5
            choices: {
                A: ["It is not easy to work with others ", 1],
                B: ["Its not necessary to work with others ", 3],
                C: ["More can be achieved when working with others", 5],
                D: ["Working with others is the only way of achieving lasting results ", 7]
            }},{
            //ratings
            text: "On a 5 point scale where 1 means very low and 5 means very high, how would you rate your ability to understand yourself?", //6
            scale: 5},{
            text: "On a 5 point scale where 1 means very low and 5 means very high, how would you rate your ability to understand others in the world?", //7
            scale: 5},{
            text: "On a 10 point scale where 1 means very low and 10 means very high, how would you rate your ability to understand others in your community?", //8
            scale: 10},{
            text: "On a 10 point scale where 1 means very low and 10 means very high, how would you rate your ability to understand others in your country?", //9
            scale: 10},{
            text: "On a 10 point scale where 1 means very low and 10 means very high, how would you rate your ability to understand others in your family?", //10
            scale: 10},{
            // respect (25%)
            text: "How important is showing respect to  other human beings?", //11
            choices: {
                A: ["It depends on who ", 2],
                B: ["Everyone needs to be respected", 5],
                C: ["Respect is a luxury", 1]
            }},{
            text: "How do you feel when someone you don't know is being disrespected?", //12
            choices: {
                A: ["It is none of my business, I don't care ", 1],
                B: ["I also feel disrespected ", 6],
                C: ["I feel bad about our society", 3]
            }},{
            text: "What would you consider to be a true sign of showing respect to others?", //13
            choices: {
                A: ["Acting out your respect ", 7],
                B: ["Not having negative thoughts about them", 3]
            }},{
            text: "Rate on a 5 point scale your respect for yourself", //14
            scale: 5},{
            text: "Rate on a 5 point scale your respect for your family members in general", //15
            scale: 5},{
            text: "Rate on a 5 point scale your respect for people around the world", //16
            scale: 5},{
            text: "Rate on a 10 point scale your respect for your community", //17
            scale: 10},{
            text: "Rate on a 10 point scale your respect for the people in your country", //18
            scale: 10},{
            text: "Rate on a 10 point scale your respect authorities in general", //19
            scale: 10},{
            // Dignity (20%)
            text: "What matters the most to you about how you see others in a social setting?", //20
            choices: {
                A: ["Their appearance and presence", 1],
                B: ["Their qualifications and skills  ", 3],
                C: ["Their dignity and worth as a person ", 6],
                D: ["Their priorities and values ", 4]
            }},{
            text: "How would you describe how you want others to treat you in social settings?", //21
            choices: {
                A: ["Based on my appearance and presence ", 1],
                B: ["Based on my qualifications and skills ", 3],
                C: ["With honour simply because I am human ", 6]
            }},{
            text: "Who in your view in any situation is responsible for doing the right thing?", //22
            choices: {
                A: ["Myself first and foremost ", 7],
                B: ["Others", 2],
                C: ["Everyone", 3]
            }},{
            text: "On a 5 point scale how would you rate your importance as a human being, in general?", //23
            scale: 5},{
            text: "On a 5 point scale how would you rate the importance of dignified thoughts that show respect for others?", //24
            scale: 5},{
            text: "On a 5 point scale how would you rate the importance of your value system and beliefs?", //25
            scale: 5},{
            text: "On a 10 point scale how would you rate the importance of others?", //26
            scale: 10},{
            text: "On a 10 point scale how would you rate the importance of dignified actions that show respect for others?", //27
            scale: 10},{
            // Communal Responsibility (30%)
            text: "Do you consider yourself to be a responsible citizen?", //28
            choices: {
                A: ["It depends on the situation ", 2],
                B: ["Sometimes", 3],
                C: ["Always", 5]
            }},{
            text: "Have you in the past 12 months done anything taking longer than 30 minutes to help out your family?", //29
            choices: {
                A: ["Yes", 4],
                B: ["No", 1]
            }},{
            text: "Have you in the past 12 months done anything taking longer than 30 minutes to help out your community?", //30
            choices: {
                A: ["Yes", 5],
                B: ["No", 1]
            }},{
            text: "Have you in the past 12 months done anything taking longer than 30 minutes to help out your country?", //31
            choices: {
                A: ["Yes", 6],
                B: ["No", 1]
            }},{
            text: "Have you in the past 12 months done anything taking longer than 30 minutes to help out the entire world?", //32
            choices: {
                A: ["Yes", 3],
                B: ["No", 1]
            }},{
            text: "What kind of person would you most likely consider to be a role model?", //33
            choices: {
                A: ["A popular and well known person", 1],
                B: ["A skilled and talented person", 2],
                C: ["Someone that sacrifices for their community ", 6],
                D: ["A religious and upright person ", 4]
            }},{
            text: "Can you  rate the importance of popularity and fame to you personally, on a 5 point scale?", //34
            scale: 5},{
            text: "Can you  rate the importance of skill and talent to you personally, on a 5 point scale?", //35
            scale: 5},{
            text: "Can you  rate the importance of service to the community to you personally, on a 10 point scale?", //36
            scale: 10}
            
        ]
        this.currentIndex = 0
        this.userAnswers = []
        this.checkTestCompletion();
    }

    checkTestCompletion() {
        const testCompleted = localStorage.getItem('ubuntexTestCompleted');
        if (testCompleted === 'true') {
            this.showCompletionMessage();
            return;
        }
        
        // Start the quiz if not completed before
        this.startQuiz();
    }

    showCompletionMessage() {
        document.getElementById("quiz-container").style.display = "none";
        const resultContainer = document.getElementById("result");
        resultContainer.style.display = "block";
        resultContainer.innerHTML = `
            <h2>Test Already Completed</h2>
            <p>You have already completed this test on this device.</p>`;
    }

    startQuiz() {
        this.showQuestion()
    }

    showQuestion() {
        const questionContainer = document.getElementById("question")
        const optionsContainer = document.getElementById("options")
        const nextBtn = document.getElementById("next-btn")
        
        if (this.currentIndex >= this.questions.length) {
            this.calculateScore()
            return
        }
        
        const question = this.questions[this.currentIndex]
        questionContainer.textContent = `Question ${this.currentIndex + 1}: ${question.text}`
        optionsContainer.innerHTML = ""
    
        this.currentSelectedAnswer = null;

        if (question.scale) {
            // Create slider for scale questions
            const sliderContainer = document.createElement("div")
            sliderContainer.className = "slider-container"
            
            const slider = document.createElement("input")
            slider.type = "range"
            slider.min = "1"
            slider.max = question.scale.toString()
            slider.value = Math.ceil(question.scale / 2).toString() // Default to middle value
            slider.step = "1"
            slider.className = "scale-slider"
            
            const valueDisplay = document.createElement("div")
            valueDisplay.className = "slider-value"
            valueDisplay.textContent = `Selected: ${slider.value} (drag slider to rate)`
            
            slider.oninput = () => {
                valueDisplay.textContent = `Selected: ${slider.value}`
                this.currentSelectedAnswer = parseInt(slider.value)
                nextBtn.disabled = false
            }
            
            sliderContainer.appendChild(slider)
            sliderContainer.appendChild(valueDisplay)
            optionsContainer.appendChild(sliderContainer)
            
            // Add scale labels
            const scaleLabels = document.createElement("div")
            scaleLabels.className = "scale-labels"
            
            const minLabel = document.createElement("span")
            minLabel.textContent = "1 (Very Low)"
            
            const maxLabel = document.createElement("span")
            maxLabel.textContent = `${question.scale} (Very High)`
            
            scaleLabels.appendChild(minLabel)
            scaleLabels.appendChild(maxLabel)
            optionsContainer.appendChild(scaleLabels)
        } else {
            // Regular multiple choice question
            Object.entries(question.choices).forEach(([key, value]) => {
                const button = document.createElement("button")
                button.textContent = `${key}: ${value[0]}`
                button.classList.add("option-button");
                button.onclick = () => {
                    // Store the selected answer temporarily (don't push to array yet)
                    this.currentSelectedAnswer = value[1]
                    console.log("Selected:", this.currentSelectedAnswer)
                    nextBtn.disabled = false;
                }
                optionsContainer.appendChild(button);
            }) 
        }

        nextBtn.disabled = true
        nextBtn.onclick = () => {
            // Only push to userAnswers if an answer was selected
            if (this.currentSelectedAnswer !== null) {
                this.userAnswers.push(this.currentSelectedAnswer)
                console.log("Submitted answers:", this.userAnswers)
                this.currentSelectedAnswer = null // Reset for next question
            }

            this.currentIndex++
            this.showQuestion()
            // progress bar
            if (currentQuestion < totalQuestions) {
                currentQuestion++
                const progressPercentage = (currentQuestion / totalQuestions) * 100
                progress.style.width = progressPercentage + "%"
                progressText.textContent = `Question ${currentQuestion} of ${totalQuestions}`
    
                if (currentQuestion === totalQuestions) {
                    nextBtn.textContent = "Submit and See Results"
                }
            }
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Adds smooth scrolling animation
            })
        }
    }

    calculateScore() {
        const totalScore = this.userAnswers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        const maxPossibleScore = 240
        const finalScore = (totalScore  / maxPossibleScore) * 100  
        localStorage.setItem('ubuntexTestCompleted', 'true') // Mark test as completed in localStorage

        this.displayResults(finalScore)
    }

    displayResults(score) {
        let classification;
        if (score <= 20) classification = "High Risk (Anti-Social)"
        else if (score <= 40) classification = "Low Ubuntu Awareness"
        else if (score <= 60) classification = "Moderate Ubuntu Awareness"
        else if (score <= 80) classification = "Strong Ubuntu Traits"
        else if (score <= 100) classification = "Ubuntu Ambassador (High Social Contribution)"
        else classification = "Sorry, your score could not be calculated"
        
        document.getElementById("quiz-container").style.display = "none"
        const resultContainer = document.getElementById("result")
        resultContainer.style.display = "block"
        resultContainer.innerHTML = `<h2>Your Ubuntex Score: ${score.toFixed(2)}%</h2><p>Classification: ${classification}</p><p class="storage-notice">Note: This result is saved in your browser. To retake, clear your browser data or use a different browser.</p>`
    } 
}

const quiz = new UbuntexIndex()
quiz.startQuiz()