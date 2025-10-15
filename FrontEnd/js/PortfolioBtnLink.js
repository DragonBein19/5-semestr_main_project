const   portfolio = document.querySelector(".portfolio"),
        portfolioList = portfolio.querySelectorAll(".portfolio-item");

for(let i =0; i < portfolioList.length; i++)
{
    const a = portfolioList[i].querySelector("i")
    a.addEventListener("click", function ()
        {
            if(a.classList.contains("fa-chevron-down"))
            {
                a.classList.remove("fa-chevron-down")
                a.classList.add("fa-chevron-up")
            }
            else
            {
                a.classList.remove("fa-chevron-up")
                a.classList.add("fa-chevron-down")
            }
        })
}