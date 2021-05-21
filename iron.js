class iron{
	constructor(x,y){
	// assign options to the rubber ball
	    var options = {
			restitution:0.8,
			friction:3,
			density:30
		}

		this.body=Bodies.rectangle(x, y, 50, 50, options);
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rotate(this.body.angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			rect(0,0,50,50);
			pop()
	}

}