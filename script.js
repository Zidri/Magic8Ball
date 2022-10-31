//array of possible answers
var ans = ["It is certain", "Don’t count on it",
    "It is decidedly so", "Ask again later", "My reply is no",
    "Without a doubt", "My sources say no",
    "Yes definitely", "Cannot predict now", "Outlook not so good",
    "You may rely on it", "Very doubtful",
    "Most likely", "Outlook good", "Yes",
    "Signs point to yes"];

function selectAns() {
    max = ans.length;

    if (max != null) {
        //random number with min and max
        num = Math.floor(Math.random() * parseInt(max));

        //display answer
        document.getElementById("answerDisplay").innerHTML = ans[num];
        document.getElementById("answerDisplay").style.display = "block";
    }
}

function shakeBall() {
    //var for translate position
    var left = true;
    var x = -1;

    //hide answer
    document.getElementById("answerDisplay").style.display = "none";

    timer = setInterval(function () {
        if (left == true) {
            x--;
            document.getElementById("8ball").style.transform = "translateX(" + x + "px)";
            if (x == -25) {
                left = false;
            }
            else if (x == 0) {
                clearInterval(timer);
                selectAns();
            }
        }
        else if (left == false) {
            x++;
            document.getElementById("8ball").style.transform = "translateX(" + x + "px)";
            if (x == 25) {
                left = true;
            }
        }
        document.getElementById("8ball").style.transform = "translateX(" + x + "px)";

    }, 10);


}