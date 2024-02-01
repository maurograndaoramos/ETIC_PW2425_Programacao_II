import Animal from "./Animal.js";

export default class Bird extends Animal {

    #isFreshWater;
    constructor(data, callback) {
        super(data, callback);

        this.#isFreshWater = data.isFreshWater;
    }

    introduce() {

        let parentIntroduce = super.introduce();

        return this.#isFreshWater ? 
        parentIntroduce + " and I live in the River" :
        parentIntroduce + " and I live in the Ocean";
    }
}