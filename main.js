import heroes from "/mockData.js";

// Получаем ссылки на кнопки и блоки
const galleryButton = document.getElementById("gallery-button");
const addHeroButton = document.getElementById("add-hero-button");
const heroesSection = document.getElementById("heroes-section");
const heroFormSection = document.getElementById("hero-form-section");
const inputImage = document.getElementById("hero-photo");
const uploadStatus = document.getElementById("upload-status");
const inputDateOfLife = document.getElementById("hero-life");
const dropArea = document.getElementById("drop-area");
const heroForm = document.getElementById('hero-form');
const backButton = document.getElementById('button-back');
const buttonFormSubmit = document.getElementById("hero-submit");

// Кнопка назад Fancybox
backButton.onclick = () => {
  backButton.blur()
  Fancybox.close();
}

// Модуль работы с карточками
const CardModule = (() => {
  const container = document.getElementById('cards-container');

  const createCard = (hero) => {
    const card = document.createElement('div');
    card.classList.add('card');
    const nameHero = hero.heroName.replace(" ", "<br>");

    card.innerHTML = `
      <div class="hero-card">
        <div class="hero-card__image-wrapper">
          <img class="hero-card__image" src="${hero.image}" alt="${hero.heroName}" data-id="${hero.id}">
        </div>
        <div class="hero-card__likes">
          <img src="assets/card-icon.svg" alt="Георгиевская лента" class="hero-card__icon">
          <p id="hero-show__likes">${hero.likeNumber}</p>
        </div>
        <h3 class="hero-card__name">${nameHero}</h3>
        <p class="hero-card__sender">Отправитель: ${hero.sender}</p>
      </div>
    `;
    // Добавляем обработчик для кнопки увеличения лайков
    const button = card.querySelector('.hero-card__likes');
    const likesCounter = card.querySelector('#hero-show__likes');
    let count = hero.likeNumber || 0;
    
    button.addEventListener('click', () => {
      count++; // Увеличиваем счётчик
      likesCounter.textContent = count; // Обновляем отображение
    });

    return card;
  };

  const renderCards = (heroes) => {
    heroes.forEach(hero => {
      container.appendChild(createCard(hero));
    });
  };

  return { renderCards };
})();
// Вызов функции
CardModule.renderCards(heroes);

// Модуль работы с модальным окном
const ModalModule = (() => {
  const showHeroModal = (hero) => {
    document.getElementById("modal-name").textContent = hero.heroName;
    document.getElementById("modal-rank").textContent = hero.rank;
    document.getElementById("modal-description").textContent = hero.description;
    document.getElementById("modal-image").src = hero.image;
    document.getElementById("modal-date").textContent = hero.dateOfLife;
    document.getElementById("modal-relative").textContent = hero.relative;
    document.getElementById("modal-sender").textContent = `Отправитель: ${hero.sender}`;
    document.getElementById("modal-image__likes").textContent = hero.likeNumber;

    Fancybox.show([{ src: "#modal-content", type: "inline" }]);
  };

  const attachCardClickEvents = (heroes) => {
    document.querySelectorAll(".hero-card__image").forEach(card => {
      card.addEventListener("click", () => {
        const heroId = card.getAttribute("data-id");
        const hero = heroes.find(h => h.id == heroId);
        if (hero) showHeroModal(hero);
      });
    });
  };

  return { attachCardClickEvents };
})();
// Вызов функции
ModalModule.attachCardClickEvents(heroes);

// Функция для переключения между разделами
const toggleSections = (showGallery) => {
  heroesSection.style.display = showGallery ? "block" : "none";
  heroFormSection.style.display = showGallery ? "none" : "block";
  galleryButton.style.display = showGallery ? "none" : "inline-block";
  addHeroButton.style.display = showGallery ? "inline-block" : "none";
};
galleryButton.addEventListener("click", () => toggleSections(true));
addHeroButton.addEventListener("click", () => toggleSections(false));
toggleSections(true);


//Upload Image Status
function uploadImage() {
  if (inputImage.files.length > 1) {
    inputImage.textContent = "Можно загрузить только одну фотографию!";
    uploadStatus.style.color = "#C1001F";
    inputImage.value = "";
  } else if (inputImage.files.length === 1) {
    const fileName = inputImage.files[0].name;
    uploadStatus.textContent = `Фотография "${fileName}" успешно загружена!`;
    uploadStatus.style.color = "green";
  } else {
    uploadStatus.innerHTML = "Перенесите файл сюда <br> или выберите файл с вашего устройства";
    uploadStatus.style.color = "#222222";
  }
}
inputImage.addEventListener("change", uploadImage);


// Mask Input Hero Life
inputDateOfLife.addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length > 4) {
    value = value.slice(0, 4) + '-' + value.slice(4, 8);
  }
  e.target.value = value.slice(0, 9);
});

inputDateOfLife.addEventListener("keydown", function (e) {
  if (e.key === "Backspace" && inputDateOfLife.value.endsWith("-")) {
    inputDateOfLife.value = inputDateOfLife.value.slice(0, -1);
  }
});

// Drag and Drop
function handleDragOver(event) {
  event.preventDefault();
  dropArea.classList.add("dragover");
}
function handleDragLeave() {
  dropArea.classList.remove("dragover");
}
function handleDrop(event) {
  event.preventDefault();
  inputImage.files = event.dataTransfer.files;
  uploadImage();
  dropArea.classList.remove("dragover");
}
dropArea.addEventListener("dragover", handleDragOver);
dropArea.addEventListener("dragleave", handleDragLeave);
dropArea.addEventListener("drop", handleDrop);


// Модуль работы с формой
const FormModule = (() => {
  const validateField = (field, errorElement) => {
    if (!field.value.trim()) {
      errorElement.style.visibility = 'visible';
      errorElement.textContent = 'Поле обязательно для заполнения';
      return false;
    } else {
      errorElement.style.visibility = 'hidden';
      return true;
    }
  };

  const handleFormSubmission = (form) => {
    const fields = form.querySelectorAll('input, textarea, select');
    let isValid = true;
    const formData = {};

    fields.forEach((field) => {
      const label = field.closest('.hero-form__field') || field.closest('.hero-form__field-image');
      const errorElement = label.querySelector('.hero-form__error-message');
      if (!validateField(field, errorElement)) isValid = false;
      else formData[field.id] = field.value.trim();

      field.addEventListener('input', () => validateField(field, errorElement));
    });

    if (isValid) {
      console.log(formData);
    }
  };

  return { handleFormSubmission };
})();

buttonFormSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  FormModule.handleFormSubmission(heroForm);
});