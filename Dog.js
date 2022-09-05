// Create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data);
    }
    getResultHtml() {
        return this.hasBeenLiked == false && this.hasBeenSwiped == true
            ? `<img class="decision show" id="no" src="/images/badge-nope.png" alt="nope">`
            : this.hasBeenLiked == true && this.hasBeenSwiped == true
            ? `<img class="decision show" id="yeah" src="/images/badge-like.png" alt="like">`
            : `<img class="decision dontShow" id="yeah" src="/images/badge-like.png" alt="like">
            <img class="decision dontShow" id="no" src="/images/badge-nope.png" alt="nope">`;
    }
    getDogImageHtml() {
        const { name, avatar, age, bio, resultHtml } = this;
        return ` <div class="dog-picutre col-2">
                <div class="decision-container" id="yes-nope">
                    ${this.getResultHtml()}
                    
                </div>
                <div class="discription">
                    <img src=${avatar} alt="">
                    <div id="info">
                        <h2>${name},${age}</h2>
                        <p>${bio}</p>
                    </div>
                </div>
            </div>`;
    }
}
export default Dog;
