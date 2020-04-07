const keysArray = [
  {code: 'Backquote', en: [96, 126], ru: [1105, 1025], printable: true},
  {code: 'Digit1', en: [49, 33], ru: [49, 33], printable: true},
  {code: 'Digit2', en: [50, 64], ru: [50, 34], printable: true},
  {code: 'Digit3', en: [51, 35], ru: [51, 8470], printable: true},
  {code: 'Digit4', en: [52, 36], ru: [52, 59], printable: true},
  {code: 'Digit5', en: [53, 37], ru: [53, 37], printable: true},
  {code: 'Digit6', en: [54, 94], ru: [54, 58], printable: true},
  {code: 'Digit7', en: [55, 38], ru: [55, 63], printable: true},
  {code: 'Digit8', en: [56, 42], ru: [56, 42], printable: true},
  {code: 'Digit9', en: [57, 40], ru: [57, 40], printable: true},
  {code: 'Digit0', en: [48, 41], ru: [48, 41], printable: true},
  {code: 'Minus', en: [45, 95], ru: [45, 95], printable: true},
  {code: 'Equal', en: [61, 43], ru: [61, 43], printable: true},
  {code: 'Backspace', en: ['Backspace ⟵', 'Backspace ⟵'], ru: ['Backspace ⟵', 'Backspace ⟵'], printable: false},
  {code: 'Tab', en: ['Tab ↹', 'Tab ↹'], ru: ['Tab ↹', 'Tab ↹'], printable: false},
  {code: 'KeyQ', en: [113, 81], ru: [1081,1049], printable: true},
  {code: 'KeyW', en: [119, 87], ru: [1094,1062], printable: true},
  {code: 'KeyE', en: [101, 69], ru: [1091,1059], printable: true},
  {code: 'KeyR', en: [114, 82], ru: [1082,1050], printable: true},
  {code: 'KeyT', en: [116, 84], ru: [1077,1045], printable: true},
  {code: 'KeyY', en: [121, 89], ru: [1085,1053], printable: true},
  {code: 'KeyU', en: [117, 85], ru: [1075,1043], printable: true},
  {code: 'KeyI', en: [105, 73], ru: [1096,1064], printable: true},
  {code: 'KeyO', en: [111, 79], ru: [1097,1065], printable: true},
  {code: 'KeyP', en: [112, 80], ru: [1079,1047], printable: true },
  {code: 'BracketLeft', en: [91,123], ru: [1093,1061], printable: true},
  {code: 'BracketRight', en: [93,125], ru: [1098,1066], printable: true},
  {code: 'Backslash', en: [92,124], ru: [92,47], printable: true},
  {code: 'Delete', en: ['DEL','DEL'], ru: ['DEL','DEL'], printable: false},
  {code: 'CapsLock', en: ['Caps Lock', 'Caps Lock'], ru: ['Caps Lock','Caps Lock'], printable: false},
  {code: 'KeyA', en: [97,65], ru: [1092,1060], printable: true},
  {code: 'KeyS', en: [115,83], ru: [1099,1067], printable: true},
  {code: 'KeyD', en: [100,68], ru: [1074,1042], printable: true},
  {code: 'KeyF', en: [102,70], ru: [1072,1040], printable: true},
  {code: 'KeyG', en: [103,71], ru: [1087,1055], printable: true},
  {code: 'KeyH', en: [104,72], ru: [1088,1056], printable: true},
  {code: 'KeyJ', en: [106,74], ru: [1086,1054], printable: true},
  {code: 'KeyK', en: [107,75], ru: [1083,1051], printable: true},
  {code: 'KeyL', en: [108,76], ru: [1076,1044], printable: true},
  {code: 'Semicolon', en: [59,58], ru: [1078,1046], printable: true},
  {code: 'Quote', en: [39,34], ru: [1101,1069], printable: true},
  {code: 'Enter', en: ['Enter ↵', 'Enter ↵'], ru: ['Enter ↵', 'Enter ↵'], printable: false},
  {code: 'ShiftLeft', en: ['Shift ⇧', 'Shift ⇧'], ru: ['Shift ⇧', 'Shift ⇧'], printable: false},
  {code: 'KeyZ', en: [122,90], ru: [1103,1071], printable: true},
  {code: 'KeyX', en: [120,88], ru: [1095,1063], printable: true},
  {code: 'KeyC', en: [99,67], ru: [1089,1057], printable: true},
  {code: 'KeyV', en: [118,86], ru: [1084,1052], printable: true},
  {code: 'KeyB', en: [98,66], ru: [1080,1048], printable: true},
  {code: 'KeyN', en: [110,78], ru: [1090,1058], printable: true},
  {code: 'KeyM', en: [109,77], ru: [1100,1068], printable: true},
  {code: 'Comma', en: [46,60], ru: [1073,1041], printable: true},
  {code: 'Period', en: [44,62], ru: [1102,1070], printable: true},
  {code: 'Slash', en: [47,63], ru: [46,44], printable: true},
  {code: 'ArrowUp', en: ['↑', '↑'], ru: ['↑', '↑'], printable: true},
  {code: 'ShiftRight', en: ['Shift ⇧', 'Shift ⇧'], ru: ['Shift ⇧', 'Shift ⇧'], printable: false},
  {code: 'ControlLeft', en: ['Ctrl', 'Ctrl'], ru: ['Ctrl', 'Ctrl'], printable: false},
  {code: 'MetaLeft', en: ['Win', 'Win'], ru: ['Win', 'Win'], printable: false},
  {code: 'AltLeft', en: ['Alt', 'Alt'], ru: ['Alt', 'Alt'], printable: false},
  {code: 'Space', en: [32,32], ru: [32,32], printable: true},
  {code: 'AltRight', en: ['Alt', 'Alt'], ru: ['Alt', 'Alt'], printable: false},
  {code: 'ControlRight', en: ['Ctrl', 'Ctrl'], ru: ['Ctrl', 'Ctrl'], printable: false},
  {code: 'ArrowLeft', en: ['←', '←'], ru: ['←', '←'], printable: true},
  {code: 'ArrowDown', en: ['↓', '↓'], ru: ['↓', '↓'], printable: true},
  {code: 'ArrowRight', en: ['→', '→'], ru: ['→', '→'], printable: true}
];

const virtualKeyboard = {
  options: {
    capsLock: false,
    shift: false,
    language: 'en',
  },

  createElements(){
    var main = document.createElement('main');
    main.id='main';
    main.classList.add('main');
    document.body.append(main);

    var textarea = document.createElement('textarea');
    textarea.id='area';
    textarea.classList.add('textarea');
    main.appendChild(textarea);
    
    var keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    keyboard.id ='keyboard';
    main.appendChild(keyboard);

    const message = document.createElement('p');
    message.className = 'message';
    message.innerHTML = 'OS Microsoft Windows. Change language press Alt + Ctrl or click Win';
    main.appendChild(message);
  },

  paintKeyboard(language){
    let j = this.options.shift? 1:0;
    this.options.language=language;
    for (let i=0;i<keysArray.length;i++){
      let key = document.createElement('div');
      key.classList.add('keys');
      key.id=keysArray[i].code;
  
      if(keysArray[i].printable == false || typeof(keysArray[i][language][0])=='string'){
        key.classList.add('control_key');
        key.innerText =  keysArray[i][language][j];
        switch (keysArray[i].code) {
          case 'ShiftLeft': 
            key.style.width = '5cm';
            break;
          case 'ShiftRight': 
            key.style.width = '4cm';
            break;
          case 'ControlLeft':
          case 'ControlRight': 
            key.style.width = '3.15cm';
            break;
          case 'CapsLock': 
            key.style.width = '5cm';
            break;
          case 'Enter': 
            key.style.width = '4cm';
            break;
          case 'Tab': 
            key.style.width = '2.65cm';
            break;
          case 'Delete': 
            key.style.width = '2.25cm';
            break;
          case 'Backspace': 
            key.style.width = '5cm';
            break;
          case 'ArrowUp': 
            key.innerText =  String.fromCharCode(9650);
            key.style.width = '2cm';
            break;
          case 'ArrowLeft': 
            key.innerText =  String.fromCharCode(9668);
            key.style.width = '2cm';
            break;
          case 'ArrowDown': 
            key.innerText =  String.fromCharCode(9660);
            key.style.width = '2cm';
            break;
          case 'ArrowRight': 
            key.innerText =  String.fromCharCode(9658);
            key.style.width = '2cm';
            break;
          default:
            key.style.width = '2cm';
        }
      } else {
        if(this.options.capsLock){
          key.innerText = String.fromCharCode(keysArray[i][language][j]).toUpperCase();
        } else key.innerText = String.fromCharCode(keysArray[i][language][j]);
        if(keysArray[i].code==='Space') {
          key.style.width = '13cm';
        } else{
          key.style.width = '2cm';
        }
  
      }
      if (i>=55 && keysArray[i].code!='Space') {
        key.style.top = '-0.85cm';
      }
      keyboard.appendChild(key); 
    }
  },

  changeLanguage() {
    const clearKey = document.querySelectorAll('.keys')
    for (let i = 0; i < clearKey.length; i++) {
      clearKey[i].remove();
    }
    if (this.options.language==='ru') {
      this.paintKeyboard('en');
      this.options.language==='en';
      localStorage.setItem('language', 'en');
    } else {
      this.paintKeyboard('ru');
      this.options.language==='ru';
      localStorage.setItem('language', 'ru');
    }
  },

  print(keyPress) {
    let out = document.querySelector('.textarea');
    let keys = document.querySelectorAll('.keys');
    keys.forEach((element) => {
      if (element.id === keyPress) {
        out.value += element.innerHTML;
      }
    })
  },

  checkPress(key, event) {
    const controlKey = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlRight', 'ShiftRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp'];
    let keys = document.querySelectorAll('.keys');
    let out = document.querySelector('.textarea');
    if (controlKey.includes(key)) {
      keys.forEach((element) => {
        if (element.id === key) {
          out.focus();
          element.classList.add('active');
        };
      });
    } else {
      keys.forEach((element) => {
        if (element.id === key) {
          event.preventDefault();
          out.focus();
          element.classList.add('active');
          this.print(element.id);
        }
      })
    }
  },

  pressCapsLock(key, event) {
    let keys = document.querySelectorAll('.keys');
    this.checkPress(key, event);
    if (this.options.capsLock === false) {
      for(let i=0;i<keys.length;i++){
        if(typeof(keysArray[i][this.options.language][0])!='string') {
          keys[i].innerHTML = keys[i].innerHTML.toUpperCase();
        }
      };
      this.options.capsLock = true;
    } else {
      for(let i=0;i<keys.length;i++){
        if(typeof(keysArray[i][this.options.language][0])!='string') {
          keys[i].innerHTML = keys[i].innerHTML.toLowerCase();
        }
      };
      this.options.capsLock = false;
    }
  },

  pressShift(key, event) {
    if (this.options.shift === false) {
      this.options.shift = true;
      let keys = document.querySelectorAll('.keys');
      this.checkPress(key, event);
      for(let i=0;i<keys.length;i++){
        if(typeof(keysArray[i][this.options.language][0])!='string') {
          keys[i].innerHTML=String.fromCharCode(keysArray[i][this.options.language][1]);
        } 
      }
    } else {
      this.options.shift = false;
      let keys = document.querySelectorAll('.keys');
      this.checkPress(key, event);
      for(let i=0;i<keys.length;i++){
        if(typeof(keysArray[i][this.options.language][0])!='string') {
          keys[i].innerHTML=String.fromCharCode(keysArray[i][this.options.language][0]);
        } 
      }
    }
  },

  pressTab() {
    let out = document.querySelector('.textarea');
    out.value += '     ';
  },

  pressBackspace() {
    let out = document.querySelector('.textarea');
    if (out.value) out.setRangeText('', out.selectionStart - 1, out.selectionEnd);
  },

  pressEnter() {
    let out = document.querySelector('.textarea');
    out.value += '\n';
  },

  pressDelete() {
    let out = document.querySelector('.textarea');
    if (out.value) out.setRangeText('', out.selectionStart, out.selectionEnd + 1);
  },

  pressArrows(key) {
    this.print(key);
  },

  mouseClickKeyboard() {
    const keyboard = document.querySelector('.keyboard');
    keyboard.addEventListener('mousedown', (event) => {
      let key = event.target.id;
      switch(key) {
        case 'CapsLock':
          this.pressCapsLock(key, event);
          break;
        case 'ShiftLeft': 
        case 'ShiftRight': 
          this.pressShift(key,event);
          break;
        case 'Tab': 
          event.preventDefault();
          this.pressTab();
          break;
        case 'Backspace': 
          event.preventDefault();
          this.pressBackspace();
          break;
        case 'MetaLeft': 
          this.checkPress(key, event);
          this.changeLanguage();
          break;
        case 'Enter': 
          event.preventDefault();
          this.pressEnter();
          break;
        case 'Delete': 
          event.preventDefault();
          this.pressDelete();
          break;
        case 'ArrowLeft':
        case 'ArrowRight':
        case 'ArrowUp':
        case 'ArrowDown':
          event.preventDefault();
          this.pressArrows(key);
      }
      this.checkPress(key, event);
  })
  keyboard.addEventListener('mouseup', (event) => {
    let keys = document.querySelectorAll('.keys')
    keys.forEach((key) => {
      if (key.id == event.target.id) {
        key.classList.remove('active');
      }
    })
  })
  },

  keyPress() {
    window.addEventListener('keydown', (event) => {
      let key = event.code;
      switch (key) {
        case 'CapsLock':
          this.pressCapsLock(key, event);
          break;
        case 'ShiftLeft': 
        case 'ShiftRight': 
          this.pressShift(key,event);
          break;
        case 'AltLeft': 
        case 'AltRight': 
          event.preventDefault();
          break;
        case 'Tab': 
          event.preventDefault();
          this.pressTab();
          break;
        case 'Delete': 
          event.preventDefault();
          this.pressDelete();
 
          break;
        default: 
          if (event.altKey && event.ctrlKey) {
            this.checkPress(key, event);
            this.changeLanguage();
          };
      }
      this.checkPress(key, event);
    })

    window.addEventListener('keyup', (event) => {
      let keys = document.querySelectorAll('.keys');
      for(let i=0; i<keys.length;i++){
        if (keys[i].id=='ShiftLeft' || keys[i].id=='ShiftRight') {
          this.options.shift=true;
          this.pressShift(keys.id,event);
          if (this.options.capsLock){
            this.options.capsLock = false;
            this.pressCapsLock();
          };

        }
        keys[i].classList.remove('active');
      }
    })
  },
}


window.addEventListener('load', () => {
  virtualKeyboard.createElements();
  
  if (localStorage.getItem('language') === 'null') {
    virtualKeyboard.paintKeyboard('en',0);
  } else if (localStorage.getItem('language') === 'ru') {
    virtualKeyboard.paintKeyboard('ru',0);
  } else {
    virtualKeyboard.paintKeyboard('en',0);
  }
  
  virtualKeyboard.keyPress();
  virtualKeyboard.mouseClickKeyboard();
})

