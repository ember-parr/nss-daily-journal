import { MoodFilter } from "./FilterByMood.js"
import { useMoods, getMoods } from "../MoodProvider.js"

const eventHub = document.querySelector(".wrapper")
const contentTarget = document.querySelector(".moodFilters")

export const FilterList = () => {
    getMoods()
    .then(() => {
        const moodOptions = useMoods()
        render(moodOptions)
    })
}

const render = (arrayOfMoods) => {
    contentTarget.innerHTML = `
        ${MoodFilter(arrayOfMoods)}
    `
}

eventHub.addEventListener("change", event => {
    if (event.target.name === "moodFilter") {
        const allMoods = useMoods()
        const moodObj = allMoods.find(mood => mood.id === parseInt(event.target.value))
        
        const moodChanged = new CustomEvent("moodChosen", {
            detail: {
                moodOptionChosen: moodObj.id
            }
        })

        eventHub.dispatchEvent(moodChanged)

    }
})