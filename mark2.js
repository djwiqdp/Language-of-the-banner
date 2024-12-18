document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.querySelector('.image-container');
    const imageIndices = [3, 11, 12, 13, 14, 53, 71, 75, 77, 79, 82, 83, 84, 86, 87, 88, 93, 104, 105, 106, 108, 109, 112, 113, 117, 118, 120, 121, 122, 126, 127, 134, 160];

    imageIndices.forEach((index, i) => {
        setTimeout(() => {
            const img = document.createElement('img');
            
            // img3과 img4 폴더로 나누기
            if (index <= 80) {
                img.src = `img3/${index.toString().padStart(2, '0')}.png`;
            } else {
                img.src = `img4/${index.toString().padStart(2, '0')}.png`;
            }

            img.alt = `Image ${index}`;
            img.style.animationDelay = `${i * 0.2}s`; // 각 이미지가 0.2초 간격으로 나타남
            imageContainer.appendChild(img);
        }, i * 200); // 이미지 추가 간격을 0.2초로 설정
    });

    // 왼쪽에 나타나는 이미지들을 제외한 영역 클릭 시 index.html로 이동
    document.addEventListener('click', (event) => {
        const isImageContainer = imageContainer.contains(event.target);
        if (!isImageContainer) {
            window.location.href = 'index.html';
        }
    });
});

