export class Home {
    constructor(loginFn, registrationFn) {
        this.loginFn = loginFn;
        this.registrationFn = registrationFn;
    }

    render() {
        let page = document.createElement('div');
        page.className = "home_screen";

        page.innerHTML = `<div class="home_page_frame">
                                <div class="home_page_brand"> <h1>Your personal trainer</h1> </div>
                                <div class="home_page_main_text"><h3>Персональная программа тренировок для тренажерного зала<h3></div>
                                <div>
                                    <button class="login_button" id="login_btn">Вход</button>
                                    <button class="registration_button" id="registration_btn">Регистрация</button>
                                </div>
                              </div>`

        let parent = document.getElementById('root');
        parent.appendChild(page);


        let login = page.querySelector("#login_btn");
        login.onclick = this.loginFn;

        let registration = page.querySelector("#registration_btn");
        registration.onclick = this.registrationFn;

        return page;
    }
}