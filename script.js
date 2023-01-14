const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");


const thumbnails = [img1, img2, img3, img4, img5, img6];
const focusImages = ["/asset/img/focus1.jpg", "/asset/img/focus2.jpg", "/asset/img/focus3.jpg", "/asset/img/focus4.jpg", "/asset/img/focus5.jpg", "/asset/img/focus6.jpg"];

const focusImg = document.getElementById("focusImg");

const activateGallery = () => {
  thumbnails.forEach((thumbnail, i) => {
    thumbnail.addEventListener("mouseover", function () {
      focusImg.style.background = `url('${focusImages[i]}') no-repeat center center/contain`;
    });
  });
  
  thumbnails.forEach((thumbnail, i) => {
    thumbnail.addEventListener("click", function () {
      focusImg.style.background = `url('${focusImages[i]}') no-repeat center center/contain`;
      
    });
  });

  thumbnails.forEach((thumbnail, i) => {
    thumbnail.addEventListener("mouseleave", function () {
      focusImg.style.background = `url('${focusImages[i]}') no-repeat center center/contain`;
    });
  });
};

const init = () => {
  activateGallery();
};

init();
