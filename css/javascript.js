
        //press start button to start the game
        //after pressing start, one question is shown at a time
        //time ticking down from 30 second
        //once the answer is chosen, stop time clock refresh the page and reveal if correct or incorrect
        //once all question are answers, reveal the number of wins and losses, startover button to reset the game

        //create a start button

        var QuestionCounter= 0;
        var time =15;
        var correctGuesses=0;
        var incorrectedGuesses=0;
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
                image: "<img src='assets/images/apu.png' class='img-circle shadow'>"
            },

            {
                question: "What is the name of Bart's best friend?",
                choice: ["Otto", "Jimbo", "Milhouse", "Karl"],
                answer: "Milhouse",
                image: "<img src='assets/images/millhouse.png' class='img-circle shadow'>"
            },

            {
                question: "Where did Homer and Marge get married?",
                choice: ["First Church of Springfield", "Divine Madness Wedding Fantasy Chapel", "Springfield Drive-Thru Marriage Parlour", "Shotgun Pete's Wedding Chapel"],
                answer: "Shotgun Pete's Wedding Chapel",
                image: "<img src='assets/images/shotgun_petes.png' class='img-circle shadow'>"
            },

            {
                question: "How old is Bart?",
                choice: ["24", "11", "32", "10"],
                answer: "10",
                image: "<img src='assets/images/bart.png' class='img-circle shadow'>"
            },

            {
                question: "What is Homer's normal weight ?",
                choice: ["269 lb", "231 lb", "255 lb", "239 lb"],
                answer: "239 lb",
                image: "<img src='assets/images/homer.jpg' class='img-circle shadow'>"
            }
        ];



        console.log(question_bank[0].question);

    
        function showquestion() {
            $("#gameScreen").append("<p><strong>" + question_bank[questionConter].question + "</p><p class='choice'>" + question_bank[questionCouter].choice[0] + "</p><p class='choice'>" + question_bank[questionCouter].choice[1]+ "</p><p class='choice'>" + question_bank[questionCouter].choice[2]+ "</p><p class='choice'>" + question_bank[questionCouter].choice[3]+ "</p><p class='choice'>" );
        }
        function win(){
            $("#gameScreen").html("<p>you got it right <p>");
            correctGuesses++;
            var correctAnswer = question_bank[questionCounter].answer;
            $("#gameScreen").append("<p>the answer is" + correctAnswer +"</p><p>"+question_bank[questionCounter].image +"</p>");
            setTimeout(nextQuestion,4000);
            questionCounter ++;


        }
        function loss(){
            $("#gameScreen").html("<p>Nope! that's not correct<p>");
            IncorrectGuesses++;
            var correctAnswer = question_bank[questionCounter].answer;
            $("#gameScreen").append("<p>the answer is" + correctAnswer +"</p>");
            setTimeout(nextQuestion,4000);
            questionCounter ++;
        }


        function userTimeout(){
            if (time===0){
                $("#gameScreen").html("<p> Sorry! Time is up</p>");
                IncorrectGuesses++;
                var correctAnswer = question_bank[questionCounter].answer;
            $("#gameScreen").append("<p>the answer is" + correctAnswer +"</p>");
            setTimeout(nextQuestion,4000);
            questionCounter ++;
            }
        }

        function endScreen(){
            $("#gameScreen").html("<p>"+"<p> you got "+correctedGuesses +" right</p>"+
            "<p> you got " + incorrectedGuesses + " wrong</p>")
            var startover = "<div>";
            startover.attr("class","startover" );
            gameReset();
            $(".startover").click(nexQuestion);

        }
        
        function timer(){
            clock = setInterval(decrement, 1000);
            function decrement(){
                if (time<1){
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
            if (questionCouter<question.length){
            time=30;
            $("#gameScreen").html("<p> you have<span id='timer'>"+time+"</span> seconds left!</p>");
            questionContent();
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
            incorrectedGuesses=0;
        
        }
            function gamestart() {
            var startBtn = $("<button>");
            startBtn.text("Click me to start the game");
            startBtn.addClass("start");
            startBtn.attr('class', "start");
            $(".start").append(startBtn);
        };
        
        gamestart();

        function start() {
            
            $(".gameScreen").html("<p> you have <span id='timer'"+ time +"<span> seconds left</p>");
            $(document).on("click", ".start", function () {
                $(".start").hide();

            });
            questioncontent();
                timer();
                userTimeout();
        }

        $(".start").click(nextquestion);

        $("#gameScreen").on("click",".choice",(function(){
            var userGuess= $(this).text();
            if (userGuess == questions[questionCounter].answer){
                clearinterval(clock);
                win();

            }
            else{
                clearInterval(clock);
                loss();
            }
        }
