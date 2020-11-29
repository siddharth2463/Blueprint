class Ground{
    constructor(x,y,w,h){
        var boptions = {
            isStatic:true
            
        }
        this.w= w;
        this.h=h;
       this.body=Bodies.rectangle(x,y,w,h,boptions);
       World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        fill("green")
        rectMode(CENTER)
        rect(0,0,this.w,this.h);
        pop();
    }
}        