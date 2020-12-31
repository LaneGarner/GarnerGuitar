

const displayForm = document.querySelector("#displayForm");
const formDisplay = document.querySelector("#formDisplay");
const minusSign = document.querySelector("#minusSign");
const plusSign = document.querySelector("#plusSign");
const practiceTimerStartBtn = document.querySelector("#practiceTimerStartBtn");
const practiceTimerEndBtn = document.querySelector("#practiceTimerEndBtn");
const practiceTimerResetBtn = document.querySelector("#practiceTimerResetBtn");
const startDateInput = document.querySelector("#startDateInput");
const endDateInput = document.querySelector("#endDateInput");
const startTimeInput = document.querySelector("#startTimeInput");
const endTimeInput = document.querySelector("#endTimeInput");
const topicInput = document.querySelector("#topicInput");
const notesInput = document.querySelector("#notesInput");
const submit = document.querySelector("#submit");
const totalTimeInput = document.querySelector("#totalTime")


const displayLogShow = document.querySelector("#displayLogShow");
const displayLogHide = document.querySelector("#displayLogHide");
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

// const diff_minutes = (dt2, dt1) => {

//     let diff =(dt2.getTime() - dt1.getTime()) / 1000;
//     diff /= 60;
//     return Math.abs(Math.round(diff));
// }

const addItem = () => {    
    // let date = new Date(dateInput.value);
        // date.setMinutes( date.getMinutes() + date.getTimezoneOffset() );
        // date = date.toDateString();
    // let startTime = new Date(date)


    // const startTime = startTimeInput.value;
    // const endTime = endTimeInput.value;

    // let startTime = new Date(dateInput.value);
    // startTime.setMinutes( startTime.getMinutes() + startTime.getTimezoneOffset() );
    // const startTimeInputArr = startTimeInput.value.split(":")
    // startTime.setHours(startTimeInputArr[0], startTimeInputArr[1])
    // // startTime.setMinutes(startTimeInputArr[1])
    // console.log(startTimeInputArr[0])

    let startTime = new Date(startDateInput.value);
    // startTime.setMinutes( startTime.getMinutes() + startTime.getTimezoneOffset() );
    // const startTimeInputArr = startTimeInput.value.split(":")
    // startTime.setHours(startTimeInputArr[0])
    // startTime.setMinutes(startTimeInputArr[1])
    console.log(startTime)
    
    // let endTime = new Date(endDateInput.value);
    // endTime.setMinutes( endTime.getMinutes() + endTime.getTimezoneOffset() );
    // const endTimeInputArr = endTimeInput.value.split(":")
    // endTime.setHours(endTimeInputArr[0])
    // endTime.setMinutes(endTimeInputArr[1])
    // console.log(endTime)
    
    // const totalTime = diff_minutes(endTime, startTime)
    // let date = startTime.toDateString();
    // console.log(date)
    const totalTime = totalTimeInput.value;




    const topic = topicInput.value;
    const notes = notesInput.value;
    //total time math
    // const startTimeSplit = startTime.split(":");
    // const endTimeSplit = endTime.split(":");
    // const hrMath = endTimeSplit[0] - startTimeSplit[0];
    // const minMath = endTimeSplit[1] - startTimeSplit[1];
    // const totalTime = {"hrs": hrMath, "min": minMath};

    const entry = {"startTime": startTime, "totalTime": totalTime, "topic": topic, "notes": notes};
    entries.push(entry);
    

    localStorage.setItem("entries", JSON.stringify(entries));
    displayLog();
}


const to12Hr = (time) => {
    let newTime = time.split(":");
    let hours = newTime[0];
    const AmOrPm = hours >= 12 ? "PM" : "AM";
        hours = (hours % 12) || 12;
    const minutes = newTime[1];
    const finalTime = `${hours}:${minutes} ${AmOrPm}`;
    return finalTime
    // return time
}

const dateFormat = (date) => {
    const year = date.slice(0,4);
    const month = date.slice(5,7);
    const day = date.slice(8,10);
    const finalDate = `${month}/${day}/${year}`;
    return finalDate;
}

const showHideLog = () => {
    if(JSON.parse(localStorage.getItem("entries")).length === 0 || JSON.parse(localStorage.getItem("entries")) === null){
        // console.log(myPracticeLogDisplay)
        myPracticeLogDisplay.style.display = "none";
    } else {
        myPracticeLogDisplay.style.display = "block";
    }
}


const displayLog = () => {
    const myPracticeLog = document.querySelector("#myPracticeLog");

    let displayEntries = localStorage.getItem("entries");
    displayEntries = JSON.parse(displayEntries);
    displayEntries.sort(function(a, b) {
        var dateA = new Date(a.startTime), dateB = new Date(b.endTime);
        return dateA - dateB;
    });

    myPracticeLog.textContent = ""

    displayEntries.forEach(ent => {
        // console.log(dateFormat(ent.date));
        const row = document.createElement("tr");

        const displayDate = document.createElement("td");
        const newDate = new Date(ent.startTime).toDateString()
        displayDate.textContent = newDate;
        console.log("NEW DATE:", newDate)
                const displayDateInput = document.createElement("input");
                    displayDateInput.setAttribute("type", "date");
                    displayDateInput.style.display = "none";

                    const dateEditBtn = document.createElement("i");
                        dateEditBtn.className = "fas fa-edit edit-hover";
                        dateEditBtn.style.display= "none";
                        displayDate.appendChild(dateEditBtn);

                    const removeDateBtn = document.createElement("i");
                        removeDateBtn.className = "far fa-trash-alt remove-hover";
                        removeDateBtn.style.display = "none";
                        displayDate.appendChild(removeDateBtn);

                displayDate.addEventListener("mouseover", function showBtn() {
                    dateEditBtn.style.display= "block";
                    removeDateBtn.style.display = "block"
                });
                displayDate.addEventListener("mouseout", function showBtn() {
                    dateEditBtn.style.display= "none";
                    removeDateBtn.style.display= "none";
                });
                displayDate.appendChild(displayDateInput);
            row.appendChild(displayDate);
            
        
        
        const displayStartTime = document.createElement("td");
            const startTimeDate = new Date(ent.startTime).toString()
            displayStartTime.textContent = to12Hr(startTimeDate.slice(16,21));
            const newStartInput = document.createElement("input");
                newStartInput.setAttribute("type", "time");
                newStartInput.style.display = "none";
            // const startEditBtn = document.createElement("i");
            //     startEditBtn.className = "fas fa-edit edit-hover";
            //     startEditBtn.style.display= "none";
            //     displayStartTime.appendChild(startEditBtn);
                displayStartTime.addEventListener("mouseover", function showEditBtn() {
                    dateEditBtn.style.display= "block";
                    removeDateBtn.style.display = "block"
                });
                displayStartTime.addEventListener("mouseout", function showEditBtn() {
                    dateEditBtn.style.display= "none";
                    removeDateBtn.style.display = "none"
                });
                displayStartTime.appendChild(newStartInput);
            row.appendChild(displayStartTime);



            // const displayEndTime = document.createElement("td");
            //     const endTimeDate = new Date(ent.endTime).toString()
            //     displayEndTime.textContent = to12Hr(endTimeDate.slice(16,21));
            //     const newEndInput = document.createElement("input");
            //         newEndInput.setAttribute("type", "time");
            //         newEndInput.style.display = "none";
            //     const endEditBtn = document.createElement("i");
            //         endEditBtn.className = "fas fa-edit edit-hover";
            //         endEditBtn.style.display= "none";
            //         displayEndTime.appendChild(endEditBtn);
            //         displayEndTime.addEventListener("mouseover", function showEditBtn() {
            //         endEditBtn.style.display= "block";
            //         });
            //         displayEndTime.addEventListener("mouseout", function showEditBtn() {
            //             endEditBtn.style.display= "none";
            //         });
            //         displayEndTime.appendChild(newEndInput);
            //     row.appendChild(displayEndTime);



            const totalTime = document.createElement("td");
                totalTime.textContent = ent.totalTime;
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
                    topicNotes.addEventListener("mouseover", function() {
                    topicEditBtn.style.display= "block";
                    });
                    topicNotes.addEventListener("mouseout", function() {
                        topicEditBtn.style.display= "none";
                    });
                    topicNotes.appendChild(newTopicInput);


                row.appendChild(topicNotes);



        myPracticeLog.insertAdjacentElement("afterbegin", row);
    })
    showHideLog();
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

// const handleFieldClick = () => {
//     dateInputCell.addEventListener("click", function() {
//         dateInput.focus();
//     })
//     dateHeader.addEventListener("click", function() {
//         dateInput.focus();
//     })
//     startInputCell.addEventListener("click", function() {
//         startTimeInput.focus();
//     })
//     startHeader.addEventListener("click", function() {
//         startTimeInput.focus();
//     })
//     endInputCell.addEventListener("click", function() {
//         endTimeInput.focus();
//     })
//     endHeader.addEventListener("click", function() {
//         endTimeInput.focus();
//     })
//     topicCell.addEventListener("click", function() {
//         topicInput.focus();
//     })
//     topicHeader.addEventListener("click", function() {
//         topicInput.focus();
//     })
//     notesInputCell.addEventListener("click", function() {
//         notesInput.focus();
//     })
//     notesHeader.addEventListener("click", function() {
//         notesInput.focus();
//     })
// }


const pageLoadDisplay = () => {
    resizeRows();
    if (localStorage.getItem("entries")) {
        displayLog();
        console.log("existing user");
    } else {
        console.log("new user");
        localStorage.setItem("entries", JSON.stringify([]));
        displayLog();
    }
    // handleFieldClick();
    // formDisplay.style.display = "none";
    displayFormShow.style.display = "none";


    displayFormShow.addEventListener("click", function() {
        formDisplay.style.display = "block";
        displayFormShow.style.display = "none";
        displayFormHide.style.display = "block";
    })
    displayFormHide.addEventListener("click", function() {
        formDisplay.style.display = "none";
        displayFormShow.style.display = "block";
        displayFormHide.style.display = "none";
    })
    // practiceTimerStartBtn.addEventListener("click", function() {
    //     practiceTimerStartBtn.style.display = "none";
    //     practiceTimerEndBtn.style.display = "block";
    //     const newDate = new Date(Date.now());
    //     const year = newDate.getFullYear();
    //     const date = newDate.getDate();
    //     const month = newDate.getMonth() + 1;
    //     const finalDate = `${year}-${month}-${date}`

    //     startDateInput.value = finalDate;
        
    //     const newTime = newDate.toTimeString();
    //     startTimeInput.value = newTime.slice(0,5);
    // })
    // practiceTimerEndBtn.addEventListener("click", function() {
    //     practiceTimerStartBtn.style.display = "block";
    //     practiceTimerEndBtn.style.display = "none";

    //     const newDate = new Date(Date.now());
    //     const year = newDate.getFullYear();
    //     const date = newDate.getDate();
    //     const month = newDate.getMonth() + 1;
    //     const finalDate = `${year}-${month}-${date}`
    //     endDateInput.value = finalDate;
        
    //     const newTime = newDate.toTimeString();
    //     endTimeInput.value = newTime.slice(0,5);
    // })
    submit.addEventListener("submit", function() {
        addItem();
        submit.reset()
    })

    if (myPracticeLogDisplay.style.display = "block") {
        displayLogShow.style.display = "none";
        displayLogHide.style.display = "block";
    } else if (myPracticeLogDisplay.style.display = "none") {
        displayLogShow.style.display = "block";
        displayLogHide.style.display = "none";
        myPracticeLogDisplay.style.display = "none";

    }

    displayLogShow.addEventListener("click", function() {
        myPracticeLogDisplay.style.display = "block";
        displayLogShow.style.display = "none";
        displayLogHide.style.display = "block";
    })
    displayLogHide.addEventListener("click", function() {
        myPracticeLogDisplay.style.display = "none";
        displayLogShow.style.display = "block";
        displayLogHide.style.display = "none";
    })



    // formDisplay.style.display = "none";
    // displayFormHide.style.display = "none";

    displayFormShow.addEventListener("click", function() {
        formDisplay.style.display = "block";
        displayFormShow.style.display = "none";
        displayFormHide.style.display = "block";
    })
    displayFormHide.addEventListener("click", function() {
        formDisplay.style.display = "none";
        displayFormShow.style.display = "block";
        displayFormHide.style.display = "none";
    })

}

pageLoadDisplay();

const clearPracticeLog = () => {
    if(confirm("Are you sure? This will clear all practice sessions.")) {
        localStorage.clear();
        localStorage.setItem("entries", JSON.stringify([]));
        displayLog();
    }
}




const testFunction = () => {

    // console.log('howdy')

    // let startTime = new Date(dateInput.value);
    // startTime.setMinutes( startTime.getMinutes() + startTime.getTimezoneOffset() );
    // // date = date.toDateString();
    // startTimeInput = startTimeInput.value.split(":")
    // startTime.setHours(startTimeInput[0])
    // startTime.setMinutes(startTimeInput[1])

    // let endTime = new Date(dateInput.value);
    // endTime.setMinutes( endTime.getMinutes() + endTime.getTimezoneOffset() );
    // endTimeInput = endTimeInput.value.split(":")
    // endTime.setHours(endTimeInput[0])
    // endTime.setMinutes(endTimeInput[1])
    
    // const totalTime = diff_minutes(endTime, startTime)
    
    // let startTime = new Date(dateInput.value);
    // startTime.setMinutes( startTime.getMinutes() + startTime.getTimezoneOffset() );
    // const startTimeInputArr = startTimeInput.value.split(":")
    // startTime.setHours(startTimeInputArr[0])
    // startTime.setMinutes(startTimeInputArr[1])

    let displayEntries = localStorage.getItem("entries");
    displayEntries = JSON.parse(displayEntries);
    displayEntries.sort(function(a, b) {
        var dateA = new Date(a.startTime), dateB = new Date(b.endTime);
        return dateA - dateB;
    });

    myPracticeLog.textContent = ""

    displayEntries.forEach(ent => {
        const date = new Date(ent.startTime)
        console.log(date.toString())
    })
}




