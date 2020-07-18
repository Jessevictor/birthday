var weekDays =['Sunday', 'Monday','Tuesday','Wenesday','Thursday','Friday','Saturday'];
var maleNames =['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
var femaleNames =['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];


function validateForm() {
    var d = parseInt(document.getElementById('d').value);
    var m = parseInt(document.getElementById('m').value);
    var y = parseInt(document.getElementById('y').value);
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }