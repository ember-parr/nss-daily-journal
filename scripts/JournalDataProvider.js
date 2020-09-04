let entries = [];

export const getJournalEntries = () => {
  return fetch("http://localhost:8088/entries")
    .then((response) => response.json())
    .then((parsedEntries) => {
      entries = parsedEntries;
    });
};

export const useJournalEntries = () => {
  const sortedByDate = entries.sort(
    (currentEntry, nextEntry) =>
      Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  );
  return sortedByDate;
};
