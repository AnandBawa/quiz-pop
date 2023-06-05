import data from "./dataset.json" assert { type: "json" };

// assigning document elements
const topics = document.getElementById("topics");
const topic = document.getElementById("topic");
const status = document.getElementById("status");
const quiz = document.getElementById("quiz");
const questions = document.getElementById("questions");
const scores = document.getElementById("scores");
const answers = document.getElementById("answers");

// on page load display topics and check if topic is already attemped using localStorage
for (const key in data) {
  const div = document.createElement("div");
  div.id = key;
  div.className = "option";
  if (Object.hasOwn(localStorage, key)) {
    removePointerEvents(div);
    showScore(div);
  } else {
    clearUnfinished(key);
    div.innerText = key.toUpperCase();
    addPointerEvents(div);
  }
  topic.appendChild(div);
}

// function that displays/changes question
function quesDisplay(id, index = 0) {
  localStorage.setItem("currentIndex", index);

  if (index === 0) {
    removePointerEvents(document.getElementById("prev"));
  } else {
    addPointerEvents(document.getElementById("prev"));
  }

  if (index === data[id].length - 1) {
    removePointerEvents(document.getElementById("next"));
  } else {
    addPointerEvents(document.getElementById("next"));
  }

  quiz.querySelector("h3").value = id;
  quiz.querySelector("h3").innerHTML = `<u>${id.toUpperCase()}</u>`;
  document.getElementById("num").innerText = `${index + 1} of ${
    data[id].length
  }`;

  removeAllChildren(status);
  for (let i = 1; i <= data[id].length; i++) {
    const div = document.createElement("div");
    div.innerText = i;
    div.uniqueID = data[id][i - 1].id;
    if (Object.hasOwn(localStorage, div.uniqueID)) {
      div.classList.add("small-circle");
      div.classList.add("blue");
    }
    status.appendChild(div);
  }
  status.style.gridTemplateColumns = `repeat(${data[id].length}, 1fr)`;

  removeAllChildren(questions);
  const question = document.createElement("div");
  question.innerText = data[id][index].question;
  question.id = "question";
  question.uniqueID = data[id][index].id;
  questions.appendChild(question);

  for (let option of data[id][index].options) {
    const opt = document.createElement("div");
    opt.innerText = option;
    opt.classList.add("option");
    opt.classList.add("selectable");
    questions.appendChild(opt);
  }

  if (Object.hasOwn(localStorage, question.uniqueID)) {
    for (let node of questions.querySelectorAll("div")) {
      removePointerEvents(node);
      if (node.innerText == localStorage.getItem(question.uniqueID)) {
        node.style.background = "#393E46";
      }
    }
  }

  topics.classList.add("hidden");
  quiz.classList.remove("hidden");
}

// helper function to remove all child elements
function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// function to remove pointer events
function removePointerEvents(element) {
  element.style.pointerEvents = "none";
}

// function to add pointer events
function addPointerEvents(element) {
  element.style.pointerEvents = "auto";
}

// function to clear saved data of a topic if user exits/refreshes before finishing a quiz
function clearUnfinished(topic) {
  for (let element of data[topic]) {
    if (Object.hasOwn(localStorage, element.id)) {
      localStorage.removeItem(element.id);
    }
  }
}

// function to calculate the score
function score(topic) {
  let right = 0;
  for (let element of data[topic]) {
    if (Object.hasOwn(localStorage, element.id)) {
      if (localStorage.getItem(element.id) == element.answer) {
        right += 1;
      }
    }
  }
  localStorage.setItem(topic, right);
}

// function to show score on the main menu
function showScore(element) {
  element.innerHTML = `<s>${element.id.toUpperCase()}</s> &ensp; : &ensp; ${localStorage.getItem(
    element.id
  )} / ${data[element.id].length}`;
}

// function to show score card after finishing a quiz
function showScoreCard(topic) {
  scores.querySelector("h3").id = topic;
  scores.querySelector("h3").innerHTML = `<u>${topic.toUpperCase()}</u>`;
  document.getElementById("score").innerHTML = `${localStorage.getItem(
    topic
  )} / ${data[topic].length}`;

  removeAllChildren(answers);
  for (let i = 1; i <= data[topic].length; i++) {
    const div = document.createElement("div");
    div.innerText = i;
    div.uniqueID = data[topic][i - 1].id;
    if (localStorage.getItem(div.uniqueID) == data[topic][i - 1].answer) {
      div.classList.add("small-circle");
      div.classList.add("green");
    } else {
      div.classList.add("small-circle");
      div.classList.add("red");
    }
    answers.appendChild(div);
  }

  quiz.classList.add("hidden");
  scores.classList.remove("hidden");
}

// click event listener for all the navigation and inputs
document.addEventListener("click", (e) => {
  let element = e.target;

  if (Object.hasOwn(data, element.id) && element.tagName === "DIV") {
    localStorage.setItem("topic", element.id);
    quesDisplay(element.id);
  }

  if (element.classList.contains("selectable")) {
    if (element.selected === true) {
      element.selected = false;
      element.style.background = "";
      localStorage.removeItem(document.getElementById("question").uniqueID);
    } else {
      for (let option of element.parentNode.querySelectorAll("div")) {
        option.style.background = "";
        option.selected = false;
      }
      element.style.background = "#393E46";
      element.selected = true;
      localStorage.setItem(
        document.getElementById("question").uniqueID,
        element.innerText
      );
    }
  }

  if (element.id === "prev") {
    const currTopic = localStorage.getItem("topic");
    const currIndex = Number(localStorage.getItem("currentIndex"));
    if (currIndex > 0) {
      quesDisplay(currTopic, currIndex - 1);
    }
  }

  if (element.id === "next") {
    const currTopic = localStorage.getItem("topic");
    const currIndex = Number(localStorage.getItem("currentIndex"));
    if (currIndex < data[currTopic].length - 1) {
      quesDisplay(currTopic, currIndex + 1);
    }
  }

  if (element.id === "finish") {
    const currTopic = localStorage.getItem("topic");
    score(currTopic);
    showScoreCard(currTopic);
  }

  if (element.id === "exit" || element.id === "back") {
    for (let child of topic.querySelectorAll("div")) {
      if (Object.hasOwn(localStorage, child.id)) {
        removePointerEvents(child);
        showScore(child);
      }
    }
    const currTopic = localStorage.getItem("topic");
    clearUnfinished(currTopic);
    topics.classList.remove("hidden");
    quiz.classList.add("hidden");
    scores.classList.add("hidden");
  }

  if (element.id === "reset") {
    localStorage.clear();
    window.location.reload();
  }
});
