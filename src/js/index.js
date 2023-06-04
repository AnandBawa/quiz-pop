import data from "./dataset.json" assert { type: "json" };

const topics = document.getElementById("topics");
const topic = document.getElementById("topic");
const quiz = document.getElementById("quiz");
const questions = document.getElementById("questions");
const scores = document.getElementById("scores");

for (const key in data) {
  const div = document.createElement("div");
  div.id = key;
  div.className = "option";
  if (Object.hasOwn(localStorage, key)) {
    div.style.pointerEvents = "none";
    div.innerHTML = `<s>${key.toUpperCase()}</s> <small>Score: ${localStorage.getItem(
      key
    )} / ${data[key].length}</small>`;
    //score(key);
  } else {
    clearUnfinished(key);
    div.innerText = key.toUpperCase();
    div.style.pointerEvents = "auto";
  }
  topic.appendChild(div);
}

function quesDisplay(id, index = 0) {
  localStorage.setItem("currentIndex", index);

  quiz.querySelector("h3").value = id;
  quiz.querySelector("h3").innerHTML = `<u>${id.toUpperCase()}</u>`;
  document.getElementById("num").innerText = `${index + 1} of ${
    data[id].length
  }`;

  removeAllChildren(document.getElementById("questions"));
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
    if (opt.innerText.toUpperCase() === data[id][index].answer.toUpperCase()) {
      opt.value = 1;
    } else {
      opt.value = 0;
    }
    questions.appendChild(opt);
  }

  topics.classList.add("hidden");
  quiz.classList.remove("hidden");
}

function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function checkAllCompleted(topic) {
  for (let element of data[topic]) {
    if (localStorage.getItem(element.id) == null) {
      return false;
    }
  }
  return true;
}

function clearUnfinished(topic) {
  for (let element of data[topic]) {
    if (Object.hasOwn(localStorage, element.id)) {
      localStorage.removeItem(element.id);
    }
  }
}

function score(topic) {
  let right = 0;
  for (let element of data[topic]) {
    if (Object.hasOwn(localStorage, element.id)) {
      if (localStorage.getItem(element.id) == 1) {
        right += 1;
      }
    }
  }
  localStorage.setItem(topic, right);
}

function showScore(topic) {
  scores.querySelector("h3").id = topic;
  scores.querySelector("h3").innerHTML = `<u>${topic.toUpperCase()}</u>`;
  document.getElementById(
    "score"
  ).innerText = `You scored ${localStorage.getItem(topic)} / ${
    data[topic].length
  }`;

  quiz.classList.add("hidden");
  scores.classList.remove("hidden");
}

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
      element.style.background = "green";
      element.selected = true;
      localStorage.setItem(
        document.getElementById("question").uniqueID,
        element.value
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
    //console.log(currIndex + 1);
    if (currIndex < data[currTopic].length - 1) {
      quesDisplay(currTopic, currIndex + 1);
    }

    if (checkAllCompleted(currTopic)) {
      score(currTopic);
      showScore(currTopic);
    }
  }

  if (element.id === "finish") {
    const currTopic = localStorage.getItem("topic");
    score(currTopic);
    showScore(currTopic);
  }

  if (element.id === "exit" || element.id === "back") {
    for (let child of topic.querySelectorAll("div")) {
      if (Object.hasOwn(localStorage, child.id)) {
        child.style.pointerEvents = "none";
        child.innerHTML = `<s>${child.id.toUpperCase()}</s> <small>Score: ${localStorage.getItem(
          child.id
        )} / ${data[child.id].length}</small>`;
        //score(child.id);
      }
    }
    topics.classList.remove("hidden");
    quiz.classList.add("hidden");
    scores.classList.add("hidden");
  }
});
