"use strict";
window.onload = function () {
    const inp = document.querySelector('.input__words');
    const translateWords = document.querySelector('p');


    inp.addEventListener('input', () => {
     
            inp.value = inp.value.replace(/[a-z0-9]/gi,'');  
         translating();
       
    });

    function translating() {
    const value = inp.value.split('');
        
        if (value.length !== 0) {
            value.forEach((i, num) => {
                switch (i) {
                    case "с":
                    case "С":
                        value[num] = 's';
                        break;
                    case "а":
                    case "А":
                        value[num] = 'a';
                        break;
                    case "б":
                    case "Б":
                        value[num] = 'b';
                        break;
                    case "в":
                    case "В":
                        value[num] = 'v';
                        break;
                    case "г":
                    case "Г":
                        value[num] = 'g';
                        break;
                    case "д":
                    case "Д":
                        value[num] = 'd';
                        break;
                    case "е":
                    case "Е":
                        value[num] = 'e';
                        break;
                    case "ё":
                    case "Ё":
                        value[num] = 'e';
                        break;
                    case "ж":
                    case "Ж":
                        value[num] = 'zh';
                        break;
                    case "з":
                    case "З":
                        value[num] = 'z';
                        break;
                    case "и":
                    case "И":
                        value[num] = 'i';
                        break;
                    case "к":
                    case "К":
                        value[num] = 'k';
                        break;
                    case "л":
                    case "Л":
                        value[num] = 'l';
                        break;
                    case "м":
                    case "М":
                        value[num] = 'm';
                        break;
                    case "н":
                    case "Н":
                        value[num] = 'n';
                        break;
                    case "у":
                    case "У":
                        value[num] = 'y';
                        break;
                    case "ф":
                    case "Ф":
                        value[num] = 'f';
                        break;
                    case "х":
                    case "Х":
                        value[num] = 'h';
                        break;
                    case "ц":
                    case "Ц":
                        value[num] = 'c';
                        break;
                    case "ч":
                    case "Ч":
                        value[num] = 'ch';
                        break;
                    case "щ":
                    case "Щ":
                        value[num] = 'shch';
                        break;
                    case "ь":
                    case "Ь":
                        value[num] = '`';
                        break;
                    case "ы":
                    case "Ы":
                        value[num] = 'y';
                        break;
                    case "ъ":
                    case "Ъ":
                        value[num] = '';
                        break;
                    case "э":
                    case "Э":
                        value[num] = 'a';
                        break;
                    case "ю":
                    case "Ю":
                        value[num] = 'yu';
                        break;
                    case "я":
                    case "Я":
                        value[num] = 'ya';
                        break;
                    case "ш":
                    case "Ш":
                        value[num] = 'sh';
                        break;
                    case "п":
                    case "П":
                        value[num] = 'p';
                        break;
                    case "й":
                    case "Й":
                        value[num] = 'j';
                        break;
                    case "т":
                    case "Т":
                        value[num] = 't';
                        break;
                    case "р":
                    case "Р":
                        value[num] = 'r';
                        break;

                }
                translateWords.innerText = " :) \n" + value.join('');
            });
        } else {
            translateWords.innerText = '\nтут будет перевод :) \n';
            
        }
    }

};
