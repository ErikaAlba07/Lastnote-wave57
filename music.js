function initializeBackgroundMusic() {
    const music = document.getElementById("backgroundMusic");

    if (!music) {
        console.log("No background music element found on this page.");
        return;
    }

    music.loop = true;
    music.volume = 0.5;

    // Attempt autoplay
    music.play()
        .then(() => {
            console.log("Background music is playing!");
        })
        .catch((error) => {
            console.log("Autoplay failed:", error.name, error.message);
        });

    // Report loading errors
    music.addEventListener("error", () => {
        console.error("Unable to load the music file.", music.error);
    });
}

// Run after the HTML has been parsed
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeBackgroundMusic);
} else {
    initializeBackgroundMusic();
}

