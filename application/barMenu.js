import { RenderExercises } from "./exercises/index";

let barHomeBtn = document.getElementById('barHome');
let barTrainingBtn = document.getElementById('barTraining');
let barExercisesBtn = document.getElementById('barExercises');

export function activateBtn() {
    barTrainingBtn.addEventListener('click', () => {
        barTrainingBtn.style.backgroundColor = 'lightslategray';
        barExercisesBtn.style.backgroundColor = ''
    });
    barExercisesBtn.addEventListener('click', RenderExercises);
    barExercisesBtn.addEventListener('click', () => {
        barTrainingBtn.style.backgroundColor = '';
        barExercisesBtn.style.backgroundColor = 'lightslategray'
    });
}

export function activateBtnTraining(fn) {
    barTrainingBtn.addEventListener('click', fn);
    barTrainingBtn.addEventListener('click', () => {
        barTrainingBtn.style.backgroundColor = 'lightslategray';
        barExercisesBtn.style.backgroundColor = ''
    });
}






