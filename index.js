var ranmdomnumber1=Math.floor(Math.random()*6)+1;
var randimg="dice"+ranmdomnumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randimg);
var randomnumber2=Math.floor(Math.random()*6)+1;
var randimg2="dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randimg2);
if(ranmdomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins Hurray !";
}
else if(ranmdomnumber1<randomnumber2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins Hurray !";
}
else
{
    document.querySelector("h1").innerHTML="Both the player Wins Hurray !";
}
