let entries = [];
let entriesSortedByDate = [];

export const getJournalEntries = () => {
  return fetch("http://localhost:8088/entries")
    .then((response) => response.json())
    .then((parsedEntries) => {
      entries = parsedEntries;
    });
};

export const useJournalEntries = () => {
  return entries.slice();
};
