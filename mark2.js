document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.querySelector('.image-container');
    const overlay = document.querySelector('.overlay');
    const isMobile = window.innerWidth <= 430; // 모바일 여부 확인
    const imageIndices = [3, 11, 12, 13, 14, 53, 71, 75, 77, 79, 83, 84, 86, 87, 88, 93, 105, 106, 108, 109, 112, 113, 117, 118, 120, 121, 122, 126, 127, 134, 150];

    // 이미지 생성
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
            img.style.animationDelay = `${i * 0.2}s`; // 각 이미지 0.2초 간격으로 나타남
            imageContainer.appendChild(img);
        }, i * 200); // 0.2초 간격으로 추가
    });

    // 데스크톱: 이미지 제외 영역 클릭 시 index.html로 이동
    overlay.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    
});

