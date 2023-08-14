// --ThemeMap--
// Базовые типы.
// Объекты, массивы и кортежи.
// Функции.
// Классы и типы.
// Интерфейсы.
// Типы vs Интерфейсы.
// ENUM и его типы.
// Утверждения (assertions)
// Различные утилиты типов.
// Декораторы.
// Расширенные типы.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var bmw = {
    model: 'M5 F90',
    color: 'white',
    akmm: true,
    aisrBaloon: true,
    innerColor: 'brown'
};
console.log(bmw);
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
// --- (Как типизировать стрелочную функцию)
var getChannelNameAndAge = function (name, age) {
    return { name: name, age: age };
};
var getChannelandAge = function (name, age) {
    return { name: name, age: age };
};
// Rest операторы.
var getNumbers = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers;
};
function getCar(name, price) {
    return price ? "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 ".concat(name, ", \u0446\u0435\u043D\u0430: ").concat(price) : "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 ".concat(name);
}
var car1 = getCar('BMW');
var car2 = getCar('BMW', 130000);
// const car3 = getCar('BMW', 120000, 'something') // последний работать не будет
// Классы и типы.
var Car = /** @class */ (function () {
    function Car(name, price) {
        this.name = name;
        this.price = price;
    }
    Car.prototype.getName = function () {
        return "Name: ".concat(this.name);
    };
    Car.prototype.getInfo = function () {
        return "".concat(this.name, " - ").concat(this.price);
    };
    Car.prototype.prvGetInfo = function () {
        this.getInfo();
    };
    Car.prototype.getPrice = function () {
        return "Price: ".concat(this.price);
    };
    return Car;
}());
var Buss = /** @class */ (function (_super) {
    __extends(Buss, _super);
    function Buss(name, price) {
        return _super.call(this, name, price) || this;
    }
    Buss.prototype.test = function () {
        return this.getPrice();
    };
    return Buss;
}(Car));
new Car('BMW', 135000).getName(); // BMW
new Car('BMW', 135000).getInfo(); // не будет работать, так как private
var user11 = {
    name: 'Alex',
    email: 'johndoe@gmail.com'
};
var user1 = {
    name: 'John',
    family: true,
    age: 31
};
var user2 = {
    name: 'Max',
    family: true,
    age: 24
};
// Enum и его типы.
var EnumRoles;
(function (EnumRoles) {
    EnumRoles[EnumRoles["ADMIN"] = 0] = "ADMIN";
    EnumRoles[EnumRoles["GUEST"] = 1] = "GUEST";
    EnumRoles[EnumRoles["USER"] = 2] = "USER";
})(EnumRoles || (EnumRoles = {}));
var user3 = {
    role: EnumRoles.ADMIN,
    color: 1 /* EnumColors.black */
};
console.log(EnumRoles[EnumRoles.ADMIN]); // получаем ключ (ADMIN) 
// new
