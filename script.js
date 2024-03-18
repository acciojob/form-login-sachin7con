function getFormvalue() {
    //SGN Write your code here
	let sub = document.getElementById("form1")
		sub.onsubmit = function(event){
			event.prevernDefault;
			myFunction();}
	function myFunction() {
		let fN = sub.elements["fname"].value;
		let lN = sub.elements["lname"].value; 
		alert(fN + " " + lN);
	}
	
}
getFormvalue();