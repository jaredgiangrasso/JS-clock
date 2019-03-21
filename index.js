minDegreeFromTime = () => {
	let d = new Date();
	if(d.getMinutes() === 0){
		return -90;
	}
	return d.getMinutes()*6-90;
}

secondDegreeFromTime = () => {
	let d = new Date();
	if(d.getSeconds() === 0){
		return -90;
	}
	return d.getSeconds()*6-90;
}

hourDegreeFromTime = () => {
	let d = new Date();
	if(d.getHours() > 12){
		return (d.getHours() - 12)*30-90;
	}
	return d.getHours()*30;
}

setInterval(
	function(){
		document.getElementById('min-hand').style.transform = `rotate(${minDegreeFromTime()}deg)`;
		document.getElementById('second-hand').style.transform = `rotate(${secondDegreeFromTime()}deg)`;
		document.getElementById('hour-hand').style.transform = `rotate(${hourDegreeFromTime()}deg)`;
	}, 10
)