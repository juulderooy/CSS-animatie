const button = document.getElementById('button');
let vlak = document.querySelectorAll('.vlakje');
console.log(vlak[0]);
// let vlak2 = document.querySelector('.vlakje2')
// let vlak3 = document.querySelector('.vlakje3')

const move = () => {

    for (i = 0; i < vlak.length; i++){
        console.log("ove start");
        vlak[i].classList.toggle('vlakje--move-out');
        //vlak.classList.toggle('vlakje--move-out');
    }

    // vlak2.classList.toggle('vlakje--move-out');
    // vlak3.classList.toggle('vlakje--move-out');
}
button.addEventListener('click', move);