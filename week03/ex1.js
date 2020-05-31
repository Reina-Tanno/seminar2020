function buttonPressed() {
    var html = '';

    var r = Math.random();
    for (var i = 1; i <= 10; i++) {
        var r = Math.floor(Math.random() * 6) + 1; //乱数の発生*/
        html = html + '<li>' + r + '</li>';

    }
    document.getElementById('number').innerHTML = html;

}