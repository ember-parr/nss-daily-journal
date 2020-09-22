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
