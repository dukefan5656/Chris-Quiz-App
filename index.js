'use strict';

let score = 0;
let currentQuestion = 0;
let questions = [
  {
    description: 'Sandberg established himself as a perennial All-Star and Gold Glove candidate, making 10 consecutive All-Star appearances and winning nine consecutive Gold Gloves from 1983 to 1991. His career .989 fielding percentage was a major-league record at second base when he retired in 1997. Sandberg was elected to the National Baseball Hall of Fame in January 2005',
    picture: 'https://i.pinimg.com/originals/7b/42/8c/7b428c8091f06fb054c9479108015877.jpg',
    title: 'Who Is This Baseball Player?',
    answers: ['Ryne Sandberg', 'Cal Ripken', 'Mark Grace', 'Larry Walker'],
    correct: 0,
  },
  {
    description: "Vasyl Lomanchenko is a Ukrainian professional boxer. He has held the WBA (Super) and Ring magazine lightweight titles since May 2018, and previously the WBO featherweight and junior lightweight titles between 2014 and 2018. As of September 2018, Lomachenko is ranked as the world's best active boxer, pound for pound, by ESPN; the Boxing Writers Association of America; the Transnational Boxing Rankings Board; and The Ring.",
    picture: 'https://www.gannett-cdn.com/-mm-/fe4c290fc9ed25929447a5f0bc5d2cad2d4b2f7a/c=204-0-3400-2403/local/-/media/2017/12/14/Camarillo/Camarillo/636488570848877073-AP17344175807363.jpg?width=534&height=401&fit=crop',
    title: 'Who Is This Boxer?',
    answers: ['Wladimir Klitschko', 'Vasyl Lomachenko', 'Vitali Klitschko', 'Andreas Kotelnik'],
    correct: 1,
  },
  {
    description: "Grayson is an American professional basketball player for the Utah Jazz of the National Basketball Association (NBA). He played college basketball at Duke University. Completed his Duke career with 1,996 points to rank 12th on the Blue Devils’ career scoring list and seventh on the program’s career free throw percentage list (.834).",
    picture: 'https://www.nba.com/jazz/sites/jazz/files/gettyimages-1015668780.jpg',
    title: 'Who Is This Basketball Player?',
    answers: ['JJ Redick', 'Kyle Korver', 'Grayson Allen', 'Gordon Hayward'],
    correct: 2,
  },
  {
    description: "Eric played for the NHL from 1992 - 2007. He spent the majority of his career as a hard-hitting forward for the Philadelphia Flyers. In 2016 he was inducted into the NHL hall of fame having amassed 372 goals and 493 assists. He appeared in 6 all-star games and was the 94-95 league MVP.",
    picture: 'https://i.pinimg.com/originals/f2/64/2d/f2642dde8e198d6da6c1add42b02d0e4.jpg',
    title: 'Who Is This Hockey Player?',
    answers: ['Chris Chelios', 'Chris Pronger', 'Jeremy Roenick', 'Eric Lindros'],
    correct: 3,
  },
  {
    description:"Valentino is an Italian professional motorcycle road racer and multiple MotoGP World Champion. He is the only rider in the history of the World Championship to have won the World Championship in four different classes: 125 (1), 250 (1), 500 (1) and MotoGP (6). He has the most all-time race wins with 89 and has won seven World Championships.",
    picture: 'http://thedoctor.ru/sites/default/files/motogp-2017/0044.jpg',
    title: 'Who Is This MotoGP Rider?',
    answers: ['Andrea Dovizioso', 'Valentino Rossi', 'Mark Marquez', 'Jorge Lorenzo'],
    correct: 1,
  },
  {
    description:" Often considered one of the best players of his generation and regarded by many as one of the greatest of all time, Ronaldinho won two FIFA World Player of the Year awards and a Ballon d'Or. He was renowned for his technical skills and creativity; due to his agility, pace and dribbling ability.",
    picture: 'https://i.pinimg.com/originals/24/dd/b2/24ddb21a67c8100e705a943caf0c8c78.jpg',
    title: 'Who Is This Soccer Player?',
    answers: ['Ronaldhino', 'Ronaldo', 'Cafu', 'Roberto Carlos'],
    correct: 0,
  },
  {
    description: "Since 1980, he has served as the head men's basketball coach at Duke University, where he has led the Blue Devils to five NCAA Championships, 12 Final Fours, 12 ACC regular season titles, and 14 ACC Tournament championships. Among men's college basketball coaches, only UCLA's John Wooden, with 10, has won more NCAA Championships. He also served as the USA men's coach for the Olympics from 2008 to 2016.",
    picture: 'http://res.cloudinary.com/culturemap-com/image/upload/q_auto/ar_3:4,c_fill,g_faces:center,w_1200/v1525975794/photos/6127_original.jpg',
    title: 'Who Is This Coach?',
    answers: ['Dean Smith', 'John Calipari', 'Mike Krzyzewski', 'Jay Wright'],
    correct: 2,
  },
  {
    description: "Shaun is an American professional snowboarder, skateboarder and musician. He is a three-time Olympic gold medalist. He holds the record for the most X-Games gold medals and most Olympic gold medals by a snowboarder, and has won 10 ESPY Awards.",
    picture: 'http://media.oregonlive.com/john_canzano_impact/photo/whiteolympicsjpg-245d11c9618e48ce.jpg',
    title: 'Who Is This Snowboarder?',
    answers: ['Billy Morgan', 'Danny Kass', 'Travis Wright', 'Shaun White'],
    correct: 3,
  },
  {
    description: "Daly is known primarily for his driving distance off the tee; earning him the nickname Long John, his non-country club appearance and attitude, and his rough-and-tumble personal life. His two greatest on course accomplishments are his zero to hero victory in the 1991 PGA Championship, and his playoff victory over Costantino Rocca in the 1995 Open Championship.",
    picture: 'https://i.pinimg.com/originals/f7/3e/8e/f73e8e9c43f25ea94e5cc56bbba4af39.jpg',
    title: 'Who Is This Golfer?',
    answers: ['Ernie Els', 'John Daly', 'Jim Furyk', 'Kenny Perry'],
    correct: 1,
  },
  {
    description: "Steve is a former American football wide receiver who played 16 seasons in the National Football League (NFL), primarily with the Carolina Panthers. Smith, a five-time Pro Bowl selection and three-time All-Pro, emerged as one of the NFL's most productive wide receivers of the 21st century.",
    picture: 'http://www3.pictures.zimbio.com/gi/Carolina+Panthers+v+Tampa+Bay+Buccaneers+EQ1oyVsKdvlx.jpg',
    title: 'Who Is This Football Player?',
    answers: ['Steve Smith', 'Emmanuel Sanders', 'T.Y. Hilton', 'Desean Jackson'],
    correct: 0,
  },
];

$(document).ready(function(){

  $('.start').click(function(event){
    event.preventDefault();
    $('.start').hide();
    $('.quiz').show();
    $('.quiz #next').hide();
    showQuestion();
  });

  $('.quiz ul').on('click', 'li', function(){
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
  });

  $('.quiz ul').on('keypress', 'li', function(){
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
  });


  $('.quiz #submit').click(function(event){
    event.preventDefault();
    if($('li.selected').length){
      let guess = parseInt($('li.selected').attr('id'));
      checkAnswer(guess);
      $('.quiz #submit').hide();
      $('.quiz #next').show();
      $('.quiz .description').show();
      $('.quiz .description').addClass('slide');
      if(currentQuestion >= questions.length){
        $('.quiz #next').hide();
      }
    } else {
      alert('You Must Select An Answer Before Submitting');
    }
  });

  $('.quiz #finish').click(function(event){
    event.preventDefault();
    showSummary();
  });

  $('.summary .restart').click(function(event){
    console.log('listening');
    event.preventDefault();
    restart();
  });

  $('#next').click(function(){
    event.preventDefault();
    showQuestion();
  });
});

function showQuestion(){
  $('.quiz #next').hide();
  $('.quiz #submit').show();
  $('.quiz #finish').hide();
  let question = questions[currentQuestion];
  $('.quiz h3').text(`On question ${currentQuestion + 1} of ${questions.length}`);
  $('.quiz h2').text(question.title + ` Currently ${score} out of ${currentQuestion}`);
  $('.quiz ul').html('');
  $('.clue').css('background-image', "url('" + question.picture + "')");
  $('.clue').html(` <div class="athlete">
    
  <div class="description">
    <h2>${question.answers[question.correct]}</h2>
    <p>${question.description}</p>
  </div>
</div>`);
  $('.quiz .description').hide();
  for(var i = 0; i < question.answers.length; i++){
    $('.quiz ul').append(`
    <li role="radio" aria-label="option ${i} of four" tabindex="0" id="${i}">${question.answers[i]}</li>
    `);
  }
}

function checkAnswer(guess){
  let question = questions[currentQuestion];
  if(question.correct === guess){
    $('.selected').addClass('correct');
    score++;
  } else{
    $('.selected').addClass('incorrect');
  }
  currentQuestion++;
  if(currentQuestion == questions.length){
    $('.quiz #finish').show();
  } 
}

function showSummary(){
  $('.quiz').hide();
  $('.summary').show();
  $('.summary p').text(`Congrats! You scored ${score} out of ${questions.length}`);
}

function restart(){
  $('.summary').hide();
  $('.quiz').show();
  score = 0;
  currentQuestion = 0;
  showQuestion();
}