document.querySelectorAll('.button__checkP').forEach(function (dropD) {
  const checkPrice = dropD.querySelector('.checkPrice');
  const dropdownInCard = dropD.querySelector('.dropdownInCard');

  checkPrice.addEventListener('click', function (e) {
    this.nextElementSibling.classList.toggle('active');
    this.nextElementSibling.classList.toggle('hidden');


  })

  document.addEventListener('click', function (event) {
    if (event.target !== dropdownInCard && event.target !== checkPrice) {
      dropdownInCard.classList.remove('active')
      dropdownInCard.classList.add('hidden')
    }
  })

})

let coll = document.getElementsByClassName('sHow');
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.previousElementSibling.classList.toggle('active');
    this.classList.toggle('hidden');
  })
};
let coll2 = document.getElementsByClassName('sHow');
for (let i = 0; i < coll2.length; i++) {
  coll2[i].addEventListener('click', function () {
    this.previousElementSibling.classList.toggle('active');
    this.classList.toggle('hidden');
  })
};
