import { getJournalEntries, useJournalEntries } from "./JournalDataProvider.js";

const contentTarget = document.querySelector(".inputCard");
const eventHub = document.querySelector(".wrapper");

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "submitButton") {
    //set input values to variable here
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
                        <form>
                                <div class="formRow">
                                    <label for="entryDate" class="formLabel">Entry Date:</label>
                                    <input type="date" id="entryDate" name="entryDate" class="formInput"><br>
                                </div>
                                <div class="formRow">
                                    <label for="entryFrom--concept" class="formLabel">Concept Covered:</label>
                                    <textarea rows="1" class="formInput" placeholder="Concept(s) Covered..."></textarea>
                                </div>

                                <div class="formRow">
                                    <label for="entryText" class="formLabel">Today's Entry</label>
                                    <textarea rows="4" class="formInput" placeholder="write today's entry HERE"></textarea> 
                                </div>

                                <div class="formRow">
                                    <label class="formLabel">Select list</label>
                                        <select class="formInput">
                                        <option value = "happy">Happy</option>
                                        <option value = "sad">Sad</option>
                                        <option value = "overwhelmed">Overwhelmed</option>
                                        <option value = "giddy">Giddy</option>
                                        </select><br>
                                </div>
                        </form>
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
