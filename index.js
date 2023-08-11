var pl1=prompt("Enter the name of the player1:");
var pl2=prompt("Enter the name of the player2:");
document.querySelectorAll("p")[0].innerText=pl1;
document.querySelectorAll("p")[1].innerText=pl2;
function fun( a, b)
{
    if(a==1)
    {
        document.firstElementChild.querySelector(".img1").setAttribute("src","images/dice1.png");
    }
    if(a==2)
    {
        document.firstElementChild.querySelector(".img1").setAttribute("src","images/dice2.png");
    }
    if(a==3)
    {
        document.firstElementChild.querySelector(".img1").setAttribute("src","images/dice3.png");
    }
    if(a==4)
    {
        document.firstElementChild.querySelector(".img1").setAttribute("src","images/dice4.png");
    }
    if(a==5)
    {
        document.firstElementChild.querySelector(".img1").setAttribute("src","images/dice5.png");
    }
    if(a==6)
    {
        document.firstElementChild.querySelector(".img1").setAttribute("src","images/dice6.png");
    }

    if(b==1)
    {
        document.firstElementChild.querySelector(".img2").setAttribute("src","images/dice1.png");
    }
    if(b==2)
    {
        document.firstElementChild.querySelector(".img2").setAttribute("src","images/dice2.png");
    }
    if(b==3)
    {
        document.firstElementChild.querySelector(".img2").setAttribute("src","images/dice3.png");
    }
    if(b==4)
    {
        document.firstElementChild.querySelector(".img2").setAttribute("src","images/dice4.png");
    }
    if(b==5)
    {
        document.firstElementChild.querySelector(".img2").setAttribute("src","images/dice5.png");
    }
    if(b==6)
    {
        document.firstElementChild.querySelector(".img2").setAttribute("src","images/dice6.png");
    }
    return;
}

var a= Math.ceil(Math.random()*6);
var b=Math.ceil(Math.random()*6);
fun(a,b);
if(a==b)
{
    document.firstElementChild.querySelector("h1").innerText="Draw";
}
else{
if(a>b)
{
    document.firstElementChild.querySelector("h1").innerText="🚩 "+pl1+" wins";
}
else{
    document.firstElementChild.querySelector("h1").innerText=pl2+" wins 🚩";
}
}