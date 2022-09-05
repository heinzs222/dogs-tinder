// Remember to import the data and Dog class!
import Dog from "./Dog.js";
import dogs from "./data.js";
let i = 0;
let dog = new Dog(dogs[i]);
console.log(dog);
function render(dogName) {
    document.getElementById("main-content").innerHTML =
        dogName.getDogImageHtml();
    document.getElementById("yes-no").innerHTML = dogName.getResultHtml();
}

document.getElementById("nope").addEventListener("click", () => {
    setTimeout(() => {
        dog.hasBeenSwiped = true;
        dog.hasBeenLiked = false;
        render(dog);
    });
    setTimeout(() => {
        i += 1;
        dog.hasBeenSwiped = false;
        dog = new Dog(dogs[i]);
        render(dog);
    }, 1000);
});
document.getElementById("yes").addEventListener("click", () => {
    if (i < dogs.length) {
        setTimeout(() => {
            dog.hasBeenSwiped = true;
            dog.hasBeenLiked = true;
            render(dog);
        });
        setTimeout(() => {
            i += 1;
            dog.hasBeenSwiped = false;
            dog = new Dog(dogs[i]);
            render(dog);
        }, 1000);
    }
});

render(dog);
