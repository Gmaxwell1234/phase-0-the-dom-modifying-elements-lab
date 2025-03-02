const main = document.querySelector("main#main");
if (main) {
    main.remove();
}

// Create a new <h1> element
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "YOUR-NAME is the champion"; // Replace 'YOUR-NAME' with your actual name

// Append the newHeader to the body
document.body.appendChild(newHeader);