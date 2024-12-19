document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.querySelector('.grid-container');
    const isMobile = window.innerWidth <= 430; // 모바일 여부 확인
    const maxImages = isMobile ? 87 : 160; // 모바일: 87개, 데스크톱: 160개
    const overlayIndices = [6, 8, 10, 21, 22, 23, 24, 25, 28, 44, 54, 56, 58, 72, 76, 107, 128, 129, 132, 151, 152, 153];

    // 배경 이미지 추가
    for (let i = 1; i <= maxImages; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        // 이미지 경로 설정
        if (i <= 80) {
            gridItem.style.backgroundImage = `url('img3/${i.toString().padStart(2, '0')}.png')`;
        } else {
            gridItem.style.backgroundImage = `url('img4/${i.toString().padStart(2, '0')}.png')`;
        }

        gridContainer.appendChild(gridItem);
    }

    // 반투명 검정 오버레이 추가
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    gridContainer.appendChild(overlay);

    // 특정 위치에 오버레이 이미지 추가
    overlayIndices.forEach(index => {
        const overlayImage = document.createElement('div');
        overlayImage.classList.add('grid-item');

        // 이미지 경로 설정
        if (index <= 80) {
            overlayImage.style.backgroundImage = `url('img3/${index.toString().padStart(2, '0')}.png')`;
        } else {
            overlayImage.style.backgroundImage = `url('img4/${index.toString().padStart(2, '0')}.png')`;
        }

        // 위치 설정
        overlayImage.style.position = 'absolute';

        // 데스크톱 위치 계산
        if (!isMobile) {
            overlayImage.style.width = `${100 / 8}vw`; // 데스크톱: 8열 기준 너비
            overlayImage.style.height = `${100 / 20}vh`; // 데스크톱: 20행 기준 높이
            overlayImage.style.top = `${Math.floor((index - 1) / 8) * (100 / 20)}vh`;
            overlayImage.style.left = `${((index - 1) % 8) * (100 / 8)}vw`;
        } else {
            // 모바일 위치 계산
            overlayImage.style.width = `${100 / 3}vw`; // 모바일: 3열 기준 너비
            overlayImage.style.height = `${100 / 29}vh`; // 모바일: 29행 기준 높이
            overlayImage.style.top = `${Math.floor((index - 1) / 3) * (100 / 29)}vh`;
            overlayImage.style.left = `${((index - 1) % 3) * (100 / 3)}vw`;
        }

        gridContainer.appendChild(overlayImage);
    });
});

