const eventHub = document.querySelector(".wrapper");

const dispatchStateChangeEvent = () => {
  const entryStateChangedEvent = new CustomEvent("entryStateChanged");
  eventHub.dispatchEvent(entryStateChangedEvent)
}



let entries = [];

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


export const saveEntry = (entryObj) => {
  return fetch("http://localhost:8088/entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(noteObj),
  })
  .then(() => {
    return getJournalEntries()
  })
  .then(dispatchStateChangeEvent);
}