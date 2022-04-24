export class rectangle{
    type:string="rectangle";
    width:any;
    height:any;
    position:any=[2];
    color:any="Stroke";
     draw() {
      let canvas = <HTMLCanvasElement>document.querySelector('canvas');
      if(canvas.getContext){
        var x = prompt("insert width of rectangle");
        var y = prompt("insert height of rectangle");
        var x1 :number = parseFloat(String(x));
        var y1 :number = parseFloat(String(y));
        while(isNaN(x1)||x1<=0||isNaN(y1)||y1<=0){
        x = prompt("insert width of rectangle");
        y = prompt("insert height of rectangle");
        x1 = parseFloat(String(x));
        y1 = parseFloat(String(y));
        }
         /////////////////////////////////////////////////
         this.width=x1;
        this.height=y1;              ///////////////////////////////////////////////
        let xposition=0;
        let yposition=0;
          let abc = (e: { clientX: number; clientY: number; }) =>{
          let rect = canvas.getBoundingClientRect();
  
           xposition=e.clientX-rect.left;
           yposition=e.clientY-rect.top;
           let ctx =canvas.getContext("2d")as CanvasRenderingContext2D ;
           ctx.strokeRect(xposition*(300/1000),yposition*(150/500),x1,y1);
          
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
          if(this.color=="Stroke"){ctx.strokeRect(this.position[0],this.position[1],this.width,this.height);}
          else{
          ctx.fillStyle=this.color;
          ctx.fillRect(this.position[0],this.position[1],this.width,this.height); 
          }
        }
      }

    }