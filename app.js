const title = document.querySelector(".hello h1");

function handelTitleClick(){
    const random = "#" + Math.round(Math.random() * 0xffffff).toString(16)
    console.log("title was clicked!");
    title.style.color = random;
}

title.addEventListener("click", handelTitleClick);