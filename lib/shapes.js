class Shapes {
    constructor(color) {
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
}
class Triangle extends Shapes {
    constructor(color) {
        super(color);
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

module.exports = {Triangle}