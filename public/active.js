 //set active navigation after click
$(document).ready(function() {

  var page = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);

  $(".navbar-nav .nav-item a").each(function() {
    if($(this).attr("href") == page) {
      $(this).css({

      })
    }  
  });
  
});



function switchActive() {

  $(document).on('click', 'navbar-nav', function() {
    $(this).addClass('activelink').siblings.removeClass('activelink')
    
  })
  

  /*
  $('navbar-nav .nav-item a').click(function() {

    $('.nav-item').removeClass('activelink')

    $(this).closest('.nav-item').addClass('activelink')
    
  });*/
  
}

 /*
 $(".nav-link").on("click", (event) => {
   this.removeClass('activelink');
    event.target.addClass('activelink');
    $(".navbar-nav").find(".activelink").removeClass('activelink');
    $(event.target).parent().parent().addClass('activelink');
  });*/