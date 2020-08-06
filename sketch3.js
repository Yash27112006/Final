//creates the variable
var email;

function preload(){
    //loads the image 
    backImg = loadImage("design_files/images/backImg2.PNG");
}
function setup(){
    //creates the canvas
    canvas = createCanvas(windowWidth - 20, windowHeight-30);

    //creates the page for sending mail with class Mail
    email = new Mail();
    email.sendMail();

  //creates a button to logout
  var button3 = createButton('Back to List');
  button3.position(1550,20);
  button3.style('width','100px');
  button3.style('height','30px')

  //creates the function for pressing the button2
  button3.mousePressed(()=>{
     window.location.href = "index4.html";
  });

}
function draw(){
    //sets the background
    background(backImg);
}