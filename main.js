canvas=document.getElementById('myCanvas');
ctx= canvas.getContext("2d");

nasa_mars_imgs_array= ["nasa img 1.jpeg", "nasa img 2.jpeg", "nasa img 3.jpeg", "nasa img 4.jpeg", "nasa img 5.jpeg", "nasa img 6.jpeg", "nasa img 7.jpeg", "nasa img 8.jpeg", "nasa img 9.jpeg", "nasa img 10.jpeg", "nasa img 11.jpeg", "nasa img 12.jpeg"];
random_number= Math.floor(Math.random() * 12);
console.log(random_number);
bg_img= nasa_mars_imgs_array [random_number];
console.log("bg_img= " + bg_img);

rover_width=100;
rover_height=90;

rover_x=10;
rover_y=10;

rover_img="rover.png";

function add(){
    bg_imgTag= new Image();
    bg_imgTag.onload=uploadBackground;
    bg_imgTag.src=bg_img;

    rover_imgTag= new Image();
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src=rover_img;
}

function uploadBackground(){
    ctx.drawImage(bg_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}

function up(){
    if(rover_y>=0){
        rover_y=rover_y - 10;
        console.log("when up arrow is pressed, x= " + rover_x + " | y= " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if(rover_y<=500){
        rover_y=rover_y + 10;
        console.log("when down arrow is pressed, x= " + rover_x + " | y= " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if(rover_x>=0){
        rover_x=rover_x - 10;
        console.log("when left arrow is pressed, x= " + rover_x + " | y= " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if(rover_x<=700){
        rover_x=rover_x + 10;
        console.log("when right arrow is pressed, x= " + rover_x + " | y= " + rover_y);
        uploadBackground();
        uploadRover();
    }
}