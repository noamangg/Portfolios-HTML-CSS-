let modeIcons = document.querySelectorAll(".mode-icon");

console.log(modeIcons);

if(localStorage.mode === "dark") {
    document.documentElement.classList.toggle(localStorage.mode);
    document.querySelector(`[data-mode="dark"]`).classList.add("display-none");
    document.querySelector(`[data-mode="light"]`).classList.remove("display-none");

}
modeIcons.forEach(i => {
    console.log(i);
    i.addEventListener('click', function(e) {
        console.log(e.target);
        if(e.target.dataset.mode === "dark") {
            localStorage.mode = "dark";
            document.querySelector(`[data-mode="light"]`).classList.remove("display-none");
        }
        else {
            localStorage.mode = "light"
            document.querySelector(`[data-mode="dark"]`).classList.remove("display-none");
        }
        e.target.classList.add("display-none");
        document.documentElement.classList.toggle("dark");

        
        
    })
})

console.log("he")

