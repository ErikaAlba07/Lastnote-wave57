const form = document.getElementById("messageForm");
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    // Replace this with your actual Web3Forms access key.
    // This also replaces the placeholder in message.html.
    formData.set("access_key", "a12e560e-4b86-4690-8ce2-b3a97bf4ece1");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                body: formData
            }
        );

        const data = await response.json();

        if (response.ok && data.success) {
            alert("Success! Your message has been sent. Thank you for leaving me a note! 💌");
            form.reset();
        } else {
            alert(
                "Error: " +
                (data.message || data.body?.message ||
                "Your message could not be sent.")
            );
        }

    } catch (error) {
        console.error("Form submission error:", error);
        alert(
            "Something went wrong. Please check your internet connection and try again."
        );
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});
