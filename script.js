var form = document.getElementById('Resume-Builder');
var displayform = document.getElementById('Resume-Display');
var shareablelinkelement = document.getElementById('Shareable-link-container');
var shareablelink = document.getElementById('shareablelink');
var downloadbutton = document.getElementById('download-pdf');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var FatherName = document.getElementById('FatherName').value;
    var Age = document.getElementById('Age').value;
    var Phone = document.getElementById('Phone').value;
    var Email = document.getElementById('Email').value;
    var Address = document.getElementById('Address').value;
    var Experience = document.getElementById('Experience').value;
    var Education1 = document.getElementById('Education1').value;
    var Education2 = document.getElementById('Education2').value;
    var Education3 = document.getElementById('Education3').value;
    var Skills1 = document.getElementById('Skills1').value;
    var Skills2 = document.getElementById('Skills2').value;
    var Skills3 = document.getElementById('Skills3').value;
    var Skills4 = document.getElementById('Skills4').value;
    var Objective = document.getElementById('Objective').value;
    var Reference = document.getElementById('Reference').value;
    var Userid = document.getElementById('Userid').value;
    var resumedata = {
        name: name,
        FatherName: FatherName,
        Age: Age,
        Phone: Phone,
        Email: Email,
        Address: Address,
        Experience: Experience,
        Education1: Education1,
        Education2: Education2,
        Education3: Education3,
        Skills1: Skills1,
        Skills2: Skills2,
        Skills3: Skills3,
        Skills4: Skills4,
        Objective: Objective,
        Reference: Reference,
        Userid: Userid
    };
    localStorage.setItem(Userid, JSON.stringify(resumedata));
    var resumedisplay = "\n        <h1><b>Shareable Resume</b></h1>\n        <h2><b>Objective:</b></h2>\n        <p contenteditable='true'>".concat(Objective, "</p>\n        <h2><b>Education:</b></h2>\n        <p contenteditable='true'>").concat(Education1, "</p>\n        <p contenteditable='true'>").concat(Education2, "</p>\n        <p contenteditable='true'>").concat(Education3, "</p>\n        <h2><b>Experience:</b></h2>\n        <p contenteditable='true'>").concat(Experience, "</p>\n        <h2><b>Skills:</b></h2>\n        <p contenteditable='true '>").concat(Skills1, "</p>\n        <p contenteditable='true'>").concat(Skills2, "</p>\n        <p contenteditable='true'>").concat(Skills3, "</p>\n        <p contenteditable='true'>").concat(Skills4, "</p>\n        <h2><b>Personal Information</b></h2>\n        <p><b>Name:</b><span contenteditable='true'>").concat(name, "</span></p>\n        <p><b>Father Name:</b><span contenteditable='true'>").concat(FatherName, "</span></p>\n        <p><b>Age:</b><span contenteditable='true'>").concat(Age, "</span></p>\n        <p><b>Phone:</b><span contenteditable='true'>").concat(Phone, "</span></p>\n        <p><b>Email:</b><span contenteditable='true'>").concat(Email, "</span></p>\n        <p><b>Address:</b><span contenteditable='true'>").concat(Address, "</span></p>\n        <h2><b>Reference:</b></h2>\n        <p contenteditable='true'>").concat(Reference, "</p>\n    ");
    displayform.innerHTML = resumedisplay;
    var ShareableURL = "".concat(window.location.origin, "?Userid=").concat(encodeURIComponent(Userid));
    shareablelinkelement.style.display = "block";
    shareablelink.href = ShareableURL;
    shareablelink.textContent = ShareableURL;
});
downloadbutton.addEventListener('click', function () {
    window.print();
});
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var Userid = urlParams.get('Userid');
    if (Userid) {
        var SaveResume = localStorage.getItem(Userid);
        if (SaveResume) {
            var resumedata = JSON.parse(SaveResume);
            document.getElementById('Userid').value = Userid;
            document.getElementById('Objective').value = resumedata.Objective;
            document.getElementById('Education1').value = resumedata.Education1;
            document.getElementById('Education2').value = resumedata.Education2;
            document.getElementById('Education3').value = resumedata.Education3;
            document.getElementById('Experience').value = resumedata.Experience;
            document.getElementById('Skills1').value = resumedata.Skills1;
            document.getElementById('Skills2').value = resumedata.Skills2;
            document.getElementById('Skills3').value = resumedata.Skills3;
            document.getElementById('Skills4').value = resumedata.Skills4;
            document.getElementById('name').value = resumedata.name;
            document.getElementById('FatherName').value = resumedata.FatherName;
            document.getElementById('Age').value = resumedata.Age;
            document.getElementById('Phone').value = resumedata.Phone;
            document.getElementById('Email').value = resumedata.Email;
            document.getElementById('Address').value = resumedata.Address;
            document.getElementById('Reference').value = resumedata.Reference;
        }
    }
});
