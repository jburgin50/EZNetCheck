const form = document.getElementById('assessmentForm');
const resultsDiv = document.createElement('div');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Get the user's answers
    const answers = {
        q1: form.q1.value,
        q2: form.q2.value,
        q3: form.q3.value,
        q4: form.q4.value,
        q5: form.q5.value,
        q6: form.q6.value,
        q7: form.q7.value,
        q8: form.q8.value,
        q9: form.q9.value,
       q10: form.q10.value
    };
    // Calculate the score
    let score = 0;
    for (const answer of Object.values(answers)) {
        if (answer === 'yes') {
            score += 10;
        }
    }
    // Display the results
    resultsDiv.innerHTML = `Your score is ${score} out of 100.`;
    form.parentNode.appendChild(resultsDiv);
});
