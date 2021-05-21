'use strict';
document.addEventListener("DOMContentLoaded", ()=>{

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
        movieList = document.querySelector('.promo__interactive-list'),
        formFilm = document.querySelector('form.add'),
        formFilmInput = document.querySelector('.adding__input'),
        formFilmCheckBox = document.querySelector('[type="checkbox"]');

    removeAdv(adv);
    addNewFilmInList(movieDB.movies);

    formFilm.addEventListener('submit', (event)=>{
        event.preventDefault(); 
            let myFavouriteFilmName = formFilmInput.value;
                if(myFavouriteFilmName && formFilmCheckBox.checked == true){
                    movieDB.movies.push(myFavouriteFilmName);
                    addNewFilmInList(movieDB.movies); //add film
                }else{
                    alert("при добавлении фильма произошла ошибка");
                }
    });

    removeAdv(adv);
    genre.textContent = 'драма';
    poster.style.backgroundImage = 'url("img/bg.jpg")';

    //functions
    function removeAdv(adv){
        adv.forEach(item => {
            item.remove();
        });
    }

    function addNewFilmInList(arr, ...rest){
        movieList.innerHTML = "";
        movieDB.movies.sort();
        movieDB.movies.forEach((film, i) => {
            movieList.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
        document.querySelectorAll('.delete').forEach((btn, i)=>{
            btn.addEventListener('click', ()=>{
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
            });
        });
    }
});


