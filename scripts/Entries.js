export const entry = (entryObj) => {
    return `
    <div class="entry-card">
        <h3>${entryObj.concept}</h3>
        <p>${entryObj.entry}</p>
        <p class="caption">Mood: ${entryObj.mood}  •  ${entryObj.date}   • </p>
    </div>
    `
}


