// ==========================================
// Task 1: Change Text
// ==========================================

const title = document.getElementById("title");
const changeTextBtn = document.getElementById("changeTextBtn");

changeTextBtn.addEventListener("click", function () {
    title.textContent = "Hello JavaScript!";
});

// ==========================================
// Task 2: Change Paragraph
// ==========================================

const paragraph = document.getElementById("paragraph");
const changeParagraphBtn = document.getElementById("changeParagraphBtn");

changeParagraphBtn.addEventListener("click", function () {
    paragraph.textContent = "I love JavaScript.";
});

// ==========================================
// Task 3: Show & Hide
// ==========================================

const showHideText = document.getElementById("showHideText");
const showBtn = document.getElementById("showBtn");
const hideBtn = document.getElementById("hideBtn");

showBtn.addEventListener("click", function () {
    showHideText.style.display = "block";
});
hideBtn.addEventListener("click", function () {
    showHideText.style.display = "none";
});

// ==========================================
// Task 4: Change Background Color
// ==========================================

const colorBox = document.getElementById("colorBox");
const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", function () {
    colorBox.style.backgroundColor = "purple";
});

// ==========================================
// Task 5: Increase Number
// ==========================================

let increaseNumber = 0;
const increaseNumberDisplay = document.getElementById("increaseNumber");
const increaseBtn = document.getElementById("increaseBtn");

increaseBtn.addEventListener("click", function () {
    increaseNumber++;
    increaseNumberDisplay.textContent = increaseNumber;
});

// ==========================================
// Task 6: Decrease Number
// ==========================================

let decreaseNumber = 10;
const decreaseNumberDisplay = document.getElementById("decreaseNumber");
const decreaseBtn = document.getElementById("decreaseBtn");

decreaseBtn.addEventListener("click", function () {
    decreaseNumber--;
    decreaseNumberDisplay.textContent = decreaseNumber;
});

// ==========================================
// Task 7: Counter
// ==========================================

let count = 0;
const counter = document.getElementById("counter");
const counterIncreaseBtn = document.getElementById("counterIncreaseBtn");
const counterDecreaseBtn = document.getElementById("counterDecreaseBtn");
const resetBtn = document.getElementById("resetBtn");

counterIncreaseBtn.addEventListener("click", function () {
    count++;
    counter.textContent = count;
});
counterDecreaseBtn.addEventListener("click", function () {
    count--;
    counter.textContent = count;
});
resetBtn.addEventListener("click", function () {
    count = 0;
    counter.textContent = count;
});

// ==========================================
// Task 8: Input Value Show
// ==========================================

const nameInput =document.getElementById("nameInput");
const showNameBtn = document.getElementById("showNameBtn");
const nameOutput = document.getElementById("nameOutput");

showNameBtn.addEventListener("click", function () {
    const name = nameInput.value;
    nameOutput.textContent = "Hello " + name + "!";
});

// ==========================================
// Task 9: Change Image
// ==========================================

const myImage = document.getElementById("myImage");
const changeImageBtn = document.getElementById("changeImageBtn");

changeImageBtn.addEventListener("click", function () {
    myImage.src ="images/ronaldo.jpg";
});

// ==========================================
// Task 10: Change Text Color
// ==========================================

const colorText = document.getElementById("colorText");
const textColorBtn = document.getElementById("textColorBtn");

textColorBtn.addEventListener("click", function () {
    colorText.style.color = "#ff0000";
});

// ==========================================
// Task 11: Simple Login Check
// ==========================================

const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const loginMessage = document.getElementById("loginMessage");

loginBtn.addEventListener("click", function () {
    if (
        username.value === "admin" &&
        password.value === "1234"
    ) {
        loginMessage.textContent =
            "Login Successful";
    } else {
        loginMessage.textContent =
            "Invalid Username or Password";
    }
});

// ==========================================
// Task 12: Age Check
// ==========================================

const age = document.getElementById("age");
const ageBtn = document.getElementById("ageBtn");
const ageResult = document.getElementById("ageResult");

ageBtn.addEventListener("click", function () {
    const userAge = Number(age.value);
    if (userAge >= 18) {
        ageResult.textContent ="You can vote.";
    } else {
        ageResult.textContent ="You cannot vote.";
    }
});

// ==========================================
// Task 13: Add Two Numbers
// ==========================================

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const addBtn = document.getElementById("addBtn");
const addResult = document.getElementById("addResult");

addBtn.addEventListener("click", function () {
    const number1 = Number(num1.value);
    const number2 = Number(num2.value);
    const result = number1 + number2;

    addResult.textContent ="Result = " + result;
});

// ==========================================
// Task 14: Even or Odd
// ==========================================

const numberInput = document.getElementById("numberInput");
const checkNumberBtn = document.getElementById("checkNumberBtn");
const evenOddResult = document.getElementById("evenOddResult");

checkNumberBtn.addEventListener("click", function () {
    const number = Number(numberInput.value);
    if (number % 2 === 0) {
        evenOddResult.textContent = number + " is Even";
    } else {
        evenOddResult.textContent = number + " is Odd";
    }
});

// ==========================================
// Task 15: Simple To-Do List
// ==========================================

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function () {
    const task = taskInput.value;
    if (task === "") {
        return;
    }
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
    taskInput.value = "";
});