const buttons = {
    ru:
        [
            [
                {
                    key: 'ё', shiftKey: 'Ё', keyCode: 'Backquote', capsLockKey: 'Ё',
                },
                { key: '1', shiftKey: '!', keyCode: 'Digit1' },
                { key: '2', shiftKey: '"', keyCode: 'Digit2' },
                { key: '3', shiftKey: '№', keyCode: 'Digit3' },
                { key: '4', shiftKey: ';', keyCode: 'Digit4' },
                { key: '5', shiftKey: '%', keyCode: 'Digit5' },
                { key: '6', shiftKey: ':', keyCode: 'Digit6' },
                { key: '7', shiftKey: '?', keyCode: 'Digit7' },
                { key: '8', shiftKey: '*', keyCode: 'Digit8' },
                { key: '9', shiftKey: '(', keyCode: 'Digit9' },
                { key: '0', shiftKey: ')', keyCode: 'Digit0' },
                { key: '-', shiftKey: '_', keyCode: 'Minus' },
                { key: '=', shiftKey: '+', keyCode: 'Equal' },
                { key: 'Backspace', shiftKey: 'Backspace', keyCode: 'Backspace' },
            ],
            [
                { key: 'Tab', shiftKey: 'Tab', keyCode: 'Tab' },
                {
                    key: 'й', shiftKey: 'Й', keyCode: 'KeyQ', capsLockKey: 'Й',
                },
                {
                    key: 'ц', shiftKey: 'Ц', keyCode: 'KeyW', capsLockKey: 'Ц',
                },
                {
                    key: 'у', shiftKey: 'У', keyCode: 'KeyE', capsLockKey: 'У',
                },
                {
                    key: 'к', shiftKey: 'К', keyCode: 'KeyR', capsLockKey: 'К',
                },
                {
                    key: 'е', shiftKey: 'Е', keyCode: 'KeyT', capsLockKey: 'Е',
                },
                {
                    key: 'н', shiftKey: 'Н', keyCode: 'KeyY', capsLockKey: 'Н',
                },
                {
                    key: 'г', shiftKey: 'Г', keyCode: 'KeyU', capsLockKey: 'Г',
                },
                {
                    key: 'ш', shiftKey: 'Ш', keyCode: 'KeyI', capsLockKey: 'Ш',
                },
                {
                    key: 'щ', shiftKey: 'Щ', keyCode: 'KeyO', capsLockKey: 'Щ',
                },
                {
                    key: 'з', shiftKey: 'З', keyCode: 'KeyP', capsLockKey: 'З',
                },
                {
                    key: 'х', shiftKey: 'Х', keyCode: 'BracketLeft', capsLockKey: 'Х',
                },
                {
                    key: 'ъ', shiftKey: 'Ъ', keyCode: 'BracketRight', capsLockKey: 'Ъ',
                },
            
            ],
            [
                { key: 'CapsLock', shiftKey: 'CapsLock', keyCode: 'CapsLock' },
                {
                    key: 'ф', shiftKey: 'Ф', keyCode: 'KeyA', capsLockKey: 'Ф',
                },
                {
                    key: 'ы', shiftKey: 'Ы', keyCode: 'KeyS', capsLockKey: 'Ы',
                },
                {
                    key: 'в', shiftKey: 'В', keyCode: 'KeyD', capsLockKey: 'В',
                },
                {
                    key: 'а', shiftKey: 'А', keyCode: 'KeyF', capsLockKey: 'А',
                },
                {
                    key: 'п', shiftKey: 'П', keyCode: 'KeyG', capsLockKey: 'П',
                },
                {
                    key: 'р', shiftKey: 'Р', keyCode: 'KeyH', capsLockKey: 'Р',
                },
                {
                    key: 'о', shiftKey: 'О', keyCode: 'KeyJ', capsLockKey: 'О',
                },
                {
                    key: 'л', shiftKey: 'Л', keyCode: 'KeyK', capsLockKey: 'Л',
                },
                {
                    key: 'д', shiftKey: 'Д', keyCode: 'KeyL', capsLockKey: 'Д',
                },
                {
                    key: 'ж', shiftKey: 'Ж', keyCode: 'Semicolon', capsLockKey: 'Ж',
                },
                {
                    key: 'э', shiftKey: 'Э', keyCode: 'Quote', capsLockKey: 'Э',
                },
                {
                    key: '\\', shiftKey: '/', keyCode: 'Backslash',
                },
                { key: 'Enter', shiftKey: 'Enter', keyCode: 'Enter' },
            ],
            [
                { key: 'Shift', shiftKey: 'Shift', keyCode: 'ShiftLeft' },
                { key: ']', shiftKey: '[', keyCode: 'IntlBackslash' },
                {
                    key: 'я', shiftKey: 'Я', keyCode: 'KeyZ', capsLockKey: 'Я',
                },
                {
                    key: 'ч', shiftKey: 'Ч', keyCode: 'KeyX', capsLockKey: 'Ч',
                },
                {
                    key: 'с', shiftKey: 'С', keyCode: 'KeyC', capsLockKey: 'С',
                },
                {
                    key: 'м', shiftKey: 'М', keyCode: 'KeyV', capsLockKey: 'М',
                },
                {
                    key: 'и', shiftKey: 'И', keyCode: 'KeyB', capsLockKey: 'И',
                },
                {
                    key: 'т', shiftKey: 'Т', keyCode: 'KeyN', capsLockKey: 'Т',
                },
                {
                    key: 'ь', shiftKey: 'Ь', keyCode: 'KeyM', capsLockKey: 'Ь',
                },
                {
                    key: 'б', shiftKey: 'Б', keyCode: 'Comma', capsLockKey: 'Б',
                },
                {
                    key: 'ю', shiftKey: 'Ю', keyCode: 'Period', capsLockKey: 'Ю',
                },
                { key: '.', shiftKey: ',', keyCode: 'Slash' },
                { key: 'ArrowUp', shiftKey: 'ArrowUp', keyCode: 'ArrowUp' },
                { key: 'Shift', shiftKey: 'Shift', keyCode: 'ShiftRight' },
            ],
            [
                { key: 'Control', shiftKey: 'Control', keyCode: 'ControlLeft' },
                { key: 'Option', shiftKey: 'Option', keyCode: 'AltLeft' },
                { key: 'Command', shiftKey: 'Command', keyCode: 'MetaLeft' },
                { key: ' ', shiftKey: ' ', keyCode: 'Space' },
                { key: 'Command', shiftKey: 'Command', keyCode: 'MetaRight' },
                { key: 'Alt', shiftKey: 'Alt', keyCode: 'AltRight' },
                { key: 'ArrowLeft', shiftKey: 'ArrowLeft', keyCode: 'ArrowLeft' },
                { key: 'ArrowDown', shiftKey: 'ArrowDown', keyCode: 'ArrowDown' },
                { key: 'ArrowRight', shiftKey: 'ArrowRight', keyCode: 'ArrowRight' },
            ],
        ],
    en: 'buttons-en'
}

export default buttons