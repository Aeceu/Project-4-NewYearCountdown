const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");




function setDate(){
    const time = new Date();
    const month = time.getMonth() + 1;
    const day = time.getDate();
    const hour = time.getHours() ;
    const minute = time.getMinutes();
    const second = time.getSeconds () +1;

    const seconds = document.getElementById("seconds").innerHTML =  60 - second;
    const minutes = document.getElementById("minutes").innerHTML = 60 - minute;
    const hours = document.getElementById("hours").innerHTML =  24 - (hour) ;

    let days_per_month = 
    {
        1:31, 2:28,3:31, 
        4:30, 5:31, 6:30,
        7:31, 8:31,9:30,
        10:31, 11:30, 12:31
    };
    
    for(let i in days_per_month){
        // console.log(i)
        if(i == month){
            const days = document.getElementById("days").innerHTML = days_per_month[i] - day;  
        }
    }

    const months = document.getElementById("months").innerHTML = 12 - month;

    console.log(hour);
}

setInterval(setDate,1000);

// setDate();

