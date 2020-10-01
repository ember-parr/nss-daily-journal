export const MoodFilter = (allMoods) => {
    return `
        <fieldset class="fieldset">
            <legend>Filter Entries by Mood</legend>
            <div>
            ${
                allMoods.map(
                    (mood) => {
                        return `<input type="radio" name="moodFilter" value="${mood.id}"/>
                        <label for="moodFilter--${mood.mood}">${mood.mood}</label>
                        `
                    }
                ).join("")
            }
            </div>
        </fieldset>
        `
}