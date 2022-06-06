const prev = document.getElementById('prev')
const next = document.getElementById('next')
const pages = document.querySelectorAll('.page')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if (currentActive > pages.length) {
        currentActive = pages.length
    }
    update()
    console.log(currentActive)
})

prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1

    }
    update()
    console.log(currentActive)
})

function update() {
    pages.forEach((page, idx) => {
        if (idx === currentActive - 1) {
            page.classList.add('active')
        } else {
            page.classList.remove('active')
        }
    })
}

