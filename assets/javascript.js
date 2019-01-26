
        //press start button to start the game
        //after pressing start, one question is shown at a time
        //time ticking down from 30 second
        //once the answer is chosen, stop time clock refresh the page and reveal if correct or incorrect
        //once all question are answers, reveal the number of wins and losses, startover button to reset the game

        //create a start button

        var questionCounter= 0;
        var time =15;
        var correctGuesses=0;
        var incorrectGuesses=0;
        var clock;

       



        // // //create an on click event
      

        //question bank
        var question_bank = [

            {
                question: "What is the name of Springfield's founder? ",
                choice: ["Jebediah Springfield", "Nebuchadnezzar Springfield", "Isaac Springfield", "Zechariah Springfield"],
                answer: "Jebediah Springfield",
                image: "<img src='assets/images/jebediah_springfield.png' class='img-circle shadow'>"
            },

            {
                question: "What is Kwik-E-Mart worker Apu's last name?",
                choice: ["Nahasapeemapetilon", "Amandopolis", "Patel", "Gumble"],
                answer: "Nahasapeemapetilon",
                image: "<img src='assets/images/apu.png' class='img'>"
            },

            {
                question: "What is the name of Bart's best friend?",
                choice: ["Otto", "Jimbo", "Milhouse", "Karl"],
                answer: "Milhouse",
                image: "<img src='assets/images/millhouse.png' class='img'>"
            },

            {
                question: "Where did Homer and Marge get married?",
                choice: ["First Church of Springfield", "Divine Madness Wedding Fantasy Chapel", "Springfield Drive-Thru Marriage Parlour", "Shotgun Pete's Wedding Chapel"],
                answer: "Shotgun Pete's Wedding Chapel",
                image: "<img src='assets/images/shotgun_petes.png' class='img'>"
            },

            {
                question: "How old is Bart?",
                choice: ["24", "11", "32", "10"],
                answer: "10",
                image: "<img src='assets/images/bart.png' class='img'>"
            },

            {
                question: "What is Homer's normal weight ?",
                choice: ["269 lb", "231 lb", "255 lb", "239 lb"],
                answer: "239 lb",
                image: "<img src='assets/images/homer.jpg' class='img'>"
            }
        ];



        console.log(question_bank[0].question);

  

        function showquestion() {
            $("#gameScreen").append("<p><strong>" + question_bank[questionCounter].question + "</p><p class='choice'>" + question_bank[questionCounter].choice[0] + "</p><p class='choice'>" + question_bank[questionCounter].choice[1]+ "</p><p class='choice'>" + question_bank[questionCounter].choice[2]+ "</p><p class='choice'>" + question_bank[questionCounter].choice[3]+ "</p>" );
        }

        function win(){
            $("#gameScreen").html("<p>You got it right! <p>");
            correctGuesses++;
            var correctAnswer = question_bank[questionCounter].answer;
            $("#gameScreen").append("<p>the answer is  <strong>" + correctAnswer +"</strong></p><p>"+question_bank[questionCounter].image +"</p>");
            setTimeout(nextQuestion,2000);
            questionCounter ++;
        }

        function loss(){
            $("#gameScreen").html("<p>Nope! That's not correct!<p>");
            incorrectGuesses++;
            var correctAnswer = question_bank[questionCounter].answer;
            $("#gameScreen").append("<p>the answer is <strong>" + correctAnswer +"</strong></p>");
            setTimeout(nextQuestion,2000);
            questionCounter ++;
        }


        function userTimeout(){
            if (time===0){
                $("#gameScreen").html("<p> Sorry! Time is up!</p>");
                incorrectGuesses++;
                var correctAnswer = question_bank[questionCounter].answer;
            $("#gameScreen").append("<p>The answer is " + correctAnswer +"</p>");
            setTimeout(nextQuestion,2000);
            questionCounter ++;
            }
        }

        function endScreen(){
            $("#gameScreen").html("<p>"+"<p> You got "+correctGuesses +" right</p>"+
            "<p> You got " + incorrectGuesses + " wrong</p>")
            var startover = $("<div>");
            startover.attr("class","overagain" );
            startover.append("Play again?")
            $("#startover").append(startover);
            gameReset();
            $("#startover").click(nextQuestion);

        }
        
        function timer(){
            clock = setInterval(decrement, 1000);
            function decrement(){
                if (time<1){;''
                    clearInterval(clock);
                    userTimeout();
                }
                if (time>0){
                    time--;
                }
                $("#timer").html("<strong>"+time+"</strong>")
        }
    }
        function nextQuestion(){
            if (questionCounter<question_bank.length){
            time=15;
            $("#gameScreen").html("<p>You have <span id='timer'>"+time+"</span> seconds left!</p>");
            showquestion();
            timer();
            userTimeout();
            }
            else{
                endScreen();
            }

        }

        function gameReset(){
            questionCounter =0;
            corrrectGuesses =0;
            incorrectGuesses=0;
        
        }
            function gamestart() {
            var startBtn = $("<button>");
            startBtn.text("Click me to start the game");
            $(".start").append(startBtn);
            $(".start").html(startBtn);
        };
        
        gamestart();

        function start() {
            
            $("#gameScreen").html("<p> You have <span id='timer'>"+ time +"<span> seconds left</p>");
            $(document).on("click", ".start", function () {
                $(".start").click(nextQuestion);
                $(".start").hide();
                showquestion();
                timer();
                userTimeout();
            });
        };

        start();
        

        $(document).on("click",'.choice',(function(){
            console.log("hello");
            var userGuess= $(this).text();
            if (userGuess == question_bank[questionCounter].answer){
                clearInterval(clock);
                win();

            }
            else{
                clearInterval(clock);
                loss();
            }
        }));
      
