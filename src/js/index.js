import data from "./dataset.json" assert { type: "json" };
//console.log(data);

const topics = document.getElementById("topics");
const topic = document.getElementById("topic");
const quiz = document.getElementById("quiz");
const questions = document.getElementById("questions");

for (const key in data) {
  const div = document.createElement("div");
  div.className = "option";
  div.id = key;
  div.innerText = key.toUpperCase();
  topic.appendChild(div);
}

document.addEventListener("click", (e) => {
  let element = e.target;
  if (Object.hasOwn(data, element.id)) {
    quesDisplay(element.id);
  }
});

function quesDisplay(id, index = 0) {
  topics.classList.add("hidden");
  //console.log(data[id][index]);
  quiz.querySelector("h3").value = id;
  quiz.querySelector("h3").innerText = id.toUpperCase();
  document.getElementById("num").innerText = index + 1;

  removeAllChildNodes(document.getElementById("questions"));

  const question = document.createElement("div");
  question.innerText = data[id][index].question;
  question.id = "question";
  questions.appendChild(question);

  for (let option of data[id][index].options) {
    const opt = document.createElement("div");
    opt.innerText = option;
    opt.classList.add("option");
    questions.appendChild(opt);
  }

  quiz.classList.remove("hidden");
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
