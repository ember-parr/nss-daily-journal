import { useJournalEntries } from './JournalDataProvider.js';
import { entry } from './entries.js';


const contentSelector = document.querySelector(".previous-entries");

export const entryOnDom = () => {
    const entryArray = useJournalEntries();
    contentSelector.innerHTML = "";

    entryArray.forEach(
        (arrayObj) => {
            contentSelector.innerHTML += entry(arrayObj)
        }
    )
}