const {Triangle, Circle, Square} = require('../lib/shapes.js')

describe('Triangle Class', () => {
    it('should render a blue triangle SVG string', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        const expectedSvgString = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
        const renderedSvg = shape.render();
        expect(renderedSvg).toEqual(expectedSvgString);
    });
});
describe('Circle Class', () => {
    it('should render a lavender circle SVG string', () => {
        const shape = new Circle();
        shape.setColor('%23887AFF');
        const expectedSvgString = '<circle cx="150" cy="100" r="80" fill="%23887AFF" />';
        const renderedSvg = shape.render();
        expect(renderedSvg).toEqual(expectedSvgString);
    });
});
describe('Square Class', () => {
    it('should render a green square SVG string', () => {
        const shape = new Square();
        shape.setColor('green');
        const expectedSvgString = '<rect x="50" y="50" width="200" height="200" fill="green" />';
        const renderedSvg = shape.render();
        expect(renderedSvg).toEqual(expectedSvgString);
    });
});