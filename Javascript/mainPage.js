
// Create array of group of images for each group of each infinite scrolling
const firstGroup = [
        {filename: 'adults1.jpg', altText: 'Adults Classes'}, 
        {filename: 'adults2.jpg', altText: 'Adults Classes'},
        {filename: 'adults3.jpg', altText: 'Adults Classes'},
        {filename: 'adults4.jpg', altText: 'Adults Classes'}
    ];

const secondGroup = [
        {filename: 'adults1.jpg', altText: 'Adults Classes'}, 
        {filename: 'adults2.jpg', altText: 'Adults Classes'}, 
        {filename: 'adults3.jpg', altText: 'Adults Classes'},
        {filename: 'adults4.jpg', altText: 'Adults Classes'}
    ];

// Encapsulate the arrays in a constant that represents the group of images
const imageGroups = [firstGroup, secondGroup];



// Function that will populate infinte scrolling div with images inside Bootstrap 5
function fillInfiniteScrolling(containerID, groupIndex) {
    const container = document.getElementById(containerId);
    const images = imageGroups[groupIndex]


    images.forEach(image => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "card mb-3";

        const img = document.createElement("img");
        img.className = "card-img-top";
        img.src = 'Images/Classes/$(image.fileName)';
        img.alt = image.altText;

        const cardBody = document.createElement(div)
    })
}