import { BackTo } from "./back";
import { BicepsTo } from "./biceps";
import { ButtocksTo } from "./buttocks";
import { ChestTo } from "./chest";
import { ForearmTo } from "./forearm";
import { HipsTo } from "./hips";
import { PressTo } from "./press";
import { ShinTo } from "./shin";
import { ShouldersTo } from "./shoulders";
import { TricepsTo } from "./triceps";
import { renderTR } from "./renderExercice";


let back = new BackTo();
let biceps = new BicepsTo();
let buttocks = new ButtocksTo();
let chest = new ChestTo();
let forearm = new ForearmTo();
let hips = new HipsTo();
let press = new PressTo();
let shin = new ShinTo();
let shoulders = new ShouldersTo();
let triceps = new TricepsTo();

let exercice = [];
exercice.push(back.exercices);
exercice.push(biceps.exercices);
exercice.push(buttocks.exercices);
exercice.push(chest.exercices);
exercice.push(forearm.exercices);
exercice.push(hips.exercices);
exercice.push(press.exercices);
exercice.push(shin.exercices);
exercice.push(shoulders.exercices);
exercice.push(triceps.exercices);

export const allExercice = [];
exercice.forEach(itemExercice => itemExercice.forEach(item => {
    allExercice.push(item);
}));
allExercice.sort((a, b) => a.id - b.id)

export const RenderExercises = () => {
    let page = document.createElement('div');
    page.className = "exercises_screen";
    page.innerHTML = `
            <div id="myTrainingObs" class="myTrainingObs"></div>
            <div id="exercices" class='exercicesMain'>
                <div id="hips">
                    <img alt="Бедра" src="../public/img/exercises/Общее/hips.jpg">
                    <h2>Бедра</h2>
                </div>
                <div id="biceps">
                    <img alt="Бицепс" src="../public/img/exercises/Общее/biceps.jpg">
                    <h2>Бицепс</h2>
                </div>
                <div id="shin">
                    <img alt="Голень" src="../public/img/exercises/Общее/shin.jpg">
                    <h2>Голень</h2>
                </div>
                <div id="chest">
                    <img alt="Грудь" src="../public/img/exercises/Общее/chest.jpg">
                    <h2>Грудь</h2>
                </div>
                <div id="shoulders">
                    <img alt="Плечи" src="../public/img/exercises/Общее/shoulders.jpg">
                    <h2>Плечи</h2>
                </div>
                <div id="forearm">
                    <img alt="Предплечья" src="../public/img/exercises/Общее/forearm.jpg">
                    <h2>Предплечья</h2>
                </div>
                <div id="press">
                    <img alt="Пресс" src="../public/img/exercises/Общее/press.jpg">
                    <h2>Пресс</h2>
                </div>
                <div id="back">
                    <img alt="Спина" src="../public/img/exercises/Общее/back.jpg">
                    <h2>Спина</h2>
                </div>
                <div id="triceps">
                    <img alt="Трицепс" src="../public/img/exercises/Общее/triceps.jpg">
                    <h2>Трицепс</h2>
                </div>
                <div id="buttocks">
                    <img alt="Ягодицы" src="../public/img/exercises/Общее/buttocks.jpg">
                    <h2>Ягодицы</h2>
                </div>     
            </div>        
        `;
    let parent = document.getElementById('root');
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
    parent.appendChild(page);

    let btnHips = page.querySelector('#hips');
    btnHips.addEventListener('click', () => renderTR(hips));
    let btnBiceps = page.querySelector('#biceps');
    btnBiceps.addEventListener('click', () => renderTR(biceps));
    let btnShin = page.querySelector('#shin');
    btnShin.addEventListener('click', () => renderTR(shin));
    let btnChest = page.querySelector('#chest');
    btnChest.addEventListener('click', () => renderTR(chest));
    let btnShoulders = page.querySelector('#shoulders');
    btnShoulders.addEventListener('click', () => renderTR(shoulders));
    let btnForearm = page.querySelector('#forearm');
    btnForearm.addEventListener('click', () => renderTR(forearm));
    let btnPress = page.querySelector('#press');
    btnPress.addEventListener('click', () => renderTR(press));
    let btnBack = page.querySelector("#back");
    btnBack.addEventListener('click', () => renderTR(back));
    let btnTriceps = page.querySelector('#triceps');
    btnTriceps.addEventListener('click', () => renderTR(triceps));
    let btnButtocks = page.querySelector('#buttocks');
    btnButtocks.addEventListener('click', () => renderTR(buttocks));

}
