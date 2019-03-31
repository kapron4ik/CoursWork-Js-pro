import { allExercice } from "./exercises/index";
import { renderMyPersonTraining } from "./myProgramTraining";




class Person {
    //ТРЕНИРОВКИ
    render(obj) {
        const parent = document.getElementById('root');
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        };
        this.training.forEach((day, n) => {
            let dayTraining = document.createElement('div');
            let typeExercice = [];
            day.forEach(item => {
                let filtredExercice = allExercice.filter(key => Number(key.id) === Number(item));
                if (typeExercice.every(type => filtredExercice[0].type !== type)) {
                    typeExercice.push(filtredExercice[0].type)
                }
                let exerciceTr = document.createElement('div');
            });
            dayTraining.innerHTML = `<h4>Тренировка №${n + 1}</h4>`;
            typeExercice.forEach((item, i) => {
                let nameExercice = document.createElement('p');
                nameExercice.innerHTML = `
                    ${i + 1}.${item}
                `;
                dayTraining.appendChild(nameExercice);
            });
            parent.appendChild(dayTraining);
            dayTraining.id = `idTraining${n + 1}`;
            dayTraining.className = 'training';
            let brnTraining = document.getElementById(`idTraining${n + 1}`);
            brnTraining.addEventListener('click', renderMyPersonTraining);

        });
        let dayTraining = document.createElement('div');
        let typeExercice = [];
        dayTraining.id = 'myTraining';
        dayTraining.className = 'training';
        obj.forEach(item => {
            if (typeExercice.every(type => item.type !== type)) {
                typeExercice.push(item.type)
            }
            let exerciceTr = document.createElement('div');
        });
        dayTraining.innerHTML = `<h4>Своя тренировка</h4>`;
        typeExercice.forEach((item, i) => {
            let nameExercice = document.createElement('p');
            nameExercice.innerHTML = `
                    ${i + 1}.${item}
                `;
            dayTraining.appendChild(nameExercice);
        });

        parent.appendChild(dayTraining);
        let brnTraining = document.getElementById('myTraining');
        brnTraining.addEventListener('click', renderMyPersonTraining);
    };
};

//ДЕВУШКА
//ДЕВУШКА ПОХУДЕТЬ
//ДЕВУШКА ПОХУДЕТЬ ЭКТОМОРФ
//ДЕВУШКА ПОХУДЕТЬ ЭКТОМОРФ НОВИЧОК
class WomanLoseWeightEcBeg extends Person {
    constructor() {
        super();
        this.gender = 'woman';
        this.target = 'loseWeight';
        this.bodyType = 'ectomorph';
        this.experience = 'beginning';
        this.training = [
            [103, 106, 108, 502, 505, 506],
            [401, 403, 405, 206, 201, 209],
            [809, 805, 806, 901, 902, 903]
        ];
    };
};
//ДЕВУШКА ПОХУДЕТЬ ЭКТОМОРФ ОПЫТНЫЙ
class WomanLoseWeightEcExp extends Person {
    constructor() {
        super();
        this.gender = 'woman';
        this.target = 'loseWeight';
        this.bodyType = 'ectomorph';
        this.experience = 'experienced';
        this.training = [
            [103, 106, 108, 502, 505, 506, 1001, 10002],
            [401, 403, 405, 206, 201, 209, 601],
            [809, 805, 806, 901, 902, 903, 702, 704]
        ];
    };
};
//ДЕВУШКА ПОХУДЕТЬ ЭКТОМОРФ ПРО
class WomanLoseWeightEcPro extends Person {
    constructor() {
        super();
        this.gender = 'woman';
        this.target = 'loseWeight';
        this.bodyType = 'ectomorph';
        this.experience = 'professional';
        this.training = [
            [102, 106, 107, 502, 507, 506, 1003, 10004],
            [401, 404, 405, 207, 204, 210, 601],
            [809, 808, 802, 903, 904, 908, 701, 705]
        ];
    };
};

//ДЕВУШКА ПОХУДЕТЬ МЕЗОМОРФ
//ДЕВУШКА ПОХУДЕТЬ МЕЗОМОРФ НОВИЧОК
class WomanLoseWeightMeBeg extends Person {
    constructor() {
        super();
        this.gender = 'woman';
        this.target = 'loseWeight';
        this.bodyType = 'mesomorph';
        this.experience = 'beginning';
        this.training = [
            [102, 106, 107, 502, 507, 506],
            [401, 404, 405, 207, 204, 210],
            [809, 808, 802, 903, 904, 908]
        ];
    };
};
//ДЕВУШКА ПОХУДЕТЬ МЕЗОМОРФ ОПЫТНЫЙ
class WomanLoseWeightMeExp extends Person {
    constructor() {
        super();
        this.gender = 'woman';
        this.target = 'loseWeight';
        this.bodyType = 'mesomorph';
        this.experience = 'experienced';
        this.training = [
            [102, 105, 109, 501, 505, 506],
            [402, 404, 405, 207, 203, 210],
            [802, 808, 801, 903, 902, 908]
        ];
    };
};
//ДЕВУШКА ПОХУДЕТЬ МЕЗОМОРФ ПРО
class WomanLoseWeightMePro extends Person {
    constructor() {
        super();
        this.gender = 'woman';
        this.target = 'loseWeight';
        this.bodyType = 'mesomorph';
        this.experience = 'professional';
        this.training = [
            [102, 105, 109, 501, 505, 506],
            [402, 404, 405, 207, 203, 210],
            [802, 808, 801, 903, 902, 908]
        ];
    };
};

//ДЕВУШКА ПОХУДЕТЬ ЭНДОМОРФ
//ДЕВУШКА ПОХУДЕТЬ ЭНДОМОРФ НОВИЧОК
class WomanLoseWeightEnBeg extends Person {
    constructor() {
        super();
        this.gender = 'woman';
        this.target = 'loseWeight';
        this.bodyType = 'endomorph';
        this.experience = 'beginning';
        this.training = [
            [102, 107, 110, 502, 503, 507],
            [401, 406, 407, 205, 203, 209],
            [802, 808, 801, 903, 902, 908]
        ];
    };
};
//ДЕВУШКА ПОХУДЕТЬ ЭНДОМОРФ ОПЫТНЫЙ
class WomanLoseWeightEnExp extends Person {
    constructor() {
        super();
        this.gender = 'woman';
        this.target = 'loseWeight';
        this.bodyType = 'endomorph';
        this.experience = 'experienced';
        this.training = [
            [102, 105, 110, 502, 503, 507],
            [401, 408, 407, 205, 203, 209],
            [802, 808, 805, 904, 906, 908]
        ];
    };
};
//ДЕВУШКА ПОХУДЕТЬ ЭНДОМОРФ ПРО
class WomanLoseWeightEnPro extends Person {
    constructor() {
        super();
        this.gender = 'woman';
        this.target = 'loseWeight';
        this.bodyType = 'endomorph';
        this.experience = 'professional';
        this.training = [
            [101, 102, 103, 501, 505, 506],
            [402, 403, 406, 206, 201, 209],
            [802, 807, 806, 904, 907, 908]
        ];
    };
};

//ДЕВУШКА НАБРАТЬ
//ДЕВУШКА НАБРАТЬ ЭКТОМОРФ
//ДЕВУШКА НАБРАТЬ ЭКТОМОРФ НОВИЧОК
class WomanGainWeightEcBeg extends Person {
    constructor() {
        super();
        this.gender = 'woman';
        this.target = 'gainWeight';
        this.bodyType = 'ectomorph';
        this.experience = 'beginning';
        this.training = [
            [105, 103, 104, 502, 506, 507],
            [402, 404, 406, 206, 201, 210],
            [802, 801, 805, 904, 905, 908]
        ];
    };
};
//ДЕВУШКА НАБРАТЬ ЭКТОМОРФ ОПЫТНЫЙ
class WomanGainWeightEcExp extends Person {
    constructor() {
        super();
        this.gender = 'woman';
        this.target = 'gainWeight';
        this.bodyType = 'ectomorph';
        this.experience = 'experienced';
        this.training = [
            [105, 103, 104, 502, 506, 507],
            [402, 404, 406, 205, 202, 210],
            [802, 803, 806, 904, 905, 908]
        ];
    };
}
//ДЕВУШКА НАБРАТЬ ЭКТОМОРФ ПРО
class WomanGainWeightEcPro extends Person {
    constructor() {
        super();
        this.gender = 'woman';
        this.target = 'gainWeight';
        this.bodyType = 'ectomorph';
        this.experience = 'professional';
        this.training = [
            [101, 102, 106, 501, 506, 507],
            [402, 404, 406, 205, 201, 210],
            [802, 801, 806, 902, 903, 908]
        ];
    };
};

//ДЕВУШКА НАБРАТЬ МЕЗОМОРФ
//ДЕВУШКА НАБРАТЬ МЕЗОМОРФ НОВИЧОК
class WomanGainWeightMeBeg extends Person {
    constructor() {
        super();
        this.gender = 'woman';
        this.target = 'gainWeight';
        this.bodyType = 'mesomorph';
        this.experience = 'beginning';
        this.training = [
            [101, 103, 105, 501, 506, 507],
            [402, 404, 406, 204, 202, 210],
            [802, 801, 806, 902, 904, 908]
        ];
    };
};
//ДЕВУШКА НАБРАТЬ МЕЗОМОРФ ОПЫТНЫЙ
class WomanGainWeightMeExp extends Person {
    constructor() {
        super();
        this.gender = 'woman';
        this.target = 'gainWeight';
        this.bodyType = 'mesomorph';
        this.experience = 'experienced';
        this.training = [
            [101, 104, 106, 501, 502, 507],
            [402, 403, 406, 204, 201, 210],
            [802, 802, 806, 902, 903, 908]
        ];
    };
};
//ДЕВУШКА НАБРАТЬ МЕЗОМОРФ ПРО
class WomanGainWeightMePro extends Person {
    constructor() {
        super();
        this.gender = 'woman';
        this.target = 'gainWeight';
        this.bodyType = 'mesomorph';
        this.experience = 'professional';
        this.training = [
            [106, 101, 102, 502, 503, 507, 1002, 1003],
            [402, 403, 406, 204, 201, 210, 702, 704],
            [802, 802, 806, 902, 903, 908, 601]
        ];
    };
};

//ДЕВУШКА НАБРАТЬ ЭНДОМОРФ
//ДЕВУШКА НАБРАТЬ ЭНДОМОРФ НОВИЧОК
class WomanGainWeightEnBeg extends Person {
    constructor() {
        super();
        this.gender = 'woman';
        this.target = 'gainWeight';
        this.bodyType = 'endomorph';
        this.experience = 'beginning';
        this.training = [
            [106, 104, 102, 502, 503, 507],
            [402, 404, 405, 201, 201, 210],
            [802, 802, 806, 901, 903, 908]
        ];
    };
};
//ДЕВУШКА НАБРАТЬ ЭНДОМОРФ ОПЫТНЫЙ
class WomanGainWeightEnExp extends Person {
    constructor() {
        super();
        this.gender = 'woman';
        this.target = 'gainWeight';
        this.bodyType = 'endomorph';
        this.experience = 'experienced';
        this.training = [
            [106, 103, 101, 501, 503, 507],
            [402, 404, 405, 201, 202, 210],
            [801, 803, 806, 902, 903, 908]
        ];
    };
};
//ДЕВУШКА НАБРАТЬ ЭНДОМОРФ ПРО
class WomanGainWeightEnPro extends Person {
    constructor() {
        super();
        this.gender = 'woman';
        this.target = 'gainWeight';
        this.bodyType = 'endomorph';
        this.experience = 'professional';
        this.training = [
            [106, 104, 101, 502, 503, 507],
            [402, 403, 404, 202, 203, 210],
            [801, 804, 806, 902, 904, 908]
        ];
    };
};


//ДЕВУШКА ПОДДЕРЖАТЬ
//ДЕВУШКА ПОДДЕРЖАТЬ ЭКТОМОРФ
//ДЕВУШКА ПОДДЕРЖАТЬ ЭКТОМОРФ НОВИЧОК
class WomanKeepFitEcBeg extends Person {
    constructor() {
        super();
        this.gender = 'woman';
        this.target = 'keepFit';
        this.bodyType = 'ectomorph';
        this.experience = 'beginning';
        this.training = [
            [106, 102, 103, 502, 503, 507],
            [402, 403, 404, 201, 202, 210],
            [801, 802, 806, 902, 903, 908]
        ];
    };
};
//ДЕВУШКА ПОДДЕРЖАТЬ ЭКТОМОРФ ОПЫТНЫЙ
class WomanKeepFitEcExp extends Person {
    constructor() {
        super();
        this.gender = 'woman';
        this.target = 'keepFit';
        this.bodyType = 'ectomorph';
        this.experience = 'experienced';
        this.training = [
            [106, 101, 103, 502, 503, 507],
            [402, 403, 404, 204, 201, 210],
            [801, 802, 806, 902, 904, 908]
        ];
    };
};
//ДЕВУШКА ПОДДЕРЖАТЬ ЭКТОМОРФ ПРО
class WomanKeepFitEcPro extends Person {
    constructor() {
        super();
        this.gender = 'woman';
        this.target = 'keepFit';
        this.bodyType = 'ectomorph';
        this.experience = 'professional';
        this.training = [
            [106, 101, 102, 502, 503, 507],
            [402, 403, 401, 204, 201, 210],
            [801, 802, 805, 902, 901, 908]
        ];
    };
};

//ДЕВУШКА ПОДДЕРЖАТЬ МЕЗОМОРФ
//ДЕВУШКА ПОДДЕРЖАТЬ МЕЗОМОРФ НОВИЧОК
class WomanKeepFitMeBeg extends Person {
    constructor() {
        super();
        this.gender = 'woman';
        this.target = 'keepFit';
        this.bodyType = 'mesomorph';
        this.experience = 'beginning';
        this.training = [
            [106, 104, 102, 502, 503, 507],
            [402, 403, 406, 207, 201, 208],
            [801, 802, 803, 902, 901, 905]
        ];
    };
};
//ДЕВУШКА ПОДДЕРЖАТЬ МЕЗОМОРФ ОПЫТНЫЙ
class WomanKeepFitMeExp extends Person {
    constructor() {
        super();
        this.gender = 'woman';
        this.target = 'keepFit';
        this.bodyType = 'mesomorph';
        this.experience = 'experienced';
        this.training = [
            [106, 103, 102, 502, 503, 507],
            [402, 403, 405, 202, 201, 208],
            [801, 806, 803, 902, 906, 905]
        ];
    };
};
//ДЕВУШКА ПОДДЕРЖАТЬ МЕЗОМОРФ ПРО
class WomanKeepFitMePro extends Person {
    constructor() {
        super();
        this.gender = 'woman';
        this.target = 'keepFit';
        this.bodyType = 'mesomorph';
        this.experience = 'professional';
        this.training = [
            [106, 103, 104, 502, 503, 507],
            [402, 403, 405, 207, 201, 208],
            [801, 806, 804, 902, 906, 905]
        ];
    };
};

//ДЕВУШКА ПОДДЕРЖАТЬ ЭНДОМОРФ
//ДЕВУШКА ПОДДЕРЖАТЬ ЭНДОМОРФ НОВИЧОК
class WomanKeepFitEnBeg extends Person {
    constructor() {
        super();
        this.gender = 'woman';
        this.target = 'keepFit';
        this.bodyType = 'endomorph';
        this.experience = 'beginning';
        this.training = [
            [101, 103, 104, 502, 503, 507],
            [401, 403, 405, 207, 201, 208],
            [801, 802, 804, 902, 903, 905]
        ];
    };
};
//ДЕВУШКА ПОДДЕРЖАТЬ ЭНДОМОРФ ОПЫТНЫЙ
class WomanKeepFitEnExp extends Person {
    constructor() {
        super();
        this.gender = 'woman';
        this.target = 'keepFit';
        this.bodyType = 'endomorph';
        this.experience = 'experienced';
        this.training = [
            [101, 103, 107, 502, 503, 507],
            [401, 403, 405, 206, 201, 208],
            [801, 802, 807, 901, 903, 905]
        ];
    };
};
//ДЕВУШКА ПОДДЕРЖАТЬ ЭНДОМОРФ ПРО
class WomanKeepFitEnPro extends Person {
    constructor() {
        super();
        this.gender = 'woman';
        this.target = 'keepFit';
        this.bodyType = 'endomorph';
        this.experience = 'professional';
        this.training = [
            [101, 104, 107, 502, 503, 507],
            [401, 403, 405, 202, 201, 208],
            [801, 806, 807, 901, 904, 905]
        ];
    };
};

//ПАРЕНЬ
//ПАРЕНЬ ВЫНОСЛИВОСТЬ
//ПАРЕНЬ ВЫНОСЛИВОСТЬ ЭКТОМОРФ
//ПАРЕНЬ ВЫНОСЛИВОСТЬ ЭКТОМОРФ НОВИЧОК
class ManEnduranceEcBeg extends Person {
    constructor() {
        super();
        this.gender = 'man';
        this.target = 'endurance';
        this.bodyType = 'ectomorph';
        this.experience = 'beginning';
        this.training = [
            [101, 102, 106, 501, 503, 507],
            [401, 403, 405, 201, 201, 208],
            [801, 805, 807, 902, 904, 905]
        ];
    };
};
//ПАРЕНЬ ВЫНОСЛИВОСТЬ ЭКТОМОРФ ОПЫТНЫЙ
class ManEnduranceEcExp extends Person {
    constructor() {
        super();
        this.gender = 'man';
        this.target = 'endurance';
        this.bodyType = 'ectomorph';
        this.experience = 'experienced';
        this.training = [
            [101, 102, 104, 501, 503, 508],
            [401, 403, 406, 203, 201, 209],
            [801, 805, 808, 902, 904, 908]
        ];
    };
};
//ПАРЕНЬ ВЫНОСЛИВОСТЬ ЭКТОМОРФ ПРО
class ManEnduranceEcPro extends Person {
    constructor() {
        super();
        this.gender = 'man';
        this.target = 'endurance';
        this.bodyType = 'ectomorph';
        this.experience = 'professional';
        this.training = [
            [101, 102, 104, 502, 503, 508],
            [401, 404, 406, 202, 201, 209],
            [801, 806, 808, 902, 904, 908]
        ];
    };
};

//ПАРЕНЬ ВЫНОСЛИВОСТЬ МЕЗОМОРФ
//ПАРЕНЬ ВЫНОСЛИВОСТЬ МЕЗОМОРФ НОВИЧОК
class ManEnduranceMeBeg extends Person {
    constructor() {
        super();
        this.gender = 'man';
        this.target = 'endurance';
        this.bodyType = 'mesomorph';
        this.experience = 'beginning';
        this.training = [
            [101, 103, 104, 501, 503, 508],
            [401, 404, 406, 202, 203, 209],
            [801, 807, 808, 902, 906, 908]
        ];
    };
};
//ПАРЕНЬ ВЫНОСЛИВОСТЬ МЕЗОМОРФ ОПЫТНЫЙ
class ManEnduranceMeExp extends Person {
    constructor() {
        super();
        this.gender = 'man';
        this.target = 'endurance';
        this.bodyType = 'mesomorph';
        this.experience = 'experienced';
        this.training = [
            [101, 103, 108, 502, 503, 508],
            [401, 404, 407, 202, 203, 209],
            [801, 807, 808, 903, 906, 908]
        ];
    };
};
//ПАРЕНЬ ВЫНОСЛИВОСТЬ МЕЗОМОРФ ПРО
class ManEnduranceMePro extends Person {
    constructor() {
        super();
        this.gender = 'man';
        this.target = 'endurance';
        this.bodyType = 'mesomorph';
        this.experience = 'professional';
        this.training = [
            [101, 102, 108, 502, 503, 508],
            [401, 404, 406, 202, 203, 209],
            [801, 807, 808, 904, 907, 908]
        ];
    };
};

//ПАРЕНЬ ВЫНОСЛИВОСТЬ ЭНДОМОРФ
//ПАРЕНЬ ВЫНОСЛИВОСТЬ ЭНДОМОРФ НОВИЧОК
class ManEnduranceEnBeg extends Person {
    constructor() {
        super();
        this.gender = 'man';
        this.target = 'endurance';
        this.bodyType = 'endomorph';
        this.experience = 'beginning';
        this.training = [
            [101, 104, 108, 502, 503, 508],
            [401, 406, 408, 201, 203, 209],
            [801, 806, 808, 903, 907, 908]
        ];
    };
};
//ПАРЕНЬ ВЫНОСЛИВОСТЬ ЭНДОМОРФ ОПЫТНЫЙ
class ManEnduranceEnExp extends Person {
    constructor() {
        super();
        this.gender = 'man';
        this.target = 'endurance';
        this.bodyType = 'endomorph';
        this.experience = 'experienced';
        this.training = [
            [101, 105, 108, 501, 503, 508],
            [401, 406, 408, 202, 203, 209],
            [801, 806, 807, 903, 907, 908]
        ];
    };
};
//ПАРЕНЬ ВЫНОСЛИВОСТЬ ЭНДОМОРФ ПРО
class ManEnduranceEnPro extends Person {
    constructor() {
        super();
        this.gender = 'man';
        this.target = 'endurance';
        this.bodyType = 'endomorph';
        this.experience = 'professional';
        this.training = [
            [101, 102, 108, 501, 503, 508],
            [401, 406, 407, 201, 203, 209],
            [801, 805, 807, 904, 907, 908]
        ];
    };
};
//ПАРЕНЬ РЕЛЬЕФ
//ПАРЕНЬ РЕЛЬЕФ ЭКТОМОРФ
//ПАРЕНЬ РЕЛЬЕФ ЭКТОМОРФ НОВИЧОК
class ManReliefEcBeg extends Person {
    constructor() {
        super();
        this.gender = 'man';
        this.target = 'relief';
        this.bodyType = 'ectomorph';
        this.experience = 'beginning';
        this.training = [
            [101, 102, 108, 502, 503, 508],
            [401, 405, 407, 201, 208, 209],
            [801, 805, 807, 904, 906, 908]
        ];
    };
};
//ПАРЕНЬ РЕЛЬЕФ ЭКТОМОРФ ОПЫТНЫЙ
class ManReliefEcExp extends Person {
    constructor() {
        super();
        this.gender = 'man';
        this.target = 'relief';
        this.bodyType = 'ectomorph';
        this.experience = 'experienced';
        this.training = [
            [101, 103, 108, 502, 503, 508],
            [401, 405, 407, 202, 208, 209],
            [801, 806, 808, 904, 906, 908]
        ];
    };
};
//ПАРЕНЬ РЕЛЬЕФ ЭКТОМОРФ ПРО
class ManReliefEcPro extends Person {
    constructor() {
        super();
        this.gender = 'man';
        this.target = 'relief';
        this.bodyType = 'ectomorph';
        this.experience = 'professional';
        this.training = [
            [101, 104, 108, 502, 503, 508],
            [401, 405, 406, 202, 208, 209],
            [801, 806, 809, 905, 906, 908]
        ];
    };
};

//ПАРЕНЬ РЕЛЬЕФ МЕЗОМОРФ
//ПАРЕНЬ РЕЛЬЕФ МЕЗОМОРФ НОВИЧОК
class ManReliefMeBeg extends Person {
    constructor() {
        super();
        this.gender = 'man';
        this.target = 'relief';
        this.bodyType = 'mesomorph';
        this.experience = 'beginning';
        this.training = [
            [101, 103, 108, 505, 503, 508],
            [401, 405, 406, 206, 208, 209],
            [801, 806, 810, 905, 906, 908]
        ];
    };
};
//ПАРЕНЬ РЕЛЬЕФ МЕЗОМОРФ ОПЫТНЫЙ
class ManReliefMeExp extends Person {
    constructor() {
        super();
        this.gender = 'man';
        this.target = 'relief';
        this.bodyType = 'mesomorph';
        this.experience = 'experienced';
        this.training = [
            [101, 103, 108, 506, 503, 508],
            [401, 405, 406, 207, 208, 209],
            [801, 806, 809, 905, 906, 908]
        ];
    };
};
//ПАРЕНЬ РЕЛЬЕФ МЕЗОМОРФ ПРО
class ManReliefMePro extends Person {
    constructor() {
        super();
        this.gender = 'man';
        this.target = 'relief';
        this.bodyType = 'mesomorph';
        this.experience = 'professional';
        this.training = [
            [101, 103, 108, 506, 504, 508],
            [401, 405, 406, 202, 208, 209],
            [801, 807, 809, 905, 906, 908]
        ];
    };
};

//ПАРЕНЬ РЕЛЬЕФ ЭНДОМОРФ
//ПАРЕНЬ РЕЛЬЕФ ЭНДОМОРФ НОВИЧОК
class ManReliefEnBeg extends Person {
    constructor() {
        super();
        this.gender = 'man';
        this.target = 'relief';
        this.bodyType = 'endomorph';
        this.experience = 'beginning';
        this.training = [
            [102, 106, 107, 506, 504, 508],
            [402, 405, 406, 201, 208, 209],
            [803, 807, 809, 901, 906, 908]
        ];
    };
};
//ПАРЕНЬ РЕЛЬЕФ ЭНДОМОРФ ОПЫТНЫЙ
class ManReliefEnExp extends Person {
    constructor() {
        super();
        this.gender = 'man';
        this.target = 'relief';
        this.bodyType = 'endomorph';
        this.experience = 'experienced';
        this.training = [
            [102, 103, 107, 506, 504, 508],
            [402, 403, 406, 201, 202, 209],
            [803, 804, 809, 901, 902, 908]
        ];
    };
};
//ПАРЕНЬ РЕЛЬЕФ ЭНДОМОРФ ПРО
class ManReliefEnPro extends Person {
    constructor() {
        super();
        this.gender = 'man';
        this.target = 'relief';
        this.bodyType = 'endomorph';
        this.experience = 'professional';
        this.training = [
            [101, 102, 107, 506, 504, 508],
            [401, 402, 406, 201, 202, 209],
            [801, 802, 809, 901, 902, 908]
        ];
    };
};
//ПАРЕНЬ СИЛА
//ПАРЕНЬ СИЛА ЭКТОМОРФ
//ПАРЕНЬ СИЛА ЭКТОМОРФ НОВИЧОК
class ManStrengthEcBeg extends Person {
    constructor() {
        super();
        this.gender = 'man';
        this.target = 'strength';
        this.bodyType = 'ectomorph';
        this.experience = 'beginning';
        this.training = [
            [101, 102, 103, 501, 502, 508],
            [401, 402, 403, 201, 202, 203],
            [801, 802, 803, 901, 902, 903]
        ];
    };
};
//ПАРЕНЬ СИЛА ЭКТОМОРФ ОПЫТНЫЙ
class ManStrengthEcExp extends Person {
    constructor() {
        super();
        this.gender = 'man';
        this.target = 'strength';
        this.bodyType = 'ectomorph';
        this.experience = 'experienced';
        this.training = [
            [101, 102, 103, 501, 502, 503],
            [401, 403, 404, 201, 202, 203],
            [801, 802, 804, 901, 902, 905]
        ];
    };
};
//ПАРЕНЬ СИЛА ЭКТОМОРФ ПРО
class ManStrengthEcPro extends Person {
    constructor() {
        super();
        this.gender = 'man';
        this.target = 'strength';
        this.bodyType = 'ectomorph';
        this.experience = 'professional';
        this.training = [
            [101, 102, 105, 501, 502, 506],
            [402, 403, 404, 201, 202, 204],
            [801, 803, 804, 901, 904, 905]
        ];
    };
};

//ПАРЕНЬ СИЛА МЕЗОМОРФ
//ПАРЕНЬ СИЛА МЕЗОМОРФ НОВИЧОК
class ManStrengthMeBeg extends Person {
    constructor() {
        super();
        this.gender = 'man';
        this.target = 'strength';
        this.bodyType = 'mesomorph';
        this.experience = 'beginning';
        this.training = [
            [101, 104, 105, 503, 502, 506],
            [404, 403, 406, 201, 202, 204],
            [805, 803, 804, 906, 904, 905]
        ];
    };
};
//ПАРЕНЬ СИЛА МЕЗОМОРФ ОПЫТНЫЙ
class ManStrengthMeExp extends Person {
    constructor() {
        super();
        this.gender = 'man';
        this.target = 'strength';
        this.bodyType = 'mesomorph';
        this.experience = 'experienced';
        this.training = [
            [101, 106, 105, 503, 502, 506],
            [404, 403, 407, 201, 202, 204],
            [805, 803, 804, 907, 904, 905]
        ];
    };
};
//ПАРЕНЬ СИЛА МЕЗОМОРФ ПРО
class ManStrengthMePro extends Person {
    constructor() {
        super();
        this.gender = 'man';
        this.target = 'strength';
        this.bodyType = 'mesomorph';
        this.experience = 'professional';
        this.training = [
            [101, 102, 107, 503, 502, 506],
            [404, 402, 407, 203, 202, 204],
            [805, 802, 804, 901, 904, 905]
        ];
    };
};

//ПАРЕНЬ СИЛА ЭНДОМОРФ
//ПАРЕНЬ СИЛА ЭНДОМОРФ НОВИЧОК
class ManStrengthEnBeg extends Person {
    constructor() {
        super();
        this.gender = 'man';
        this.target = 'strength';
        this.bodyType = 'endomorph';
        this.experience = 'beginning';
        this.training = [
            [101, 102, 103, 501, 502, 506],
            [401, 402, 407, 201, 202, 204],
            [801, 802, 804, 901, 902, 905]
        ];
    };
};
//ПАРЕНЬ СИЛА ЭНДОМОРФ ОПЫТНЫЙ
class ManStrengthEnExp extends Person {
    constructor() {
        super();
        this.gender = 'man';
        this.target = 'strength';
        this.bodyType = 'endomorph';
        this.experience = 'experienced';
        this.training = [
            [101, 102, 103, 501, 502, 503],
            [401, 402, 407, 201, 202, 203],
            [801, 802, 803, 901, 902, 903]
        ];
    };
};
//ПАРЕНЬ СИЛА ЭНДОМОРФ ПРО
class ManStrengthEnPro extends Person {
    constructor() {
        super();
        this.gender = 'man';
        this.target = 'strength';
        this.bodyType = 'endomorph';
        this.experience = 'professional';
        this.training = [
            [101, 109, 103, 501, 504, 503],
            [401, 402, 407, 201, 205, 203],
            [801, 802, 808, 901, 906, 903]
        ];
    };
};

//ФАБРИКА
class GenderFactory {
    makeGender(person) {
        let PersonGender = null;
        if (person.gender === 'woman' && person.target === 'loseWeight' &&
            person.bodyType === 'ectomorph' && person.experience === 'beginning') {
            PersonGender = WomanLoseWeightEcBeg;

        } else if (person.gender === 'woman' && person.target === 'loseWeight' &&
            person.bodyType === 'ectomorph' && person.experience === 'experienced') {
            PersonGender = WomanLoseWeightEcExp;

        } else if (person.gender === 'woman' && person.target === 'loseWeight' &&
            person.bodyType === 'ectomorph' && person.experience === 'professional') {
            PersonGender = WomanLoseWeightEcPro;

        } else if (person.gender === 'woman' && person.target === 'loseWeight' &&
            person.bodyType === 'mesomorph' && person.experience === 'beginning') {
            PersonGender = WomanLoseWeightMeBeg;

        } else if (person.gender === 'woman' && person.target === 'loseWeight' &&
            person.bodyType === 'mesomorph' && person.experience === 'experienced') {
            PersonGender = WomanLoseWeightMeExp;

        } else if (person.gender === 'woman' && person.target === 'loseWeight' &&
            person.bodyType === 'mesomorph' && person.experience === 'professional') {
            PersonGender = WomanLoseWeightMePro;

        } else if (person.gender === 'woman' && person.target === 'loseWeight' &&
            person.bodyType === 'endomorph' && person.experience === 'beginning') {
            PersonGender = WomanLoseWeightEnBeg;

        } else if (person.gender === 'woman' && person.target === 'loseWeight' &&
            person.bodyType === 'endomorph' && person.experience === 'experienced') {
            PersonGender = WomanLoseWeightEnExp;

        } else if (person.gender === 'woman' && person.target === 'loseWeight' &&
            person.bodyType === 'endomorph' && person.experience === 'professional') {
            PersonGender = WomanLoseWeightEnPro;

        } else if (person.gender === 'woman' && person.target === 'gainWeight' &&
            person.bodyType === 'ectomorph' && person.experience === 'beginning') {
            PersonGender = WomanGainWeightEcBeg;

        } else if (person.gender === 'woman' && person.target === 'gainWeight' &&
            person.bodyType === 'ectomorph' && person.experience === 'experienced') {
            PersonGender = WomanGainWeightEcExp;

        } else if (person.gender === 'woman' && person.target === 'gainWeight' &&
            person.bodyType === 'ectomorph' && person.experience === 'professional') {
            PersonGender = WomanGainWeightEcPro;

        } else if (person.gender === 'woman' && person.target === 'gainWeight' &&
            person.bodyType === 'mesomorph' && person.experience === 'beginning') {
            PersonGender = WomanGainWeightMeBeg;

        } else if (person.gender === 'woman' && person.target === 'gainWeight' &&
            person.bodyType === 'mesomorph' && person.experience === 'experienced') {
            PersonGender = WomanGainWeightMeExp;

        } else if (person.gender === 'woman' && person.target === 'gainWeight' &&
            person.bodyType === 'mesomorph' && person.experience === 'professional') {
            PersonGender = WomanGainWeightMePro;

        } else if (person.gender === 'woman' && person.target === 'gainWeight' &&
            person.bodyType === 'endomorph' && person.experience === 'beginning') {
            PersonGender = WomanGainWeightEnBeg;

        } else if (person.gender === 'woman' && person.target === 'gainWeight' &&
            person.bodyType === 'endomorph' && person.experience === 'experienced') {
            PersonGender = WomanGainWeightEnExp;

        } else if (person.gender === 'woman' && person.target === 'gainWeight' &&
            person.bodyType === 'endomorph' && person.experience === 'professional') {
            PersonGender = WomanGainWeightEnPro;

        } else if (person.gender === 'woman' && person.target === 'keepFit' &&
            person.bodyType === 'ectomorph' && person.experience === 'beginning') {
            PersonGender = WomanKeepFitEcBeg;

        } else if (person.gender === 'woman' && person.target === 'keepFit' &&
            person.bodyType === 'ectomorph' && person.experience === 'experienced') {
            PersonGender = WomanKeepFitEcExp;

        } else if (person.gender === 'woman' && person.target === 'keepFit' &&
            person.bodyType === 'ectomorph' && person.experience === 'professional') {
            PersonGender = WomanKeepFitEcPro;

        } else if (person.gender === 'woman' && person.target === 'keepFit' &&
            person.bodyType === 'mesomorph' && person.experience === 'beginning') {
            PersonGender = WomanKeepFitMeBeg;

        } else if (person.gender === 'woman' && person.target === 'keepFit' &&
            person.bodyType === 'mesomorph' && person.experience === 'experienced') {
            PersonGender = WomanKeepFitMeExp;

        } else if (person.gender === 'woman' && person.target === 'keepFit' &&
            person.bodyType === 'mesomorph' && person.experience === 'professional') {
            PersonGender = WomanKeepFitMePro;

        } else if (person.gender === 'woman' && person.target === 'keepFit' &&
            person.bodyType === 'endomorph' && person.experience === 'beginning') {
            PersonGender = WomanKeepFitEnBeg;

        } else if (person.gender === 'woman' && person.target === 'keepFit' &&
            person.bodyType === 'endomorph' && person.experience === 'experienced') {
            PersonGender = WomanKeepFitEnExp;

        } else if (person.gender === 'woman' && person.target === 'keepFit' &&
            person.bodyType === 'endomorph' && person.experience === 'professional') {
            PersonGender = WomanKeepFitEnPro;

        } else if (person.gender === 'man' && person.target === 'endurance' &&
            person.bodyType === 'ectomorph' && person.experience === 'beginning') {
            PersonGender = ManEnduranceEcBeg;

        } else if (person.gender === 'man' && person.target === 'endurance' &&
            person.bodyType === 'ectomorph' && person.experience === 'experienced') {
            PersonGender = ManEnduranceEcExp;

        } else if (person.gender === 'man' && person.target === 'endurance' &&
            person.bodyType === 'ectomorph' && person.experience === 'professional') {
            PersonGender = ManEnduranceEcPro;

        } else if (person.gender === 'man' && person.target === 'endurance' &&
            person.bodyType === 'mesomorph' && person.experience === 'beginning') {
            PersonGender = ManEnduranceMeBeg;

        } else if (person.gender === 'man' && person.target === 'endurance' &&
            person.bodyType === 'mesomorph' && person.experience === 'experienced') {
            PersonGender = ManEnduranceMeExp;

        } else if (person.gender === 'man' && person.target === 'endurance' &&
            person.bodyType === 'mesomorph' && person.experience === 'professional') {
            PersonGender = ManEnduranceMePro;

        } else if (person.gender === 'man' && person.target === 'endurance' &&
            person.bodyType === 'endomorph' && person.experience === 'beginning') {
            PersonGender = ManEnduranceEnBeg;

        } else if (person.gender === 'man' && person.target === 'endurance' &&
            person.bodyType === 'endomorph' && person.experience === 'experienced') {
            PersonGender = ManEnduranceEnExp;

        } else if (person.gender === 'man' && person.target === 'endurance' &&
            person.bodyType === 'endomorph' && person.experience === 'professional') {
            PersonGender = ManEnduranceEnPro;

        } else if (person.gender === 'man' && person.target === 'relief' &&
            person.bodyType === 'ectomorph' && person.experience === 'beginning') {
            PersonGender = ManReliefEcBeg;

        } else if (person.gender === 'man' && person.target === 'relief' &&
            person.bodyType === 'ectomorph' && person.experience === 'experienced') {
            PersonGender = ManReliefEcExp;

        } else if (person.gender === 'man' && person.target === 'relief' &&
            person.bodyType === 'ectomorph' && person.experience === 'professional') {
            PersonGender = ManReliefEcPro;

        } else if (person.gender === 'man' && person.target === 'relief' &&
            person.bodyType === 'mesomorph' && person.experience === 'beginning') {
            PersonGender = ManReliefMeBeg;

        } else if (person.gender === 'man' && person.target === 'relief' &&
            person.bodyType === 'mesomorph' && person.experience === 'experienced') {
            PersonGender = ManReliefMeExp;

        } else if (person.gender === 'man' && person.target === 'relief' &&
            person.bodyType === 'mesomorph' && person.experience === 'professional') {
            PersonGender = ManReliefMePro;

        } else if (person.gender === 'man' && person.target === 'relief' &&
            person.bodyType === 'endomorph' && person.experience === 'beginning') {
            PersonGender = ManReliefEnBeg;

        } else if (person.gender === 'man' && person.target === 'relief' &&
            person.bodyType === 'endomorph' && person.experience === 'experienced') {
            PersonGender = ManReliefEnExp;

        } else if (person.gender === 'man' && person.target === 'relief' &&
            person.bodyType === 'endomorph' && person.experience === 'professional') {
            PersonGender = ManReliefEnPro;

        } else if (person.gender === 'man' && person.target === 'strength' &&
            person.bodyType === 'ectomorph' && person.experience === 'beginning') {
            PersonGender = ManStrengthEcBeg;

        } else if (person.gender === 'man' && person.target === 'strength' &&
            person.bodyType === 'ectomorph' && person.experience === 'experienced') {
            PersonGender = ManStrengthEcExp;

        } else if (person.gender === 'man' && person.target === 'strength' &&
            person.bodyType === 'ectomorph' && person.experience === 'professional') {
            PersonGender = ManStrengthEcPro;

        } else if (person.gender === 'man' && person.target === 'strength' &&
            person.bodyType === 'mesomorph' && person.experience === 'beginning') {
            PersonGender = ManStrengthMeBeg;

        } else if (person.gender === 'man' && person.target === 'strength' &&
            person.bodyType === 'mesomorph' && person.experience === 'experienced') {
            PersonGender = ManStrengthMeExp;

        } else if (person.gender === 'man' && person.target === 'strength' &&
            person.bodyType === 'mesomorph' && person.experience === 'professional') {
            PersonGender = ManStrengthMePro;

        } else if (person.gender === 'man' && person.target === 'strength' &&
            person.bodyType === 'endomorph' && person.experience === 'beginning') {
            PersonGender = ManStrengthEnBeg;

        } else if (person.gender === 'man' && person.target === 'strength' &&
            person.bodyType === 'endomorph' && person.experience === 'experienced') {
            PersonGender = ManStrengthEnExp;

        } else if (person.gender === 'man' && person.target === 'strength' &&
            person.bodyType === 'endomorph' && person.experience === 'professional') {
            PersonGender = ManStrengthEnPro;

        } else {
            return false;
        }
        return new PersonGender(person);
    }
}

export const mySuperForge = new GenderFactory();


