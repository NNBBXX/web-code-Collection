
(function(){

var ns = Q.use("fish");

var Utils = ns.Utils = { };

Utils.calcDirection = function(p1, p2)
{
	var degree;
	if(p1.x == p2.x)
	{		
		var radian = p2.y > p1.y ? (Math.PI / 2) : (-Math.PI / 2);
		degree = radian * Q.RAD_TO_DEG;
	}else
	{
		var k = (p2.y - p1.y) / (p2.x - p1.x);
		var b = p2.y - k * p2.x;
		var radian = Math.atan(1 / k);
		
		degree = radian * Q.RAD_TO_DEG;
		
		if(p2.y < p1.y)
		{
			if(p2.x < p1.x) degree += 180;
		}else
		{
			degree = 90 - degree;
		}
	}
	
	var sin = Math.sin(degree * Q.DEG_TO_RAD);
	var cos = Math.cos(degree * Q.DEG_TO_RAD);	
	return {degree:degree, sin:sin, cos:cos};
};

})();