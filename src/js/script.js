import buttons from './modules/buttons'
import createElement from './modules/dom-create'

import '../scss/style.scss'

// alert('Check alert!')
// console.log(buttons)

class Keyboard {
    constructor() {
        this.buttons = {
            ru: buttons.ru,
            en: buttons.en
        }
        this.textarea = null
        this.wrapper = null
    }

    init() {
        this.textarea = createElement('textarea', document.body, 'keyboard__input')
        this.textarea.setAttribute('autofocus', '')

        this.wrapper = createElement('div', document.body, 'keyboard__wrapper')

        for (let line of this.buttons.ru) {
            const btnLine = createElement('div', this.wrapper, 'keyboard__line')
            for (let button of line) {
                // console.log(button)
                const btnClasses = ['keyboard__btn']
        
                if (button.keyClasses) btnClasses.push(button.keyClasses)
        
                const btn = createElement('div', btnLine, ...btnClasses)
                btn.innerHTML = button.key
                // btnLine.append(btn)
            }
            // wrapper.append(btnLine)
        }
    }
}

// const textarea = createElement('textarea', document.body, 'keyboard__input')
// textarea.setAttribute('autofocus', '')

// const wrapper = createElement('div', document.body, 'keyboard__wrapper')

// const wrapper = document.createElement('div')


// for (let line of this.buttons.ru) {
//     const btnLine = createElement('div', this.wrapper, 'keyboard__line')
//     for (let button of line) {
//         // console.log(button)
//         const btnClasses = ['keyboard__btn']

//         if (button.keyClasses) btnClasses.push(button.keyClasses)

//         const btn = createElement('div', btnLine, ...btnClasses)
//         btn.innerHTML = button.key
//         // btnLine.append(btn)
//     }
//     // wrapper.append(btnLine)
// }

const keyboard = new Keyboard()
keyboard.init()

// document.body.append(wrapper)

document.addEventListener('keyup', (ev) => {
    console.log(ev)
})

