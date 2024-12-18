document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.querySelector('.grid-container');
    const overlayIndices = [6, 8, 10, 21, 22, 23, 24, 25, 28, 44, 54, 56, 58, 72, 76, 107, 128, 129, 132, 151, 152, 153];

    // Populate the grid with background images
    for (let i = 1; i <= 160; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        
        // img3과 img4 폴더로 나누기
        if (i <= 80) {
            gridItem.style.backgroundImage = `url('img3/${i.toString().padStart(2, '0')}.png')`;
        } else {
            gridItem.style.backgroundImage = `url('img4/${i.toString().padStart(2, '0')}.png')`;
        }

        gridContainer.appendChild(gridItem);
    }

    // Add the semi-transparent black overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    gridContainer.appendChild(overlay);

    // Overlay specific images on top of the black overlay
    overlayIndices.forEach(index => {
        const overlayImage = document.createElement('div');
        overlayImage.classList.add('grid-item');

        // img3과 img4 폴더로 나누기
        if (index <= 80) {
            overlayImage.style.backgroundImage = `url('img3/${index.toString().padStart(2, '0')}.png')`;
        } else {
            overlayImage.style.backgroundImage = `url('img4/${index.toString().padStart(2, '0')}.png')`;
        }

        overlayImage.style.position = 'absolute';
        overlayImage.style.width = `${100 / 8}vw`; // 8 columns
        overlayImage.style.height = `${100 / 20}vh`; // 20 rows
        overlayImage.style.top = `${Math.floor((index - 1) / 8) * (100 / 20)}vh`;
        overlayImage.style.left = `${((index - 1) % 8) * (100 / 8)}vw`;
        gridContainer.appendChild(overlayImage);
    });
});
