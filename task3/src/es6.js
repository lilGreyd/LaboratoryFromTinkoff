"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно (а местами и нужно) дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    let surname, name;
    [surname , name] = fio.split(" ");
    return name + " " + surname;
}



console.log(fioToName("Ptrov Ivan Alex"))

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    const setArray = new Set();
    array.forEach((element) => setArray.add(element));
    return Array.from(setArray);
}



// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
function calculateSalaryDifference(array) {

    let min = array[0];
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }

    return Math.round(max / min)
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary extends Map{

    dict = new Map();

    addNode(word, definition){

        if(typeof word === "string" && typeof definition === "string"){
            dict.set(word, definition);
        }
    }
    getDefinition(word){
        return dict.get(word)
    }
}




module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
