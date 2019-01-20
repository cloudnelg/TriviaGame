//Quiz Info Array with nested arrays//

var queries = [{
  
  question: "What was Mario's original name",
  choices: ["Jump Man", "Luigi", "Mario", "Guido"],
  answer: "Jump Man"
}, {
  question: "What was the title of the very first video game?",
  choices: ["Frogger", "Pong", "Pac-Man", "Tennis For Two"],
  answer: "Tennis For Two"
}, {
  question: "Which type of Pokémon is strong against Charmander?",
  choices: ["Mew-Two", "Ash", "Water", "Ice"],
  answer: "Water"
}, {
  question: "Who is the main character in the Splinter Cell series?",
  choices: ["Sam Fisher", "Solid Snake", "The Ninja Turtles", "Inspector Gadget"],
  answer: "Sam Fisher"
}, {
  question: "Which of the following is NOT a playable character in the Super Smash Bros series?",
  choices: ["Villager", "Cloud", "Link", "Voltron"],
  answer: "Voltron"
}, {
  question: "Which of the following isn't a real game?",
  choices: ["Spyro Bandicoot: Spinnin", "Mario Hotel", "Banjo-Kazooie", "Dikembe Mutombo's 4 1/2 weeks to save the world"],
  answer: "Spyro Bandicoot: Spinnin"
}, {
  question: "Which console came first",
  choices: ["Dreamcast", "Playstation 2", "Gamecube", "Xbox"],
  answer: "Dreamcast"
}]; 

// Testing if the nesting is working as intended //

console.log("Question:", queries[1].question)
console.log("Choice:", queries[1].choices[0])
console.log("Answer:", queries[1].answer)

//Event Handlers//

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#workComplete", function() {
  game.workComplete();
});

//Global Variables//

var holder = $("#game");
var timer;

//Object holding Entire Game Logic for easier access//

var game = {
  counter: 140,
  correct: 0,
  incorrect: 0,
 

  countdown: function() {
    game.counter--;
    $("#counter_numb").html(game.counter);
    if (game.counter === 0) {
      game.workComplete();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#container2").prepend("<h2>Time Remaining: <span id='counter_numb'>140</span> Seconds</h2>");

    $("#start").remove();

    //Iterate through query array to dynamically add questions//
    
    for (var i = 0; i < queries.length; i++) {
      holder.append("<h2>" + queries[i].question + "</h2>");
      console.log(queries[i])
    
      //Iterate through query array[i].choices to dynamically add answers//
    
    for (var j = 0; j < queries[i].choices.length; j++) {
      holder.append("<input type='radio' name='query_" + i +
      "' value='" + queries[i].choices[j] + "''>" + queries[i].choices[j]);
       console.log(queries[i].choices[j])

      }
    }
    //Create button to complete quiz//
    
    holder.append("<br>","<br>","<br>","<button id='workComplete' >Work Complete</button>");
  },

   //Correct || incorrect answer Logic//

  workComplete: function() {

  //Using Jquery .each method, iterate through each checked input with a given name; then increment proper object property//

    $.each($("input[name='query_0']:checked"), function() {
      if ($(this).val() === queries[0].answer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='query_1']:checked"), function() {
      if ($(this).val() === queries[1].answer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='query_2']:checked"), function() {
      if ($(this).val() === queries[2].answer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='query_3']:checked"), function() {
      if ($(this).val() === queries[3].answer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='query_4']:checked"), function() {
      if ($(this).val() === queries[4].answer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='query_5']:checked"), function() {
      if ($(this).val() === queries[5].answer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='query_6']:checked"), function() {
      if ($(this).val() === queries[6].answer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='query_7']:checked"), function() {
      if ($(this).val() === queries[7].answer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  //Clear timer and set page content to display results//

  result: function() {

    clearInterval(timer);

    $("#container2 h2").remove();

    holder.html("<h2>Quiz Stats...</h2>");
    holder.append("<h3>Correct Answers: " + this.correct + "</h3>");
    holder.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    holder.append("<h3>Unanswered: " + (queries.length - (this.incorrect + this.correct)) + "</h3>");
  }
};




