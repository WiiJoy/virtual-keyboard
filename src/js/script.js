import buttons from './modules/buttons'
import createElement from './modules/dom-create'

import '../scss/style.scss'

alert('Check alert!')
console.log(buttons)

const wrapper = createElement('div', document.body, 'keyboard__wrapper')

// const wrapper = document.createElement('div')


for (let line of buttons.ru) {
    const btnLine = createElement('div', wrapper, 'keyboard__line')
    for (let button of line) {
        const btn = createElement('div', btnLine, 'keyboard__btn')
        btn.innerHTML = button.key
        // btnLine.append(btn)
    }
    // wrapper.append(btnLine)
}

// document.body.append(wrapper)

document.addEventListener('keyup', (ev) => {
    console.log(ev)
})

