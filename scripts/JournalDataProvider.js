const journal = [
    {
        id: 1,
        date: "08/10/2020",
        concept: "Terminal Basics",
        entry: "We talked about the terminal & command line... having this much power to destroy my computer is terifying",
        mood: "Skurrd"
    },
    {
        id: 2,
        date: "08/11/2020",
        concept: "HTML Structure & Layout",
        entry: "Basic stuff. Semantic Tags, divs, classes etc. Also went over flexbox functionality",
        mood: "Giddy"
    },
    {
        id: 3,
        date: "08/12/2020",
        concept: "Fish in my Aquarium",
        entry: "used flex box to display fishies in Martin's Aquarium. very nice, very nice!",
        mood: "Accomplished"
    },
    {
        id: 4,
        date: "08/13/2020",
        concept: "GitHub",
        entry: "lord. have. mercy. GitHub is a beautifully horrifying place on the internet. so much excite.",
        mood: "Overwhelmed"
    },
    {
        id: 5,
        date: "08/14/2020",
        concept: "Group Project #1",
        entry: "Began working on group project numero uno! Our group hit a great stride working through problems together & kicked some GitHub Ass. So many AH-HA moments today.",
        mood: "Sad"
    }
]


export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}