// Базовые типы.
// type: string // строка
// type: number // числа
// type: object // объекты
// type: boolean // булевое значение
// type: undefined // undefined
// type: null // null
// type: any // любой тип, но использовать крайне рекомендуется
// type: unknown // неизвестно
// type: void // пустота, обычное используется в функциях (callback)
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// ---
var user = {
    age: 20,
    name: 'Aziz'
};
var address = {
    city: 'TLDM',
    country: 'Russia'
};
// ---
// соединям 2 объекта вместе
var common1 = __assign(__assign({}, user), address);
// выше приведенный прмиер будет работать, но например у нас такой случай:
var common2; // здесь мы проверяем на наличие объекта 
common2 = __assign(__assign({}, user), address);
// Массивы.
var array; // это значит массив из строк
array = ['1', '2'];
var newArray = [1, '2', null];
function getChannel(name, age) {
    return {
        name: name,
        age: age
    };
}
getChannel('flx', 20);
function minMaxFromArr(arr) {
    return [
        Math.min.apply(Math, arr),
        Math.max.apply(Math, arr)
    ];
}
console.log(minMaxFromArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
// --- (Как типизировать стрелочную функцию)
var getChannelNameAndAge = function (name, age) {
    return { name: name, age: age };
};
var getChannelandAge = function (name, age) {
    return { name: name, age: age };
};
// Rest операторы
var getNumbers = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers;
};
// TODO
