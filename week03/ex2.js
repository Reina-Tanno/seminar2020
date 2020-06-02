function buttonAPressed() {
    var a = document.getElementById('num').value;
    a = Number(a);
    var sum = 1;
    var html = '';
    for (var i = 1; i <= a; i++) {
        sum = sum * i;
        html = html + '<li>' + i + 'の階乗は' + sum + 'です' + '</li>';
    }
    document.getElementById('number').innerHTML = html;
}
