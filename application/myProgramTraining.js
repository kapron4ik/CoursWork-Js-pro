import { mySuperForge } from "./dataMyProgramTraining";
import { allExercice } from "./exercises/index";
import { activateBtnTraining } from "./barMenu";


const myPersonTraining = [];

export const myTrainingEx = [];

export function getObjLocalStorage(mail) {
    const returnObj = JSON.parse(localStorage.getItem(mail));

    const MakeMePerson = mySuperForge.makeGender({
        gender: returnObj.gender,
        target: returnObj.target,
        bodyType: returnObj.bodyType,
        experience: returnObj.experience
    })

    MakeMePerson.render(myTrainingEx);
    activateBtnTraining(() => MakeMePerson.render(myTrainingEx));

    MakeMePerson.training.forEach((day, n) => {
        let dayTraining = {};
        let dayTrainingExercice = [];
        day.forEach(item => {
            let filtredExercice = allExercice.filter(key => Number(key.id) === Number(item));
            dayTraining.id = `idTraining${n + 1}`;
            dayTraining.name = `Тренировка №${n + 1}`;
            dayTrainingExercice.push(filtredExercice[0]);
        });
        dayTraining.exercice = dayTrainingExercice;
        myPersonTraining.push(dayTraining);
    })
    let myTraining = {};
    myTraining.id = 'myTraining';
    myTraining.name = `Моя тренировка`;
    myTraining.exercice = myTrainingEx;
    myPersonTraining.push(myTraining);
    console.log('myPersonTraining', myPersonTraining)
}

//РАЗВЕРНУТАЯ ТРЕНИРОВКА
export function renderMyPersonTraining(e) {
    const parent = document.getElementById('root');
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
    let filtredDay = myPersonTraining.filter(key => key.id === e.target.closest('.training').id);
    let page = document.createElement('div');
    page.className = 'dayTraining';
    page.innerHTML = `<h4>${filtredDay[0].name}</h4>`;
    filtredDay[0].exercice.forEach((key, i) => {
        let tempItem = document.createElement('p');
        tempItem.id = `trainingExercice${i + 1}`;
        tempItem.innerHTML = `${i + 1}.${key.name}`;
        page.appendChild(tempItem);
        let btnShow = page.querySelector(`#trainingExercice${i + 1}`);
        btnShow.addEventListener('click', () => renderOnlyToPerson(key, e));
    })
    parent.appendChild(page);
}

//УПРАЖНЕНИЕ В ТРЕНИРОВКЕ
function renderOnlyToPerson(obj, e) {
    let parent = document.getElementById('root');
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
    let page = document.createElement('div');
    page.className = 'ExerciceDayTraining';
    page.innerHTML = `
            <div id="id${obj.id}" class="exerciceMain" data-id="${obj.id}">
                <h3>${obj.name}</h3>
                <img alt="${obj.name}" src="${obj.imageLink}">
                <h4>Задействованные мышцы</h4>
                <p>${obj.muscles}</p>
                <h4>Техника выполнения</h4>
                <p>${obj.equipment}</p>
                <h4>Советы</h4>
                <p>${obj.tips}</p>
                <h4>Спорт</h4>
                <p>${obj.sport}</p>
                <button class="exerciceBack" id="backEx_btn">Назад</button>
            </div>
        `
    parent.appendChild(page);
    let btnBack = page.querySelector(`#backEx_btn`);
    btnBack.addEventListener('click', () => renderMyPersonTraining(e));
}


