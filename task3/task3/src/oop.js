/**
 * Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
 * Если координаты не переданы - 0,0; Аналогично если только 1 координата.
 * Реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
 */
class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    colculate(){
        return Math.sqrt(this.x**2 + this.y**2)
    }

}



/**
 * Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
 * который будет наследоваться от точки в двумерном пространстве.
 * Реализовать статический метод, который возвращает расстояние между Point3D.
 */
class Point3D extends Point {

    constructor(x = 0, y = 0, z = 0) {
        super(x, y);
        this.z = z;
    }
    static vectorLength(a, b) {
        return Math.sqrt((a.x - b.x)**2 + (a.y - b.y)**2 + (a.z - b.z)**2   )
    }
}



/**
 * Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала.
 * Предусмотреть 2 варианта инициализации - массивом в конструкторе (из него создается очередь) и без параметров.
 * Для тех, кто доверяет, но проверяет: написать тесты на методы класса (oop.spec.js)
 */
class Queue {

    constructor(array = []) {
        this.array = array;
        this.size = array.length;
    }


    push(...elements){
        elements.forEach((element) => this.array.push(element));

        this.size += elements.length

    }
    pop(){
        this.size -= 1
        return this.array.shift()
    }
    clear(){
        this.size = 0
        this.array = []
    }

}

queue = new Queue()


queue.push(...[1,2,3,4])

console.log(queue.pop())
console.log(queue.pop())

queue.push(5)

console.log(queue.pop())




module.exports = {
    Point,
    Point3D,
    Queue,
};
