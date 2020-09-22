import { getJournalEntries, saveEntry, useJournalEntries } from "./JournalDataProvider.js";
import { getMoods, useMoods } from "./MoodProvider.js"

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
        moodId: parseInt(entryMood.value)
      };
      clearEntryForm();
      saveEntry(newEntry)
    }
  }
});

let moods;

export const journalMoodSelect = () => {
  getMoods()
  .then(()=> {
    moods = useMoods();
  })
}

const render = (moods, entryArray) => {
  console.log("moods", moods)
  console.log(entryArray)
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
                                      <option value="0"> Choose One:</option>
                                      ${moods.map((moodStr)=> {
                                        return `<option value="${moodStr.id}">${moodStr.mood}</option>`
                                      })}</select>
                                </div>
                        
                    </div>
                    <div class="formSubmit">
                        <button type="submit" value="Submit" id="submitButton">Submit</button>
                    </div>

    `;
};

export const JournalForm = () => {
  getJournalEntries().then(() => {
    render(moods, useJournalEntries());
  });
};
