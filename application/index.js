import { Home } from "./home";
import { Registration } from "./registration";
import { Autorization } from "./authorization";
import { activateBtn } from "./barMenu";

export const formReg = new Registration();
export const formAut = new Autorization();

const homeScreen = new Home(formAut.render, formReg.render);

homeScreen.render();

activateBtn();

