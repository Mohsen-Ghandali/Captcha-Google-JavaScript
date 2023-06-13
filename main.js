     //Start Validierung des Formulars
     const form = document.querySelector("form");
     //End Validierung des Formulars

     //Start Validierung des Formulars
form.addEventListener("submit", function(event) {
 event.preventDefault();
 const nameInput = document.querySelector("#name");
 const telInput = document.querySelector("#tel");
 const emailInput = document.querySelector("#email");
 const nameValue = nameInput.value.trim();
 const telValue = telInput.value.trim();
 const emailValue = emailInput.value.trim();
 const captchaResponse = grecaptcha.getResponse();
 if (nameValue === "" || telValue === "" || emailValue === "" || captchaResponse === "") {
   alert("Bitte füllen Sie alle Felder aus und bestätigen Sie, dass Sie kein Roboter sind.");
 } else {
   alert("Vielen Dank für Ihre Nachricht!");
   form.reset();
 }
});
     //Ende Validierung des Formulars