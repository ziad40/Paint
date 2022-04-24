export class ellipse{
    type:string="ellipse";
    Xradius:any;
    Yradius:any;
    position:any=[2]; //Center
    color:any="Stroke";
     draw() {
      let canvas = <HTMLCanvasElement>document.querySelector('canvas');
      if(canvas.getContext){
  
        var x = prompt("insert X-Radius of Ellipse");
        var y = prompt("insert Y-Radius of Ellipse"); 
        var x1 :number = parseFloat(String(x));
        var y1 :number = parseFloat(String(y));
        while(isNaN(x1)||x1<=0||isNaN(y1)||y1<=0){
          x = prompt("insert X-Radius of Ellipse");
          y = prompt("insert Y-Radius of Ellipse");
          x1 = parseFloat(String(x));
          y1 = parseFloat(String(y));
          }
        this.Xradius=x1;              /////////////////////////////////////////////////
        this.Yradius=y1;              /////////////////////////////////////////////////
        let xposition=0;
        let yposition=0;
          let abc = (e: { clientX: number; clientY: number; }) =>{
          let rect = canvas.getBoundingClientRect();
           xposition=e.clientX-rect.left;
           yposition=e.clientY-rect.top;
           let ctx =canvas.getContext("2d")as CanvasRenderingContext2D ;
            ctx.beginPath();
            ctx.ellipse(xposition*(300/1000),yposition*(150/500),x1,y1,0,0,Math.PI*2) ;//x, y, X-Radius, Y-Radius 
            ctx.stroke();
            canvas.removeEventListener('mousedown',abc); 
            this.position=[xposition*(300/1000),yposition*(150/500)];
            console.log(this.position);  
          };
          
          canvas.addEventListener('mousedown', abc); 
        }
      }
      SetColor(C:string){
        this.color=C;
      }

      redraw(){
        let canvas = <HTMLCanvasElement>document.querySelector('canvas');
        if(canvas.getContext){
          console.log("redraw");
          let ctx =canvas.getContext("2d")as CanvasRenderingContext2D ;
          if(this.color=="Stroke"){
          ctx.beginPath();
          ctx.ellipse(this.position[0],this.position[1],this.Xradius,this.Yradius,0,0,Math.PI*2) ;//x, y, X-Radius, Y-Radius 
          ctx.stroke();}
          else{
            ctx.fillStyle = this.color;   
            ctx.beginPath();
            ctx.ellipse(this.position[0],this.position[1],this.Xradius,this.Yradius,0,0,Math.PI*2) ;//x, y, X-Radius, Y-Radius 
            ctx.fill();}
             }
          }
       }