
(function(){

var ns = Q.use("fish"), game = ns.game;

var Bullet = ns.Bullet = function(props)
{
	this.power = 0;
	this.speedX = 0;
	this.speedY = 0;
	
	Bullet.superClass.constructor.call(this, props);
	this.id = Q.UIDUtil.createUID("Bullet");
};
Q.inherit(Bullet, Q.Bitmap);

Bullet.prototype.update = function(timeInfo)
{	
	if(this.isOutOfScreen())
	{
		this.destory();
	}else
	{
		this.x += this.speedX;
		this.y -= this.speedY;	
		if(this.checkCollision()) this.destory();
	}
};

Bullet.prototype.checkCollision = function()
{	
	var fishes = game.fishManager.fishes, len = fishes.length;
	
	//resort all fishes by y axis	
	//fishes.sort(function(a, b){return b.y - a.y;});
	
	//check if any fish be hitted
	var hitted = false;
	for(var i = 0; i < len; i++)
	{
		var fish = fishes[i];
		if(this.y - this.height*0.5 > fish.y + fish.height*0.5 || 
		   this.y + this.height*0.5 < fish.y - fish.height*0.5 || 
		   this.x - this.width*0.5 > fish.x + fish.width*0.5 || 
		   this.x + this.width*0.5 < fish.x - fish.width*0.5)
		{
			continue;
		}	
		if(this.hitTestObject(fish, true))
		{
			hitted = true;
			break;
		}
	}
	if(hitted === false) return false;
	
	//release a web
	var web = new Q.Bitmap(ns.R.webs[this.power - 1]);
	web.x = this.x;
	web.y = this.y;
	web.scaleX = web.scaleY = 0.8;
	web.eventEnabled = false;
	this.parent.addChild(web);
	
	//make the web animate
	Q.Tween.to(web, {scaleX:1.0, scaleY:1.0}, {time:100, reverse:true, 
	onComplete:function(tween)
	{			
		if(tween.reversing&& web.parent) web.parent.removeChild(web);
		tween.reversing = true;
	}});
	
	//check if any fish be captured
	for(var i = 0; i < len; i++)
	{
		var fish = fishes[i];
		if(web.y - web.height*0.5 > fish.y + fish.height*0.5 || 
		   web.y + web.height*0.5 < fish.y - fish.height*0.5 || 
		   web.x - web.width*0.5 > fish.x + fish.width*0.5 || 
		   web.x + web.width*0.5 < fish.x - fish.width*0.5)
		{
			continue;
		}
		if(web.hitTestObject(fish, true) && fish.canBeCaptured(this.power - 1))
		{		
			fish.moving = false;
			fish.captured = true;
			fish.capturingCounter = game.fps >> 1;
			fish.gotoAndPlay("capture");
		}
	}
	return true;
};

Bullet.prototype.destory = function()
{
	this.parent.removeChild(this);
};

Bullet.prototype.isOutOfScreen = function()
{
	return (this.x < -50 ||
			this.x > game.width + 50 || 
			this.y < -50 || 
			this.y > game.height + 50);
};

})();