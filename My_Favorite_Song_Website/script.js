function startAnimation() {
    const note = document.getElementById("musicNote");
    const title = document.getElementById("title");

    let position = 0;
    let direction = 1;
    let rotation = 0;

    const animation = setInterval(function () {
        position += 3 * direction;
        rotation += 8;

        note.style.left = position + "px";
        note.style.transform = "rotate(" + rotation + "deg)";

        if (position >= 250 || position <= -250) {
            direction *= -1;
        }
    }, 20);

    title.style.transform = "scale(1.1)";
    setTimeout(function () {
        title.style.transform = "scale(1)";
    }, 5000);

    setTimeout(function () {
        clearInterval(animation);
        note.style.left = "0px";
        note.style.transform = "rotate(0deg)";
    }, 10000);
}
