
    // Players name
    var player1 = "Player 1";
    var player2 = "Player 2";

  

    // Function to roll the dice
    function roll()
    {
        setTimeout(function ()
        {
            var randomNum1 = Math.floor(Math.random() * 6) + 1;
            var randomNum2 = Math.floor(Math.random() * 6) + 1;

            document.querySelector(".img1").setAttribute("src","dice" + randomNum1 + ".png");

            document.querySelector(".img2").setAttribute("src","dice" + randomNum2 + ".png");

            if (randomNum1 === randomNum2)
            {
                document.querySelector("h1").innerHTML = "DRAW!";
            }

            else if (randomNum1 < randomNum2)
             {
                document.querySelector("h1").innerHTML  = (player2 + " WINS!");
            }

            else
             {
                document.querySelector("h1").innerHTML  = (player1 + " WINS!");
            }

        }, 1000);
    }


/*
if (randomNum1 < randomNum2)
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI,false);
ctx.fillStyle = "blue";
ctx.fill();*/
