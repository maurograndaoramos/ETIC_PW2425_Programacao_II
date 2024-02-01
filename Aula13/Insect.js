import Animal from "./Animal.js";

export default class Insect extends Animal {

    #canFly;
    constructor(data, callback) {
        super(data, callback);

        this.#canFly = data.canFly;
    }

    introduce() {

        let parentIntroduce = super.introduce();

        return this.#canFly ? 
        parentIntroduce + " and I can *bzzt* fly" :
        parentIntroduce + " and I can't fly";
    }
}