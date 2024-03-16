const { Square, Circle, Triangle } = require('./lib/shapes');
const { prompt } = require('inquirer');
const { writeFile } = require('fs');
function init() {
    prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like to create?',
            choices: ['Circle', 'Square', 'Triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like the shape to be?'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like the text to be?'
        },
        {
            type: 'input',
            name: 'text',
            message: 'What text would you like the shape to display?',
            validate: function (input) {
                if (input.length > 3) {
                    return 'Text limit must be 3 characters or less.';
                }
                return true;
            }
        }
    ]).then(({ shape, shapeColor, textColor, text }) => {
        console.log(shape, shapeColor, textColor, text);
        let svgString = '';
        switch (shape) {
            case 'Circle':
                const circle = new Circle(shapeColor, textColor, text);
                svgString = circle.render()+circle.insertShape()+circle.insertText()+circle.renderEnd();
                break;
            case 'Square':
                const square = new Square(shapeColor, textColor, text);
                svgString = square.render()+square.insertShape()+square.insertText()+square.renderEnd();
                break;
            case 'Triangle':
                const triangle = new Triangle(shapeColor, textColor, text);
                svgString = triangle.render()+triangle.insertShape()+triangle.insertText()+triangle.renderEnd();
                break;
        }
console.log(svgString);
let pathName = shape.toLowerCase().split(' ').join('') + '.svg';
console.log(pathName);
        writeFile(pathName, svgString, err => {
            if (err) { console.log(err); }
            else { console.log('Success!'); }
        });
    });
}
init();