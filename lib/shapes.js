class Shape {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
      }
      insertText() {
        return `<text x="150" y="125" font-size="20" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
      }
      renderEnd() {
        return `</svg>`;
      }
}
class Circle extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text);
    }
insertShape() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
}
}
class Square extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text);
    }
    insertShape() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`;;
    }
}
class Triangle extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text);
    }
    insertShape() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
}
module.exports = {Circle, Square, Triangle};