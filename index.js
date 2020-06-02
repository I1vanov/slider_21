// find elements
var showPrevBtn = document.getElementById('show-prew');
var showNextBtn = document.getElementById('show-next');
var slideImage = document.getElementById('slide-img');
//subscribe to events
showPrevBtn.addEventListener('click', onShowPrevBtn);
showNextBtn.addEventListener('click', onShowNextBtn);


//create images array
var imagesUrls = [];
imagesUrls.push('https://www.avtovzglyad.ru/media/article/BMW_3-Series_2019.jpg.740x555_q85_box-38%2C115%2C1102%2C913_crop_detail_upscale.jpg');
imagesUrls.push('https://www.avtovzglyad.ru/media/article/premium_cars.jpg.740x555_q85_box-212%2C0%2C1850%2C1231_crop_detail_upscale.jpg');
imagesUrls.push('https://www.avtovzglyad.ru/media/article/slider0.jpg.740x555_q85_box-83%2C0%2C1262%2C883_crop_detail_upscale.jpg');
imagesUrls.push('https://www.iphones.ru/wp-content/uploads/2017/03/mb_gt.jpg');
imagesUrls.push('https://avatars.mds.yandex.net/get-pdb/34158/48b64cdc-e1c1-4bce-9756-faba1e1ff679/s1200?webp=false');


var currentImagesIndex = 0;
slideImage.src = imagesUrls[currentImagesIndex];
showPrevBtn.disabled = true;

//functions difenations
function onShowPrevBtn() {
    currentImagesIndex--;
    slideImage.src = imagesUrls[currentImagesIndex];
    showNextBtn.disabled = false;
    if (currentImagesIndex === 0) {
        showPrevBtn.disabled = true;
    }
}
function onShowNextBtn() {
    currentImagesIndex++;
    slideImage.src = imagesUrls[currentImagesIndex];
    showPrevBtn.disabled = false;
    if (currentImagesIndex === (imagesUrls.length - 1)) {
        showNextBtn.disabled = true;
    }
}