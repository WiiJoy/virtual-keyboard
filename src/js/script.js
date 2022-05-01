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
        this.lang = 'ru'
        this.isShift = false
        this.isCapsLock = false
    }

    renderButtons() {
        console.log('start re-render')
        this.wrapper.innerHTML = ''
        for (let line of this.buttons[this.lang]) {
            const btnLine = createElement('div', this.wrapper, 'keyboard__line')
            for (let button of line) {
                const btnClasses = ['keyboard__btn']
        
                if (button.keyClasses) btnClasses.push(button.keyClasses)
        
                const btn = createElement('div', btnLine, ...btnClasses)

                let buttonKey = this.checkRegister(button)

                // if (!thisCapsLock) {

                // } else {

                // }

                btn.innerHTML = buttonKey
                btn.dataset.key = button.keyCode
            }
        }
    }

    checkRegister(btn) {
        if (!this.isCapsLock) {
            if (this.isShift) {
                return btn.shiftKey
            } else {
                return btn.key
            }
        } else {
            if (this.isShift) {
                return btn.key
            } else {
                return btn.shiftKey
            }
        }
    }

    changeTextValue(text) {
        this.textarea.setRangeText(text, this.textarea.selectionStart, this.textarea.selectionEnd, 'end')
        console.log(this.textarea.value)
        this.textarea.focus();
    }

    changeTextareaSelection(position) {
        this.textarea.selectionStart = position
        this.textarea.selectionEnd = this.textarea.selectionStart
        this.textarea.focus()
    }

    toUp() {
        this.changeTextareaSelection(0)
    }

    toDown() {
        this.changeTextareaSelection(this.textarea.value.length)
    }

    toLeft() {
        this.changeTextareaSelection(this.textarea.selectionStart - 1)
    }

    toRight() {
        this.changeTextareaSelection(this.textarea.selectionStart + 1)
    }

    handleKeyUpEvent(ev) {
        // console.log(ev)
        switch (ev.code) {
            case 'ArrowUp':
            case 'ArrowDown':
            case 'ArrowLeft':
            case 'ArrowRight':
                break
            default:
                console.log(ev.code)
        }
    }

    handleMouseClick(ev) {
        if (!ev.target.classList.contains('keyboard__btn')) return

        switch (ev.target.dataset.key) {
            case 'KeyLang':
                if (this.lang === 'ru') {
                    this.lang = 'en'
                } else {
                    this.lang = 'ru'
                }

                this.renderButtons()
                break
            case 'ShiftLeft':
            case 'ShiftRight':
                this.isShift = !this.isShift
                this.renderButtons()
                break
            case 'CapsLock':
                this.isCapsLock = !this.isCapsLock
                this.renderButtons()
                break
            case 'Tab':
                break
            case 'Backspace':
                break
            case 'Enter':
                break
            case 'ControlLeft':
                break
            case 'AltLeft':
            case 'AltRight':
                break
            case 'MetaLeft':
            case 'MetaRight':
                break
            case 'ArrowUp':
                ev.preventDefault()
                this.toUp()
                break
            case 'ArrowDown':
                ev.preventDefault()
                this.toDown()
                break
            case 'ArrowLeft':
                ev.preventDefault()
                this.toLeft()
                break
            case 'ArrowRight':
                ev.preventDefault()
                this.toRight()
                break
            default:
                console.log(ev.target)
                // this.textarea.value = this.textarea.value + ev.target.innerHTML
                // this.textarea.focus()
                // console.log(this.textarea.selectionStart, this.textarea.selectionEnd)
                this.changeTextValue(ev.target.innerHTML)
        }
    }

    init() {
        this.textarea = createElement('textarea', document.body, 'keyboard__input')
        // this.textarea.setAttribute('autofocus', '')

        this.wrapper = createElement('div', document.body, 'keyboard__wrapper')

        for (let line of this.buttons[this.lang]) {
            const btnLine = createElement('div', this.wrapper, 'keyboard__line')
            for (let button of line) {
                const btnClasses = ['keyboard__btn']
        
                if (button.keyClasses) btnClasses.push(button.keyClasses)
        
                const btn = createElement('div', btnLine, ...btnClasses)
                btn.innerHTML = button.key
                btn.dataset.key = button.keyCode
            }
        }

        this.wrapper.addEventListener('click', this.handleMouseClick.bind(this))
        window.addEventListener('keyup', this.handleKeyUpEvent.bind(this))
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

// document.addEventListener('keyup', (ev) => {
//     console.log(ev)
// })

