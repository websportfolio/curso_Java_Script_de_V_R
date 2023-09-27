$(document).ready(function(){

    //Slider
    $(function(){
        $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200,
          pager: true
        });
      });
      //Posts
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
})