import buttons from './modules/buttons'

import '../scss/style.scss'

alert('Check alert!')
console.log(buttons)

const wrapper = document.createElement('div')


for (let line of buttons.en) {
    const btnLine = document.createElement('div')
    for (let button of line) {
        const btn = document.createElement('div')
        btn.append(button.key)
        btnLine.append(btn)
    }
    wrapper.append(btnLine)
}

document.body.append(wrapper)

document.addEventListener('keyup', (ev) => {
    console.log(ev)
})

