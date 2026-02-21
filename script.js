const toggle = document.getElementById("modeToggle");
const body = document.body;

toggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
});

const form = document.getElementById("contactForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if(name === "" || email === ""){
        message.textContent = "Please fill all fields!";
        message.style.color = "red";
    } else {
        message.textContent = "Message Sent Successfully!";
        message.style.color = "green";
        form.reset();
    }
});