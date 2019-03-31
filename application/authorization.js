import { formReg } from "./index";
import { renderMyPersonTraining, getObjLocalStorage } from "./myProgramTraining";

export class Autorization {
    constructor() {
        this.mail = null;
        this.password = null;
        this.returnObj = null;

        this.render = this.render.bind(this);
        this.getData = this.getData.bind(this);
        this.getDataLocalStorage = this.getDataLocalStorage.bind(this);
    }

    render() {
        let page = document.createElement('div');
        page.className = "autorization";
        page.innerHTML = `  <label for="mail">Ваш Email:</label>
                                <input type="text" id="mail"><br>
                                <label for="password">Ваш пароль:</label>  
                                <input type="text" id="password"><br>
                                <button class="registration" id="Reg_btn">Зарегестрироваться</button>
                                <button class="comeIn" id="ComeIn_btn">Войти</button>
                         `;
        let parent = document.getElementById('root');
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        };
        parent.appendChild(page);
        let btnReg = page.querySelector("#Reg_btn");
        btnReg.addEventListener('click', formReg.render);
        let btnComeIn = page.querySelector("#ComeIn_btn");
        btnComeIn.addEventListener('click', this.getData);
        btnComeIn.addEventListener('click', this.getDataLocalStorage);
    }

    getData() {
        this.mail = document.getElementById('mail').value;
        this.password = document.getElementById('password').value;
    }

    getDataLocalStorage() {
        let tempReturnObj = JSON.parse(localStorage.getItem(this.mail))
        if (this.password == tempReturnObj.password) {
            this.returnObj = tempReturnObj;
            getObjLocalStorage(this.mail)
        }
        else {
            alert('Не верный пароль!');
            tempReturnObj = '';
        }
    }
}   