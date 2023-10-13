function id(str){
	return document.getElementById(str);
}

function play(){
	id('menu').classList.add('hidden');
}

var kitty = {x: 0, y: 0},
		heart = {x: 4, y: 4},
		score = 0;

document.addEventListener('keydown', function(e){
	if(id('player') !== null)
		id('player').id = '';
	//up
	if(e.which === 38)
		kitty.y -= kitty.y > 0 ? 1 : 0;
	//down
	if(e.which === 40)
		kitty.y += kitty.y < 4 ? 1 : 0;
	//left
	if(e.which === 37)
		kitty.x -= kitty.x > 0 ? 1 : 0;
	//right
	if(e.which === 39)
		kitty.x += kitty.x < 4 ? 1 : 0;
	console.log(kitty.y * 5 + kitty.x);
	id('grid').children[kitty.y * 5 + kitty.x].id = 'player';
	if(kitty.x === heart.x && kitty.y === heart.y){
		//woot woot!
		score ++;
		id('score').innerHTML = score;
		var x = Math.floor(Math.random() * 5),
				y = Math.floor(Math.random() * 5);
		if(x === kitty.x && y === kitty.y){
			if(Math.floor(Math.random() * 2) === 0){
				kitty.x -= kitty.x > 0 ? 1 : -1;
			}else{
				kitty.y -= kitty.y > 0 ? 1 : -1;
			}
		}
		id('grid').children[y * 5 + x].id = 'heart';
		heart.x = x;
		heart.y = y;
		if(score === 100){
			id('grid').innerHTML = '<h1 id="message">Hooray! You\'ve won!<br>This game was made for epic_kitty_lover489</h1>';
		}
	}
});