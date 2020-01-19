let cont = 1;
let button = document.getElementById('btn');

button.addEventListener('click', function() {
    button.innerHTML = cont++;
});