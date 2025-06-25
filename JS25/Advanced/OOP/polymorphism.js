/**
 * Plymorphism 
 * 
 */

class Shape {
    draw() {
        console.log('Drawing shape');
    }
}


class Circle extends Shape {
    draw() {
        console.log('Drawing circle');
    }
}

class Square extends Shape {
    draw() {
        console.log('Drawing square');
    }
}

const shapes = [new Circle, new Square];

shapes.forEach(shape => shape.draw());



