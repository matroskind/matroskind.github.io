"use strict";
(function () {
  ///////////////////////////variables created for further use
  ///////////////////////////
	var winner = null;
  var current_turn = 1;
  var players = 0;
	var array_for_game = [null, null, null, null, null, null, null, null, null];
  //this function is checking for winner by running through the winning combinations
	var win_checker = function(){
		
		if((array_for_game[0] === array_for_game[1]) && (array_for_game[0] === array_for_game[2])){
			winner = array_for_game[0];
		}else if((array_for_game[3] === array_for_game[4]) && (array_for_game[3] === array_for_game[5])){
			winner = array_for_game[3];
		}else if((array_for_game[6] === array_for_game[7]) && (array_for_game[6] === array_for_game[8])){
			winner = array_for_game[6];
		}else if((array_for_game[0] === array_for_game[3]) && (array_for_game[0] === array_for_game[6])){
			winner = array_for_game[0];
		}else if((array_for_game[1] === array_for_game[4]) && (array_for_game[1] === array_for_game[7])){
			winner = array_for_game[1];
		}else if((array_for_game[2] === array_for_game[5]) && (array_for_game[2] === array_for_game[8])){
			winner = array_for_game[5];
		}else if((array_for_game[0] === array_for_game[4]) && (array_for_game[0] === array_for_game[8])){
			winner = array_for_game[0];
		}else if((array_for_game[2] === array_for_game[4]) && (array_for_game[2] === array_for_game[6])){
			winner = array_for_game[2];
		}
    //this part is for animation and set other divs to pseudo class disabled
    //to prevent it from being engaged after the win
    if(winner === 1){
      $('.x').css({"display":"inline-block",  "animation":"bounceIn 3s"});
      $('.squares').addClass('disabled');
    }if(winner === 0){
      $('.o').css({"display":"inline-block", "animation":"bounceIn 3s"});
      $('.squares').addClass('disabled');

    }
	}
  //this is an event listener function that onclick adds pseudo class
  //that has a background picture attached to it also switches turns and 
  //calls a winchecker function to check whether winning conditions were met.
  $('.container').on('click', ':not(.disabled)', function(){
    var index = $(this).addClass('disabled').index('.squares');
    $(this).addClass(current_turn === 1 ? 'x' : 'o');
    
    if(current_turn === 1){
      array_for_game[index] = 1;
      current_turn -=1;
      win_checker();
    }else{
      array_for_game[index] = 0;
      current_turn+=1;
      win_checker();
    }
  });

})();