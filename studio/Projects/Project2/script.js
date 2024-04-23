document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');

    // Define image paths
    const imagePaths = [
        '1.PNG', '2.PNG', '3.PNG', '4.PNG', '5.PNG',
        '6.PNG', '7.PNG', '8.PNG', '9.PNG', '10.PNG',
        '11.PNG', '12.PNG', '13.PNG', '14.PNG', '15.PNG',
        '16.PNG', '17.PNG', '18.PNG', '19.PNG', '20.PNG',
        '21.PNG', '22.PNG', '23.PNG', '24.PNG', '25.PNG'
    ];

    // Shuffle image paths
    const shuffledImagePaths = shuffleArray(imagePaths);

    // Create and append anchor elements with images to container
    for (let i = 0; i < shuffledImagePaths.length; i++) {
        const a = document.createElement('a');
        a.href = '';
        a.classList.add('shake'); // Add class for shake effect
        const img = document.createElement('img');
        img.src = shuffledImagePaths[i];
        img.alt = '';
        a.appendChild(img);
        container.appendChild(a);
        // Randomize position
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        a.style.left = `${randomX}px`;
        a.style.top = `${randomY}px`;
    }
});

// Function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
