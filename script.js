const quizData = [
    {
        question: "Elazar talks about three different political cultures. These are:",
        options: [
            "Individualistic, Moralistic, Traditionalistic",
            "Individualistic, Communalistic, Moralistic",
            "Moralistic, Traditionalistic, Communalistic",
            "Individualistic, Communalistic, Traditionalistic"
        ],
        correct: 0
    },
    {
        question: "Which of the following is NOT a reason demographics are important in political science?",
        options: [
            "They can predict how populations will vote",
            "They can tell us what values or experiences a certain population shares",
            "They show what areas and populations might need more attention by the government",
            "They make it easier to guess the politics of your friends"
        ],
        correct: 3
    },
    {
        question: "San Antonio had an advantage as a site for an early city because of:",
        options: [
            "San Pedro Springs",
            "The Train",
            "Our lake",
            "There is no advantage"
        ],
        correct: 0
    },
    {
        question: "Texas is a:",
        options: [
            "Majority White state",
            "Majority Latino state",
            "Majority Black state",
            "No racial or ethnic group is a majority in Texas"
        ],
        correct: 3
    },
    {
        question: "Which list contains only some of Texas' geographic regions?",
        options: [
            "The Gulf Coastal Plains, the Great Plains, the Mississippi River Delta",
            "The Rocky Mountains, the Basin and Range Province, the Interior Lowlands",
            "The Gulf Coastal Plains, The Interior Lowlands, The Basin and Range Province",
            "The Redwood Forests, the Great Plains, the Interior Lowlands"
        ],
        correct: 2
    },
    {
        question: "A primary reason for Texas seceding from BOTH Mexico and the US was:",
        options: [
            "Language",
            "Religion",
            "Slavery",
            "Trade"
        ],
        correct: 2
    },
    {
        question: "Which of these was NOT a major industry in the development of Texas?",
        options: [
            "Cotton",
            "Cattle",
            "Oil",
            "Textiles"
        ],
        correct: 3
    },
    {
        question: "Which of these countries held claim to at least part of Texas? Select all that apply",
        options: [
            "France",
            "The USA",
            "Spain",
            "Russa",
            "Germany",
            "Texas"
        ],
        correct: [0, 1, 2, 5] // Multiple correct answers
    },
    {
        question: "How does Texas interact with the federal government?",
        options: [
            "Texas is superior to the federal government",
            "Texas is independent from the federal government",
            "Texas and the federal government are equals",
            "The federal government is superior to Texas"
        ],
        correct: 3
    },
    {
        question: "Texas has the longest state constitution.",
        options: [
            "True",
            "False"
        ],
        correct: 1
    },
    {
        question: "What part of the constitution establishes the federal government as superior to the state governments?",
        options: [
            "The 10th Amendment ",
            "None of these ",
            "Article 2 ",
            "The Supremacy Clause "


        ],
        correct: 3
    },
    {
        question: "In the constitutions Texas has had since being a state, it has consistently emphasized:",
        options: [
            "Cotton ",
            "Marriage ",
            "Equal Rights ",
            "Education "


        ],
        correct: 3
    },
    {
        question: "What is Coercive Federalism?",
        options: [
            "Moving the responsibility for policies from the state to the national level ",
            "The states antagonizing other states  ",
            "The federal government using regulations and funding to try and force the states into doing things",
            "States and the federal government having clearly separate policy reals "


        ],
        correct: 2
    },
    {
        question: "A primary reason for Texas seceding from both Mexico and the US was:",
        options: [
            "Slavery",
            "Immigration",
            "Shipping",
            "Taxes"


        ],
        correct: 0
    },
    {
        question: "The 10th Amendment:",
        options: [
            "Prevents troops from being quartered in people's homes ",
            "Defines which policies the national government has no control over",
            "Gives the federal government control over all policies ",
            "Gives the states control over policy realms not explicitly given to the federal government "


        ],
        correct: 3
    },
    {
        question: "The elastic clause:",
        options: [
            "Bends and snaps like its made of rubber  ",
            "Has allowed states to expand their control over policies ",
            "Has prevented the federal government from growing too powerful ",
            "Has allowed for broad expansions of federal power under the justification of those powers being \"necessary and proper\" "


        ],
        correct: 3
    },

    {
        question: "Which of these parties was founded in Texas?",
        options: [
            "Democratic  ",
            "Republican ",
            "La Raza Unida ",
            "Green"


        ],
        correct: 2
    },
    {
        question: "Which of these is the smallest level of organization for a party listed?",
        options: [
            "National  ",
            "County ",
            "State ",
            "International"


        ],
        correct: 1
    },
    {
        question: "Urban areas in Texas tend to vote more:",
        options: [
            "Democratic  ",
            "Libertarian ",
            "Republican",
            "Green"


        ],
        correct: 0
    },
    {
        question: "Select all the parties that have had a Presidency",
        options: [
            "Republicans  ",
            "Democrats", 
            "Socialists ",
            "Whigs", 
            "Bear Moose"


        ],
        correct: [0,1,3]
    },
    {
        question: "A party's top priority is:",
        options: [
            "Winning election  ",
            "Raising campaign funds ",
            "Acquiring donors",
            "Making the coolest memes"


        ],
        correct: 0
    },
    {
        question: "When do parties create their platform?",
        options: [
            "At their state/national convention  ",
            "The party leader writes it themselves ",
            "Every 2nd Tuesday",
            "It is created by averaging out all of their candidate's beliefs"


        ],
        correct: 0
    },
    {
        question: "Texas is under control of a Republican Trifecta, which means:",
        options: [
            "Republicans control the executive, senate, and house   ",
            "Republicans control all three of the highest executive offices ",
            "Republicans do not have a trifecta in Texas ",
            "Republicans control the executive, courts, and legislature"


        ],
        correct: 0
    }

];


const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result");

// Render Quiz
function loadQuiz() {
    quizContainer.innerHTML = "";
    quizData.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `<h3>${index + 1}. ${q.question}</h3>`;

        q.options.forEach((option, i) => {
            let inputType = Array.isArray(q.correct) ? "checkbox" : "radio"; // Use checkboxes for multiple correct answers
            questionDiv.innerHTML += `
                <label>
                    <input type="${inputType}" name="question${index}" value="${i}">
                    ${option}
                </label><br>
            `;
        });

        quizContainer.appendChild(questionDiv);
    });
}



// Check Answers
// Check Answers
function checkAnswers() {
    let score = 0;

    quizData.forEach((q, index) => {
        const questionDiv = quizContainer.children[index]; // Get the question div
        const selectedOptions = document.querySelectorAll(`input[name="question${index}"]:checked`);
        const selectedValues = Array.from(selectedOptions).map(option => parseInt(option.value));

        let isCorrect = false;

        if (Array.isArray(q.correct)) {
            // Multi-answer question: Check if the selected answers match the correct ones
            const correctAnswers = q.correct.sort().toString();
            const selectedAnswers = selectedValues.sort().toString();
            isCorrect = (correctAnswers === selectedAnswers);
        } else {
            // Single-answer question: Check if the selected answer matches the correct one
            isCorrect = (selectedValues.length === 1 && selectedValues[0] === q.correct);
        }

        // Show correct answers and highlight incorrect ones
        if (isCorrect) {
            questionDiv.style.backgroundColor = "#d4edda"; // Light green for correct
            score++;
        } else {
            questionDiv.style.backgroundColor = "#f8d7da"; // Light red for incorrect
            const correctOptions = Array.isArray(q.correct)
                ? q.correct.map(i => q.options[i]).join(", ")
                : q.options[q.correct]; // Fix for single correct answer case

            const feedback = document.createElement("p");
            feedback.style.color = "red";
            feedback.innerHTML = `❌ Correct answer: <strong>${correctOptions}</strong>`;
            questionDiv.appendChild(feedback);
        }
    });

    resultContainer.textContent = `You scored ${score} out of ${quizData.length}!`;
}


submitButton.addEventListener("click", checkAnswers);

// Load the quiz on page load
loadQuiz();
