const handHours = document.querySelector('.hours')
const handMinutes = document.querySelector('.minutes')
const handSeconds = document.querySelector('.seconds')
const clock = document.querySelector('.clock')


function setTime() {
    const time = new Date();
    // get date
    const hours = time.getHours();
    // get amount of hours 
    const hoursClock = hours % 12;
    const minutes = time.getMinutes();
    // get mins
    const seconds = time.getSeconds();
    // get secs

    handHours.style.transform = `translate(-50%, -100%) rotate(${scale(hoursClock, 0, 11, 0, 360)}deg)`
    // rotate hours hand 360 deg depending on amount of hours
    handMinutes.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    // rotate minutes hand 360 deg depending on amount of minutes
    handSeconds.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`
    // rotate seconds hand 360 deg depending on amount of hours
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// formula to turn hours/minutes/seconds to degrees
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// console.log(`hours = ${hours} minutes = ${minutes} seconds = ${seconds} `)


setTime()
setInterval(setTime, 1000)

