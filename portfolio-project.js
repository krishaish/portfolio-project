/*
Description: Sets a timer for the appropriate amount of minutes based on user input, and sends alert 
once the timer is done.
PRE:
POST: Timer is set for the user input, alert message sent after time goes off.
*/
function setAStudyTimer(){
    let time = document.querySelector('#timerSet').value;
    if(time){
        alert("A timer has been set for " + time + " minutes!");
        setTimeout(()=>{
            alert("Time is up!!!Your alarm has gone off");
        }, time * 60000);
    }
}

/*
Description: Retrieves data from an API that returns quotes.
PRE: 
POST: API data for quotes is retrieved. displayQuotes function is called to display quote on page.
*/

const quoteAPI = "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand";
const randomIndex = Math.floor(Math.random() + 9);
async function fetchQuotes(){
    try{const response = await fetch(quoteAPI);
        const data = await response.json();
        displayQuotes(data);
    }catch(error){
        console.error('There is an error!', error);
    }
}

fetchQuotes();

/*
Description: Displays quote on page which is retrieved from API.
PRE: fetchQuotes function needs to be called, and retrieved data from API needs to be passed as parameter.
POST: Displays fetched quote from API onto page.
*/
function displayQuotes(data){
    let randomQuote = data[randomIndex].content.rendered;
    const quoteBox = document.querySelector('#quote');
    const quote = document.createElement('ul');
    quote.innerHTML = randomQuote;
    quoteBox.appendChild(quote);
}

/*
Description: Displays an event next to the appropriate time li element by taking in user input for the time
and the activity.
PRE:
POST: Event is displayed next to time from user input.
*/

function addToLog(){
    let timeInput = document.querySelector('#time');
    let activityInput = document.querySelector('#activity');
    let time = timeInput.value;
    let activityVal = activityInput.value;
    let activity = document.createElement('li');
    console.log(time + " " + activity);
    if(time === "12 AM"){
        activity.innerHTML = activityVal;
        document.getElementById('12AM').appendChild(activity);
    }else if(time === "1 AM"){
        activity.innerHTML = activityVal;
        document.getElementById('1AM').appendChild(activity);
    }else if(time === '2 AM'){
        activity.innerHTML = activityVal;
        document.getElementById('2AM').appendChild(activity);
    }else if(time === '3 AM'){
        activity.innerHTML = activityVal;
        document.getElementById('3AM').appendChild(activity);
    }else if(time === "4 AM"){
        activity.innerHTML = activityVal;
        document.getElementById('4AM').appendChild(activity);
    }else if(time === "5 AM"){
        activity.innerHTML = activityVal;
        document.getElementById('5AM').appendChild(activity);
    }else if(time === "6 AM"){
        activity.innerHTML = activityVal;
        document.getElementById('6AM').appendChild(activity);
    }else if(time === "7 AM"){
        activity.innerHTML = activityVal;
        document.getElementById('7AM').appendChild(activity);
    }else if(time === "8 AM"){
        activity.innerHTML = activityVal;
        document.getElementById('8AM').appendChild(activity);
    }else if(time === "9 AM"){
        activity.innerHTML = activityVal;
        document.getElementById('9AM').appendChild(activity);
    }else if(time === "10 AM"){
        activity.innerHTML = activityVal;
        document.getElementById('10AM').appendChild(activity);
    }else if(time === "11 AM"){
        activity.innerHTML = activityVal;
        document.getElementById('11AM').appendChild(activity);
    }else if(time === "12 PM"){
        activity.innerHTML = activityVal;
        document.getElementById('12PM').appendChild(activity);
    }else if(time === "1 PM"){
        activity.innerHTML = activityVal;
        document.getElementById('1PM').appendChild(activity);
    }else if(time === "2 PM"){
        activity.innerHTML = activityVal;
        document.getElementById('2PM').appendChild(activity);
    }else if(time === "3 PM"){
        activity.innerHTML = activityVal;
        document.getElementById('3PM').appendChild(activity);
    }else if(time === "4 PM"){
        activity.innerHTML = activityVal;
        document.getElementById('4PM').appendChild(activity);
    }else if(time === "5 PM"){
        activity.innerHTML = activityVal;
        document.getElementById('5PM').appendChild(activity);
    }else if(time === "6 PM"){
        activity.innerHTML = activityVal;
        document.getElementById('6PM').appendChild(activity);
    }else if(time === "7 PM"){
        activity.innerHTML = activityVal;
        document.getElementById('7PM').appendChild(activity);
    }else if(time === "8 PM"){
        activity.innerHTML = activityVal;
        document.getElementById('8PM').appendChild(activity);
    }else if(time === "9 PM"){
        activity.innerHTML = activityVal;
        document.getElementById('9PM').appendChild(activity);
    }else if(time === "10 PM"){
        activity.innerHTML = activityVal;
        document.getElementById('10PM').appendChild(activity);
    }else if(time === "11 PM"){
        activity.innerHTML = activityVal;
        document.getElementById('11PM').appendChild(activity);
    }
}

/*
Description: Deletes all events at specific time based on user input. 
PRE: Event must be added to the specific user input time.
POST: Deletes events at the specific time. 
*/
function deleteFromLog(){
    let deleteInput = document.querySelector('#deleteSchedule');
    let deleteLog = deleteInput.value;
    if(deleteLog === "12 AM"){
        while(document.getElementById('12AM').children.length > 1){
            document.getElementById('12AM').removeChild(document.getElementById('12AM').lastChild);
        }
    }else if(deleteLog === "1 AM"){
        while(document.getElementById('1AM').children.length > 1){
            document.getElementById('1AM').removeChild(document.getElementById('1AM').lastChild);
        }
    }else if(deleteLog === '2 AM'){
        while(document.getElementById('2AM').children.length > 1){
            document.getElementById('2AM').removeChild(document.getElementById('2AM').lastChild);
        }
    }else if(deleteLog === '3 AM'){
        while(document.getElementById('3AM').children.length > 1){
            document.getElementById('3AM').removeChild(document.getElementById('3AM').lastChild);
        }
    }else if(deleteLog === "4 AM"){
        while(document.getElementById('4AM').children.length > 1){
            document.getElementById('4AM').removeChild(document.getElementById('4AM').lastChild);
        }
    }else if(deleteLog === "5 AM"){
        while(document.getElementById('5AM').children.length > 1){
            document.getElementById('5AM').removeChild(document.getElementById('5AM').lastChild);
        }
    }else if(deleteLog === "6 AM"){
        while(document.getElementById('6AM').children.length > 1){
            document.getElementById('6AM').removeChild(document.getElementById('6AM').lastChild);
        }
    }else if(deleteLog === "7 AM"){
        while(document.getElementById('7AM').children.length > 1){
            document.getElementById('7AM').removeChild(document.getElementById('7AM').lastChild);
        }
    }else if(deleteLog === "8 AM"){
        while(document.getElementById('8AM').children.length > 1){
            document.getElementById('8AM').removeChild(document.getElementById('8AM').lastChild);
        }
    }else if(deleteLog === "9 AM"){
        while(document.getElementById('9AM').children.length > 1){
            document.getElementById('9AM').removeChild(document.getElementById('9AM').lastChild);
        }
    }else if(deleteLog === "10 AM"){
        while(document.getElementById('10AM').children.length > 1){
            document.getElementById('10AM').removeChild(document.getElementById('10AM').lastChild);
        }
    }else if(deleteLog === "11 AM"){
        while(document.getElementById('11AM').children.length > 1){
            document.getElementById('11AM').removeChild(document.getElementById('11AM').lastChild);
        }
    }else if(deleteLog === "12 PM"){
        while(document.getElementById('12PM').children.length > 1){
            document.getElementById('12PM').removeChild(document.getElementById('12PM').lastChild);
        }
    }else if(deleteLog === "1 PM"){
        while(document.getElementById('1PM').children.length > 1){
            document.getElementById('1PM').removeChild(document.getElementById('1PM').lastChild);
        }
    }else if(deleteLog === "2 PM"){
        while(document.getElementById('2PM').children.length > 1){
            document.getElementById('2PM').removeChild(document.getElementById('2PM').lastChild);
        }
    }else if(deleteLog === "3 PM"){
        while(document.getElementById('3PM').children.length > 1){
            document.getElementById('3PM').removeChild(document.getElementById('3PM').lastChild);
        }
    }else if(deleteLog === "4 PM"){
        while(document.getElementById('4PM').children.length > 1){
            document.getElementById('4PM').removeChild(document.getElementById('4PM').lastChild);
        }
    }else if(deleteLog === "5 PM"){
        while(document.getElementById('5PM').children.length > 1){
            document.getElementById('5PM').removeChild(document.getElementById('5PM').lastChild);
        }
    }else if(deleteLog === "6 PM"){
        while(document.getElementById('6PM').children.length > 1){
            document.getElementById('6PM').removeChild(document.getElementById('6PM').lastChild);
        }
    }else if(deleteLog === "7 PM"){
        while(document.getElementById('7PM').children.length > 1){
            document.getElementById('7PM').removeChild(document.getElementById('7PM').lastChild);
        }
    }else if(deleteLog === "8 PM"){
        while(document.getElementById('8PM').children.length > 1){
            document.getElementById('8PM').removeChild(document.getElementById('8PM').lastChild);
        }
    }else if(deleteLog === "9 PM"){
        while(document.getElementById('9PM').children.length > 1){
            document.getElementById('9PM').removeChild(document.getElementById('9PM').lastChild);
        }
    }else if(deleteLog === "10 PM"){
        while(document.getElementById('10PM').children.length > 1){
            document.getElementById('10PM').removeChild(document.getElementById('10PM').lastChild);
        }
    }else if(deleteLog === "11 PM"){
        while(document.getElementById('11PM').children.length > 1){
            document.getElementById('11PM').removeChild(document.getElementById('11PM').lastChild);
        }
    }
}