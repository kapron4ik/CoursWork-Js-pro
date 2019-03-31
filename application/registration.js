import { mySuperForge } from "./fabricPerson";



export class Registration {
    constructor() {
        this.mail = null;
        this.password = null;
        this.name = null;
        this.gender = null;
        this.weight = null;
        this.experience = null;
        this.bodyType = null;
        this.target = null;
        this.MakeMeChoice = null;

        this.getData = this.getData.bind(this);
        this.render = this.render.bind(this);
        this.addToLocalStorage = this.addToLocalStorage.bind(this);
        this.renderChoice = this.renderChoice.bind(this);

    }

    render() {
        let page = document.createElement('div');
        page.className = "registration";

        page.innerHTML = `<div>
                                <label for="mail">Ваш Email:</label>
                                <input type="text" id="mail"><br>
                                <label for="password">Ваш пароль:</label>  
                                <input type="text" id="password"><br>
                                <label for="name">Ваш имя:</label>  
                                <input type="text" id="name"><br>
                                <p>Ваш пол:</p>
                                <label><input type="radio" name="gender" value="man">Мужской</label><br>
                                <label><input type="radio" name="gender" value="woman">Женский</label><br>
                                <label for="weight">Ваш вес:</label>  
                                <input type="text" id="weight"><br>
                                <p>Ваш стаж:</p>
                                <label><input type="radio" name="experience" value="beginning">Меньше 1 года</label><br>
                                <label><input type="radio" name="experience" value="experienced">1-2 года</label><br>
                                <label><input type="radio" name="experience" value="professional">Больше 2 лет</label><br>
                                <p><span>Тип телосложения.</span></br>
                                <span>Обхватите сустав на кисти второй рукой, средним и большим пальцем.</span></br>
                                <span>Что вы видите:</span></p>
                                <label><input type="radio" name="bodyType" value="ectomorph">Пальцы перекрывают друг друга</label><br>
                                <label><input type="radio" name="bodyType" value="mesomorph">Пальцы дотрагиваются друг до друга</label><br>
                                <label><input type="radio" name="bodyType" value="endomorph">Пальцы не достают друг до друга</label><br>
                                <button class="registrationNext" id="nextReg_btn">Продолжить</button>
                            </div>`

        let parent = document.getElementById('root');
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        };
        parent.appendChild(page);

        let btnRegNext = page.querySelector("#nextReg_btn");
        btnRegNext.addEventListener('click', this.getData);
        // btnRegNext.addEventListener ('click', this.showData);
        btnRegNext.addEventListener('click', this.addToLocalStorage);
        btnRegNext.addEventListener('click', this.renderChoice);



        //УДАЛИТЬ


    }

    getData() {
        this.mail = document.getElementById('mail').value;
        this.password = document.getElementById('password').value;
        this.name = document.getElementById('name').value;
        this.gender = (() => {
            let radGender = document.getElementsByName('gender');
            let i;
            for (i = 0; i < radGender.length; i++) {
                if (radGender[i].checked) {
                    break;
                }
            };
            return radGender[i].value;
        })();
        this.weight = document.getElementById('weight').value;
        this.experience = (() => {
            let radExperience = document.getElementsByName('experience');
            let i;
            for (i = 0; i < radExperience.length; i++) {
                if (radExperience[i].checked) {
                    break;
                }
            };
            return radExperience[i].value;
        })();
        this.bodyType = (() => {
            let radBody = document.getElementsByName('bodyType');
            let i;
            for (i = 0; i < radBody.length; i++) {
                if (radBody[i].checked) {
                    break;
                }
            };
            return radBody[i].value;
        })();
    }

    renderChoice() {
        this.MakeMeChoice = mySuperForge.makeGender({
            gender: this.gender,
            mail: this.mail
        });
        this.MakeMeChoice.render();
    }

    addToLocalStorage() {

        let serialObj = JSON.stringify(this);

        if (!JSON.parse(localStorage.getItem(this.mail))) {
            localStorage.setItem(this.mail, serialObj);
        }
        else { alert('Пользователь с таким эмейлом уже зарегестрирован!') }

    }
}