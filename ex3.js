let images = ['tudor.jpg', 'burtica.jpg', 'cosmin.jpg'];

let index = 0;
const imgElement = document.querySelector('#mainPhoto');

function change() {
   imgElement.src = images[index];
   index > 1 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 5000);
};