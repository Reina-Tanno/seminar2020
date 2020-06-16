function buttonAPressed() {
    cvs = document.getElementById('canvas1');
    ctx = cvs.getContext('2d');


    for (var i = 0; i < 50; i++) {
        var x = Math.floor(Math.random() * 400);
        var y = Math.floor(Math.random() * 300);


    }
    ctx.fillStyle = 'blue';  // 塗りつぶしの色

    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2)
    ctx.fill();
}

function buttonBPressed() {
    ctx.clearRect(0, 0, 400, 300);
}
