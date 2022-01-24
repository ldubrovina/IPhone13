const tabsFunc = () =>{
    const tabs =  document.querySelectorAll('.card-detail__change');
    const tabsTitle =  document.querySelector('.card-details__title');
    const tabsPrice =  document.querySelector('.card-details__price');
    const tabsImg =  document.querySelector('.card__image_item');
    const titlePage = document.querySelector('title')
    
    const tabsOptions = [
        {
            name: "Graphite",
            memory: '128',
            price: 60000,
            image: 'img/iPhone-graphite.webp',
            title: 'Смартфон Apple iPhone 13 Pro 128GB Graphite'                                              //задаем имя цвета, память  и цену
        },
        {
            name: "Silver",
            memory: '256',
            price: 65000,
            image: 'img/iPhone-silver.webp',
            title: 'Смартфон Apple iPhone 13 Pro 256GB Silver'                                                //задаем имя цвета, память  и цену
        },
        {
            name: "Sierra Blue",
            memory: '512',
            price: 70000,
            image: 'img/iPhone-sierra_blue.webp',
            title: 'Смартфон Apple iPhone 13 Pro 512GB Sierra Blue'                                           //задаем имя цвета, память  и цену
        }
    ]
    
    const changeContent = (index) => {
        tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`       //изменяем текст на наши данные 
        tabsPrice.textContent = `${tabsOptions[index].price}₽`                                                   //изменяем текст на наши данные 
        
        tabsImg.setAttribute('src', tabsOptions[index].image)                                    // меняем картинку через setAttribute, у него прописываются два атрибута (какой путь меняем и сам путь)
    
        titlePage.textContent = `${tabsOptions[index].title}`  

    }
    
    const changeActiveTabs = (indexClickedTab) => {                        // 2/ когда кликаем по инлдексу таба 
        tabs.forEach((tab, index) => {                                     // перебираем массив
            tab.classList.remove('active')                                 // удаляем класс active если он есть
        
        if(index === indexClickedTab) {                                    // 3/ если индекс таба равен индексу по которому мы кликнули
            tab.classList.add('active')                                    // то добавляем класс active
        }
        })
    
        changeContent(indexClickedTab)                                      // 5/при клике на таб оно связывается с changeContent
    }
    
    tabs.forEach((tab, index) => {                                          // 1/ перебираем табы по индексу
        tab.addEventListener('click', () => {                               //по клику 
            changeActiveTabs(index)                                         // находим индекс таба 
        })
    
    
    })
    
    changeContent(0)                                                   //перезаписываем нулевой элемент массива
    
}
tabsFunc()