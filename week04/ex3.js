function buttonAPressed() {
    var apple = document.getElementById("apple-img");
    var orange = document.getElementById("orange-img");

    var ctx = document.getElementById('canvas1').getContext('2d');
    var input_word = document.getElementById("input_word").value;

    ctx.clearRect(0, 0, 400, 300);

    if (input_word == 'りんご') {
        ctx.drawImage(apple, 10, 10, 100, 100);

    } else if (input_word == 'みかん') {
        ctx.drawImage(orange, 10, 10, 100, 100);
    } else {
        ctx.font = "30px sans-serif";
        ctx.fillText('見つかりませんでした', 20, 75, 200);

    }



}



