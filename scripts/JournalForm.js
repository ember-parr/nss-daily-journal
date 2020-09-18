import { getJournalEntries, saveEntry, useJournalEntries } from "./JournalDataProvider.js";

const contentTarget = document.querySelector(".inputCard");
const eventHub = document.querySelector(".wrapper");

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "submitButton") {
    const entryDate = document.querySelector("#entryDate");
    const entryConcept = document.querySelector("#entryConcept");
    const entryText = document.querySelector("#entryText");
    const entryMood = document.querySelector("#entryMood");

    const clearEntryForm = () => {
      entryDate.value="";
      entryConcept.value="";
      entryText.value="";
      entryMood.value="0";
    };

    if (entryConcept.value === "") {
      window.alert("please enter concept(s) covered")
    } else if (entryText.value === "") {
      window.alert("please provide entry text")
    } else {
      const newEntry = {
        date: entryDate.value,
        concept: entryConcept.value,
        entry: entryText.value,
        mood: entryMood.value
      };
      clearEntryForm();
      saveEntry(newEntry)
    }
  }
});

const render = (entryArray) => {
  const entryConcepts = entryArray.map((entryObj) => {
    let entryConceptName = entryObj.concept;
    return entryConceptName;
  });
  const sortedArray = entryConcepts.sort();
  contentTarget.innerHTML = `
    
    <h2>Journal Entry</h2>
                    <div class = "formBox">
                       
                                <div class="formRow">
                                    <div class="formLabel">Entry Date:</div>
                                    <input type="date" id="entryDate" name="entryDate" class="formInput"><br>
                                </div>
                                <div class="formRow">
                                    <div class="formLabel">Concept Covered:</div>
                                    <textarea rows="1" class="formInput" id="entryConcept" placeholder="Concept(s) Covered..."></textarea>
                                </div>

                                <div class="formRow">
                                    <div class="formLabel">Today's Entry</div>
                                    <textarea class="formInput" id="entryText" placeholder="write today's entry HERE"></textarea> 
                                </div>

                                <div class="formRow">
                                    <div class="formLabel">How's Your Mood? </div>
                                        <select class="formInput" id="entryMood">
                                        <option value = "happy">Happy</option>
                                        <option value = "sad">Sad</option>
                                        <option value = "overwhelmed">Overwhelmed</option>
                                        <option value = "giddy">Giddy</option>
                                        </select><br>
                                </div>
                        
                    </div>
                    <div class="formSubmit">
                        <button type="submit" form="form1" value="Submit" id="submitButton">Submit</button>
                    </div>

    `;
};

export const JournalForm = () => {
  getJournalEntries().then(() => {
    render(useJournalEntries());
  });
};
