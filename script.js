// Utility function: mark field valid/invalid
function setFieldState(inputElement, isValid, messageElement, message) {
    if (isValid) {
        inputElement.classList.remove("error");
        inputElement.classList.add("success");
        if (messageElement) messageElement.innerText = "";
    } else {
        inputElement.classList.remove("success");
        inputElement.classList.add("error");
        if (messageElement) messageElement.innerText = message;
    }
}

// ==========================
// Part 1: Variables & Conditionals (Interactive + Validation)
// ==========================
let checkAgeBtn = document.getElementById("checkAgeBtn");

checkAgeBtn.addEventListener("click", function () {
    let userNameInput = document.getElementById("userName");
    let userAgeInput = document.getElementById("userAge");
    let userName = userNameInput.value.trim();
    let userAge = parseInt(userAgeInput.value);
    let feedback = document.getElementById("ageCheck");

    let isValid = true;

    if (!userName) {
        setFieldState(userNameInput, false, feedback, "Name is required.");
        isValid = false;
    } else {
        setFieldState(userNameInput, true, null, "");
    }

    if (isNaN(userAge) || userAge <= 0) {
        setFieldState(userAgeInput, false, feedback, "Enter a valid age.");
        isValid = false;
    } else {
        setFieldState(userAgeInput, true, null, "");
    }

    if (!isValid) return;

    feedback.classList.remove("error-message");
    feedback.innerText =
        userAge >= 18
            ? `${userName} is an adult `
            : `${userName} is a minor `;
});

// ==========================
// Part 2: Functions (Interactive + Button + Enter Key Trigger)
// ==========================
function calculateTotal(a, b) {
    return a + b;
}

function calculateTotalFromInput() {
    let num1Input = document.getElementById("num1");
    let num2Input = document.getElementById("num2");
    let num1 = parseInt(num1Input.value);
    let num2 = parseInt(num2Input.value);
    let result = document.getElementById("totalResult");

    // Validation
    if (isNaN(num1) || isNaN(num2)) {
        result.innerText = "Please enter two valid numbers.";
        return;
    }

    let total = calculateTotal(num1, num2);
    result.innerText = "Total is: " + total;
}

// Attach the function to the button
let calcBtn = document.getElementById("calcBtn");
calcBtn.addEventListener("click", calculateTotalFromInput);

// Allow pressing Enter to trigger calculation
let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");

[num1Input, num2Input].forEach(input => {
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // prevent accidental form submit
            calculateTotalFromInput();
        }
    });
});

// ==========================
// Part 3: Loops (Interactive + Validation)
// ==========================
let generateLoopBtn = document.getElementById("generateLoopBtn");

generateLoopBtn.addEventListener("click", function () {
    let loopInput = document.getElementById("loopLimit");
    let loopLimit = parseInt(loopInput.value);
    let listElement = document.getElementById("loopList");

    listElement.innerHTML = ""; // Clear previous list

    if (isNaN(loopLimit) || loopLimit <= 0) {
        setFieldState(loopInput, false, null, "");
        listElement.innerHTML = "<li class='error-message'>Enter a positive number.</li>";
        return;
    }

    setFieldState(loopInput, true, null, "");

    for (let i = 1; i <= loopLimit; i++) {
        let li = document.createElement("li");
        li.innerText = "Number " + i;
        listElement.appendChild(li);
    }
});

// ==========================
// Part 4: DOM Manipulation
// ==========================
let toggleBtn = document.getElementById("toggleBtn");
let message = document.getElementById("message");

toggleBtn.addEventListener("click", function () {
    if (message.style.display === "none") {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
});

let addItemBtn = document.getElementById("addItemBtn");
let dynamicList = document.getElementById("dynamicList");

addItemBtn.addEventListener("click", function () {
    let newItem = document.createElement("li");
    newItem.innerText = "New item " + (dynamicList.children.length + 1);
    dynamicList.appendChild(newItem);
});

// Change text content dynamically
message.addEventListener("mouseover", function () {
    message.innerText = "You hovered over me ";
});
message.addEventListener("mouseout", function () {
    message.innerText = "Hello, I can be toggled!";
});
