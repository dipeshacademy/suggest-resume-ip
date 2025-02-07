        // index.js
        document.getElementById("resumeUpload").addEventListener("change", function(event) {
            const file = event.target.files[0];
            if (file) {
                const randomScore = Math.floor(Math.random() * 100) + 1;
                document.getElementById("scoreValue").innerText = randomScore;
                document.getElementById("progress").style.width = randomScore + "%";
                document.getElementById("scoreCard").classList.sremove("hidden");
            }
        });