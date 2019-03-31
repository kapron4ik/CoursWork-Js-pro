import { getObjLocalStorage, myTraining } from "./myProgramTraining";


export class Choice {
  constructor() {
    this.target = null;

    this.render = this.render.bind(this);
    this.getData = this.getData.bind(this);

  }
  //ЦЕЛЬ
  render() {
    console.log('this.choiceTarget', this.choiceTarget[Object.keys(this.choiceTarget)[0]])
    const root = document.getElementById('root');
    while (root.firstChild) {
      root.removeChild(root.firstChild);
    };
    let choiceDom = document.createElement('div');
    choiceDom.className = 'choiceDom';
    choiceDom.innerHTML = `
      <p>Какая ваша цель?</p>
      <label><input type="radio" name="target" value="${Object.keys(this.choiceTarget)[0]}">${this.choiceTarget[Object.keys(this.choiceTarget)[0]]}</label><br>
      <label><input type="radio" name="target" value="${Object.keys(this.choiceTarget)[1]}">${this.choiceTarget[Object.keys(this.choiceTarget)[1]]}</label><br>
      <label><input type="radio" name="target" value="${Object.keys(this.choiceTarget)[2]}">${this.choiceTarget[Object.keys(this.choiceTarget)[2]]}</label><br>
      <button class="registrationNext" id="nextReg_btn">Продолжить</button>
    `;
    root.appendChild(choiceDom);
    let btnRegNext = choiceDom.querySelector("#nextReg_btn");
    btnRegNext.addEventListener('click', this.getData);
    btnRegNext.addEventListener('click', () => getObjLocalStorage(this.mail));


  }
  getData() {
    this.target = (() => {
      let radBody = document.getElementsByName('target');
      let i;
      for (i = 0; i < radBody.length; i++) {
        if (radBody[i].checked) {
          break;
        }
      };
      return radBody[i].value;
    })();
    let returnObj = JSON.parse(localStorage.getItem(this.mail));
    returnObj.target = this.target;
    var serialObj = JSON.stringify(returnObj);
    localStorage.setItem(this.mail, serialObj);
  }
}

class choiceWoman extends Choice {
  constructor({ mail }) {
    super();
    this.choiceTarget = { loseWeight: 'Похудеть', gainWeight: 'Набрать массу', keepFit: 'Поддержать форму' };
    this.mail = mail;
  }
}

class choiceMan extends Choice {
  constructor({ mail }) {
    super();
    this.choiceTarget = { endurance: 'Выносливость', relief: 'Рельеф', strength: 'Сила' };
    this.mail = mail;
  }
}

class GenderFactory {
  makeGender(choice) {
    let ChoiceGender = null;
    if (choice.gender === 'man') {
      ChoiceGender = choiceMan;
    } else if (choice.gender === 'woman') {
      ChoiceGender = choiceWoman;
    } else {
      return false;
    }
    return new ChoiceGender(choice);
  }
}

export const mySuperForge = new GenderFactory();


