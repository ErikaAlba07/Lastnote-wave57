const messages = [
  { title: "JAY 💗", text: "I will miss you and to the memories we have, kaya mo! tandaan mo yan stay strong love." },
  { title: "NINS 🌷", text: "WASSUP BRO!, mamimiss ko ung tawanan natin nila gen at jay, study well ah roblox lng palagi" },
  { title: "GEN 💕", text: "Always remember to put yourself first, mamimiss kita at ung mga cats mo AHAHAHAHA" },
  { title: "JV ☀️", text: "Huwag matampuhin HAHAHAHA, alam mo na yan marunong ka na" },
  { title: "Spens 🎁", text: "Stay safe palagi and Thank you sa mga candies HAHAHAHAHAA" },
  { title: "Cyrene 🌼", text: "Bebe Ghoorrrl, Stay strooooong palagiiiii always be a cutieeee to mee" },
  { title: "Mikha ☁️", text: "Stay Strong, always remember that if needed support your are always free to reach out, don't pressure yourself, just be you <3" },
  { title: "Kat 💫", text: "go ghorl keep slayin, ganda palagi ng outfit and haiiirrr HAHAHAHAHA" },
  { title: "Kent ☀️", text: "Kuya kent, wag mo ko pinadidilatan ng mata dyan AHAHAHHAAH will miss our kulitaaan " },
  { title: "Alexander ☀️", text: "whoo english, Don't pressure yourself, you are doing your best keep it up always!" },
  { title: "Alex ☀️", text: "Keep it up wooot woot, ung aya mo mag ML ng last last month di paren nangyayare" },
  { title: "Aicelle 🧸", text: "Keep safeeeee, sorry nagulat kita at nagulat mo rin ako one timeee" },
  { title: "Jet ☀️", text: "Kuya Jeeet keep safe and alagaan ang sarili" },
  { title: "Eric ☀️", text: "dahan dahan lang kasi, you can do it, pero do it slower para maintindihan AHAHAHAHAHA choz keep safeee" },
  { title: "Bon ☀️", text: "Kuya Bon Thank youuuu so much sa heeeeelp and keep safeeee" },
  { title: "Jaiden ☀️", text: "Brad Pumasok ka na Choz AHHAAHHAHAHA, or pumasok ka na once na magaling ka na" },
  { title: "TL Lynus 🐤", text: "Hi Teeee, mamimiss kita and thank you sa guidance mo GUIDANCEEEE??? HSHAHAHAHA mag iingat palagi and wag mastress kahit kastress streeessss HAHAHAH 🐤 " },
  { title: "TL Mikhay 🌟", text: "Hi TL, Thank you po pag guide po kahit little lang ung time to get to know you po stay safe " },
  { title: "LX LJ 🍯", text: "Hi Ms LJ, mamimiss ko po ung unli br- ehem and kulitan moments po stay safe palagi" },
  { title: "One last note for yall 💖", text: "I will miss you all and will never forget all the kulitan and tawanan dont forget meee choz HAHAHAHAAHA yayain nyo paren ako please? AHAHAHAHAH" }
];

const modal = document.getElementById("messageModal");
const title = document.getElementById("messageTitle");
const messageText = document.getElementById("messageText");
const closeButton = document.getElementById("closeModal");
let lastOpenedNote = null;

document.querySelectorAll(".note").forEach((note) => {
  note.addEventListener("click", () => {
    const message = messages[Number(note.dataset.index)];
    if (!message) return;

    lastOpenedNote = note;
    title.textContent = message.title;
    messageText.textContent = message.text;
    modal.classList.add("open");
    closeButton.focus();
  });
});

function closeMessage() {
  modal.classList.remove("open");
  if (lastOpenedNote) lastOpenedNote.focus();
}

closeButton.addEventListener("click", closeMessage);

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeMessage();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeMessage();
  }
});

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
