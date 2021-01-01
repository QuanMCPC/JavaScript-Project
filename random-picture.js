function random_picture(width, height, colorblockwidth, colorblockheight) {
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");
    for (i = 0; i <= width; i++) {
        for (i1 = 0; i1 <= height; i1++) {
            var rcolor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
            ctx.fillStyle = rcolor;
            ctx.fillRect(i, i1, colorblockwidth, colorblockheight);
        }
    }
    var link = document.createElement("a");
    link.download = "randomImage.png";
    link.href = canvas.toDataURL();
    link.click();
    link.delete;
}