const   portfolio = document.querySelector(".portfolio"),
        portfolioList = portfolio.querySelectorAll(".portfolio-item");

for(let i =0; i < portfolioList.length; i++)
{
    const a = portfolioList[i].querySelector("i")
    a.addEventListener("click", function ()
        {
            if(portfolioList[i].querySelector("i").classList.contains("fa-chevron-down"))
            {
                portfolioList[i].querySelector("i").classList.remove("fa-chevron-down")
                portfolioList[i].querySelector("i").classList.add("fa-chevron-up")
            }
            else
            {
                for(let j = 0; j < portfolioList.length; j++)
                {
                    if(portfolioList[j].querySelector("i").classList.contains("fa-chevron-up"))
                    {
                        portfolioList[j].querySelector("i").classList.remove("fa-chevron-up")
                        portfolioList[j].querySelector("i").classList.add("fa-chevron-down")
                    }
                }
            }
        }
    )
}