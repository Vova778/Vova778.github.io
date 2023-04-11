let imgUrl = ['https://slovopravdy.com.ua/wp-content/uploads/2018/12/poyizl.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/e/e3/DPKr3-001_at_Kiev-Passenger_station_%281%29.jpg',
'https://lexinform.com.ua/wp-content/uploads/2019/09/beautiful-blue-passenger-train-at-the-railway-PXJU5XF-min.jpg']

const imageEl = document.getElementById("img");
const previousbtnEl = document.getElementById("previous");
const nextbtnEl = document.getElementById("next");

let currentImageIndex = 0;

function handlePreviousClick() {
    console.log('variable')
    if(currentImageIndex === 0) return;
    currentImageIndex--;
    changeImageSrc(imgUrl[currentImageIndex])
}

function handleNextClick() {
    console.log('variable')
    if(currentImageIndex === imgUrl.length - 1) {
        currentImageIndex = 0;
    } else {
        currentImageIndex++;
    }
    changeImageSrc(imgUrl[currentImageIndex])
}

function changeImageSrc( src ) {
    console.log('variable')
    imageEl.src = src
}

nextbtnEl.addEventListener('click', handleNextClick)
previousbtnEl.addEventListener('click', handlePreviousClick)
