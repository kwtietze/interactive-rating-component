const ratingCard = document.querySelector(".card-rating")
const thanksCard = document.querySelector(".card-thankyou")
const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again")

submitButton.addEventListener("click", () => {
    thanksCard.classList.remove("hidden")
    ratingCard.style.display = "none"
})

rateAgain.addEventListener("click", () => {
    thanksCard.classList.add("hidden")
    ratingCard.style.display = "block"
})

const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".rating-btn")

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})