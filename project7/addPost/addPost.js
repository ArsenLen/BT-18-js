if (!localStorage.getItem("user")) {
  window.location.href = "../login.html";
}

const form = document.querySelector(".add-form");
const title = document.querySelector('input[name="title"]');
const descr = document.querySelector('textarea[name="descr"]');

const user = JSON.parse(localStorage.getItem("user"));

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newPost = {
    title: title.value,
    descr: descr.value,
    author: user.id,
    date: new Date(),
  };
  addPost(newPost);
});

function addPost(post) {
  fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
}

// localStorage.setItem('user', JSON.stringify(obj))
// JSON.parse(localStorage.getItem('user')); jsonString ---> OBJ
