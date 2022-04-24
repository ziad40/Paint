export class circle{
    type:string="circle";
    radius:any;
    position:any=[2]; //Center
    color:any="Stroke";
     draw() {
      let canvas = <HTMLCanvasElement>document.querySelector('canvas');
      if(canvas.getContext){
  
        var x = prompt("insert Radius of Circle");
        var x1 :number = parseFloat(String(x));
        while(isNaN(x1)||x1<=0){
          x =  prompt("insert Radius of Circle");
          x1 = parseFloat(String(x));
         }
        this.radius=x1;              /////////////////////////////////////////////////
        let xposition=0;
        let yposition=0;
          let abc = (e: { clientX: number; clientY: number; }) =>{
          let rect = canvas.getBoundingClientRect();
  
           xposition=e.clientX-rect.left;
           yposition=e.clientY-rect.top;
           let ctx =canvas.getContext("2d")as CanvasRenderingContext2D ;
            ctx.beginPath();
            ctx.arc(xposition*(300/1000),yposition*(150/500),this.radius,0,Math.PI*2) ;//x, y, Radias, Start angle, End angle 
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
          if(this.color=="Stroke"){ ctx.beginPath();
            ctx.arc(this.position[0],this.position[1],this.radius,0,Math.PI*2) ;//x, y, Radias, Start angle, End angle 
            ctx.stroke(); }
            else{
              ctx.fillStyle=this.color;
              ctx.beginPath();
              ctx.arc(this.position[0],this.position[1],this.radius,0,Math.PI*2);
              ctx.fill();
            }
          
        }
      }
    }