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

function getChannel(name: string, age: number):TypeChannelReturn {
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






// Rest операторы
const getNumbers = (...numbers: number[]) => {
    return numbers
}


// TODO