window.onload = () => {


const test = new Test ();
test.width = 100;
test.height = 150;
test.background = "red";

console.log(test.width);
console.log(test.height);
console.log(test.background);

const test2 =new Text()
test2.width = 200;
test2.height = 200 ;
test2.background = "blue";

const test3 =new Text()
test3.width = 200;
test3.height = 200 ;
test3.background = "Green";

}

class Test {
    #name = "test";
    #age = 25;
    #gender = "male";

    #view;


    constructor() {
        this.#view = document.createElement("div");
        this.#view.className = "view";
        document.body.appendChild(this.#view)
    }

    get width () {
        return this.#view.style.width.replace("px", "")
    }

    set width (value) {
        this.#view.style.width = value + "px"
    }

    get height () {
        return this.#view.style.height.replace("px", "")
    }

    set height (value) {
        this.#view.style.height = value + "px"
    }

    



    getName() {
        return this.#name;
    }
    getAge() {
        return this.#age;
    }
    getGende() {
        return this.#gender;
    }

}



