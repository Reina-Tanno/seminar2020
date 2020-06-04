var answer;

function buttonStartPressed() {
    answer = Math.floor(Math.random() * 20) + 1;
    document.getElementById('output-result').innerHTML = '数あてゲームを開始しました．いくつかな？';
}

function buttonAnswerPressed() {
    var a = document.getElementById('input-number').value;
    a = Number(a);
    var html = ''
    var massage;
    /*var flag = true ;
  
   while ( flag ) {*/

    if (a == answer) {
        massage = 'あたり！';
    } else if (a <= answer) {
        massage = 'はずれ！それより大きいです';
    } else if (answer <= a) {
        massage = 'はずれ！それより小さいです';

        html = html + '<p>' + massage + '</p>';
    }

    document.getElementById('output-result').innerHTML = massage;
}