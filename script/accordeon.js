const accordeon = () => {
    const chItems = document.querySelectorAll('.characteristics__item')


    const tabsClose = () => {
        chItems.forEach((el) => {
            el.querySelector('.characteristics__title').classList.remove('active');           //удаляем у элемента названия класс active
            el.querySelector('.characteristics__description').classList.remove('open');       //удаляем у элемента класс open
            el.querySelector('.characteristics__description').classList.remove('active');     //удаляем у элемента описания класс active
            el.querySelector('.characteristics__description').style.height = '';              //высоту делаем пустой
        });
    };
    tabsClose();         //вызываем функцию


    chItems.forEach((item) => {
        const chButton = item.querySelector('.characteristics__title')
        const chContent = item.querySelector('.characteristics__description')

       

        chButton.addEventListener('click', (e) => {
            if(chContent.classList.contains('open')) {                            // если chContent несодержит(contains) класс open
                chContent.style.height = ''                                       // добаляем пустую строчку
            } else {
                tabsClose();                                                        //иначе закрываем характеристику
                chContent.style.height = chContent.scrollHeight + 'px'               // добаляем высоту для аккардеона чтобы он плавно открывался
                }

                chButton.classList.toggle('active')
                chContent.classList.toggle('open')                                   // метод тоггл сам проверяет наличие класс, если нет добавляет если есть убирает
        
        })

    })

}

accordeon()
