import { getJournalEntries, useJournalEntries } from "./JournalDataProvider.js";
import { entryHTML } from "./entries.js";

const contentSelector = document.querySelector(".previous-entries");
const eventHub = document.querySelector(".wrapper");

export const JournalList = () => {
  getJournalEntries().then(() => {
    let entryArray = useJournalEntries();
    addEntriesToDom(entryArray);
  });
};

eventHub.addEventListener("entryStateChanged", () => {
  const newEntries = useJournalEntries();
  addEntriesToDom(newEntries)
})

const addEntriesToDom = (anArrayOfEntries) => {
  let HTMLRender = anArrayOfEntries.map((singleEntry) => {
    return entryHTML(singleEntry);
  });
  contentSelector.innerHTML = HTMLRender.join("");
};


const deleteEntry = (entryId) => {
  return fetch(`http://localhost:8088/entries/${entryId}`, {
    method:"delete"
  })
  .then(getJournalEntries)
}

eventHub.addEventListener("click", event => {
  if (event.target.id.startsWith("deleteEntry--")) {
    const [prefix, id] = event.target.id.split("--")
    let popUpMsg = confirm("This entry will be perminately deleted");
    if (popUpMsg === true) {
      deleteEntry(id).then(
        () => {
          const updatedEntries = useJournalEntries()
          addEntriesToDom(updatedEntries)
        }
      )
    } else {
      console.log("delete action cancleled.")
    }
  }
})

eventHub.addEventListener("moodChosen", event => {
  const journalEntries = useJournalEntries()

  const filteredEntries = journalEntries.filter(entry => entry.moodId === event.detail.moodOptionChosen)
  console.log("mood chosen: ", filteredEntries)
  addEntriesToDom(filteredEntries)
})