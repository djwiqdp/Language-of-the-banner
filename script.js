document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.querySelector('.grid');

    // 화면 너비에 따라 표시할 이미지 개수 결정
    const isMobile = window.innerWidth <= 430; // iPhone 14 Plus 기준
    const maxImages = isMobile ? 87 : 160; // 모바일은 87개, 데스크톱은 160개

    // 그리드 생성
    for (let i = 1; i <= maxImages; i++) {
        const div = document.createElement('div');
        div.setAttribute('data-index', i);

        // 말풍선 텍스트 설정
        if ([12, 53, 71, 75, 82, 83, 87, 104, 117, 121, 127, 160].includes(i)) {
            div.setAttribute('data-tooltip', `말풍선 내용 ${i}`);
        }

        // 이미지 경로 설정
        if (i <= 80) {
            div.style.backgroundImage = `url('img1/pixel_${i.toString().padStart(2, '0')}.gif')`;
        } else {
            div.style.backgroundImage = `url('img2/pixel_${i.toString().padStart(2, '0')}.gif')`;
        }

        // 모바일에서 클릭 이벤트
        if (isMobile) {
            div.addEventListener('click', () => {
                if (i <= 80) {
                    div.style.backgroundImage = `url('img3/${i.toString().padStart(2, '0')}.png')`;
                } else {
                    div.style.backgroundImage = `url('img4/${i.toString().padStart(2, '0')}.png')`;
                }
                div.classList.toggle('active');
            });
        } else {
            // 데스크톱에서 호버 이벤트
            div.addEventListener('mouseover', () => {
                if (i <= 80) {
                    div.style.backgroundImage = `url('img3/${i.toString().padStart(2, '0')}.png')`;
                } else {
                    div.style.backgroundImage = `url('img4/${i.toString().padStart(2, '0')}.png')`;
                }
            });

            div.addEventListener('mouseout', () => {
                if (i <= 80) {
                    div.style.backgroundImage = `url('img1/pixel_${i.toString().padStart(2, '0')}.gif')`;
                } else {
                    div.style.backgroundImage = `url('img2/pixel_${i.toString().padStart(2, '0')}.gif')`;
                }
            });
        }

        // 특정 인덱스의 클릭 이벤트 설정
        div.addEventListener('click', () => {
            if ([28, 10, 54, 76, 129, 132, 152].includes(i)) {
                window.location.href = 'edge.html';
            } else if ([12, 53, 71, 75, 82, 83, 87, 104, 117, 121, 127, 160].includes(i)) {
                window.location.href = 'mark.html';
            } else if ([15, 69, 80, 114, 119, 131, 38, 45, 59, 50, 158].includes(i)) {
                window.location.href = 'question.html';
            } else if ([31, 49, 52, 81, 130, 139, 146, 147].includes(i)) {
                window.location.href = 'call.html';
            } else if ([41, 64, 65, 125, 154].includes(i)) {
                window.location.href = 'face.html';
            }
        });

        gridContainer.appendChild(div);
    }

    // 말풍선 스타일 설정
    const style = document.createElement('style');
    style.textContent = `
        .grid div[data-tooltip]::after {
            content: attr(data-tooltip);
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            background-color: rgba(0, 0, 0, 0.8);
            color: #fff;
            font-size: ${isMobile ? '12px' : '14px'};
            padding: 8px;
            border-radius: 4px;
            white-space: nowrap;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
        }

        .grid div[data-tooltip].active::after,
        .grid div[data-tooltip]:hover::after {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
});

