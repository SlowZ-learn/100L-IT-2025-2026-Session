const oneSecond = 1000

function clock() {

    const currentTime = new Date()
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();




    const showHour = document.getElementById("hour")
    const showMinute = document.getElementById("minute")
    const showSeconds = document.getElementById("seconds")



    showHour.textContent = hour
    showMinute.textContent = String(minute).padStart(2, "0")
    showSeconds.textContent = String(seconds).padStart(2, "0")



}
clock()

setInterval(clock, oneSecond);

