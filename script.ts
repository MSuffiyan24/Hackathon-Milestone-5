const form = document.getElementById('Resume-Builder') as HTMLFormElement;
const displayform = document.getElementById('Resume-Display') as HTMLDivElement;
const shareablelinkelement = document.getElementById('Shareable-link-container') as HTMLDivElement;
const shareablelink = document.getElementById('shareablelink') as HTMLAnchorElement; 
const downloadbutton = document.getElementById('download-pdf') as HTMLButtonElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    
    
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const FatherName = (document.getElementById('FatherName') as HTMLInputElement).value;
    const Age = (document.getElementById('Age') as HTMLInputElement).value;
    const Phone = (document.getElementById('Phone') as HTMLInputElement).value;
    const Email = (document.getElementById('Email') as HTMLInputElement).value;
    const Address = (document.getElementById('Address') as HTMLInputElement).value;
    const Experience = (document.getElementById('Experience') as HTMLInputElement).value;
    const Education1 = (document.getElementById('Education1') as HTMLInputElement).value;
    const Education2 = (document.getElementById('Education2') as HTMLInputElement).value;
    const Education3 = (document.getElementById('Education3') as HTMLInputElement).value;
    const Skills1 = (document.getElementById('Skills1') as HTMLInputElement).value;
    const Skills2 = (document.getElementById('Skills2') as HTMLInputElement).value;
    const Skills3 = (document.getElementById('Skills3') as HTMLInputElement).value;
    const Skills4 = (document.getElementById('Skills4') as HTMLInputElement).value;
    const Objective = (document.getElementById('Objective') as HTMLInputElement).value;
    const Reference = (document.getElementById('Reference') as HTMLInputElement).value;
    const Userid = (document.getElementById('Userid') as HTMLInputElement).value;

    const resumedata = {
        name,
        FatherName,
        Age,
        Phone,
        Email,
        Address,
        Experience,
        Education1,
        Education2,
        Education3,
        Skills1,
        Skills2,
        Skills3,
        Skills4,
        Objective,
        Reference,
        Userid
    };

    localStorage.setItem(Userid, JSON.stringify(resumedata));

    const resumedisplay = `
        <h1><b>Shareable Resume</b></h1>
        <h2><b>Objective:</b></h2>
        <p contenteditable='true'>${Objective}</p>
        <h2><b>Education:</b></h2>
        <p contenteditable='true'>${Education1}</p>
        <p contenteditable='true'>${Education2}</p>
        <p contenteditable='true'>${Education3}</p>
        <h2><b>Experience:</b></h2>
        <p contenteditable='true'>${Experience}</p>
        <h2><b>Skills:</b></h2>
        <p contenteditable='true '>${Skills1}</p>
        <p contenteditable='true'>${Skills2}</p>
        <p contenteditable='true'>${Skills3}</p>
        <p contenteditable='true'>${Skills4}</p>
        <h2><b>Personal Information</b></h2>
        <p><b>Name:</b><span contenteditable='true'>${name}</span></p>
        <p><b>Father Name:</b><span contenteditable='true'>${FatherName}</span></p>
        <p><b>Age:</b><span contenteditable='true'>${Age}</span></p>
        <p><b>Phone:</b><span contenteditable='true'>${Phone}</span></p>
        <p><b>Email:</b><span contenteditable='true'>${Email}</span></p>
        <p><b>Address:</b><span contenteditable='true'>${Address}</span></p>
        <h2><b>Reference:</b></h2>
        <p contenteditable='true'>${Reference}</p>
    `;

  
        displayform.innerHTML = resumedisplay;

    const ShareableURL = `${window.location.origin}?Userid=${encodeURIComponent(Userid)}`;

    shareablelinkelement.style.display = "block";
    shareablelink.href = ShareableURL;
    shareablelink.textContent = ShareableURL;
});

downloadbutton.addEventListener('click', () => {
    window.print();
});

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const Userid = urlParams.get('Userid');

    if (Userid) {
        const SaveResume = localStorage.getItem(Userid);
        if (SaveResume) {
            const resumedata = JSON.parse(SaveResume);
            (document.getElementById('Userid') as HTMLInputElement).value = Userid;
            (document.getElementById('Objective') as HTMLInputElement).value = resumedata.Objective;
            (document.getElementById('Education1') as HTMLInputElement).value = resumedata.Education1;
            (document.getElementById('Education2') as HTMLInputElement).value = resumedata.Education2;
            (document.getElementById('Education3') as HTMLInputElement).value = resumedata.Education3;
            (document.getElementById('Experience') as HTMLInputElement).value = resumedata.Experience;
            (document.getElementById('Skills1') as HTMLInputElement).value = resumedata.Skills1;
            (document.getElementById('Skills2') as HTMLInputElement).value = resumedata.Skills2;
            (document.getElementById('Skills3') as HTMLInputElement).value = resumedata.Skills3;
            (document.getElementById('Skills4') as HTMLInputElement).value = resumedata.Skills4;
            (document.getElementById('name') as HTMLInputElement).value = resumedata.name;
            (document.getElementById('FatherName') as HTMLInputElement).value = resumedata.FatherName;
            (document.getElementById('Age') as HTMLInputElement).value = resumedata.Age;
            (document.getElementById('Phone') as HTMLInputElement).value = resumedata.Phone;
            (document.getElementById('Email') as HTMLInputElement).value = resumedata.Email;
            (document.getElementById('Address') as HTMLInputElement).value = resumedata.Address;
            (document.getElementById('Reference') as HTMLInputElement).value = resumedata.Reference;
        }
    }
});