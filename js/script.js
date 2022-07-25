let seconds = document.getElementById('seconds')
let minutes = document.getElementById('minutes')
let hours = document.getElementById('hours')

function setDate () {
	let timeNow = new Date()
	
	let secondsNow = timeNow.getSeconds()
	let secondsInDegrees = ((secondsNow / 60) * 360)
	seconds.style.transform = `rotate(${secondsInDegrees}deg)`
	
	let minutesNow = timeNow.getMinutes()
	let minutesInDegrees = ((minutesNow / 60) * 360)
	minutes.style.transform = `rotate(${minutesInDegrees}deg)`
	
	let hoursNow = timeNow.getHours()
	let hoursInDegrees = ((hoursNow / 24) * 360)
	hours.style.transform = `rotate(${hoursInDegrees}deg)`

	console.log(secondsNow, minutesNow, hoursNow);
}

setInterval(setDate, 1000)