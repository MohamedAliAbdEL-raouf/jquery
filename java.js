// -------------- start jequery---------------

// --------------- start section2 ------------------
$('.Singer_one').click(function(){
 $('.one').slideDown(1000)
   
})

$('.Singer_two').click(function(){
    $('.two').slideDown(1000 ,()=>{
        $('.one').slideUp(600)
    })
      
   })

   $('.Singer_three').click(function(){
    $('.three').slideDown(1000 ,()=>{
        $('.one').slideUp(600 ,()=>{
            $('.two').slideUp(600)
        })
    })
      
   })

   $('.Singer_four').click(function(){
    $('.four').slideDown(1000 ,()=>{
        $('.one').slideUp(600 ,()=>{
            $('.two').slideUp(600 , ()=>{
                $('.three').slideUp(600)
            })
        })
    })
      
   })
// --------------- end section2 ------------------

// --------------- start section3 ------------------

function displayClouk(){
    let d = new Date();

    document.getElementById('days').innerHTML=d.getDay();
    document.getElementById('hours').innerHTML=d.getHours();
    document.getElementById('min').innerHTML=d.getMinutes();
    document.getElementById('secound').innerHTML=d.getSeconds();


}

let x = setInterval(() => {
    displayClouk()
}, 1000);
// --------------- end section3 ------------------

// --------------- start section4 ------------------

var $carch = document.getElementById('carch');
     $text = document.getElementById('text');
    $maxLength = text.getAttribute('maxLength')

$text.onkeyup = function(){
    $carch.innerHTML = $maxLength - this.value.length;
}

// --------------- end section4 ------------------

// -------------- end jequery---------------