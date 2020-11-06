// new WOW().init();

// $('#graphic-tab').click(function(){
//   new WOW().init();
// })

$('.counter').each(function(){
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text(),
    },{
        duaration: 20000,
        easing: 'swing',
        step: function(now){
            $(this).text(Math.ceil(now));
        }
    }
    )
})

// const counters = document.querySelectorAll('.counter');
// const speed = 400 ; //the lower the slower

// counters.forEach(counter => {
//     const updateCount = () =>{
//         const target = +counter.getAttribute('data-target');
//         const count = +counter.innerText;

//         const inc = target / speed ;
//         // check if target is reached
//         if(count < target){
//             counter.innerText = count + inc

//             //call function every ms
//             setTimeout(updateCount, 1);
//         }else{
//             countr.innerText = target
//         }
//     };
//     updateCount();
// })