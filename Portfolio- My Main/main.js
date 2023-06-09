let main = document.querySelector("main");
let aside = document.querySelector("aside");
let menuIcon = document.querySelector("#minu-icon");
aside.style.display === "block"

menuIcon.onclick = function (e) {
  if (aside.style.display === "none") aside.style.display = "block";
  else aside.style.display = "none";
};
if (main.clientWidth > 1024) {
}
main.onclick = function (e) {
  if (main.clientWidth <= 1024) {
    if (aside.style.display === "block") aside.style.display = "none";
  }
};

// Convert The Design To Dynamic Website

