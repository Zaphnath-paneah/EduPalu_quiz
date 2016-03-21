// shuffle questions
var questions_order = shuffle_index(questions);

// ask all questions if 
// questions_nb is not defined
if (!questions_nb){
    questions_nb=questions.length;
}

// maximum score is the sum of all time
var score_max = 0;

var tempo;
var score = 0;


function shuffle_index(a){
    var temp_array = new Array();
    var len = a.length;
    // fill table
    for (idx=0; idx<len; idx++) {
        temp_array.push(idx);
    }
    // shuffle table
    for (x=0; x<len; x++) {
        var i = Math.floor(len * Math.random());
        var j = Math.floor(len * Math.random());
        var t = temp_array[i];
        temp_array[i] = temp_array[j];
        temp_array[j] = t;
    }
    return temp_array;
}

 
function start(){
    $("#score_value").html(score);
	question_idx = questions_order.pop();
    questions_count = 1;
	ask_question(question_idx);
}

function finish(){
    $()
	$("#comment_1").html("<p>Le jeu est termin&eacute; !</p>");

    var content = "<input type='button' class='btn btn-primary' value='Rejouer' onclick='window.location.reload();' />";
    content += "&nbsp;&nbsp;";
    content += "<a href='index.html' class='btn btn-primary'>Quitter</a>"
    $("#next-replay").html(content);
    
    perf = score / score_max * 100;
    if (perf>=0 && perf<50){
        msg = "Essaie de rejouer. Tu vas certainement t'am&eacute;liorer";
    }
    if (perf>=50 && perf<=80){
        msg = "Tu as fait un bon score mais tu peux sans doute faire mieux. R&eacute;essaie.";
    }
    if (perf>=80 ){
        msg = "Bravo. Tu connais beaucoup de choses sur le paludisme.";
    }	
    $("#comment_2").html(msg);
}


function ask_question(){
    // clean previous comment (if any)
    $("#comment_1").html("");
    $("#comment_2").html("");
    $("#button_next").remove();
    
	// no more question
    if(questions_count > questions_nb){
        finish();
        return false;
    }
    // get all data related to a question
    q_data = questions[ question_idx ]
    // update question number
    $("#question_nb_value").html(questions_count);
    // update question text
    $("#question_text").html(q_data.text);
    // shuffle answers
    answers_shuffled = shuffle_index(q_data.answers)
    // write answers
	var answers_content="";
	answers_content+="<form id='frm' action='#'>";
	for(var i=0; i<q_data.answers.length; i++){
        var answer_idx = answers_shuffled.pop();
        answers_content += "<div class='answer'><input type='button' class='btn-answer btn btn-primary'";
        answers_content += " value=' " + q_data.answers[answer_idx].text +" '"; 
        answers_content += "onclick='corriger("+question_idx+","+answer_idx+");' /></div>";

    }
	answers_content+="<\/form>";
	$("#answers").html(answers_content);
    
    // update maximum score
    score_max += q_data.time;
    // update question index
    question_idx = questions_order.pop();
    // update question count
    questions_count ++;
    // update countdown
    sec=parseInt(q_data.time)+1;
    rebours();
    // update score
    $("#question_score_value").html(score);
}

function rebours(){
	sec--;
	if(sec<10){sec="0"+sec;}//mettre un zéro avant l'unité
	document.getElementById("question_timer_value").innerHTML = sec;
	if(sec>0){tempo=setTimeout('rebours()',1000);}
	if(sec==0){trop_tard();return false;}
}


function corriger(q_idx, a_idx){
    var answer = questions[q_idx].answers[a_idx];
    // stop countdown
    clearTimeout(tempo);

    // desactivate answers buttons
    $(".btn-answer").attr("onclick", "#");
 
    // update score
	if(answer.correct==true){
        score = score + parseInt(sec);
	}
    $("#question_score_value").html(score);
    
    // display comment
    add_comment(answer.correct, answer.comment);
    add_button_next(question_idx);
}


function trop_tard(){
    // desactivate answers buttons
    $(".btn-answer").attr("onclick", "#");
    
    $("#comment_1").html("<div class='wrong'>Le temps imparti est &eacute;coul&eacute; !<\/div>");
    if(question_idx+1==question_nb){
        fini();
        return false;
    }
    add_button_next(question_idx+1);
    $("#question_score_value").html(score);
}


function add_button_next(idx){
    var content = "<input type='button' class='btn btn-primary' value='Continuer' onclick='ask_question("+(idx)+");' />";
    $("#next-replay").html(content);
}

function add_comment(correct, comment){
    var com_text = "";
    if (correct == true) {
        com_text = "<div class='correct'>Bravo. Bonne r&eacute;ponse !<\/div>";
    } else {
        com_text = "<div class='wrong'>Mauvaise r&eacute;ponse.<\/div>";
    }
    $("#comment_1").html(com_text);
    $("#comment_2").html(comment);
}


