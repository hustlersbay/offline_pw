<h1>Registration Page</h1>
<form onsubmit="return addRegistration()"
id="registrationForm">
<label for="name">Name:</label>
<input type="text" id="name" required><br><br>
<label for="age">Age:</label>
<input type="number" id="age" required><br><br>
<label for="email">Email:</label>
<input type="email" id="email" required><br><br>
<input type="submit" value="Register">
</form>
<p id="result"></p>
<script>
let registrations = [];
function addRegistration() {
let name = document.getElementById("name").value;
let ageInput = document.getElementById("age").value;
let age = parseInt(ageInput);
let email = document.getElementById("email").value;
registrations.push({ name: name, age: age, email: email
});
displayRegistrationResult();
return false;
}
function displayRegistrationResult() {
let resultText = "";
for (let i = 0; i < registrations.length; i++) {
let registration = registrations[i];
let name = registration.name;
let age = registration.age;
if (age >= 18) {
resultText += `${name}, you are an adult. Registration
successful. <br>`;
} else {
resultText += `${name}, sorry, you must be 18 years or
older to register. <br>`;
}
}
document.getElementById("result").innerHTML = resultText;
}  </script>