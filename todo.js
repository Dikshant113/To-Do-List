function addMore() {
  let input = (document.getElementById("input").value);
  if (input == ""){
    alert("Please Enter a Value");
  }
  else {
      
    let list = document.getElementById("list");

    let li = document.createElement("li");
    li.textContent = input;
    let a = document.createElement("a");
    a.textContent = "x";
    a.href = "javascript:void(0)";
    a.className = "remove";
    li.appendChild(a);

    let pos = list.firstElementChild;

    if (pos == null) {
      list.appendChild(li);
    } else {
      list.insertBefore(li, pos);
    }
  }

  document.getElementById("input").value = "";
}

let btn = document.querySelector("ul");
btn.addEventListener("click", function (e) {
  let list = document.getElementById("list");
  let li = e.target.parentNode;
  list.removeChild(li);
});

