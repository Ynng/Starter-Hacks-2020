$(document).ready(function(){
    var letter_size = 6;
    $("input.mainInput").keyup(function(e) {
        move_size = $(this).val().length * letter_size;
        console.log(move_size);
        $('#box').css({'left': move_size+'px'});
    });
});