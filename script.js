var q1 = "Where am I hiding?";

function hideAndSeek(question, answer) {
	var answer = prompt(question);
	answer = answer.toLowerCase();
		if (answer === 'bucket') {
			document.getElementById("bucket").src = "correct.png";
			alert('That is correct!');
		};
		if (answer === 'closet') {
			document.getElementById("closet").src = "wrong.png";
			alert('Wrong! Press refresh to try again!')
		};
		if (answer === 'bathtub') {
			document.getElementById("bathtub").src = "wrong.png";
			alert('Wrong! Press refresh to try again!')
		};
		if (answer === 'basement') {
			document.getElementById("basement").src = "wrong.png";
			alert('Wrong! Press refresh to try again!')
		};
};

hideAndSeek(q1);