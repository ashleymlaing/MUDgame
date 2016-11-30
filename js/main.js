
$(document).ready(function(){
  $('input').keydown(function(event){
    var keyCode = (event.keyCode ? event.keyCode : event.which);
    if (keyCode == 13) {
        var statement = $('input').val();
        $('.textDisplay').append("<p>" + statement + "</p>");
        $('input').val("");
        move(user.room,statement);
        userResponse(statement);
        if (user.room == room5) {
          $('.textDisplay').append("<p> You Won</p>");
        }
        $('.textDisplay').scrollTop($('.textDisplay')[0].scrollHeight);
    }
});
});

function Room(entrence , exit , number) {
  this.entrence = entrence;
  this.exit = exit;
  this.number = number;
}

var room1 = new Room("east","west",1);
var room2 = new Room("east","south",2);
var room3 = new Room("north","south",3);
var room4 = new Room("north","west",4);
var room5 = new Room("east","west",5);

var user = {};
user.room = room1;

//user will write an input
//put the value out the input
//case switch for responce to the input
//inside the case switch we have function called


//north
//need position of person (top,right)
//set top to a var
//add px to the top

//moving guy function

function move (room,statement){
  if(room == room1 && statement.charAt(0)=="W" || room == room1 && statement.charAt(0)=="w"){
    $('.person').css("top","80px").css("right","275px");
    user.room = room2;
  }else if(room == room2 && statement.charAt(0)=="S" || room == room2 && statement.charAt(0)=="s"){
    $('.person').css("top","200px").css("right","275px");
    user.room = room3;
  }else if (room == room2 & statement.charAt(0)=="E" || room == room2 & statement.charAt(0)=="e") {
    $('.person').css("top","80px").css("right","157px");
    user.room = room1;
  }else if (room == room3 & statement.charAt(0)=="N" || room == room3 & statement.charAt(0)=="n") {
    $('.person').css("top","80px").css("right","275px");
    user.room = room2;
  }else if (room == room3 & statement.charAt(0)=="S" || room == room3 & statement.charAt(0)=="s") {
    $('.person').css("top","320px").css("right","275px");
    user.room = room4;
  }else if (room == room4 & statement.charAt(0)=="N" || room == room4 & statement.charAt(0)=="n") {
    $('.person').css("top","200px").css("right","275px");
    user.room = room3;
  }else if (room == room4 & statement.charAt(0)=="W" || room == room4 & statement.charAt(0)=="w") {
    $('.person').css("top","320px").css("right","400px");
    user.room = room5;
  }else if (room == room5 & statement.charAt(0)=="E" || room == room5 & statement.charAt(0)=="e") {
    $('.person').css("top","320px").css("right","275px");
    user.room = room4;
  }
}

//east
//west
//south
function userResponse(statement) {
  if(statement == "N" || statement == "North" || statement == "n"){
    if(user.room == room1 || user.room == room2 || user.room == room5){
      $('.textDisplay').append("<p> Door Locked</p>");
      $('.textDisplay').append("<p> You are in room "+ user.room.number +"</p>");
    }else if (user.room == room3) {


      $('.textDisplay').append("<p> You are in room "+ user.room.number +"</p>");
    }else if (user.room == room4) {


      $('.textDisplay').append("<p> You are in room "+ user.room.number +"</p>");
    }
  }else if (statement == "S" || statement == "South" || statement == "s") {
    if(user.room == room1 || user.room == room4 || user.room == room5){
      $('.textDisplay').append("<p> Door Locked</p>");
      $('.textDisplay').append("<p> You are in room "+ user.room.number +"</p>");
    }else if (user.room == room2) {


      $('.textDisplay').append("<p> You are in room "+ user.room.number +"</p>");
    }else if (user.room == room3) {


      $('.textDisplay').append("<p> You are in room "+ user.room.number +"</p>");
    }
  }else if (statement == "E" || statement == "East" || statement == "e") {
    if(user.room == room3 || user.room == room4){
      $('.textDisplay').append("<p> Door Locked</p>")
      $('.textDisplay').append("<p> You are in room "+ user.room.number +"</p>");
    }else if (user.room == room1) {

      $('.textDisplay').append("<p> You are in room "+ user.room.number +"</p>");

    }else if (user.room == room2) {


      $('.textDisplay').append("<p> You are in room "+ user.room.number +"</p>");
    }else if (user.room == room5) {


      $('.textDisplay').append("<p> You are in room "+ user.room.number +"</p>");
    }
  }else if (statement == "W" || statement == "West" || statement == "w") {
    if(user.room == room2 || user.room == room3 || user.room == room5){
      $('.textDisplay').append("<p> Door Locked</p>");
      $('.textDisplay').append("<p> You are in room "+ user.room.number +"</p>");
    }else if (user.room == room1) {


      $('.textDisplay').append("<p> You are in room "+ user.room.number +"</p>");
    }else if (user.room == room4) {


      $('.textDisplay').append("<p> You are in room "+ user.room.number +"</p>");
    }
  }else if (statement == "help" || statement == "Help" || statement == "HELP") {
    $('.textDisplay').append("<p>You can type North,South,East,West or use N,S,E,W for Directions<br>You can type help for this message or hint to get a hint from Jake</p>");
  }else {
    $('.textDisplay').append("<p>Command Not Recoginized!</p>");
  }
}
//function that checks the input
//see if its
