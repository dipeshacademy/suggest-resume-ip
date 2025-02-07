document.addEventListener("DOMContentLoaded", function() {
    const resumeUpload = document.getElementById("resumeUpload");
    const scoreCard = document.getElementById("scoreCard");
    const scoreValue = document.getElementById("scoreValue");
    const progress = document.getElementById("progress");

    document.querySelector(".upload-box").addEventListener("click", () => {
        resumeUpload.click();
    });

    resumeUpload.addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (file) {
            let randomScore = Math.floor(Math.random() * 100) + 1;
            scoreValue.innerText = randomScore;
            progress.style.width = randomScore + "%";
            progress.classList.add("bg-success");
            scoreCard.classList.remove("hidden");

            animateScore(randomScore);
        }
    });

    function animateScore(finalScore) {
        let currentScore = 0;
        let interval = setInterval(() => {
            if (currentScore >= finalScore) {
                clearInterval(interval);
            } else {
                currentScore++;
                scoreValue.innerText = currentScore;
                progress.style.width = currentScore + "%";
            }
        }, 20);
    }
});
