/* Сделать эти поля сворачиваемыми */

function renderComments() {
    let commentsField = document.querySelector(".comments");
    commentsField.textContent = "";

    let p = document.createElement("p");
    p.classList.add("comments-text", "text");
    p.textContent = "Комментарии";

    let fullname = document.createElement("input");
    fullname.type = "text";
    fullname.placeholder = "Имя-фамилия";
    fullname.classList.add("comment-text");

    let comments = document.createElement("textarea");
    comments.classList.add("text-area", "text");
    comments.placeholder = "оставте свой текст тута";
    comments.cols = 5;
    comments.rows = 7;

    let input = document.createElement("button");
    input.textContent = "Оставить коммент";
    input.classList.add("input-address", "text");
    input.addEventListener("click", (e) => {
        alert("Отправлено");
    })

    commentsField.appendChild(fullname);
    commentsField.appendChild(comments);
    commentsField.appendChild(input);
}
//renderComments()