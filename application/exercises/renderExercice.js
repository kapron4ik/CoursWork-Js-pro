import { observable, renderMyTraining } from '../myTraining';
import { RenderExercises } from "./index";

//УПРАЖНЕНИЯ ГРУППА МЫШЦ
export function renderTR(obj) {
    renderMyTraining();

    let parent = document.getElementById('exercices');
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
    obj.exercices.forEach((key) => {
        let page = document.createElement('div');
        page.innerHTML = `
            <div id="id${key.id}" class="exercice" data-id="${key.id}">
                <h3>${key.name}</h3>
            </div>
        `;
        parent.appendChild(page);
        let btn = page.querySelector(`#id${key.id}`);
        btn.addEventListener('click', () => renderExerciceTR(obj))

    });
    let btn_Back = document.createElement('div');
    btn_Back.innerHTML = `
            <button class="exerciceBack" id="backEx_btn">Назад</button>
        `;
    parent.appendChild(btn_Back);
    let btnBack = btn_Back.querySelector(`#backEx_btn`);
    btnBack.addEventListener('click', RenderExercises);


}

//УПРАЖНЕНИЕ С ОБСЕРВЕРОМ
export function renderExerciceTR(obj) {
    renderMyTraining();
    let parent = document.getElementById('exercices');
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
    let filtredExercice = obj.exercices.filter(key => Number(key.id) === Number(event.target.closest('.exercice').dataset.id));
    let page = document.createElement('div');
    page.innerHTML = `
            <div id="id${filtredExercice[0].id}" class="exercice" data-id="${filtredExercice[0].id}">
                <h3>${filtredExercice[0].name}</h3>
                <img alt="${filtredExercice[0].name}" src="${filtredExercice[0].imageLink}">
                <h4>Задействованные мышцы</h4>
                <p>${filtredExercice[0].muscles}</p>
                <h4>Техника выполнения</h4>
                <p>${filtredExercice[0].equipment}</p>
                <h4>Советы</h4>
                <p>${filtredExercice[0].tips}</p>
                <h4>Спорт</h4>
                <p>${filtredExercice[0].sport}</p>
                <button class="exerciceBack" id="backEx_btn">Назад</button>
                <button class="addProgramm" id="addProg_btn">Добавить в программу</button>
            </div>
        `
    parent.appendChild(page);
    let btnBack = page.querySelector(`#backEx_btn`);
    btnBack.addEventListener('click', () => renderTR(obj));
    let btnAdd = page.querySelector(`#addProg_btn`);
    btnAdd.addEventListener('click', (e) => {
        let id = e.target.closest('.exercice').dataset.id;
        observable.sendMessage(id);
    });
}