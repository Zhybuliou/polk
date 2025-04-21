import heroes from '/data.js'; 

// Контейнер для карточек
const cardsContainer = document.getElementById('cards-container');

// Функция для создания карточки
const createCard = (hero) => {
  const card = document.createElement('div');
  card.classList.add('card');
  const words = hero.heroName.split(" ");
  const nameHero = `${words[0]}<br>${words.slice(1).join(" ")}`;

  card.innerHTML = `
    <div class="hero-card">
        <div class="hero-card__image-wrapper">
            <img class="hero-card__image" src="${hero.image}" alt="${hero.heroName}" data-id="${hero.id}">
        </div>
        <div class="hero-card__likes">
            <img src="/assets/card-icon.svg" alt="Георгиевская лента" class="hero-card__icon">
            ${hero.likeNumber}
        </div>
        <h3 class="hero-card__name">${nameHero}</h3>
        <p class="hero-card__sender">Отправитель: ${hero.sender}</p>
    </div>
  `;

  return card;
};

// Отрисовка карточек
heroes.forEach(hero => {
  const card = createCard(hero);
  cardsContainer.appendChild(card);
});


// Обработчик кликов на карточки
document.querySelectorAll(".hero-card__image").forEach(card => {
    card.addEventListener("click", () => {
      const heroId = card.getAttribute("data-id");
      const hero = heroes.find(h => h.id == heroId);
  
      if (hero) {
        document.getElementById("modal-name").textContent = hero.heroName;
        document.getElementById("modal-rank").textContent = hero.rank;
        document.getElementById("modal-description").textContent = hero.description;
        document.getElementById("modal-image").src = hero.image;
        document.getElementById("modal-date").textContent = hero.dateOfLife;
        document.getElementById("modal-relative").textContent = hero.relative;
        document.getElementById("modal-sender").textContent = `Отправитель: ${hero.sender}`;
        document.getElementById("modal-image__likes").textContent = hero.likeNumber;

  
        Fancybox.show([
          {
            src: "#modal-content",
            type: "inline"
          }
        ]);
      }
    });
  });

// Получаем ссылки на кнопки и блоки
const galleryButton = document.getElementById("gallery-button");
const addHeroButton = document.getElementById("add-hero-button");
const heroesSection = document.getElementById("heroes-section");
const heroForm = document.getElementById("hero-form");

// Функция для отображения блока Галерея
galleryButton.addEventListener("click", () => {
  heroesSection.style.display = "block"; // Показываем блок Галерея
  heroForm.style.display = "none"; // Скрываем блок Добавить героя
  galleryButton.style.display = "none"; // Скрываем кнопку Галерея
  addHeroButton.style.display = "inline-block"; // Показываем кнопку Добавить героя
});

// Функция для отображения блока Добавить героя
addHeroButton.addEventListener("click", () => {
  heroesSection.style.display = "none"; // Скрываем блок Галерея
  heroForm.style.display = "block"; // Показываем блок Добавить героя
  addHeroButton.style.display = "none"; // Скрываем кнопку Добавить героя
  galleryButton.style.display = "inline-block"; // Показываем кнопку Галерея
});

// Изначально показываем блок heroes-section
heroesSection.style.display = "block";
heroForm.style.display = "none";
galleryButton.style.display = "none"; // Скрываем кнопку Галерея, так как она уже активна
addHeroButton.style.display = "inline-block"; // Показываем кнопку Добавить героя


const inputImage = document.getElementById("hero-photo");
const uploadStatus = document.getElementById("upload-status");

inputImage.addEventListener("change", function () {
  if (this.files.length > 1) {
    uploadStatus.textContent = "Можно загрузить только одну фотографию!";
    uploadStatus.style.color = "#C1001F";
    this.value = ""; // Сбрасываем значение
  } else if (this.files.length === 1) {
    const fileName = this.files[0].name;
    uploadStatus.textContent = `Фотография "${fileName}" успешно загружена!`;
    uploadStatus.style.color = "green";
  } else {
    uploadStatus.innerHTML = "Перенесите файл сюда <br> или выберите файл с вашего устройства";
    uploadStatus.style.color = "#222222";
  }
});

const input = document.getElementById("hero-life");

input.addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, ""); // Убираем всё, кроме цифр
  if (value.length > 4) {
    value = value.slice(0, 4) + '-' + value.slice(4, 8); // Добавляем разделитель "-"
  }
  e.target.value = value.slice(0, 9); // Ограничиваем ввод до 9 символов
});

input.addEventListener("keydown", function (e) {
  if (e.key === "Backspace" && input.value.endsWith("-")) {
    input.value = input.value.slice(0, -1); // Удаляем лишний "-" при удалении
  }
});