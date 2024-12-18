document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.querySelector('.grid');

    for (let i = 1; i <= 160; i++) {
        const div = document.createElement('div');
        div.setAttribute('data-index', i);

        // img1과 img2 폴더 나눔
        if (i <= 80) {
            div.style.backgroundImage = `url('img1/pixel_${i.toString().padStart(2, '0')}.gif')`;
        } else {
            div.style.backgroundImage = `url('img2/pixel_${i.toString().padStart(2, '0')}.gif')`;
        }

        div.addEventListener('mouseover', () => {
            // img2와 img3, img4 폴더 나눔
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

        // 기존의 클릭 이벤트는 변경 없이 유지
        if (i === 28 || i === 10 || i === 54 || i === 76 || i === 129 || i === 132 || i === 152) {
            div.addEventListener('click', () => {
                window.location.href = 'edge.html';
            });
        }

        if ([12, 53, 71, 75, 82, 83, 87, 104, 117, 121, 127, 160].includes(i)) {
            div.addEventListener('click', () => {
                window.location.href = 'mark.html';
            });
        }

        if ([15, 69, 80, 114, 119, 131, 38, 45, 59, 50, 81, 158].includes(i)) {
            div.addEventListener('click', () => {
                window.location.href = 'question.html';
            });
        }

        if ([31, 49, 52, 130, 139, 146, 147].includes(i)) {
            div.addEventListener('click', () => {
                window.location.href = 'call.html';
            });
        }

        if ([41, 64, 65, 125, 154].includes(i)) {
            div.addEventListener('click', () => {
                window.location.href = 'face.html';
            });
        }

        gridContainer.appendChild(div);
    }
});


