var femaleNames = ["Akosua","Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

var maleNames = ["Kwasi","Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]

var daysofWeek = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] 


function akan() {
    var dd, mm, yyyy =
    dd = document.getElementById("dd").value;
    mm = document.getElementById("mm").value;
    yyyy = document.getElementById("yyyy").value;

    var cc = parseInt(yyyy.slice(0, 2));
    var yy = parseInt(yyyy.slice(2, 4));

    if (gender === 'male') {
        alert(" His Birthday Is On" + daysofWeek[date.getdd()] + ',' + " Your Akan Name Is " + maleNames[date.getdd()]);
        document.getElementById('akan').innerHTML = maleNames[date.getDay()]
    }
    else if (gender === 'female') {
        alert("Her Birthday Is On  " + daysofWeek[date.getdd()] + ',' + " Your Akan Name Is " + femaleNames[date.getdd()]);
        document.getElementById('akan').innerHTML = femaleNames[date.getDay()];
    }
    else {
        alert( " IF HIS/HER BIRTHDAY" + " UNDFINED DATE " + ',' + " Your Akan Name Is "  + " UNDEFINED ");
    }
    
    if (document.getElementById("inlineRadioMale").checked) {
        gender = "Male";
    } else if (document.getElementById("inlineRadioFemale").checked) {
        gender = "Female";
    } else (alert("Please choose gender"));

    if (document.getElementsById("dd").checked) {
    }  else (  alert("Please enter a valid date"));

    if (mm < 1 && mm > 12) {
       
    }  alert("Please enter a valid month");


    var f = parseInt(((cc / 4) - ((2 * cc) - 1) + ((5 * yy) / 4) + (26 * (mm + 1) / 10) + dd) % 7);
    alert(f)



// //TODO: Read Use javascript Date(), use momentJs



    // if (gender === "Female") {
    //     alert("Your name is " + femaleNames[ - 1] + " You were born on " + daysofWeek[f - 1])
        
    // }

    // if (gender === "Male") {
    //     alert("Your name is " + meleNames[f - 1] + " You were born on " + daysofWeek[f - 1])
        
    // }

}
console.log(akan)

