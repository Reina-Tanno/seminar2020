function buttonPressed() {
    var str = "";
    str = str + "<table border=1>";

    for (var i = 1; i < 10; i++) {
        str = str + "<tr>";

        for (var j = 1; j < 10; j++) {
            var a = i * j;
            str = str + "<td>";
            str = str + a;
            str = str + "</td>";



        }
        str = str + "</tr>";
    }
    str = str + "</table>";

    document.getElementById("ninenine").innerHTML = str;

}
