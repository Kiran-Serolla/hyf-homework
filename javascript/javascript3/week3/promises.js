const ul1 = document.getElementById("repo1");
const ul2 = document.getElementById("repo2");
const ul3 = document.getElementById("repo3");
const body = document.querySelector("body");

const promise1 = fetch(
  "https://api.github.com/search/repositories?q=user:benna100"
)
  .then((response) => response.json())
  .then((repo1) => {
    const li1 = document.createElement("li");
    li1.innerHTML = ` Full Name : ${repo1.items[0].full_name}`;
    ul1.appendChild(li1);
    const li2 = document.createElement("li");
    li2.innerHTML = ` Owner : ${repo1.items[0].owner.login}`;
    ul1.appendChild(li2);
    const li3 = document.createElement("li");
    li3.innerHTML = ` URL : ${repo1.items[0].owner.url}`;
    ul1.appendChild(li3);
  });

const promise2 = fetch(
  "https://api.github.com/search/repositories?q=user:Pallabi-ghosh"
)
  .then((response) => response.json())
  .then((repo2) => {
    const li1 = document.createElement("li");
    li1.innerHTML = ` Full Name : ${repo2.items[0].full_name}`;
    ul2.appendChild(li1);
    const li2 = document.createElement("li");
    li2.innerHTML = ` Owner : ${repo2.items[0].owner.login}`;
    ul2.appendChild(li2);
    const li3 = document.createElement("li");
    li3.innerHTML = ` URL : ${repo2.items[0].owner.url}`;
    ul2.appendChild(li3);
  });
const promise3 = fetch(
  "https://api.github.com/search/repositories?q=user:AnilMula"
)
  .then((response) => response.json())
  .then((repo3) => {
    const li1 = document.createElement("li");
    li1.innerHTML = ` Full Name : ${repo3.items[0].full_name}`;
    ul3.appendChild(li1);
    const li2 = document.createElement("li");
    li2.innerHTML = ` Owner : ${repo3.items[0].owner.login}`;
    ul3.appendChild(li2);
    const li3 = document.createElement("li");
    li3.innerHTML = ` URL : ${repo3.items[0].owner.url}`;
    ul3.appendChild(li3);
  });
Promise.all([promise1, promise2, promise3]).then(() => {
  console.log("Resolved all promises at once");
});
