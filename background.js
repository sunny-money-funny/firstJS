const imgs = ["b (1).jpg", "b (2).jpg", "b (3).jpg", "b (4).jpg"];

const chosenImgs = imgs[Math.floor(Math.random() * imgs.length)];

const bgImgs = document.createElement("img");

bgImgs.src = `img/${chosenImgs}`;
bgImgs.style.width = "500px";  // 가로 크기 설정
bgImgs.style.height = "auto";  // 세로 크기 자동 설정 (비율 유지)

document.body.appendChild(bgImgs);