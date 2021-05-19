/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener("DOMContentLoaded", ()=>{
    const movieDB = {
        movies: []
    };

    const adv = document.querySelectorAll(".promo__adv img"),
        genre = document.querySelector(".promo__genre"),
        poster = document.querySelector(".promo__bg"),
        addNewFilm = document.querySelector(".adding__input"),
        addNewFilmConfirm = document.querySelectorAll(".add button")[0],
        deleteFilm = document.querySelectorAll(".promo__interactive-list .delete"); //ищем корзину
        const liElement = document.querySelectorAll(".promo__interactive-item");
    adv.forEach(item =>{
        item.remove();
    });
  
    genre.textContent = "Драма";

    poster.style.cssText = "background: url(../img/bg.jpg)";

    const filmList = document.querySelector(".promo__interactive-list");

    filmList.innerHTML = ""; //очищаем все вложенные элемента <li>
 
    movieDB.movies.sort(); //сортируем массив по алфавиту

    let countFilm = 0; //инкриментируемое значение нумерация фильмов

    addNewFilmConfirm.addEventListener('click', function(e){
        e.preventDefault(); //запрещаем стандартное поведение браузера
            if(addNewFilm.value != "" && addNewFilm.value != null){
                let modifyTitile = addNewFilm.value;
                    if(addNewFilm.value.length < 21){
                        filmList.innerHTML += `<li class='promo__interactive-item'>${++countFilm}: ${addNewFilm.value}
                        <div class='delete'></div></li>`; //подгружаем фильм на страницу
                        movieDB.movies.push(addNewFilm.value); //формируем массив с фильмами  
      
                    }else{
                        filmList.innerHTML += `<li class='promo__interactive-item'>
                        ${++countFilm}: ${modifyTitile.substr(1, 20) + "..."}
                        <div class='delete'></div></li>`; //подгружаем фильм на страницу режем название если длинное
                    }
            }else{
                alert("Обратите внимание, заполняемые вами поля не должны быть пустыми!"); //оповещаем об ошибке ввода
            }
     });

});