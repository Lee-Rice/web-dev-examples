//Wait until page loads, or list items could be missed.
window.onload = function() {
    let highlightLinks = document.querySelectorAll(".nav_list_item");
    // Classic C style for loop
    for (let i = 0; i < highlightLinks.length; i++) {
        highlightLinks[i].addEventListener("click", highlightClickedLink);
    }
}

function highlightClickedLink(event) {
    // Changes background color of selected link and removes background from other links.
    document.getElementById(event.target.id).style.backgroundColor = "#E85D04"
    let exampleLinks = document.querySelectorAll(".nav_list_item");
    // for-of loop
    for (link of exampleLinks) {
        if (event.target.id !== link.id) {
            link.style.backgroundColor = null
        }
    }
};
