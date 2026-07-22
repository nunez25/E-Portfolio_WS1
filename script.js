window.onload = function(){
    window.alert("Welcome to my Portfolio! Enjoy exploring.");

    const mainHeading = document.querySelector(".bio h1");
    if (mainHeading){
        mainHeading.innerHTML = "Hi, I'm <span class='js-highlight'>Joylyn M. Nuñez</span>";
        mainHeading.style.color = "var(--secondary)";
    }

    const tagline = document.querySelector("#tagline");
    if (tagline){
        tagline.style.fontStyle = "italic";
        tagline.style.fontWeight = "bold";
    }


    const myButton = document.createElement('button');
    myButton.textContent = '🌙 Dark Mode';
    myButton.id = 'theme-btn';

    const header = document.querySelector('header') || document.querySelector('.nav');
    if (header) {
        header.appendChild(myButton);
    } else {
        document.body.prepend(myButton);
    }

    myButton.style.position = 'fixed';
    myButton.style.top = '10px';
    myButton.style.right = '10px';

    myButton.style.padding = '3px';
    myButton.style.backgroundColor = 'var(--secondary)';
    myButton.style.color = 'white';
    myButton.style.border = 'none';
    myButton.style.borderRadius = '5px';

    myButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            myButton.textContent = '☀️ Light Mode';
        } else {
            myButton.textContent = '🌙 Dark Mode';
        }
        console.log("Theme changed");
    });

    const infoButton = document.createElement("button");
    infoButton.textContent = "About Me";
    infoButton.id = "info-btn";
    
    document.body.appendChild(infoButton);
    infoButton.style.position = "fixed";
    infoButton.style.top = "40px";
    infoButton.style.right = "10px";
    infoButton.style.padding = "3px";
    infoButton.style.borderRadius = "5px";
    function showInfo() {
    alert(
        "Name: Joylyn M. Nuñez\n" +
        "Course: Bachelor of Science in Information Technology\n" +
        "School: Holy Child Central Colleges Inc.\n" +
        "Skills: HTML, Python, Java"
    );

    console.log("Personal information displayed.");
}

infoButton.addEventListener("click", showInfo);
}