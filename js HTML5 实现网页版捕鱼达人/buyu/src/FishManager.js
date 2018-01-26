
(function(){

var ns = Q.use("fish"), game = ns.game;

var FishManager = ns.FishManager = function(container)
{	
	this.fishPool = [];
	this.poolSize = game.params.num || 100;	
	this.minNumFishScreen = this.poolSize >> 1;
	this.maxNumFishScreen = this.poolSize;
	this.enabled = true;

	this.container = container;
	this.fishes = [];	
	this.makeCounter = game.fps * 2;
	
	this.initPool();
};

FishManager.prototype.initPool = function()
{
	for(var i = 0; i < this.poolSize; i++)
	{
		var fish = new ns.Fish(ns.R.fishTypes[1]);
		fish.getDrawable(game.stage.context);
		this.fishPool[i] = fish;
	}
};

FishManager.prototype.update = function()
{	
	if(!this.enabled) return;

	for(var i = 0; i < this.fishes.length; i++)
	{
		var fish = this.fishes[i];
		if(fish.captured)
		{
			this.fishes.splice(i, 1);			
			i--;
		}else if(fish.isOutOfScreen())
		{			
			if(fish.hasShown || fish.changeDirCounter < -game.fps*10)
			{
				this.fishes.splice(i, 1);
				this.fishPool.push(fish);
				fish.parent.removeChild(fish);
				i--;
			}
		}else if(!fish.hasShown)
		{
			fish.hasShown = true;
		}
	}
	
	if(--this.makeCounter <= 0)
	{
		this.makeCounter = this.fishes.length < this.minNumFishScreen ? game.fps*2 : game.fps*3;
		this.makeFish();
	}
};

FishManager.prototype.makeFish = function()
{	
	if(this.fishes.length >= this.poolSize) return;	
	
	//random fish type
	var len = ns.R.fishTypes.length;
	var chance = Math.random() * len >> 0;
	var index = Math.random() * chance + 1 >> 0;
	var type = ns.R.fishTypes[index];
	var num = Math.random() * type.mixin.maxNumGroup + 1 >> 0;	
	if(num > this.fishPool.length) num = this.fishPool.length;
	if(num <= 0) return;
	
	//initialize fish properties
	var group = this.fishPool.splice(0, num), cy = game.height >> 1;
	var typeWidth = type.frames[0].rect[2], typeHeight = type.frames[0].rect[3];
	var sx = Math.random() > 0.5 ? -typeWidth : game.width + typeWidth;
	var sy = Math.random()* 200 + (game.height >> 1) - 100 >> 0;
	var speed = Math.random()*(type.mixin.maxSpeed - type.mixin.minSpeed) + type.mixin.minSpeed;
	var degree = (Math.random() * 20 - 10 >> 0);
	if(sx > 0) degree += 180;
	
	//make fish alive
	for(var i = 0; i < num; i++)
	{
		var fish = group[i];
		fish.setType(type);
		fish.moving = true;
		fish.canTurning = false;
		fish.hasShown = false;
		fish.captured = false;
		fish.speed = speed;
		fish.changeDirection(degree);
		this.fishes.push(fish);
		this.container.addChild(fish);
	}
	ns.FishGroup.setRandomPatten(group, sx, sy);
};

})();