let rating = document.querySelectorAll('input[name="rating"]');
let labRat = document.querySelectorAll('label');
let smbtn = document.querySelector('input[type="submit"]');
let card = document.querySelector('.rating_card');
let newCard = document.querySelector('.finished_rating');
let ratValue = document.getElementById('rating_value');

for(let i=0; i<rating.length; i++){
    rating[i].addEventListener('click', function() {
        labRat[i].classList.add('checked');
        for(let j=0; j<rating.length; j++){
            if(i!=j){
                labRat[j].classList.remove('checked');
            }
        }
    });
}

function Submit(){
    let btn = document.querySelector('input[name="rating"]:checked');
    card.classList.add('hide');
    newCard.classList.remove('hide');
    ratValue.innerText = btn.value;
}

smbtn.addEventListener('click', Submit);