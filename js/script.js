let input = document.querySelector('.slider')
let btns = document.querySelectorAll('.btn')
let img = document.querySelector('img')
let outText = document.querySelector('span')

let change = 0;


input.addEventListener('input', () => {
    inventEffect()
})

btns.forEach(el => {
    el.addEventListener('click', () => {
        switch (el.textContent) {
            case 'Blur' :
                change = 0
                inventEffect()
                break
            case 'Sepia' :
                change = 1
                inventEffect()
                break
            case 'Invert' :
                change = 2
                inventEffect()
                break
        }
    })
})

function inventEffect() {
    outText.textContent = `${input.value}%`
    switch (change) {
        case 0 :
            img.style = `filter: blur(${input.value}px);`
            break
        case 1 :
            img.style = `filter: grayscale(${input.value}%);`
            break
        case 2 :
            img.style = `filter: invert(${input.value}%);`
            break
    }
}