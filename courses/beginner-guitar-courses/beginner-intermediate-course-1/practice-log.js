// const testFunction = () => {

//     console.log('howdy')
// }


const dateInput = document.querySelector("#dateInput");
const startTimeInput = document.querySelector("#startTimeInput");
const endTimeInput = document.querySelector("#endTimeInput");
const topicInput = document.querySelector("#topicInput");
const notesInput = document.querySelector("#notesInput");
const myPracticeLogDisplay = document.querySelector("#myPracticeLogDisplay");
const dateInputCell = document.querySelector("#dateInputCell");
const startInputCell = document.querySelector("#startInputCell");
const endInputCell = document.querySelector("#endInputCell");
const topicCell = document.querySelector("#topicCell");
notesInputCell = document.querySelector("#notesInputCell");
dateHeader = document.querySelector("#dateHeader");
startHeader = document.querySelector("#startHeader");
endHeader = document.querySelector("#endHeader");
topicHeader = document.querySelector("#topicHeader");
notesHeader = document.querySelector("#notesHeader");

let entries = [];

const addItem = () => {    
    let date = new Date(dateInput.value);
        date.setMinutes( date.getMinutes() + date.getTimezoneOffset() );
        // date = date.toDateString();
    const startTime = startTimeInput.value;
    const endTime = endTimeInput.value;
    const topic = topicInput.value;
    const notes = notesInput.value;
    //total time math
    const startTimeSplit = startTime.split(":");
    const endTimeSplit = endTime.split(":");
    const hrMath = endTimeSplit[0] - startTimeSplit[0];
    const minMath = endTimeSplit[1] - startTimeSplit[1];
    const totalTime = {"hrs": hrMath, "min": minMath};

    const entry = {"date": date, "startTime": startTime, "endTime": endTime, "totalTime": totalTime, "topic": topic, "notes": notes};
    entries.push(entry);

    localStorage.setItem("entries", JSON.stringify(entries));
    displayLog();
}


const to12Hr = (time) => {
    let newStartTime = time.split(":");
    let hours = newStartTime[0];
    const AmOrPm = hours >= 12 ? "PM" : "AM";
        hours = (hours % 12) || 12;
    const minutes = newStartTime[1];
    const finalTime = `${hours}:${minutes} ${AmOrPm}`;
    return finalTime
}

const dateFormat = (date) => {
    const year = date.slice(0,4);
    const month = date.slice(5,7);
    const day = date.slice(8,10);
    const finalDate = `${month}/${day}/${year}`;
    return finalDate;
}

const showHideMyLog = () => {
    if(JSON.parse(localStorage.getItem("entries")).length === 0 || JSON.parse(localStorage.getItem("entries")) === null){
        // console.log(myPracticeLogDisplay)
        myPracticeLogDisplay.style.display = "none";
    } else {
        myPracticeLogDisplay.style.display = "block";
    }
}


const displayLog = () => {
    const myPracticeLog = document.querySelector("#myPracticeLog");

    let newEntries = localStorage.getItem("entries");
    newEntries = JSON.parse(newEntries);
    myPracticeLog.textContent = ""
    newEntries.forEach(ent => {
        // console.log(dateFormat(ent.date));
        const row = document.createElement("tr");

        
        const newDate = document.createElement("td");
            newDate.textContent = dateFormat(ent.date);
                const newDateInput = document.createElement("input");
                    newDateInput.setAttribute("type", "date");
                    newDateInput.style.display = "none";
                    const dateEditBtn = document.createElement("i");
                        dateEditBtn.className = "fas fa-edit edit-hover";
                        dateEditBtn.style.display= "none";
                        newDate.appendChild(dateEditBtn);
                    const removeDateBtn = document.createElement("i");
                        removeDateBtn.className = "far fa-trash-alt remove-hover";
                        removeDateBtn.style.display = "none";
                        newDate.appendChild(removeDateBtn);
                newDate.addEventListener("mouseover", function showEditDateBtn() {
                    dateEditBtn.style.display= "block";
                    removeDateBtn.style.display = "block"
                });
                newDate.addEventListener("mouseout", function showEditDateBtn() {
                    dateEditBtn.style.display= "none";
                    removeDateBtn.style.display= "none";
                });
                newDate.appendChild(newDateInput);
            row.appendChild(newDate);
            
        
        
        const newStartTime = document.createElement("td");
            newStartTime.textContent = to12Hr(ent.startTime);
            const newStartInput = document.createElement("input");
                newStartInput.setAttribute("type", "time");
                newStartInput.style.display = "none";
            const startEditBtn = document.createElement("i");
                startEditBtn.className = "fas fa-edit edit-hover";
                startEditBtn.style.display= "none";
                newStartTime.appendChild(startEditBtn);
                newStartTime.addEventListener("mouseover", function showEditBtn() {
                    startEditBtn.style.display= "block";
                });
                newStartTime.addEventListener("mouseout", function showEditBtn() {
                    startEditBtn.style.display= "none";
                });
                newStartTime.appendChild(newStartInput);
            row.appendChild(newStartTime);



            const newEndTime = document.createElement("td");
                newEndTime.textContent = to12Hr(ent.endTime);
                const newEndInput = document.createElement("input");
                    newEndInput.setAttribute("type", "time");
                    newEndInput.style.display = "none";
                const endEditBtn = document.createElement("i");
                    endEditBtn.className = "fas fa-edit edit-hover";
                    endEditBtn.style.display= "none";
                    newEndTime.appendChild(endEditBtn);
                    newEndTime.addEventListener("mouseover", function showEditBtn() {
                    endEditBtn.style.display= "block";
                    });
                    newEndTime.addEventListener("mouseout", function showEditBtn() {
                        endEditBtn.style.display= "none";
                    });
                    newEndTime.appendChild(newEndInput);
                row.appendChild(newEndTime);



            const totalTime = document.createElement("td");
                totalTime.textContent = `${ent.totalTime.hrs}hrs ${ent.totalTime.min}min`;
                row.appendChild(totalTime);



            const topicNotes = document.createElement("td");
                topicNotes.innerHTML = `<strong>Topic: </strong>${ent.topic}<br><strong>Notes: </strong>${ent.notes}`;


                const newTopicInput = document.createElement("input");
                    newTopicInput.setAttribute("type", "text");
                    newTopicInput.style.display = "none";
                const topicEditBtn = document.createElement("i");
                    topicEditBtn.className = "fas fa-edit edit-hover";
                    topicEditBtn.style.display= "none";
                    topicNotes.appendChild(topicEditBtn);
                    topicNotes.addEventListener("mouseover", function showEditBtn() {
                    topicEditBtn.style.display= "block";
                    });
                    topicNotes.addEventListener("mouseout", function showEditBtn() {
                        topicEditBtn.style.display= "none";
                    });
                    topicNotes.appendChild(newTopicInput);


                row.appendChild(topicNotes);



        myPracticeLog.insertAdjacentElement("afterbegin", row);
    })
    showHideMyLog();
}

const resizeRows = () => {
    const topicInput = document.querySelector("#topicInput");
    topicInput.addEventListener("input", autoResize, false);
    const notesInput = document.querySelector("#notesInput");
    notesInput.addEventListener("input", autoResize, false);
    function autoResize() { 
        this.style.height = "auto"; 
        this.style.height = this.scrollHeight + "px";
    }
}

const handleFieldClick = () => {
    dateInputCell.addEventListener("click", function() {
        dateInput.focus();
    })
    dateHeader.addEventListener("click", function() {
        dateInput.focus();
    })
    startInputCell.addEventListener("click", function() {
        startTimeInput.focus();
    })
    startHeader.addEventListener("click", function() {
        startTimeInput.focus();
    })
    endInputCell.addEventListener("click", function() {
        endTimeInput.focus();
    })
    endHeader.addEventListener("click", function() {
        endTimeInput.focus();
    })
    topicCell.addEventListener("click", function() {
        topicInput.focus();
    })
    topicHeader.addEventListener("click", function() {
        topicInput.focus();
    })
    notesInputCell.addEventListener("click", function() {
        notesInput.focus();
    })
    notesHeader.addEventListener("click", function() {
        notesInput.focus();
    })
}


const pageLoadDisplay = () => {
    resizeRows();
    handleFieldClick();
    if (localStorage.getItem("entries")) {
        displayLog();
        console.log("existing user");
    } else {
        console.log("new user");
        localStorage.setItem("entries", JSON.stringify([]));
        displayLog();
    }
}

pageLoadDisplay();

const clearPracticeLog = () => {
    if(confirm("Are you sure? This will clear all practice sessions.")) {
        localStorage.clear();
        localStorage.setItem("entries", JSON.stringify([]));
        displayLog();
    }
}





