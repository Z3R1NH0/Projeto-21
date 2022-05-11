class Ground{

    constructor (x,y,w,h){
     var options = {
            isStatic: true
        }

     this.w = w;
     this.h = h;

     this.body = Bodies.rectangle(x,y,w,h, options);
     World.add (world, this.body);
    }

    display (){
        push ();

        strokeWeight(2);
        stroke(250);
        fill(127);

        rect(this.body.position.x,this.body.position.y,this.w,this.h);

        pop ();
    }
}




