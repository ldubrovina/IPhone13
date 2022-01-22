const tabsFunc = () => {
  const tabs = document.querySelectorAll(".card-detail__change");
  const tabsTitle = document.querySelector(".card-details__title");
  const tabsImage = document.querySelector(".card-image__item");

  const tabOptions = [
    {
      name: "Graphite",
      memory: "128",
      price: 60000,
      image: "img/iPhone-graphite.webp",
    },
    {
      name: "Silver",
      memory: "256",
      price: 65000,
      image: "img/iPhone-silver.webp",
    },
    {
      name: "Sierra Blue",
      memory: "512",
      price: 70000,
      image: "img/iPhone-sierra_blue.webp",
    },
  ];

  const changeContent = (index) => {
    tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabOptions[index].memory}GB ${tabOptions[index].name}`;
    tabsPrice.textContent = `${tabOptions[index].price}`;
    tabsImage.setAttribute("src", tabOptions[index].image);
  };

  const changeActiveTabs = (indexClickedTab) => {
    tabs.forEach((tab, index) => {
      tab.classList.remove("active");

      if (index === indexClickedTab) {
        tab.classList.add("active");
      }
    });
    changeContent(indexClickedTab);
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      changeActiveTabs(index);
    });
  });

  changeContent(0);
};

tabsFunc();
