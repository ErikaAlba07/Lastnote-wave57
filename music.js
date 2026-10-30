document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("backgroundMusic");

    if (!music) return;

    music.loop = true;

    // Try autoplay when the page loads.
    music.play().catch(() => {
        console.log("Waiting for user interaction to play music.");
    });

    // Play music after the user's first interaction.
    function startMusic() {
        if (music.paused) {
            music.play().catch(error => {
                console.log("Unable to play music:", error);
            });
        }
    }

    document.addEventListener("click", startMusic);
    document.addEventListener("touchstart", startMusic);
    document.addEventListener("keydown", startMusic);
});
