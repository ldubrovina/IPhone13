function ToggleState(evt,chltems) {

let clickedButton=evt.target;                                                                                                                   //По кому кликнули (кнопка)
let clickedContent=(clickedButton.parentElement).querySelector('.characteristics__description'); //Какой там контент
chltems.forEach(otherItem => {                                                                                                             // Из всех элементов 
let oddItem=otherItem.querySelector('.characteristics__title');                                                           // перечисляем
if(oddItem.classList.contains('active') && !(oddItem.isEqualNode(clickedButton)) ){                       // и ищем лишние: с активным классом и не наша кнопка
oddItem.classList.remove('active');                                                                                                      // чистим
otherItem.querySelector('.characteristics__description').classList.remove('open');
otherItem.querySelector('.characteristics__description').style.height = '';
}
});

if(clickedContent.classList.contains('open')) {                                                                                    // с оставшимся работаем
clickedContent.style.height = '';
} else {
clickedContent.style.height = clickedContent.scrollHeight + 'px';
}
clickedButton.classList.toggle('active');
clickedContent.classList.toggle('open');

}

const accordeon =()=>{
const chltems = document.querySelectorAll('.characteristics__item');
chltems.forEach(item => {
const chButton = item.querySelector('.characteristics__title');
const chContent = item.querySelector('.characteristics__description');
chButton.addEventListener('click', function(){ToggleState(event,chltems)});
});
}

accordeon();
