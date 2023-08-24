const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const {Triangle, Circle, Square} = require('./lib/shapes.js');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hexadecimal number must include # if hexadecimal):'
    },
    {
        type: 'list',
        name: 'shapeType',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hexadecimal number must include # if hexadecimal):'
    }
];
async function writeToFile(fileName, svgContent) {
    const examplesDir = path.join(__dirname, 'examples');
    const filePath = path.join(examplesDir, fileName);

    await fs.writeFileSync(filePath, svgContent);
    console.log(`Generated ${fileName}`);

};
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        const shapeType = answers.shapeType;

        let selectedShape;
        let textX = 150;
        let textY = 100;
        switch (shapeType) {
            case 'circle':
                selectedShape = new Circle(answers.shapeColor);
                textX = 150;
                textY = 100;
                break;
            case 'triangle':
                selectedShape = new Triangle(answers.shapeColor);
                textX = 150;
                textY = 135;
                break;
            case 'square':
                selectedShape = new Square(answers.shapeColor);
                textX = 150;
                textY = 125;
                break;
            default:
                console.error('Invalid shape type.');
                return;
        }
        const svgContent = `
        <svg version = "1.1" width="300" height="200" xmlns = "http://www.w3.org/2000/svg">
            ${selectedShape.render()}
            <text x="${textX}" y="${textY}" text-anchor="middle" alignment-baseline="middle" font-size="50px" font-weight="bold" fill="${answers.textColor || 'black'}">${answers.text}</text>
        </svg>
        `;
        writeToFile(`logo.svg`, svgContent);

    })
    .catch((error) => console.error(error));
}

init();

