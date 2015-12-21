"use strict";
(function () {
	var winner = null;
  var current_turn = 1;
  var players = 0;
	var array_for_game = [null, null, null, null, null, null, null, null, null];

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
			winner = array_for_game[2];
		}else if((array_for_game[0] === array_for_game[4]) && (array_for_game[0] === array_for_game[8])){
			winner = array_for_game[0];
		}else if((array_for_game[2] === array_for_game[4]) && (array_for_game[2] === array_for_game[6])){
			winner = array_for_game[2];
		}
    if(winner === 1){
      $('.x').css({"display":"inline-block",  "animation":"bounceIn 3s"});
      $('.squares').addClass('disabled');
    }if(winner === 0){
      $('.o').css({"display":"inline-block", "animation":"bounceIn 3s"});
      $('.squares').addClass('disabled');
      
    }
	}

  $('.container').on('click', ':not(.disabled)', function(){
    var index = $(this).addClass('disabled').index('.squares');
    debugger;
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