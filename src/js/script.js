import buttons from './modules/buttons';
import createElement from './modules/dom-create';

import '../scss/style.scss';

document.addEventListener('DOMContentLoaded', () => {
    class Keyboard {
        constructor() {
          this.buttons = {
            ru: buttons.ru,
            en: buttons.en,
          };
          this.keyboard = null;
          this.textarea = null;
          this.wrapper = null;
          this.lang = this.getLang() || 'ru';
          this.isShift = false;
          this.isShiftPush = false;
          this.isCapsLock = false;
        }

        setLang(lang) {
            localStorage.setItem('keyboard-lang', lang)
        }

        getLang() {
            if (localStorage.getItem('keyboard-lang')) {
                return localStorage.getItem('keyboard-lang')
            }
        }
      
        renderButtons() {
          this.wrapper.innerHTML = '';
      
          this.buttons[this.lang].forEach((line) => {
            const btnLine = createElement('div', this.wrapper, 'keyboard__line');
      
            line.forEach((button) => {
              const btnClasses = ['keyboard__btn'];
              if (button.keyClasses) btnClasses.push(button.keyClasses);
              const btn = createElement('div', btnLine, ...btnClasses);
              const buttonKey = this.checkRegister(button);
              btn.innerHTML = buttonKey;
              btn.dataset.key = button.keyCode;
            });
          });
        }
      
        checkRegister(btn) {
          if (!this.isCapsLock) {
            if (this.isShift) {
              return btn.shiftKey;
            }
            return btn.key;
          }
          if (this.isShift) {
            return btn.key;
          }
          return btn.shiftKey;
        }
      
        changeTextValue(text) {
          this.textarea.setRangeText(text, this.textarea.selectionStart, this.textarea.selectionEnd, 'end');
          this.textarea.focus();
        }
      
        changeTextareaSelection(position) {
          this.textarea.selectionStart = position;
          this.textarea.selectionEnd = this.textarea.selectionStart;
          this.textarea.focus();
        }
      
        toUp() {
          this.changeTextareaSelection(0);
        }
      
        toDown() {
          this.changeTextareaSelection(this.textarea.value.length);
        }
      
        toLeft() {
          this.changeTextareaSelection(this.textarea.selectionStart - 1);
        }
      
        toRight() {
          this.changeTextareaSelection(this.textarea.selectionStart + 1);
        }
      
        handleTabKeyEvent() {
          this.changeTextValue('\t');
        }
      
        handleEnterKeyEvent() {
          this.changeTextValue('\n');
        }
      
        handleBackspaceKeyEvent() {
          if (!this.textarea.value || this.textarea.selectionStart === 0) return;
      
          const currPosition = this.textarea.selectionStart;
          const oldText = this.textarea.value;
      
          this.textarea.value = '';
      
          this.changeTextValue(oldText.slice(0, currPosition - 1) + oldText.slice(currPosition));
      
          this.changeTextareaSelection(currPosition - 1);
        }
      
        handleKeyDownEvent(ev) {
          const currBtn = this.wrapper.querySelector(`[data-key=${ev.code}]`);
      
          switch (ev.code) {
            case 'ShiftLeft':
            case 'ShiftRight':
              ev.preventDefault();
              this.isShift = true;
              this.isShiftPush = true;
              this.renderButtons();
              break;
            case 'CapsLock':
              this.isCapsLock = !this.isCapsLock;
              this.renderButtons();
              break;
            case 'Tab':
              ev.preventDefault();
              this.handleTabKeyEvent();
              break;
            case 'Backspace':
              ev.preventDefault();
              this.handleBackspaceKeyEvent();
              break;
            case 'Enter':
              ev.preventDefault();
              this.handleEnterKeyEvent();
              break;
            case 'ControlLeft':
              break;
            case 'AltLeft':
            case 'AltRight':
              break;
            case 'MetaLeft':
            case 'MetaRight':
              break;
            case 'ArrowUp':
            case 'ArrowDown':
            case 'ArrowLeft':
            case 'ArrowRight':
              break;
            default:
              ev.preventDefault();
              this.changeTextValue(currBtn.innerHTML);
          }
      
          currBtn.classList.add('active');
        }
      
        handleKeyUpEvent(ev) {
          const currBtn = this.wrapper.querySelector(`[data-key=${ev.code}]`);
      
          switch (ev.code) {
            case 'ShiftLeft':
            case 'ShiftRight':
              ev.preventDefault();
              this.isShift = false;
              this.isShiftPush = false;
              this.renderButtons();
              break;
            case 'Enter':
            case 'Backspace':
            case 'Tab':
            case 'CapsLock':
            case 'ControlLeft':
            case 'AltLeft':
            case 'AltRight':
            case 'MetaLeft':
            case 'MetaRight':
            case 'ArrowUp':
            case 'ArrowDown':
            case 'ArrowLeft':
            case 'ArrowRight':
              break;
            default:
              ev.preventDefault();
          }
      
          currBtn.classList.remove('active');
        }
      
        handleMouseClick(ev) {
          if (!ev.target.classList.contains('keyboard__btn')) return;
      
          switch (ev.target.dataset.key) {
            case 'KeyLang':
              if (this.lang === 'ru') {
                this.lang = 'en';
              } else {
                this.lang = 'ru';
              }
              this.setLang(this.lang)
      
              this.renderButtons();
              break;
            case 'ShiftLeft':
            case 'ShiftRight':
              this.isShift = !this.isShift;
              this.renderButtons();
              break;
            case 'CapsLock':
              this.isCapsLock = !this.isCapsLock;
              this.renderButtons();
              break;
            case 'Tab':
              this.handleTabKeyEvent();
              break;
            case 'Backspace':
              this.handleBackspaceKeyEvent();
              break;
            case 'Enter':
              this.handleEnterKeyEvent();
              break;
            case 'ControlLeft':
              break;
            case 'AltLeft':
            case 'AltRight':
              break;
            case 'MetaLeft':
            case 'MetaRight':
              break;
            case 'ArrowUp':
              ev.preventDefault();
              this.toUp();
              break;
            case 'ArrowDown':
              ev.preventDefault();
              this.toDown();
              break;
            case 'ArrowLeft':
              ev.preventDefault();
              this.toLeft();
              break;
            case 'ArrowRight':
              ev.preventDefault();
              this.toRight();
              break;
            default:
              this.changeTextValue(ev.target.innerHTML);
              if (!this.isShiftPush && this.isShift) {
                this.isShift = false;
                this.renderButtons();
              }
          }
          ev.target.classList.add('active');
      
          setTimeout(() => ev.target.classList.remove('active'), 100);
        }
      
        init() {
          this.keyboard = createElement('div', document.body, 'keyboard');
      
          this.textarea = createElement('textarea', this.keyboard, 'keyboard__input');
      
          this.wrapper = createElement('div', this.keyboard, 'keyboard__wrapper');
      
          this.buttons[this.lang].forEach((line) => {
            const btnLine = createElement('div', this.wrapper, 'keyboard__line');
      
            line.forEach((button) => {
              const btnClasses = ['keyboard__btn'];
      
              if (button.keyClasses) btnClasses.push(button.keyClasses);
      
              const btn = createElement('div', btnLine, ...btnClasses);
              btn.innerHTML = button.key;
              btn.dataset.key = button.keyCode;
            });
          });
      
          this.wrapper.addEventListener('click', this.handleMouseClick.bind(this));
          window.addEventListener('mouseover', (ev) => {
            if (!ev.target.classList.contains('keyboard__btn')) return;
            ev.target.classList.add('hover');
          });
          window.addEventListener('mouseout', (ev) => {
            if (!ev.target.classList.contains('keyboard__btn')) return;
            ev.target.classList.remove('hover');
          });
          window.addEventListener('keydown', this.handleKeyDownEvent.bind(this));
          window.addEventListener('keyup', this.handleKeyUpEvent.bind(this));
      
          this.textarea.focus();
        }
      }
      
      const keyboard = new Keyboard();
      keyboard.init();
})
