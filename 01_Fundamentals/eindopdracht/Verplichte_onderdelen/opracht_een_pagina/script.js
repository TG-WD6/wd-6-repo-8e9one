const prev = document.getElementById('prev')
const next = document.getElementById('next')
const pages = document.querySelectorAll('.page')
const productVis = document.querySelectorAll('.product')
const productEen = document.getElementById('product-een')
const productTwee = document.getElementById('product-twee')
const productDrie = document.getElementById('product-drie')
// footer accordion
const accordionToggle = document.querySelectorAll('.accordion-toggle')


let currentActive = 1
let limit = 3 * currentActive

next.addEventListener('click', () => {
    currentActive++

    if (currentActive > pages.length) {
        currentActive = pages.length
    }
    updatePage()
    toggleVis()

})

prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1

    }
    updatePage()
    toggleVis()

})

function updatePage() {
    pages.forEach((page, idx) => {
        if (idx === currentActive - 1) {
            page.classList.add('active')
        } else {
            page.classList.remove('active')
        }
    })
}

function toggleVis() {
    for (let i = 0; i < pages.length; i++) {
        pages.style.visibility === "visible";
        pages.style.maxHeight = null;

    }
}


// footer accordion
accordionToggle.forEach(accordtoggle => {
    accordtoggle.addEventListener('click', () => {
        accordtoggle.parentNode.classList.toggle('active')
    })
})

// function toggleVis() {
//     if (currentActive === 1) {
//         if (productEen.style.visibility === "hidden") {
//
//         } else {
//             productEen.style.visibility === "hidden";
//             productEen.style.maxHeight = 0;
//         }
//     } else if (currentActive === 2) {
//         if (productTwee.style.visibility === "hidden") {
//             productTwee.style.visibility === "visible";
//             productTwee.style.maxHeight = null;
//         } else {
//             productTwee.style.visibility === "hidden";
//             productTwee.style.maxHeight = 0;
//         }

//     } else if (currentActive === 3) {
//         if (productDrie.style.visibility === "hidden") {
//             productDrie.style.visibility === "visible";
//             productDrie.style.maxHeight = null;
//         } else {
//             productDrie.style.visibility === "hidden";
//             productDrie.style.maxHeight = 0;
//         }

//     }
// }

// function updateVisibility() {
//     if (currentActive === 1) {
//         if (productEen.style.maxHeight && productEen.style.opacity) {
//             productEen.style.maxHeight = null;
//             productEen.style.opacity = null;
//         } else {
//             productEen.style.maxHeight = productEen.scrollHeight + 'px'
//             productEen.style.opacity = 1

//         }
//     } else if (currentActive === 2) {
//         if (productTwee.style.maxHeight && productTwee.style.opacity) {
//             productTwee.style.maxHeight = null;
//             productTwee.style.opacity = null;
//         } else {
//             productTwee.style.maxHeight = productEen.scrollHeight + 'px'
//             productTwee.style.opacity = 1

//         }
//     } else if (currentActive === 3) {
//         if (productDrie.style.maxHeight && productDrie.style.opacity) {
//             productDrie.style.maxHeight = null;
//             productDrie.style.opacity = null;
//         } else {
//             productDrie.style.maxHeight = productEen.scrollHeight + 'px'
//             productDrie.style.opacity = 1

//         }
//     }
// }

// if (productTwee.style.maxHeight && productTwee.style.opacity) {
            //     productTwee.style.maxHeight = null;
            //     productTwee.style.opacity = null;
            // } else {

            // }

