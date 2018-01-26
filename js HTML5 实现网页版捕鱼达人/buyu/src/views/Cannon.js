
(function(){

var ns = Q.use("fish");

var Cannon = ns.Cannon = function(props)
{
	this.power = 0;
	
	Cannon.superClass.constructor.call(this, props);
	this.stop();
};
Q.inherit(Cannon, Q.MovieClip);

Cannon.prototype.setPower = function(power, increase)
{	
	if(increase) power += this.power;
	power = power > 7 ? 1 : power < 1 ? 7 : power;	
	if(this.power == power) return;
	
	this.power = power;
	this.setType(ns.R.cannonTypes[power]);
};

Cannon.prototype.setType = function(type)
{
	Q.merge(this, type, true);
	Q.merge(this, type.mixin, false);
	
	this.setDrawable(type.image);
	this._frames.length = 0;
	this.addFrame(type.frames);
	this.gotoAndStop(0);
};

Cannon.prototype.fire = function(degree)
{
	this.rotation = degree;
	this.gotoAndPlay(0);
};

})();