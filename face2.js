document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.querySelector('.image-container');
    const overlay = document.querySelector('.overlay');
    const isMobile = window.innerWidth <= 430; // 모바일 여부 확인
    const imageIndices = [1, 9, 15, 16, 17, 18, 20, 34, 36, 50, 41, 42, 53, 62, 63, 64, 65, 66, 79, 90, 91, 94, 95, 97, 110,111, 117, 121, 125, 143,144, 154];

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





