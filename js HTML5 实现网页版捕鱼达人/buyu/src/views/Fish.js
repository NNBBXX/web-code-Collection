
(function(){

var ns = Q.use("fish"), game = ns.game;

var Fish = ns.Fish = function(type)
{
	this.type = type;
	this.speed = 0.5;
	this.moving = true;
	this.canTurning = false;
	this.hasShown = false;
	this.captured = false;
	
	Fish.superClass.constructor.call(this, type);
	this.id = Q.UIDUtil.createUID("Fish");
};
Q.inherit(Fish, Q.MovieClip);

Fish.prototype.init = function(props)
{
	this.changeDirection(this.rotation);
};

Fish.prototype.setType = function(type)
{
	Q.merge(this, type, true);
	Q.merge(this, type.mixin, false);
	
	this.setDrawable(type.image);
	this._frames.length = 0;
	this.addFrame(type.frames);
	this.gotoAndPlay(0);
};

Fish.prototype.changeDirection = function(dir)
{
	if(dir != undefined)
	{
		this.setDirection(dir);
	}else
	{		
		var chance = Math.random() > 0.80;
	    if(chance)
	    {
	    	var dir = Math.random() > 0.5 ? 1 : -1;	    	
	    	var degree = Math.random()*10 + 20 >> 0;
	    	this._destRotation = this.rotation + degree * dir >> 0;
	    }
	}
	
	var fps = game.fps, min = fps * 5, max = fps * 10;
	this.changeDirCounter = Math.random()*(max - min + 1) + min >> 1;
};

Fish.prototype.setDirection = function(dir)
{
	if(this.rotation == dir && this.speedX != undefined) return;
	
	if(dir.degree == undefined)
	{
		var radian = dir * Q.DEG_TO_RAD;
		dir = {degree:dir, sin:Math.sin(radian), cos:Math.cos(radian)};		
	}
	
	this.rotation = dir.degree % 360;
	this.speedX = this.speed * dir.cos;
	this.speedY = this.speed * dir.sin;
};

Fish.prototype.canBeCaptured = function(level)
{
	return this.captureRate * (1 + level*0.05) > Math.random();
};

Fish.prototype.update = function()
{
    //be captured
    if(this.captured)
    {
    	if(--this.capturingCounter <= 0)
		{
			//coin animation
			var type = this.coin >= 10 ? ns.R.coinAni2 : ns.R.coinAni1;
			var coin = new Q.MovieClip(type);
			coin.x = this.x;
			coin.y = this.y;
			this.parent.addChild(coin);
			
			//coin count number
			var value = "+" + this.coin.toString();
			var num = new ns.Num({id:"coinCount", src:ns.R.coinText, max:value.length, gap:3, scaleX:0.8, scaleY:0.8});
			num.x = this.x;
			num.y = this.y;
			num.setValue(value);
			this.parent.addChild(num);
			
			Q.Tween.to(num, {y:num.y - 50}, {time:800, onComplete:function(tween)
			{
				tween.target.parent.removeChild(tween.target);
			}});
			
			var tx = game.bottom.x + 100, ty = game.height;
			Q.Tween.to(coin, {x:tx, y:ty}, {time:800, onComplete:function(tween)
			{
				tween.target.parent.removeChild(tween.target);
			}});
			
			//remove the fish to fish pool
			this.parent.removeChild(this);
			game.player.captureFish(this);
			game.fishManager.fishPool.push(this);
		}
    	return;
    }
    
    //move ahead
    if(this.moving)
    {
    	this.x += this.speedX;
		this.y += this.speedY;
    }
    
    //change direction
    if(this._destRotation != null)
    {
    	var delta = this._destRotation - this.rotation;    	
    	var step = 0.1, realStep = delta > 0 ? step : -step;
    	var r = this.rotation + realStep;
    	
    	if(delta == 0 ||
    	   (realStep > 0 && r >= this._destRotation) || 
    	   (realStep < 0 && r <= this._destRotation))
    	{
    		this.setDirection(this._destRotation);
    		this._destRotation = null;
    	}else
    	{
    		this.setDirection(r);
    	}
    }else if(--this.changeDirCounter <= 0 && this.canTurning)
    {
    	this.changeDirection();
    }  
};

Fish.prototype.isOutOfScreen = function()
{
	if(this.x < -this.width ||
	   this.x > game.width + this.width ||
	   this.y < -this.height ||
	   this.y > game.height + this.height)
	{
		return true;
	}else if(this.x > 100 && this.x < game.width - 100 && this.y > 100 && this.y < game.height - 100)
	{
		this.canTurning = true;
	}
	return false;
};

})();