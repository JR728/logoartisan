// Define a base class for shapes
class Shapes {
    constructor(color) {
        this.color = color;// Initialize the shape's color
    }
    setColor(color) {
        this.color = color;// Set the color of the shape
    }
}
// Define a class for triangles that inherits from the Shapes class
class Triangle extends Shapes {
    constructor(color) {
        super(color);// Call the parent class constructor to set the color
    }
    // Render method to generate SVG code for a triangle
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// Define a class for circles that inherits from the Shapes class
class Circle extends Shapes {
    constructor(color) {
        super(color);// Call the parent class constructor to set the color

    }

    // Render method to generate SVG code for a circle
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

// Define a class for squares that inherits from the Shapes class
class Square extends Shapes {
    constructor(color) {
        super(color);// Call the parent class constructor to set the color
    }

    // Render method to generate SVG code for a square
    render() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
}

// Export the Triangle, Circle, and Square classes for use in other modules
module.exports = {Triangle, Circle, Square}