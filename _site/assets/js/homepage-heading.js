if ( $(window).width() > 992){
  document.querySelector('body').addEventListener('mousemove', titlemove);
  function titlemove(){
    let title = document.querySelectorAll('.title-container');
    title.forEach(function(title){
      let x = title.getBoundingClientRect().left + (title.clientWidth / 2);
      let y = title.getBoundingClientRect().top + (title.clientHeight / 2);
      let radian = Math.atan2(event.pageX - x, event.pageY - y);
      let yMove = Math.cos(radian)*8;
      let xMove = Math.sin(radian)*8;
      title.style.transform = "translate(" + xMove + "px , " + yMove + "px )";
    })
  }
}