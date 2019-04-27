
function handleClick(event){
 event.preventDefault();
 $(".buyit").text('ADDED TO CART!');
 setTimeout(changeBack,2000);
}

function changeBack(){
  $(".buyit").text('BUYNOW!');
}
$(".buyit").click(handleClick);

var a = ($(".timesClicked")),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;
};







/*


/*function oldText(){
  $(".buyit").text("BUY NOW!");
  setTimeout(handleClick, 2000);
}
}

$(".buyit").click(handleClick);

/*function changeBack(){
  $(".buyit").setTimeout(handleClick, 2000);
}*/
