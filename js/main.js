 $(function(){
     $('.p1').on('click', function(){
     	$('.planet1').toggleClass('paused');
     })
     $('.p2').on('click', function(){
     	$('.planet2').toggleClass('paused');
     })
     $('.p3').on('click', function(){
     	$('.planet3').toggleClass('paused');
     })
     $('.m').on('click', function(){
     	$('.moon').toggleClass('paused');
     })
   });