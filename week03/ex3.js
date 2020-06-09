function buttonPressed() {
    var html = '';
    html = html + '<table border="1" >';




    for (var i = 1; i <= 20; i++) {

        html = html + '<tr>';
        html = html + '<td>' + i + '</td>';

        if (i % 3 === 0 && i % 5 === 0) {
            html = html + '<td>' + 'fizz buzz' + '</td>';
        } else if (i % 3 === 0) {
            html = html + '<td>' + 'fizz' + '</td>';
        } else if (i % 5 === 0) {
            html = html + '<td>' + 'buzz' + '</td>';
        }



        html = html + '</tr>';

    }
    html = html + '</table>'
    document.getElementById('table').innerHTML = html;






}