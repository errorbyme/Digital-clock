const months = ["Jan", "Feb", "March", "April", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
setInterval(() => {
    let currentTime = new Date();
    let hrs = document.getElementById('hrs');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');
    let ampm = document.getElementById('ampm');
    let dat = document.getElementById('date');
    let day = document.getElementById('day');
    let month = document.getElementById('month');
    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
    ampm.innerHTML = currentTime.getHours() >= 12 ? "PM" : "AM";
    day.innerHTML = days[currentTime.getDay()];
    dat.innerHTML = currentTime.getDate();
    month.innerHTML = months[currentTime.getMonth()];
}, 1000);