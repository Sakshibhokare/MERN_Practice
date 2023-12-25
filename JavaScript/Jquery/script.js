function showMagic(){
    $("p").fadeToggle(3000)
    $('p').css('background', 'red')
}

// choose 
// $(".class"), $("#id") 

$('button').click(showMagic)