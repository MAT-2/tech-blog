const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-name").value.trim();
  const body = document.querySelector("#post-desc").value.trim();

  if (title && body) {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("You have failed to create your tech blog!");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("You were not able to delete your tech blog post!");
    }
  }
};

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".post-list")
  .addEventListener("click", delButtonHandler);
