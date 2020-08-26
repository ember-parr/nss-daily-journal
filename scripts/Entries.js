export const entry = (entryObj) => {
    return `
    <div class="entry-card">
        <h3>${entryObj.concept}</h3>
        <p>${entryObj.entry}</p>
        <caption>mood: ${entryObj.mood}  •  ${entryObj.date}   • </caption>
    </div>
    `
}


