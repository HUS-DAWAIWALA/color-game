/*
var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
];
*/

var numsquare=6,colors,pickedColor;
var newColors = document.querySelector("#newcolors");
var squares = document.querySelectorAll(".square");
var resultDisplay = document.querySelector("#result");
var colordisplay = document.getElementById("colordisplay");
var Container = document.getElementById("container");
var h1 = document.querySelector("h1");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

//easy hard button event listener

easy.addEventListener("click",function() {
    easy.classList.add("selected");
    //easy.classList.remove("selected");
    numsquare=3;
    colors = generateRandomColors(numsquare);
    pickedColor = pick_Color();
    for (var i = 0 ; i<squares.length ; i++){
        if(colors[i]){
	squares[i].style.background = colors[i];}
    else{squares[i].style.display = "none";}}
} );

hard.addEventListener("click",function() {
    hard.classList.add("selected");
    hard.classList.remove("selected"); 
    numsquare=6
    colors = generateRandomColors(numsquare);
    pickedColor = pick_Color();
    for (var i = 0 ; i<squares.length ; i++){
            squares[i].style.display = "block";
	        squares[i].style.background = colors[i];
        }
 });
    

//event to generate new colors
newColors.addEventListener("click", function() {
    colors = generateRandomColors(numsquare);
    pickedColor = pick_Color();
    newColors.textContent = "New Colors"
    colordisplay.textContent = pickedColor;
    resultDisplay.textContent = " ";
    for (var i = 0 ; i<squares.length ; i++){
	squares[i].style.background = colors[i];}
} );




for (var i = 0 ; i<squares.length ; i++){
	//squares[i].style.background = colors[i];
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.background;
		/*console.log(clickedColor);
		console.log(pickedColor);*/
		if(clickedColor === pickedColor){
            //console.log("correct");
            resultDisplay.textContent = "Correct";
            newColors.textContent = "play again?";
            h1.style.background = clickedColor;
            for(var j=0;j<squares.length;j++){squares[j].style.background = clickedColor;} 
		}else{
            resultDisplay.textContent = "wrong";
			this.style.background= "steelblue"; }
	});
}

function pick_Color(){
   var random = Math.floor(Math.random()*colors.length);
    return colors[random] ;
}

function generateRandomColors(num){
    var arr =[];
    for (var i=1;i<=num;i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var red=Math.floor(Math.random()*256);
    var green=Math.floor(Math.random()*256);
    var blue=Math.floor(Math.random()*256);
    return "rgb("+ red +", " + green +", " + blue +")";
}
