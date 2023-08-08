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




// Структура объектов.
type TypeUser = {
    name: string
    age: number
}

type TypeAddress = {
    city: string
    country: string
}

// ---

const user:TypeUser = {
    age: 20,
    name: 'Aziz'
}

const address:TypeAddress = {
    city: 'TLDM',
    country: 'Russia'
}

// ---

// соединям 2 объекта вместе
const common1 = {
    ...user, 
    ...address
}


// выше приведенный прмиер будет работать, но например у нас такой случай:
let common2: TypeUser & TypeAddress // здесь мы проверяем на наличие объекта 

common2 = {
    ...user, 
    ...address
}






// Массивы.
let array: string[] // это значит массив из строк
array = ['1', '2']



// ---

// const numbers: ReadonlyArray<number> = [0, 1, 2, 3]
// numbers[0] = 2 // будет ошибка, так как мы сверху дали ему типизацию ReadOnly









// Кортежи.
type TypeArray = [number, string, null]
const newArray: TypeArray = [1, '2', null]








// Функции и их типы.
type TypeChannelReturn = {
    name: string
    age: number
}

function getChannel(name: string, age: number): TypeChannelReturn {
    return {
        name, age
    }
}

getChannel('flx', 20)




// --- (Как типизировать стрелочную функцию)
const getChannelNameAndAge = (name: string, age: number): TypeChannelReturn => {
    return { name, age }
}


// --- (Как сделать полноценную типизацию функции ст)
type TypeOfChannelFunction = (name: string, age: number) => TypeChannelReturn

const getChannelandAge:TypeOfChannelFunction = (name, age) => {
    return { name, age }
}








// Rest операторы.
const getNumbers = (...numbers: number[]) => {
    return numbers
}












// Функциональные перегрузки.
function getCar(name: string): string
function getCar(name: string, price: number): string


function getCar(name: string, price?: number): string {
    return price ? `Название ${name}, цена: ${price}` : `Название ${name}`
}

const car1 = getCar('BMW')
const car2 = getCar('BMW', 130000)
// const car3 = getCar('BMW', 120000, 'something') // последний работать не будет













// Классы и типы.
class Car {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    public getName(): string {
        return `Name: ${this.name}`;
    }

    private getInfo(): string {
        return `${this.name} - ${this.price}`;
    }

    prvGetInfo() {
        this.getInfo();
    }

    protected getPrice(): string {
        return `Price: ${this.price}`;
    }
}


class Buss extends Car {
    constructor (name: string, price: number) {
        super(name, price);
    }

    test() {
        return this.getPrice()
    }
}


new Car('BMW', 135000).getName(); // BMW
new Car('BMW', 135000).getInfo(); // не будет работать, так как private


// Кроме этого ещё имеются три основных модификатора для классов. 
// public - они по умолчанию публичные
// private - функции будут доступны только этого КЛАССА, и мы не можем вызывать её вне КЛАССА
// protected - он работает так же как и private, но его так же можно вызывать внутри другого КЛАССА (extends)








// Интерфейсы.
interface IUser { // они так же похожи на Типы (которых мы использовали выше)
    name: string
    email: string
}


const user11: IUser = {
    name: 'Alex',
    email: 'johndoe@gmail.com'
}






// -- Разница между Интерфейсами и Типами. --
// типы - наследуются с помощью &:
type TypeAge = {
    age: number
}

type TypePerson = { // мы этим способом соединяем 2 типа.
    name: string
    family: boolean 
} & TypeAge

const user1: TypePerson = {
    name: 'John',
    family: true,
    age: 31
}


// интерфейсы - наследуются с помощью extends:
interface IAge {
    age: number
}

interface IPerson extends IAge {
    name: string
    family: boolean
}

const user2: IPerson = {
    name: 'Max',
    family: true,
    age: 24
} 











// Enum и его типы.
enum EnumRoles {
    ADMIN, 
    GUEST, 
    USER
}

const enum EnumColors {
    green, 
    black,
    yellow
}

interface IUser1 {
    role: EnumRoles
    color: EnumColors
}

const user3: IUser1 = {
    role: EnumRoles.ADMIN,
    color: EnumColors.black
}


console.log(EnumRoles[EnumRoles.ADMIN]); // получаем ключ (ADMIN)