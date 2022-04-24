import { Component } from '@angular/core';
import { LineSegment } from './app.LineSegment';
import { rectangle } from './app.rectangle';
import { square } from './app.square';
import { Triangle } from './app.Triangle';
import { circle } from './app.circle';
import { ellipse } from './app.ellipse';
//import { Shape } from './app.Shape';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
//import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'paint';
    
   shapes:any[]=[];
   position:any=[];
   Shape:any;
   Index:any=-1;
   Closed:any=true;
   resp:any;
   REDOcount:any=0;
   REDOshapes:Array<any>=[];
   UNDO=false;
   REDO=true;
   getresp:string[]=[];
   UNDOshapes:Array<any>=[];
   constructor(private http:HttpClient){}
   send(yy:string[],xx:string){
    this.http.get('http://localhost:8080/course/output',{
      responseType:'text',
      params:{
        parameters:yy,
        filename:xx
      },
     observe:'response'
    }
    ).subscribe (response=>{
      this.resp=response.body;
      this.getresp=this.resp.split(",",200);
      // console.log(this.resp);
    })
   }
   //////////////////////////////////////
   //   Save Methode    //
   save(){
    let data:string[]=[];
    var x= prompt("Insert Project name");
    for(var i=0;i<this.shapes.length;i++){

      if(this.shapes[i].type=="rectangle"){
      data.push(this.shapes[i].type);
      console.log(this.shapes[i].type);
      data.push(this.shapes[i].color);
      console.log(this.shapes[i].color);
      data.push((this.shapes[i].width).toString() );
      data.push(( this.shapes[i].height).toString());
      data.push(( this.shapes[i].position[0]).toString());
      data.push(( this.shapes[i].position[1]).toString());

    }
      else if(this.shapes[i].type=="square"){
      data.push(this.shapes[i].type);
      data.push(this.shapes[i].color);
      data.push(( this.shapes[i].side).toString());
      data.push(( this.shapes[i].position[0]).toString());
      data.push(( this.shapes[i].position[1]).toString());
      
    }
      else if(this.shapes[i].type=="circle"){
        data.push(this.shapes[i].type);
        data.push(this.shapes[i].color);
        data.push(( this.shapes[i].radius).toString());
        data.push(( this.shapes[i].position[0]).toString());
        data.push(( this.shapes[i].position[1]).toString());
        
      }
      else if(this.shapes[i].type=="ellipse"){
          data.push(this.shapes[i].type);
          data.push(this.shapes[i].color);
          data.push(( this.shapes[i].Xradius).toString());
          data.push(( this.shapes[i].Yradius).toString());
          data.push(( this.shapes[i].position[0]).toString());
          data.push(( this.shapes[i].position[1]).toString());
          
        } 
       else if(this.shapes[i].type=="LineSegment"){
            data.push(this.shapes[i].type);
            data.push(this.shapes[i].color);
            data.push(( this.shapes[i].position1[0]).toString());
            data.push(( this.shapes[i].position1[1]).toString());
            data.push(( this.shapes[i].position2[0]).toString());
            data.push(( this.shapes[i].position2[1]).toString());
             
          } 
          else if(this.shapes[i].type=="Triangle"){
              data.push(this.shapes[i].type);
              data.push(this.shapes[i].color);
              data.push(( this.shapes[i].position1[0]).toString());
              data.push(( this.shapes[i].position1[1]).toString());
              data.push(( this.shapes[i].position2[0]).toString());
              data.push(( this.shapes[i].position2[1]).toString());
              data.push(( this.shapes[i].position3[0]).toString());
              data.push(( this.shapes[i].position3[1]).toString());           

            } 
          }
    this.send(data,String(x));
        }
      //    Draw loading    //      
      drawload(){
        console.log("in draw load");
        console.log(this.getresp.length);
        for(var i=0;i<this.getresp.length;i++){
          console.log("in draw load for loop");
          console.log(this.getresp[i]);
          if(this.getresp[i]=="rectagle"){
            let r=new rectangle();
            console.log("in if");
            r.width=parseFloat(this.getresp[i+1]);
            console.log(r.width);
            r.height=parseFloat(this.getresp[i+2]);
            console.log(r.height);
            r.position[0]=parseFloat(this.getresp[i+3]);
            console.log(r.position[0]);
            r.position[1]=parseFloat(this.getresp[i+4]);
            console.log(r.position[1]);
            r.color=this.getresp[i+5];
            console.log(r.color);
            i=i+5;
            r.redraw();
            this.shapes.push(r);
          }
          else  if(this.getresp[i+2]=="square"){
            let r=new square();
            console.log("in if");
            r.side=parseFloat(this.getresp[i+3]);
            console.log(r.side);
            r.position[0]=parseFloat(this.getresp[i]);
            console.log(r.position[0]);
            r.position[1]=parseFloat(this.getresp[i+1]);
            console.log(r.position[1]);
            r.color=this.getresp[i+4];
            console.log(r.color);
            i=i+4;
            r.redraw();
            this.shapes.push(r);}
          
            else  if(this.getresp[i]=="circle"){
              let r=new circle();
              console.log("in if");
              r.radius=parseFloat(this.getresp[i+1]);
              console.log(r.radius);
              r.position[0]=parseFloat(this.getresp[i+2]);
              console.log(r.position[0]);
              r.position[1]=parseFloat(this.getresp[i+3]);
              console.log(r.position[1]);
              r.color=this.getresp[i+4];
              console.log(r.color);
              i=i+4;
              r.redraw();
              this.shapes.push(r);}

            else if(this.getresp[i]=="ellipse"){
                let r=new ellipse();
                console.log("in if");
                r.Xradius=parseFloat(this.getresp[i+1]);
                console.log(r.Xradius);
                r.Yradius=parseFloat(this.getresp[i+2]);
                console.log(r.Yradius);
                r.position[0]=parseFloat(this.getresp[i+3]);
                console.log(r.position[0]);
                r.position[1]=parseFloat(this.getresp[i+4]);
                console.log(r.position[1]);
                r.color=this.getresp[i+5];
                console.log(r.color);
                i=i+5;
                r.redraw();
                this.shapes.push(r);
              }
              
              else if(this.getresp[i]=="LieSegmet"){
                let r=new LineSegment();
                console.log("in if");
                r.position1[0]=parseFloat(this.getresp[i+1]);
                console.log(r.position1);
                r.position1[1]=parseFloat(this.getresp[i+2]);
                console.log(r.position2);
                r.position2[0]=parseFloat(this.getresp[i+3]);
                console.log(r.position2[0]);
                r.position2[1]=parseFloat(this.getresp[i+4]);
                console.log(r.position2[1]);
                r.color=this.getresp[i+5];
                console.log(r.color);
                i=i+5;
                r.redraw();
                this.shapes.push(r);
              }
              
              else if(this.getresp[i]=="Triagle"){
                let r=new Triangle();
                console.log("in if");
                r.position1[0]=parseFloat(this.getresp[i+1]);
                console.log(r.position1);
                r.position1[1]=parseFloat(this.getresp[i+2]);
                console.log(r.position2);
                r.position2[0]=parseFloat(this.getresp[i+3]);
                console.log(r.position2[0]);
                r.position2[1]=parseFloat(this.getresp[i+4]);
                console.log(r.position2[1]);
                r.position3[0]=parseFloat(this.getresp[i+5]);
                console.log(r.position2[0]);
                r.position3[1]=parseFloat(this.getresp[i+6]);
                console.log(r.position2[1]);
                r.color=this.getresp[i+7];
                console.log(r.color);
                i=i+7;
                r.redraw();
                this.shapes.push(r);
              }
            }
        }  
      //   Load Methode    //
    load(){
      var name=prompt("enter file name you want to reload");
      let data2:string[]=[];
      data2.push("load");
      this.send(data2,String(name));
      console.log("after response");
      console.log(this.resp);
    }
    //   ReDraw Methode    //
    ReDraw(){
      this.drawload();
    }
   ////////////////////////////////////
 
   /////////////////////////////////////
   //   Rectangle Methode    //
   Rectangle(){
    if( !this.Closed){alert("Finish your event Firist  !! ");return;}
    this.Closed=false;
    let canvas = <HTMLCanvasElement>document.querySelector('canvas');
    let Rec=new rectangle();
    Rec.draw();
    this.Index=-1;

    let def = (e: { clientX: number; clientY: number; }) =>{
      this.UNDOshapes.push(this.shapes.slice() );
      this.REDOcount=0;
      this.shapes.push(Rec);
      this.Closed=true;
        canvas.removeEventListener('mousedown',def); 
        
      };
      canvas.addEventListener('mousedown',def); 
     }
   /////////////////////////////////////
  //   Square Methode    //
  Square(){
    if( !this.Closed){alert("Finish your event Firist  !! ");return;}
   this.Closed=false;
    let canvas = <HTMLCanvasElement>document.querySelector('canvas');
    let Squ = new square();
    Squ.draw();
    this.Index=-1;

    let def = (e: { clientX: number; clientY: number; }) =>{
      this.UNDOshapes.push(this.shapes.slice() );
      this.REDOcount=0;
      this.shapes.push(Squ);
      this.Closed=true;
        canvas.removeEventListener('mousedown',def); 
        
      };
      canvas.addEventListener('mousedown',def); 
   }
 
////////////////////////////////////////////
 //   Circle Methode    //   
Circle(){
  if( !this.Closed){alert("Finish your event Firist  !! ");return;}
 this.Closed=false;
    let canvas = <HTMLCanvasElement>document.querySelector('canvas');
    let Cir=new circle();
    Cir.draw();
    this.Index=-1;

    let def = (e: { clientX: number; clientY: number; }) =>{
      this.UNDOshapes.push(this.shapes.slice() );
      this.REDOcount=0;
      this.shapes.push(Cir);
      this.Closed=true;
        canvas.removeEventListener('mousedown',def); 
      };
      canvas.addEventListener('mousedown',def); 
   }

   /////////////////////////////////////
    //   Ellipse Methode    //   
Ellipse(){
  if( !this.Closed){alert("Finish your event Firist  !! ");return;}
 this.Closed=false;
  let canvas = <HTMLCanvasElement>document.querySelector('canvas');
  let Ell=new ellipse();
  Ell.draw();
  this.Index=-1;

  let def = (e: { clientX: number; clientY: number; }) =>{
    this.UNDOshapes.push(this.shapes.slice() );
    this.REDOcount=0;
    this.shapes.push(Ell);
    this.Closed=true;
      canvas.removeEventListener('mousedown',def); 
    };
    canvas.addEventListener('mousedown',def); 
 }
  /////////////////////////////////////
   //   LineSegment Methode    //
   LineSegment(){
    if( !this.Closed){alert("Finish your event Firist  !! ");return;}
   this.Closed=false;
    let canvas = <HTMLCanvasElement>document.querySelector('canvas');
    let Lin=new LineSegment();
    Lin.draw();
    this.Index=-1;

    let def = (e: { clientX: number; clientY: number; }) =>{
      this.UNDOshapes.push(this.shapes.slice() );
      this.REDOcount=0;
      this.shapes.push(Lin);
        canvas.removeEventListener('mousedown',def); 
        
      };
      canvas.addEventListener('mousedown',def); 
         this.Closed=true;
   }
   /////////////////////////////////////
   //   Triangle Methode    //
   Triangle(){
    if( !this.Closed){alert("Finish your event Firist  !! ");return;}
   this.Closed=false;
    let canvas = <HTMLCanvasElement>document.querySelector('canvas');
    let Tri=new Triangle();
    Tri.draw();
    this.Index=0;
    let def = (e: { clientX: number; clientY: number; }) =>{
      this.UNDOshapes.push(this.shapes.slice() );
      this.REDOcount=0;
      this.shapes.push(Tri);
      this.Closed=true;
        canvas.removeEventListener('mousedown',def); 
        
      };
      canvas.addEventListener('mousedown',def); 
   }

  /////////////////////////////////////////////
  //    Methode that select objects    //
  select(){
    if( !this.Closed){alert("Finish your event Firist  !! ");return;}
   this.Closed=false;
    let canvas = <HTMLCanvasElement>document.querySelector('canvas');  
      let selection = (e: { clientX: number; clientY: number; }) =>{
        let rect = canvas.getBoundingClientRect();
         let xposition=e.clientX-rect.left;
         let yposition=e.clientY-rect.top;
         ////////////
         this.position=[xposition*(300/1000),yposition*(150/500)];
         for(var i=this.shapes.length-1;i>=0;i--){
          var s=this.shapes[i];
          console.log("infor");
          if (s.type =="rectangle" ){
          if(this.position[0]>s.position[0]&&this.position[0]<(s.position[0]+s.width)&&this.position[1]>s.position[1]&&this.position[1]<(s.position[1]+s.height)){
            this.Shape=this.shapes[i];
            console.log("in if");
            this.Index=i;
           // window.alert("You are Selecting Rectangle"); 
            break;
          }  }

          else if (s.type =="square"){
            if(this.position[0]>s.position[0]&&this.position[0]<(s.position[0]+s.side)&&this.position[1]>s.position[1]&&this.position[1]<(s.position[1]+s.side)){
              this.Shape=this.shapes[i];
              console.log("in if");
              this.Index=i;
             // window.alert("You are Selecting Square");
              break;
            }  }

          else if (s.type =="circle"){
            var Topleft = [s.position[0]-s.radius,s.position[1]-s.radius] 
            if(this.position[0]>Topleft[0]&&this.position[0]<(Topleft[0]+(2*s.radius) )&&this.position[1]>Topleft[1]&&this.position[1]<(Topleft[1]+(2*s.radius))){
              this.Shape=this.shapes[i];
              console.log("in if");
              this.Index=i;
              //window.alert("You are Selecting Circle");
              break;
            }
          }

          else if (s.type =="ellipse"){
            var Topleft = [s.position[0]-s.Xradius,s.position[1]-s.Yradius] 
            if(this.position[0]>Topleft[0]&&this.position[0]<(Topleft[0]+(2*s.Xradius) )&&this.position[1]>Topleft[1]&&this.position[1]<(Topleft[1]+(2*s.Yradius))){
              this.Shape=this.shapes[i];
              console.log("in if");
              this.Index=i;
              //window.alert("You are Selecting Ellipse");
              break;
            }
          }

          else if (s.type =="LineSegment" ){
            var X1=s.position1[0];
            var X2=s.position2[0];
            var XCurr=this.position[0];
            var Y1=s.position1[1];
            var Y2=s.position2[1];
            var YCurr=this.position[1];
            if ( Math.abs( X1-X2 ) < 12 ){
              if( (Y1>YCurr && YCurr > Y2) || (Y1<YCurr && YCurr < Y2 ) ){
                if(Math.abs( XCurr-X1 ) <= Math.abs( X2-X1 ) +1  &&  Math.abs( XCurr-X2 ) <= Math.abs( X2-X1 ) +1 ){
                this.Shape=this.shapes[i];
                console.log("in if");
                this.Index=i;
                //window.alert("You are Selecting Linesegment");
                break;  
              }
             }
            }
           else if( (  Math.abs((Y2-Y1)/(X2-X1) - (YCurr-Y1)/(XCurr-X1) )< 0.5 )&& ( Math.abs((Y2-Y1)/(X2-X1)-(YCurr-Y2)/(XCurr-X2) ) <0.5) )
           {if( (Y1>YCurr && YCurr > Y2) || (Y1<YCurr && YCurr < Y2 )  &&(X1>XCurr && XCurr > X2) || (X1<XCurr && XCurr < X2 ) )
              {  this.Shape=this.shapes[i];
              console.log("in if");
              this.Index=i;
              //window.alert("You are Selecting Linesegment");
              break;
             
          }}
         }
  
         else if (s.type =="Triangle" ){
          if( this.InTriangle(s.position1, s.position2, s.position3, this.position) ){
            this.Shape=this.shapes[i];
            console.log("in if");
            this.Index=i;
            //window.alert("You are Selecting Triangle");
            break;
          } 
        
       }
       this.Index=-1;
       this.Shape=null;
        }
        this.Closed=true;
        console.log(this.position);
        canvas.removeEventListener('mousedown',selection);
      };
      canvas.addEventListener('mousedown', selection);

      
    }
//   Method to get Area of Triangle //
    InTriangle (p1:any,p2:any, p3:any, p4:any): boolean {
      var a1 = ( p1[0]*(p2[1]-p3[1]) + p2[0]*(p3[1]-p1[1]) + p3[0]*(p1[1]-p2[1]) )/2;
      var a2 = ( p4[0]*(p2[1]-p3[1]) + p2[0]*(p3[1]-p4[1]) + p3[0]*(p4[1]-p2[1]) )/2;
      var a3 = ( p1[0]*(p4[1]-p3[1]) + p4[0]*(p3[1]-p1[1]) + p3[0]*(p1[1]-p4[1]) )/2;
      var a4 = ( p1[0]*(p2[1]-p4[1]) + p2[0]*(p4[1]-p1[1]) + p4[0]*(p1[1]-p2[1]) )/2;
     if (Math.abs( a1 - (a2+a3+a4) ) < 0.0000000000000000005  ){

       console.log("true value");
       return true;
     }
     console.log("False value");
      return false;
    }
  //    Methode clear every thing     //           
     clear(){
      this.UNDOshapes.push(this.shapes.slice() );
      this.REDOcount=0;
      this.REDOshapes.push(this.shapes.slice() );
      console.log(this.UNDOshapes.length);
      console.log( this.UNDOshapes[this.UNDOshapes.length-1].length);
      let canvas = <HTMLCanvasElement>document.querySelector('canvas');
      let ctx =canvas.getContext("2d")as CanvasRenderingContext2D ;
      ctx.clearRect(0,0,canvas.width,canvas.height);
        this.shapes.splice(0, this.shapes.length);
        console.log(this.UNDOshapes.length);
        console.log( this.UNDOshapes[this.UNDOshapes.length-1].length);

    }
  //    Methode Copy every thing     //           
    Copy(){
      this.select();
      let canvas = <HTMLCanvasElement>document.querySelector('canvas');
      let movement = (e: { clientX: number; clientY: number; }) =>{
        if (this.Index==-1){canvas.removeEventListener('mouseup',movement);
        canvas.removeAllListeners;return;}
        let rect = canvas.getBoundingClientRect();
        let xposition=e.clientX-rect.left;
        let yposition=e.clientY-rect.top;
        //    Rectangle   //
        if (this.Shape.type=="rectangle"){
          this.UNDOshapes.push(this.shapes.slice() );
          this.REDOcount=0;
          this.REDOshapes.push(this.shapes.slice() );
        let rectmove=new rectangle();
        rectmove.color=this.Shape.color;
        rectmove.width=this.Shape.width;
        rectmove.height=this.Shape.height;
        rectmove.position[0]=xposition*(300/1000);
        rectmove.position[1]=yposition*(150/500);
        rectmove.redraw();
        this.shapes.push(rectmove);this.Index=-1;}
        //    Square    //
        else if (this.Shape.type=="square"){
          this.UNDOshapes.push(this.shapes.slice() );
          this.REDOcount=0;
          this.REDOshapes.push(this.shapes.slice() );
          let squmove=new square();
          squmove.color=this.Shape.color;
          squmove.side=this.Shape.side;
          squmove.position[0]=xposition*(300/1000);
          squmove.position[1]=yposition*(150/500);
          squmove.redraw();
          this.shapes.push(squmove);this.Index=-1;}
           //    Circle    //
        else if (this.Shape.type=="circle"){
          this.UNDOshapes.push(this.shapes.slice() );
          this.REDOcount=0;
          this.REDOshapes.push(this.shapes.slice() );
          let CirMove=new circle();
          CirMove.color=this.Shape.color;
          CirMove.radius=this.Shape.radius;
          CirMove.position[0]=xposition*(300/1000);
          CirMove.position[1]=yposition*(150/500);
          CirMove.redraw();
          this.shapes.push(CirMove);this.Index=-1;}
           //    Ellipse    //
        else if (this.Shape.type=="ellipse"){
          this.UNDOshapes.push(this.shapes.slice() );
          this.REDOcount=0;
          this.REDOshapes.push(this.shapes.slice() );
          let EllMove=new ellipse();
          EllMove.color=this.Shape.color;
          EllMove.Xradius=this.Shape.Xradius;
          EllMove.Yradius=this.Shape.Yradius;
          EllMove.position[0]=xposition*(300/1000);
          EllMove.position[1]=yposition*(150/500);
          EllMove.redraw();
          this.shapes.push(EllMove);this.Index=-1;}
           //    Line Segment    //
        else if (this.Shape.type=="LineSegment"){
          this.UNDOshapes.push(this.shapes.slice() );
          this.REDOcount=0;
          this.REDOshapes.push(this.shapes.slice() );
          let LineMove=new LineSegment();
          LineMove.color=this.Shape.color;
          LineMove.position1[0]=xposition*(300/1000);
          LineMove.position1[1]=yposition*(150/500);
          var x=LineMove.position1[0]-this.Shape.position1[0];
          var y=LineMove.position1[1]-this.Shape.position1[1];
          LineMove.position2[0]=this.Shape.position2[0]+x;
          LineMove.position2[1]=this.Shape.position2[1]+y;
          LineMove.redraw();
          this.shapes.push(LineMove);this.Index=-1;}
           //    Triangle    //
        else if (this.Shape.type=="Triangle"){
          this.UNDOshapes.push(this.shapes.slice() );
          this.REDOcount=0;
          this.REDOshapes.push(this.shapes.slice() );
          let TriMove=new Triangle();
          TriMove.color=this.Shape.color;
          TriMove.position1[0]=xposition*(300/1000);
          TriMove.position1[1]=yposition*(150/500);
          var x=TriMove.position1[0]-this.Shape.position1[0];
          var y=TriMove.position1[1]-this.Shape.position1[1];
          TriMove.position2[0]=this.Shape.position2[0]+x;
          TriMove.position2[1]=this.Shape.position2[1]+y;
          TriMove.position3[0]=this.Shape.position3[0]+x;
          TriMove.position3[1]=this.Shape.position3[1]+y;
          TriMove.redraw();
          this.shapes.push(TriMove);this.Index=-1;}
          this.Index=-1;
        canvas.removeEventListener('mouseup',movement);
        canvas.removeAllListeners;
      }
      canvas.addEventListener('mouseup',movement);
    }
      //    Methode clear every thing     //   
      Move(){
        this.select();
        let canvas = <HTMLCanvasElement>document.querySelector('canvas');
        let movement = (e: { clientX: number; clientY: number; }) =>{
          if (this.Index==-1){canvas.removeEventListener('mouseup',movement);
          canvas.removeAllListeners;return;}
          let rect = canvas.getBoundingClientRect();
          let xposition=e.clientX-rect.left;
          let yposition=e.clientY-rect.top;
          //    Rectangle   //
          if (this.Shape.type=="rectangle"){
            this.UNDOshapes.push(this.shapes.slice() );
            this.REDOcount=0;
          this.REDOshapes.push(this.shapes.slice() );
          let rectmove=new rectangle();
          rectmove.color=this.Shape.color;
          rectmove.width=this.Shape.width;
          rectmove.height=this.Shape.height;
          rectmove.position[0]=xposition*(300/1000);
          rectmove.position[1]=yposition*(150/500);
          rectmove.redraw();
          this.shapes.push(rectmove);this.delete();}
          //    Square    //
          else if (this.Shape.type=="square"){
            this.UNDOshapes.push(this.shapes.slice() );
            this.REDOcount=0;
          this.REDOshapes.push(this.shapes.slice() );
            let squmove=new square();
            squmove.color=this.Shape.color;
            squmove.side=this.Shape.side;
            squmove.position[0]=xposition*(300/1000);
            squmove.position[1]=yposition*(150/500);
            squmove.redraw();
            this.shapes.push(squmove);this.delete();}
             //    Circle    //
          else if (this.Shape.type=="circle"){
            this.UNDOshapes.push(this.shapes.slice() );
            this.REDOcount=0;
          this.REDOshapes.push(this.shapes.slice() );
            let CirMove=new circle();
            CirMove.color=this.Shape.color;
            CirMove.radius=this.Shape.radius;
            CirMove.position[0]=xposition*(300/1000);
            CirMove.position[1]=yposition*(150/500);
            CirMove.redraw();
            this.shapes.push(CirMove);this.delete();}
             //    Ellipse    //
          else if (this.Shape.type=="ellipse"){
            this.UNDOshapes.push(this.shapes.slice() );
            this.REDOcount=0;
          this.REDOshapes.push(this.shapes.slice() );
            let EllMove=new ellipse();
            EllMove.color=this.Shape.color;
            EllMove.Xradius=this.Shape.Xradius;
            EllMove.Yradius=this.Shape.Yradius;
            EllMove.position[0]=xposition*(300/1000);
            EllMove.position[1]=yposition*(150/500);
            EllMove.redraw();
            this.shapes.push(EllMove);this.delete();}
             //    Line Segment    //
          else if (this.Shape.type=="LineSegment"){
            this.UNDOshapes.push(this.shapes.slice() );
            this.REDOcount=0;
          this.REDOshapes.push(this.shapes.slice() );
            let LineMove=new LineSegment();
            LineMove.color=this.Shape.color;
            LineMove.position1[0]=xposition*(300/1000);
            LineMove.position1[1]=yposition*(150/500);
            var x=LineMove.position1[0]-this.Shape.position1[0];
            var y=LineMove.position1[1]-this.Shape.position1[1];
            LineMove.position2[0]=this.Shape.position2[0]+x;
            LineMove.position2[1]=this.Shape.position2[1]+y;
            LineMove.redraw();
            this.shapes.push(LineMove);this.delete();}
             //    Triangle    //
          else if (this.Shape.type=="Triangle"){
            this.UNDOshapes.push(this.shapes.slice() );
            this.REDOcount=0;
          this.REDOshapes.push(this.shapes.slice() );
            let TriMove=new Triangle();
            TriMove.color=this.Shape.color;
            TriMove.position1[0]=xposition*(300/1000);
            TriMove.position1[1]=yposition*(150/500);
            var x=TriMove.position1[0]-this.Shape.position1[0];
            var y=TriMove.position1[1]-this.Shape.position1[1];
            TriMove.position2[0]=this.Shape.position2[0]+x;
            TriMove.position2[1]=this.Shape.position2[1]+y;
            TriMove.position3[0]=this.Shape.position3[0]+x;
            TriMove.position3[1]=this.Shape.position3[1]+y;
            TriMove.redraw();
            this.shapes.push(TriMove);this.delete();}
            this.Index=-1;
          canvas.removeEventListener('mouseup',movement);
          canvas.removeAllListeners;
        }
        canvas.addEventListener('mouseup',movement);
      }

      //    Methode Color every thing     //   
    Color(C :any){
      if ( this.Shape!=null &&this.Index!=-1){
        this.UNDOshapes.push( this.shapes.slice() );    
       console.log(this.UNDOshapes[this.UNDOshapes.length-1][this.UNDOshapes[this.UNDOshapes.length-1].length-1].color)
        var Shape2=this.Shape;
        Shape2.SetColor(C);
        console.log(this.UNDOshapes[this.UNDOshapes.length-1][this.UNDOshapes[this.UNDOshapes.length-1].length-1].color)
       
        this.delete();
        Shape2.redraw();
        this.shapes.push(Shape2);
       }
       this.Index=-1;
      }
    
   delete(){  
     if (this.Index==-1) {return;}
      this.clear2();
      this.shapes.splice(this.Index,1); 
    
      for(var i=0;i<this.shapes.length;i++){
        this.shapes[i].redraw();
    }
    
    this.Index=-1;
  }

  delete2(){
    if (this.Index==-1) {return;}
    this.UNDOshapes.push( this.shapes.slice() );
    this.REDOcount=0;
          this.REDOshapes.push(this.shapes.slice() );
     this.clear2();
     this.shapes.splice(this.Index,1); 
   
     for(var i=0;i<this.shapes.length;i++){
       this.shapes[i].redraw();
   }
   
   this.Index=-1;
  }
  clear2(){
    let canvas = <HTMLCanvasElement>document.querySelector('canvas');
    let ctx =canvas.getContext("2d")as CanvasRenderingContext2D ;
    ctx.clearRect(0,0,canvas.width,canvas.height);
  }

  resize(){
     if (this.Shape==null || this.Index==-1){return;}
          if (this.Shape.type=="rectangle"){
          this.UNDOshapes.push(this.shapes.slice() );
          this.REDOcount=0;
          this.REDOshapes.push(this.shapes.slice() );
          let RectSize=new rectangle();
          var x = prompt("insert width of rectangle");
          var y = prompt("insert height of rectangle");
          RectSize.color=this.Shape.color;
          RectSize.width=parseFloat(String(x));
          RectSize.height=parseFloat(String(y));
          RectSize.position[0]=this.Shape.position[0];
          RectSize.position[1]=this.Shape.position[1];
          this.shapes.push(RectSize);this.delete();}

        else if (this.Shape.type=="square"){
          this.UNDOshapes.push(this.shapes.slice() );
          this.REDOcount=0;
          this.REDOshapes.push(this.shapes.slice() );
          let SquSize=new square();
          var x = prompt("insert Side of Square");
          SquSize.color=this.Shape.color;
          SquSize.side=parseFloat(String(x));
          SquSize.position[0]=this.Shape.position[0];
          SquSize.position[1]=this.Shape.position[1];
          this.shapes.push(SquSize);this.delete();
        }

        else if (this.Shape.type=="circle"){          
          this.UNDOshapes.push(this.shapes.slice() );
          this.REDOcount=0;
          this.REDOshapes.push(this.shapes.slice() );
          let CirSize=new circle();
          var x = prompt("insert Radius of Circle");
          CirSize.color=this.Shape.color;
          CirSize.radius=parseFloat(String(x));
          CirSize.position[0]=this.Shape.position[0];
          CirSize.position[1]=this.Shape.position[1];
          this.shapes.push(CirSize);this.delete();
        }
          else if (this.Shape.type=="ellipse"){
            this.UNDOshapes.push(this.shapes.slice() );
            this.REDOcount=0;
          this.REDOshapes.push(this.shapes.slice() );
          let EllSize=new ellipse();
          var x = prompt("insert Xradius of Ellipse");
          var y = prompt("insert Xradius of Ellipse");
          EllSize.color=this.Shape.color;
          EllSize.Xradius=parseFloat(String(x));
          EllSize.Yradius=parseFloat(String(y));
          EllSize.position[0]=this.Shape.position[0];
          EllSize.position[1]=this.Shape.position[1];
          this.shapes.push(EllSize);this.delete();}

          else if (this.Shape.type=="LineSegment"){
            this.UNDOshapes.push(this.shapes.slice() );
            this.REDOcount=0;
          this.REDOshapes.push(this.shapes.slice() );
            let LinSize=new LineSegment();
            var x = prompt("insert Length of Line Segment");
            LinSize.color=this.Shape.color;
            let d=parseFloat(String(x));
            let X=this.Shape.position1[0];
            let Y=this.Shape.position1[1];
            let M=(Y-this.Shape.position2[1])/(X-this.Shape.position2[0]);
            LinSize.position1[0]=X;
            LinSize.position1[1]=Y;
            if(X<=this.Shape.position2[0] ){
            LinSize.position2[0]= Math.cos(Math.atan(M))*d+X;
            LinSize.position2[1]= Math.sin(Math.atan(M))*d+Y;}
            
            else if(X>this.Shape.position2[0] &&Y<=this.Shape.position2[1] ){
              LinSize.position2[0]= -Math.cos(Math.atan(M)) *d +X;
              LinSize.position2[1]= Math.abs(Math.sin(Math.atan(M))*d )+ Y ;}
    
            else {
              LinSize.position2[0]= -Math.cos(Math.atan(M))*d+X;
              LinSize.position2[1]= -Math.sin(Math.atan(M))*d+Y;}
            this.shapes.push(LinSize);this.delete();}

            else if (this.Shape.type=="Triangle"){
              this.UNDOshapes.push(this.shapes.slice() );
              this.REDOcount=0;
          this.REDOshapes.push(this.shapes.slice() );
              let TriSize=new Triangle();
              var x = prompt("insert Length of First Edge");
              var y = prompt("insert Length of Second Edge"); 
              TriSize.color=this.Shape.color;
              let d=parseFloat(String(x));
              let d2=parseFloat(String(y));
              let X=this.Shape.position1[0];
              let Y=this.Shape.position1[1];
              let M=(Y-this.Shape.position2[1])/(X-this.Shape.position2[0]);
              TriSize.position1[0]=X;
              TriSize.position1[1]=Y;
              if(X<=this.Shape.position2[0] ){
              TriSize.position2[0]= Math.cos(Math.atan(M))*d+X;
              TriSize.position2[1]= Math.sin(Math.atan(M))*d+Y;}
              
              else if(X>this.Shape.position2[0] &&Y<=this.Shape.position2[1] ){
                TriSize.position2[0]= -Math.cos(Math.atan(M)) *d +X;
                TriSize.position2[1]= Math.abs(Math.sin(Math.atan(M))*d )+ Y ;}
      
              else {
                TriSize.position2[0]= -Math.cos(Math.atan(M))*d+X;
                TriSize.position2[1]= -Math.sin(Math.atan(M))*d+Y;}
              let M2=(Y-this.Shape.position3[1])/(X-this.Shape.position3[0]);
              if(X<=this.Shape.position3[0] ){
              TriSize.position3[0]= Math.cos(Math.atan(M2))*d2+X;
              TriSize.position3[1]= Math.sin(Math.atan(M2))*d2+Y;}
              
              else if(X>this.Shape.position3[0] &&Y<=this.Shape.position3[1] ){
                TriSize.position3[0]= -Math.cos(Math.atan(M2)) *d2 +X;
                TriSize.position3[1]= Math.abs(Math.sin(Math.atan(M2))*d2 )+ Y ;}
      
              else {
                TriSize.position3[0]= -Math.cos(Math.atan(M2))*d2+X;
                TriSize.position3[1]= -Math.sin(Math.atan(M2))*d2+Y;}
              this.shapes.push(TriSize);this.delete();}
      }

      /*

          load(){
            let data:string[]=[];
            var x= prompt("Insert Project name");
            let y:String="load";
            data.push(String(y));
            data.push(String(x));
            this.send(data);
            }
          //  if(requist LL ==load){
        //      loading json(X)
        //  ToArray(LL);
        //return LL;
            //}*/

      undo (){
               if ( this.UNDOshapes.length==0 ){ return;  }
               if (this.REDOcount==0){this.REDOshapes.push(this.shapes.slice());; }
               this.clear2();
               this.shapes=this.UNDOshapes.pop();
               this.REDOshapes.push(this.shapes.slice());
               
               for(var i=0;i<this.shapes.length;i++){
                this.shapes[i].redraw();
              }
            this.REDOcount++;
            this.REDO=true;  
      }

  redo(){
    if ( this.REDOcount==-1 ){  return; }
    if (this.REDO){
      this.clear2();
    this.shapes=this.REDOshapes.pop();
    this.UNDOshapes.push(this.shapes.slice());
    for(var i=0;i<this.shapes.length;i++){
     this.shapes[i].redraw(); }
  this.REDOcount--;}

    this.clear2();
    this.shapes=this.REDOshapes.pop();
    this.UNDOshapes.push(this.shapes.slice());
    for(var i=0;i<this.shapes.length;i++){
     this.shapes[i].redraw();
  } 
  this.REDOcount--;
  this.REDO=false; 
}
        

      ShapNum(){
        console.log(this.shapes.length);
      }




    }