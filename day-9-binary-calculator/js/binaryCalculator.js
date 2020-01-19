let element = document.getElementById('res');

function action(e) {
    var btn = e.target || e.srcElement;
    document.getElementById(btn.id).innerHTML++;
}