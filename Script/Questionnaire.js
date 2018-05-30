
		function validate() {

			var nameError = checkName();
			var surnameError = checkSurname();
			var emailError = checkEmail();
			var idError = checkId();
			var courseError = checkDropdown();
			var oneError = checkRadio();
			var twoError = checkradioTwo();
			var threeError = checkradioThree();
			var fourError = checkradioFour();

			if (nameError && surnameError && emailError && idError &&courseError && oneError && twoError && threeError && fourError) {document.getElementById("result").innerHTML = '<span style = "color: green">Form submitted</span>';
			}

			else { document.getElementById("result").innerHTML = '<span style = "color: red">* Invalid please check form &amp; resubmit';
				return false;
			}

		}
		
		function checkName() {

			if (document.getElementById("firstName").value == "") {
				document.getElementById("error_first").innerHTML = "* Name needed.";
				return false;
			}
			else {return true;
			}
		}

		function checkSurname() {

			if (document.getElementById("secondName").value =="") {
				document.getElementById("error_surname").innerHTML = "* Surname needed.";
				return false;
			}
				else {return true;

			}
		}

		function checkEmail() {

			var email = document.getElementById("emailAddress").value;
			var atSign = email.indexOf('@');
			var str = document.getElementById("emailAddress").value;

			if (email =="") {
				document.getElementById("error_email").innerHTML = "* Email Address needed";
				return false;
			}
			else if (atSign == -1){
				document.getElementById("error_email").innerHTML = "* Email needs an &#64; sign";
				return false;
			}
			else {return true;

			}
		}

		function checkId() {

			var res = document.getElementById("stNumber").value;

			if (res =="") {
				document.getElementById("error_stNumber").innerHTML = "* Student ID number needed";
				return	false;
			}

			else if (isNaN(res)) {
				document.getElementById("error_stNumber").innerHTML = "* Must only inlcude numbers";
				return false;
			}

			else { return true;
			}
		}

		function checkDropdown() {

			var chosen = "";
			var len = document.drpdown.courseSelect.length;
			var i; 

			for (i = 0; i < len; i++) {
				if (document.drpdown.courseSelect[i].selected) {
					chosen = document.drpdown.courseSelect[i].value;
				}
			}

			if (chosen == "None") {

				document.getElementById("error_dropdown").innerHTML = "* No option chosen";
				return false;
			}

			else {
				
				document.getElementById("error_dropdown").innerHTML = "";
				return	true;
			}
		}

		function checkRadio() {

			var answer = "";
			var len = document.question.radio.length;
			var i;

			for (i = 0; i < len; i++) {
				if (document.question.radio[i].checked) {
					answer = document.question.radio[i].value;
					break;
				}
			}

			if (answer == "") {
				document.getElementById("return_radio").innerHTML = '<span style="color: red">* No answer selected</span>';
				return false;
			}

			else if (answer == "wrong") {
				document.getElementById("return_radio").innerHTML = '<span style="color: red"> * Incorrect answer: Try Again</span>';
				return false;
			}

			else if (answer == "correct") {
				document.getElementById("return_radio").innerHTML = '<span style="color: green"> Correct</span>';
				return true;
			}
		}

		function checkradioTwo() {

			var answer = "";
			var len = document.questionTwo.radioTwo.length;
			var i;

			for (i = 0; i < len; i++) {
				if (document.questionTwo.radioTwo[i].checked) {
					answer = document.questionTwo.radioTwo[i].value;
					break;
				}
			}

			if (answer == "") {
				document.getElementById("return_radioTwo").innerHTML = '<span style="color: red">* No answer selected</span>';
				return false;
			}

			else if (answer == "wrong") {
				document.getElementById("return_radioTwo").innerHTML = '<span style="color: red">* Incorrect answer: Try Again</span>';
				return false;
			}

			else if (answer == "correct") {
				document.getElementById("return_radioTwo").innerHTML = '<span style="color: green"> Correct</span>';
				return true;
			}
		}

		function checkradioThree() {

			var answer = "";
			var len = document.questionThree.radioThree.length;
			var i;

			for (i = 0; i < len; i++) {
				if (document.questionThree.radioThree[i].checked) {
					answer = document.questionThree.radioThree[i].value;
					break;
				}
			}

			if (answer == "") {
				document.getElementById("return_radioThree").innerHTML = '<span style="color: red">* No answer selected</span>';
				return false;
			}

			else if (answer == "wrong") {
				document.getElementById("return_radioThree").innerHTML = '<span style="color: red">* Incorrect answer: Try Again</span>';
				return false;
			}

			else if (answer == "correct") {
				document.getElementById("return_radioThree").innerHTML = '<span style="color: green"> Correct</span>';
				return true;
			}
		}

		function checkradioFour() {

			var answer = "";
			var len = document.questionFour.radioFour.length;
			var i;

			for (i = 0; i < len; i++) {
				if (document.questionFour.radioFour[i].checked) {
					answer = document.questionFour.radioFour[i].value;
					break;
				}
			}

			if (answer == "") {
				document.getElementById("return_radioFour").innerHTML = '<span style="color: red">* No answer selected</span>';
				return false;
			}

			else if (answer == "wrong") {
				document.getElementById("return_radioFour").innerHTML = '<span style="color: red">* Incorrect answer: Try Again</span>';
				return false;
			}

			else if (answer == "correct") {
				document.getElementById("return_radioFour").innerHTML = '<span style="color: green"> Correct</span>';
				return true;
			}
		}