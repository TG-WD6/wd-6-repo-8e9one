const beschrijvingEen = document.getElementById('sec-een')
const beschrijvingTwee = document.getElementById('sec-twee')
const beschrijvingDrie = document.getElementById('sec-drie')
const btnEen = document.getElementById('btn-een')
const btnTwee = document.getElementById('btn-twee')
const btnDrie = document.getElementById('btn-drie')

btnEen.addEventListener('click', () => {
    beschrijvingEen.classList.toggle('active')
    if (beschrijvingEen.style.maxHeight) {
        beschrijvingEen.style.maxHeight = null;
    } else {
        beschrijvingEen.style.maxHeight = beschrijvingEen.scrollHeight + 'px'
    }
})
btnTwee.addEventListener('click', () => {
    beschrijvingTwee.classList.toggle('active')
    if (beschrijvingTwee.style.maxHeight) {
        beschrijvingTwee.style.maxHeight = null;
    } else {
        beschrijvingTwee.style.maxHeight = beschrijvingTwee.scrollHeight + 'px'
    }
})
btnDrie.addEventListener('click', () => {
    beschrijvingDrie.classList.toggle('active')
    if (beschrijvingDrie.style.maxHeight) {
        beschrijvingDrie.style.maxHeight = null;
    } else {
        beschrijvingDrie.style.maxHeight = beschrijvingDrie.scrollHeight + 'px'
    }
})