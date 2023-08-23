const {Triangle} = require('../lib/shapes.js')

describe('Triangle Class', () => {
    it('should render a blue triangle SVG string', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        const expectedSvgString = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
        const renderedSvg = shape.render();
        expect(renderedSvg).toEqual(expectedSvgString);
    });
});