class Roof{
    constructor(x,y,h,w){
        var options2={
            isStatic:true
    }
    this.body = Bodies.rectangle(x, y, h,w, options2);
    this.x=x,
    this.y=y,
    this.w=w,
    this.h=h
    World.add(world, this.body);
    }
    display(){
       rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y, this.w,this.h);
      }
}