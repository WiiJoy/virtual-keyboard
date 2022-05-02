import buttons from './modules/buttons'
import createElement from './modules/dom-create'

import '../scss/style.scss'

class Keyboard {
    constructor() {
        this.buttons = {
            ru: buttons.ru,
            en: buttons.en
        }
        this.keyboard = null
        this.textarea = null
        this.wrapper = null
        this.lang = 'ru'
        this.isShift = false
        this.isShiftPush = false
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

    handleTabKeyEvent() {
        this.changeTextValue('\t')
    }

    handleEnterKeyEvent() {
        this.changeTextValue('\n')
    }

    handleBackspaceKeyEvent() {
        if (!this.textarea.value || this.textarea.selectionStart === 0) return

        const currPosition = this.textarea.selectionStart
        const oldText = this.textarea.value

        this.textarea.value = ''

        this.changeTextValue(oldText.slice(0, currPosition - 1) + oldText.slice(currPosition))

        this.changeTextareaSelection(currPosition - 1)
    }

    handleKeyDownEvent(ev) {
        const currBtn = this.wrapper.querySelector(`[data-key=${ev.code}]`)
        currBtn.classList.add('active')

        switch (ev.code) {
            case 'ShiftLeft':
            case 'ShiftRight':
                this.isShift = true
                this.isShiftPush = true
                this.renderButtons()
                break
            case 'CapsLock':
                this.isCapsLock = !this.isCapsLock
                this.renderButtons()
                break
            case 'Tab':
                ev.preventDefault()
                this.handleTabKeyEvent()
                break
            case 'Backspace':
                ev.preventDefault()
                this.handleBackspaceKeyEvent()
                break
            case 'Enter':
                ev.preventDefault()
                this.handleEnterKeyEvent()
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
            case 'ArrowDown':
            case 'ArrowLeft':
            case 'ArrowRight':
                break
            default:
                ev.preventDefault()
                this.changeTextValue(currBtn.innerHTML)
                console.log(ev.code)
        }
    }

    handleKeyUpEvent(ev) {
        const currBtn = this.wrapper.querySelector(`[data-key=${ev.code}]`)
        currBtn.classList.remove('active')

        switch (ev.code) {
            case 'ShiftLeft':
            case 'ShiftRight':
                this.isShift = false
                this.isShiftPush = false
                this.renderButtons()
                break
            default:
                console.log('key up: ', ev.code)
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
                this.handleTabKeyEvent()
                break
            case 'Backspace':
                this.handleBackspaceKeyEvent()
                break
            case 'Enter':
                this.handleEnterKeyEvent()
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
                this.changeTextValue(ev.target.innerHTML)
                if (!this.isShiftPush && this.isShift) {
                    this.isShift = false
                    this.renderButtons()
                }
        }
    }

    init() {
        this.keyboard = createElement('div', document.body, 'keyboard')

        this.textarea = createElement('textarea', this.keyboard, 'keyboard__input')

        this.wrapper = createElement('div', this.keyboard, 'keyboard__wrapper')

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
        window.addEventListener('keydown', this.handleKeyDownEvent.bind(this))
        window.addEventListener('keyup', this.handleKeyUpEvent.bind(this))

        this.textarea.focus()
    }
}

const keyboard = new Keyboard()
keyboard.init()
