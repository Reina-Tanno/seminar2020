function buttonPressed() {
    var sum = '';
    var x = '';


    sum = sum + '<table border="1">';
    sum = sum + '<tr><th>年後</th><th>元利合計<th>';

    var a = document.getElementById('input-base').value;
    a = Number(a);

    var b = document.getElementById('input-interest').value;
    b = Number(b);

    for (var i = 1; i <= 10; i++) {

        sum = sum + '<tr>';

        sum = sum + '<td>' + i + '</td>';


        x = Math.round(a * ((1 + b / 100) ** i));
        sum = sum + '<td>' + x + '</td>';

        sum = sum + '</tr>';
    }

    sum = sum + '</table>'
    document.getElementById('table1').innerHTML = sum;

}



