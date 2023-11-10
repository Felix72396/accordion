// const accordions = document.getElementsByClassName("content-container");

// accordions.childNodes.forEach(accordion => {
//     accordion.onclick = () => {
//         accordion.classList.toggle("active");
//     }
// })

window.addEventListener("click", (e) => {
 console.log(e.target)
    if(e.target.matches(".question"))
    {
        const contentContainer = e.target.parentNode;
        contentContainer.classList.toggle("active");
    }

    // if(e.target && e.target.tagName === "DIV")
    // {
    //     const contentContainer = e.target.parentNode;
    //     contentContainer.classList.toggle("active")
    // }

}); 