$(".button1").click(function() {
    let fortune = Math.ceil(Math.random() * 5);
    console.log(fortune);
    $(".message").text("Code Nation is cool");

    if (fortune === 1) {
        $(".message").text("nice try");
    } else if (fortune === 2) {
        $(".message").text("sorry");
    } else if (fortune === 3) {
        $(".message").text("better luck next time");
    } else if (fortune === 4) {
        $(".message").text("definitely");
    } else {
         $(".message").text("bye bye");
    } 

    // task 1  If fortune === 1, output "nice try"

    // task 2  If fortune === 2, output "sorry"

    // task 3  If fortune == 3, output "better luck next time"
    // task 4  If fortune === 4, output "definitely"

});