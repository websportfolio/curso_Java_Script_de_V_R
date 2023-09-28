$(document).ready(function(){

    //Slider
    if(window.location.href.indexOf('index') >-1){
      $(function(){
        $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200,
          pager: true
        });
      });
    }
  
      //Posts
      if(window.location.href.indexOf('index') >-1){
      var posts = [
        {
            title: 'Prueba de titulo 1',
            date: 'Publicado el dia '+moment().date()+' de '+moment().format(" MMMM")+' del '+moment().format("YYYY"),
            content: 'Duis vitae ornare ex. Mauris accumsan auctor est, sed consectetur mi luctus sit amet   Praesent venenatis ante a dolor maximus porttitor. Vestibulum ac tortor at urna   semper finibus. Praesent ante dui, consectetur non laoreet in, ornare nec dolor.' 
          
        },
        {
            title: 'Prueba de titulo 2',
            date: 'Publicado el dia '+moment().date()+' de '+moment().format(" MMMM")+' del '+moment().format("YYYY"),
            content: 'Duis vitae ornare ex. Mauris accumsan auctor est, sed consectetur mi luctus sit amet   Praesent venenatis ante a dolor maximus porttitor. Vestibulum ac tortor at urna   semper finibus. Praesent ante dui, consectetur non laoreet in, ornare nec dolor. '
        },
        {
            title: 'Prueba de titulo 3',
            date: 'Publicado el dia '+moment().date()+' de '+moment().format(" MMMM")+' del '+moment().format("YYYY"),
            content: 'Duis vitae ornare ex. Mauris accumsan auctor est, sed consectetur mi luctus sit amet   Praesent venenatis ante a dolor maximus porttitor. Vestibulum ac tortor at urna   semper finibus. Praesent ante dui, consectetur non laoreet in, ornare nec dolor. '
        },
        {
            title: 'Prueba de titulo 4',
            date: 'Publicado el dia '+moment().date()+' de '+moment().format(" MMMM")+' del '+moment().format("YYYY"),
            content: 'Duis vitae ornare ex. Mauris accumsan auctor est, sed consectetur mi luctus sit amet   Praesent venenatis ante a dolor maximus porttitor. Vestibulum ac tortor at urna   semper finibus. Praesent ante dui, consectetur non laoreet in, ornare nec dolor. '
        },
        {
            title: 'Prueba de titulo 5',
            date: 'Publicado el dia '+moment().date()+' de '+moment().format(" MMMM")+' del '+moment().format("YYYY"),
            content: 'Duis vitae ornare ex. Mauris accumsan auctor est, sed consectetur mi luctus sit amet   Praesent venenatis ante a dolor maximus porttitor. Vestibulum ac tortor at urna   semper finibus. Praesent ante dui, consectetur non laoreet in, ornare nec dolor. '
        },
        {
            title: 'Prueba de titulo 6',
            date: 'Publicado el dia '+moment().date()+' de '+moment().format(" MMMM")+' del '+moment().format("YYYY"),
            content: 'Duis vitae ornare ex. Mauris accumsan auctor est, sed consectetur mi luctus sit amet   Praesent venenatis ante a dolor maximus porttitor. Vestibulum ac tortor at urna   semper finibus. Praesent ante dui, consectetur non laoreet in, ornare nec dolor. '
        }
       
      ]
    
      posts.forEach((item, index) => {
var post = `
<article class="post">
<h2>${item.title}</h2>
<span class="date">${item.date}</span>
<p>
   ${item.content}
</p>
<a href="#" class="buttom-more">Leer mas</a>
</article>

`;
$('#posts').append(post);
      });
    }//fin condicion if
      //Selector de temas
      var theme = $('#theme')
      $('#to-green').click(function(){
        theme.attr('href', 'css/green.css')
      })

      $('#to-red').click(function(){
        theme.attr('href', 'css/red.css')
      })
      $('#to-blue').click(function(){
        theme.attr('href', 'css/blue.css')
      });
      //Scroll arriba de la web
      $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 500);
        return false;
      });
      //LOgin Falso
      $('#login form').submit(function(){
        var for_name = $('#form_name').val();

        localStorage.setItem("for_name", for_name);
      });
      var for_name = localStorage.getItem("for_name");

      if(for_name != null && for_name != "undefined"){
        var about_parrafo = $('#about p');

          $("#about p").html("<br><strong>Bienbenido, "+for_name+'</strong>');
          about_parrafo.append("<a href='#' id='logout'>Cerrar secion</a>");

          $('#login').hide();

          $('#logout').click(function(){
              localStorage.clear();
              location.reload();
          })
      }
      //acordeon
      if(window.location.href.indexOf('about') >-1){
        $("#acordeon").accordion();
      }

      //Reloj
      if(window.location.href.indexOf('reloj') >-1){
        //es un boocle ejecuta cada vez
        setInterval(function(){
            //ejecuta ese codigo
            var reloj = moment().format(' h:mm:ss');

            $('#reloj').html(reloj);
        }, 1000)
          
        
      }
      
})