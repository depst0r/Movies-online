'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');

adv.forEach(i => {
    i.remove()
});

genre.innerHTML = 'Драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = "";

movieDB.movies.sort();


movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item"><strong>${i + 1}</strong>. ${film}
        <div class="delete"></div>
    </li>
    `;
});