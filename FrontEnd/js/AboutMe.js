var AboutMetext = ""

fetch("textFiles/AboutMe.txt").then(response => {
    return response.text();
}).then(text => {
    const AboutMeElement = document.querySelector(".about-me");
    AboutMeElement.innerHTML = text;
})