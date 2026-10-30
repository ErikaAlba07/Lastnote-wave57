document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("backgroundMusic");

    if (!music) {
        console.error("Background music element not found on index.html");
        return;
    }

    music.loop = true;
    music.volume = 0.5;

    // Try to play music automatically
    music.play().catch(function (error) {
        console.log("Autoplay blocked. Waiting for user interaction.");
    });

    // Start music when the visitor clicks the page
    function startMusic() {
        if (music.paused) {
            music.play().catch(function (error) {
                console.error("Unable to play music:", error);
            });
        }

        document.removeEventListener("click", startMusic);
        document.removeEventListener("touchstart", startMusic);
    }

    document.addEventListener("click", startMusic);
    document.addEventListener("touchstart", startMusic);
});
