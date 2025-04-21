const heroes = [
  {
    "id": 1,
    "image": "https://rus.team/images/article/7732/2019-06-27-139_19212-2_242928.webp",
    "likeNumber": 1200,
    "rank": "Командир эскадрильи",
    "heroName": "Гастелло Николай Францевич",
    "dateOfLife": "1907-1941",
    "relative": "Сын",
    "sender": "Исторический архив",
    "description": "Николай Гастелло стал легендой благодаря своему героическому подвигу в начале Великой Отечественной войны. 26 июня 1941 года он добровольно направил свой горящий самолет на колонну немецкой техники, пожертвовав собой ради защиты своей Родины. Этот поступок был первым зарегистрированным огненным тараном и стал символом самоотверженности и патриотизма советских летчиков. Гастелло навсегда вписал свое имя в историю войны, а его подвиг вдохновил множество других солдат на беззаветное служение своему народу. Ему посвящены памятники, улицы и школы по всей стране."
  },
  {
    "id": 2,
    "image": "https://www.domod.ru/upload/medialibrary/fde/20y79k0oxsndb2jeapozn2fxucapdkx8/content-img.png",
    "likeNumber": 950,
    "rank": "Заместитель командира эскадрильи",
    "heroName": "Талалихин Виктор Васильевич",
    "dateOfLife": "1918-1941",
    "relative": "Брат",
    "sender": "Военный музей",
    "description": "Виктор Талалихин — советский летчик, вошедший в историю благодаря ночному воздушному тарану, который он совершил в августе 1941 года во время битвы за Москву. Этот подвиг произошел в критический момент войны, когда немецкие войска угрожали столице. Несмотря на риск, Талалихин направил свой самолет на вражеский бомбардировщик, спасая ключевые объекты города. Его подвиг стал примером героизма и стойкости для всей страны. За свою службу он получил звание Героя Советского Союза, а его имя увековечено в многочисленных памятниках и названиях улиц."
  },
  {
    "id": 3,
    "image": "https://ped-kopilka.ru/images/photos/medium/article11945.jpg",
    "likeNumber": 180,
    "rank": "Рядовой",
    "heroName": "Матросов Александр Матвеевич",
    "dateOfLife": "1924-1943",
    "relative": "Дядя",
    "sender": "Мемориал героев",
    "description": "Александр Матросов — один из самых известных героев Великой Отечественной войны, чье имя стало символом самоотверженности и бесстрашия. 27 февраля 1943 года, во время атаки на вражеский дзот, он закрыл своим телом амбразуру, позволив своим товарищам продолжить наступление и выполнить боевую задачу. Этот героический поступок потряс и вдохновил всю страну. История Матросова широко известна, а его имя носит множество улиц, школ и памятников по всей России. Его подвиг напоминает нам о силе духа и готовности жертвовать ради общего блага."
  },
  {
    "id": 4,
    "image": "https://m-nsk.ru/wp-content/uploads/2024/03/aleksandr-ivanovich-pokryshkin.jpeg",
    "likeNumber": 2000,
    "rank": "Маршал авиации",
    "heroName": "Покрышкин Александр Иванович",
    "dateOfLife": "1913-1985",
    "relative": "Племянник",
    "sender": "Авиационный музей",
    "description": "Александр Покрышкин — один из самых выдающихся летчиков Великой Отечественной войны, трижды удостоенный звания Героя Советского Союза. Покрышкин совершил около 60 воздушных побед и стал первым советским летчиком-истребителем, которому было присвоено это почетное звание трижды. Его тактические навыки и умение принимать решения в сложных боевых ситуациях сделали его легендой авиации. Покрышкин не только защищал небеса Родины, но и активно делился своими знаниями, обучая молодых пилотов. После войны он продолжил служение стране, работая над развитием военно-воздушных сил. Его подвиги увековечены в истории как пример героизма и профессионализма."
  },
  {
    "id": 5,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkPXtWtkl-Hmcc_1daJNXPSu-vnHgE6fkNpw&s",
    "likeNumber": 2100,
    "rank": "Командир эскадрильи",
    "heroName": "Кожедуб Иван Никитович",
    "dateOfLife": "1920-1991",
    "relative": "Сестра",
    "sender": "Военно-исторический архив",
    "description": "Иван Кожедуб — самый результативный советский летчик-истребитель, трижды удостоенный звания Героя Советского Союза. За время своей службы он сбил 64 самолета противника, оставшись одним из самых успешных пилотов Великой Отечественной войны. Его мастерство и тактический гений принесли ему уважение не только среди своих соратников, но и среди врагов. Кожедуб был известен своей храбростью, самообладанием и преданностью делу. Его подвиги стали частью легенды советской авиации, а его пример вдохновляет поколения военных на достижение высоких целей."
  },
  {
    "id": 6,
    "image": "assets/hero.png",
    "likeNumber": 1700,
    "rank": "Заместитель командира эскадрильи",
    "heroName": "Маресьев Алексей Петрович",
    "dateOfLife": "1916-2001",
    "relative": "Кузен",
    "sender": "Музей авиации",
    "description": "Мой прадед — ветеран войны. Я знаю о нём не только из учебников, а из рассказов бабушки и старых, пожелтевших фотографий. Он был совсем молодым, когда ушёл на фронт. Оставил родной дом, чтобы защищать свою страну и семью. Часто думаю, как ему было страшно, как тяжело приходилось в окопах, под свистом пуль и грохотом снарядов. Но он не сдавался. Благодаря таким, как он, мы живём в мире. После войны прадед вернулся другим человеком — молчаливым, серьёзным, с глазами, в которых навсегда осталась память о пережитом. Он никогда не хвастался, не жаловался, просто работал, воспитывал детей, строил мирную жизнь. Я горжусь им. Каждый год 9 Мая я несу гвоздики к мемориалу, вспоминая его и всех, кто сражался за нас. Для меня он — не просто герой, а часть моей семьи, моей истории. Его мужество учит меня быть сильным, честным и благодарным."
  },
  {
    "id": 7,
    "image": "assets/hero.png",
    "likeNumber": 99,
    "rank": "Командир авиаполка",
    "heroName": "Гризодубова Валентина Степановна",
    "dateOfLife": "1909-1993",
    "relative": "Дочь",
    "sender": "Музей героев",
    "description": "Мой прадед — ветеран войны. Я знаю о нём не только из учебников, а из рассказов бабушки и старых, пожелтевших фотографий. Он был совсем молодым, когда ушёл на фронт. Оставил родной дом, чтобы защищать свою страну и семью. Часто думаю, как ему было страшно, как тяжело приходилось в окопах, под свистом пуль и грохотом снарядов. Но он не сдавался. Благодаря таким, как он, мы живём в мире. После войны прадед вернулся другим человеком — молчаливым, серьёзным, с глазами, в которых навсегда осталась память о пережитом. Он никогда не хвастался, не жаловался, просто работал, воспитывал детей, строил мирную жизнь. Я горжусь им. Каждый год 9 Мая я несу гвоздики к мемориалу, вспоминая его и всех, кто сражался за нас. Для меня он — не просто герой, а часть моей семьи, моей истории. Его мужество учит меня быть сильным, честным и благодарным."
  },
  {
    "id": 8,
    "image": "assets/hero.png",
    "likeNumber": 1600,
    "rank": "Снайпер",
    "heroName": "Павличенко Людмила Михайловна",
    "dateOfLife": "1916-1974",
    "relative": "Мать",
    "sender": "Снайперская школа",
    "description": "Мой прадед — ветеран войны. Я знаю о нём не только из учебников, а из рассказов бабушки и старых, пожелтевших фотографий. Он был совсем молодым, когда ушёл на фронт. Оставил родной дом, чтобы защищать свою страну и семью. Часто думаю, как ему было страшно, как тяжело приходилось в окопах, под свистом пуль и грохотом снарядов. Но он не сдавался. Благодаря таким, как он, мы живём в мире. После войны прадед вернулся другим человеком — молчаливым, серьёзным, с глазами, в которых навсегда осталась память о пережитом. Он никогда не хвастался, не жаловался, просто работал, воспитывал детей, строил мирную жизнь. Я горжусь им. Каждый год 9 Мая я несу гвоздики к мемориалу, вспоминая его и всех, кто сражался за нас. Для меня он — не просто герой, а часть моей семьи, моей истории. Его мужество учит меня быть сильным, честным и благодарным."
  }
]

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
            <img src="assets/card-icon.svg" alt="Георгиевская лента" class="hero-card__icon">
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

function uploadImage() {
  if (inputImage.files.length > 1) {
    inputImage.textContent = "Можно загрузить только одну фотографию!";
    uploadStatus.style.color = "#C1001F";
    inputImage.value = ""; // Сбрасываем значение
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


const dropArea = document.getElementById("drop-area");

dropArea.addEventListener("dragover", function(e){
  e.preventDefault();
  dropArea.classList.add("dragover"); // Добавляем класс для стилизации
});
dropArea.addEventListener("dragleave", function() {
  dropArea.classList.remove("dragover"); // Убираем класс
});
dropArea.addEventListener("drop", function(e){
  e.preventDefault();
  inputImage.files = e.dataTransfer.files;
  uploadImage();
  dropArea.classList.remove("dragover"); // Убираем класс
})


const buttonSubmit = document.getElementById("hero-submit");

buttonSubmit.addEventListener('click', (e) => {
  e.preventDefault(); // Предотвращаем стандартное поведение формы

  const form = document.querySelector('.hero-form__form');
  const fields = form.querySelectorAll('input, textarea, select');
  let isValid = true;
  const formData = {};

  fields.forEach((field) => {
    const label = field.closest('.hero-form__field') || field.closest('.hero-form__field-image');
    const errorElement = label.querySelector('.hero-form__error-message'); 

    if (!field.value.trim()) {
      // Показываем сообщение об ошибке
      if (errorElement) {
        errorElement.style.visibility = 'visible';
        errorElement.textContent = 'Поле обязательно для заполнения'; // Устанавливаем текст ошибки
      }
      isValid = false;
    } else {
      // Скрываем сообщение об ошибке и собираем данные
      if (errorElement) {
        errorElement.style.visibility = 'hidden';
      }
      formData[field.id] = field.value.trim();
    }

    // Скрываем ошибку при вводе в поле
    field.addEventListener('input', () => {
      if (errorElement) {
        errorElement.style.visibility = 'hidden';
      }
    });
  });

  if (isValid) {
    console.log(JSON.stringify(formData)); // JSON-объект
    alert(formData);
  }
});
