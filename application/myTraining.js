import { Observable, Observer } from './Observer';
import { allExercice } from './exercises/index';
import { myPersonTraining } from './myProgramTraining';
import { myTrainingEx } from './myProgramTraining';



export const observable = new Observable();

export const myTraining = [];

let myTrainingObs = new Observer((id) => {
  let filtredToExercice = allExercice.filter(key => Number(key.id) === Number(id));
  if (myTraining.filter(key => Number(key.id) === Number(id)) != '') {
    alert('Это упражнение уже добавлено в тренировку')
  }
  else {
    myTraining.push(filtredToExercice[0]);
    myTrainingEx.push(filtredToExercice[0]);

  }
  renderMyTraining();
});

observable.addObserver(myTrainingObs);



export function renderMyTraining() {

  let parentMytraining = document.getElementById('myTrainingObs');
  while (parentMytraining.firstChild) {
    parentMytraining.removeChild(parentMytraining.firstChild);
  };
  myTrainingEx.forEach((key, i) => {
    let page = document.createElement('div');
    page.innerHTML = `
        <div id="id${key.id}" class="exercice" data-id="${key.id}">
            <h4>${i + 1}.${key.name}</h4>
        </div>
    `;
    parentMytraining.appendChild(page);
  });

}




