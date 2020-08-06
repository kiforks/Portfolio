const likeButton = document.querySelector('.photo-quote__like-icon');
const likeButton2 = document.querySelector('.photo-quote__like-icon--2');
const likeButton3 = document.querySelector('.photo-quote__like-icon--3');
const likeButton4 = document.querySelector('.photo-quote__like-icon--4');
const likeButton5 = document.querySelector('.photo-quote__like-icon--5');
const likeButton6 = document.querySelector('.photo-quote__like-icon--6');
const likeButton7 = document.querySelector('.photo-quote__like-icon--7');

let like = true,
    likeCount = document.querySelector('.photo-quote__amount').innerHTML,
    likeCount2 = document.querySelector('.photo-quote__amount--2').innerHTML,
    likeCount3 = document.querySelector('.photo-quote__amount--3').innerHTML,
    likeCount4 = document.querySelector('.photo-quote__amount--4').innerHTML,
    likeCount5 = document.querySelector('.photo-quote__amount--5').innerHTML,
    likeCount6 = document.querySelector('.photo-quote__amount--6').innerHTML,
    likeCount7 = document.querySelector('.photo-quote__amount--7').innerHTML;

likeButton.addEventListener('click', () => {
    likeCount = like ? ++likeCount : --likeCount;
    like = !like;
    document.querySelector('.photo-quote__amount').innerHTML = likeCount;
});

likeButton2.addEventListener('click', () => {
    likeCount2 = like ? ++likeCount2 : --likeCount2;
    like = !like;
    document.querySelector('.photo-quote__amount--2').innerHTML = likeCount2;
});
likeButton3.addEventListener('click', () => {
    likeCount3 = like ? ++likeCount3 : --likeCount3;
    like = !like;
    document.querySelector('.photo-quote__amount--3').innerHTML = likeCount3;
});
likeButton4.addEventListener('click', () => {
    likeCount4 = like ? ++likeCount4 : --likeCount4;
    like = !like;
    document.querySelector('.photo-quote__amount--4').innerHTML = likeCount4;
});
likeButton5.addEventListener('click', () => {
    likeCount5 = like ? ++likeCount5 : --likeCount5;
    like = !like;
    document.querySelector('.photo-quote__amount--5').innerHTML = likeCount5;
});
likeButton6.addEventListener('click', () => {
    likeCount6 = like ? ++likeCount6 : --likeCount6;
    like = !like;
    document.querySelector('.photo-quote__amount--6').innerHTML = likeCount6;
});
likeButton7.addEventListener('click', () => {
    likeCount7 = like ? ++likeCount7 : --likeCount7;
    like = !like;
    document.querySelector('.photo-quote__amount--7').innerHTML = likeCount7;
});