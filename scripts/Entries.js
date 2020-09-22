export const entryHTML = (entryObj) => {
    return `
    <div class="entry-card">
        <h3>${entryObj.concept}</h3>
        <p>${entryObj.entry}</p>
        <p class="caption">Mood: ${entryObj.mood.mood}  •  ${entryObj.date}   • </p>
    </div>
    `
}


