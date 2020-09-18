import { getJournalEntries, useJournalEntries } from "./JournalDataProvider.js";
import { entry } from "./entries.js";

const contentSelector = document.querySelector(".previous-entries");
let entryArray = [];

export const JournalList = () => {
  getJournalEntries().then(() => {
    entryArray = useJournalEntries();
    addEntriesToDom(entryArray);
  });
};

const addEntriesToDom = (anArrayOfEntries) => {
  let HTMLRender = anArrayOfEntries.map((singleEntry) => {
    return entry(singleEntry);
  });
  contentSelector.innerHTML = HTMLRender.join("");
};
