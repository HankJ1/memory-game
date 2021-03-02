

export const Helpers = (() => {

    function createRedScreen() {
        let main = document.querySelector("html");
        let redScreen = document.createElement('div');
        redScreen.setAttribute('style', "height: 100vh; width: 100vw; position: absolute; top: 0; background-color: red; opacity: 0.7;");

        main.appendChild(redScreen);

        setTimeout(() => {redScreen.remove()}, 50);

    }

    function minimizeCards() {
        let cards = document.querySelectorAll('.single-card-container');
        cards.forEach(card => {
            card.style.transitionDuration = '125ms';
            card.style.transform = 'scale(0.5)';
        })
        setTimeout(() => {
            cards.forEach(card => {
                card.style.transitionDuration = '125ms';
                card.style.transform = '';
            })
        }, 100)
    }

    return {
        createRedScreen,
        minimizeCards
    }


})();


// export function createRedScreen() {
//     let main = document.querySelector("html");
//     let redScreen = document.createElement('div');
//     redScreen.setAttribute('style', "height: 100vh; width: 100vw; position: absolute; top: 0; background-color: red; opacity: 0.7;");

//     main.appendChild(redScreen);

//     setTimeout(() => {redScreen.remove()}, 100);

// }

//createRedScreen();