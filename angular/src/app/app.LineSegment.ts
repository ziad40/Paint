export class LineSegment{
    type:string="LineSegment";
    position1:any=[2];
    position2:any=[2]; 
    color:any="Stroke";
    draw() {
      let canvas = <HTMLCanvasElement>document.querySelector('canvas');
      if(canvas.getContext){
        let xposition=0;
        let yposition=0;
        var counter=0;
          let abc = (e: { clientX: number; clientY: number; }) =>{
          let rect = canvas.getBoundingClientRect();
           xposition=e.clientX-rect.left;
           yposition=e.clientY-rect.top;
           let ctx =canvas.getContext("2d")as CanvasRenderingContext2D ;

           if(counter==0){ctx.beginPath(); ctx.moveTo(xposition*(300/1000),yposition*(150/500)); 
            this.position1=[xposition*(300/1000),yposition*(150/500)];  }

           if(counter==1){ctx.lineTo(xposition*(300/1000),yposition*(150/500));ctx.stroke();  
            this.position2=[xposition*(300/1000),yposition*(150/500)];  
            canvas.removeEventListener('mousedown',abc);
            counter=0;}
           counter++;  
          };
          canvas.addEventListener('mousedown', abc); 
        
      } }
      SetColor(C:string){
        this.color=C;
      }

      redraw(){
        let canvas = <HTMLCanvasElement>document.querySelector('canvas');
        if(canvas.getContext){
          console.log("redraw");
          let ctx =canvas.getContext("2d")as CanvasRenderingContext2D ;
          if(this.color=="Stroke"){
          ctx.beginPath(); ctx.moveTo(this.position1[0],this.position1[1]);
          ctx.lineTo(this.position2[0],this.position2[1]);ctx.stroke();          
          }
          else{
            ctx.strokeStyle=this.color;
            ctx.beginPath(); ctx.moveTo(this.position1[0],this.position1[1]);
            ctx.lineTo(this.position2[0],this.position2[1]);ctx.stroke();}
            ctx.strokeStyle="black";
        }
      }
    
    }
