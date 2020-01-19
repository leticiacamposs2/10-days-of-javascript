class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
* Escreva um código que adicione um método 'area' ao protótipo da classe Rectangle 
*/
Rectangle.prototype.area = function() {
    return this.h * this.w;
}

/*
* Crie uma classe Square que herda de Rectangle e implemente seu construtor de classe */
class Square extends Rectangle {
    constructor(s) {
        super(s,s); //chama um método da classe/objeto pai Rectangle
    }
}

if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify([ 'constructor' ])) {
    const rec = new Rectangle(3, 4);
    const sqr = new Square(3);
    
    console.log(rec.area());
    console.log(sqr.area());
} else {
    console.log(-1);
    console.log(-1);
}