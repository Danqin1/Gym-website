window.onload = function () {
    console.log('ready')
    const logo = document.getElementById('menu');
    const menu = document.getElementById('menuContent');
    logo.addEventListener('click',function(){
        menu.classList.toggle('toggleDisplay');
    })

        $('#homeNav').click(function() { 
        $.scrollTo( $('#home'),500); 
        menu.classList.toggle('toggleDisplay');
        });
        $('#offerNav').click(function() { 
            $.scrollTo( $('#offer'),500); 
            menu.classList.toggle('toggleDisplay');
        });
        $('#priceNav').click(function() { 
            $.scrollTo( $('#price'),500); 
            menu.classList.toggle('toggleDisplay');
        });
        $('#contactNav').click(function() { 
            $.scrollTo( $('#contact'),500); 
            menu.classList.toggle('toggleDisplay');
        });

}