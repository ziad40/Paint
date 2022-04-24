package com.example.demo;

public class triangle implements shape{
	private String type = "Triangle" ;
	private float[] position1 = new float [2];
	private float[] position2 = new float [2];
	private float[] position3 = new float [2];
	private String color ;
	
	public triangle(String color,String position1x,String position1y,String position2x,String position2y,String position3x,String position3y) {
		this.color=color;
		this.position1[0]=Float.parseFloat(position1x);
		this.position1[1]=Float.parseFloat(position1y);
		this.position2[0]=Float.parseFloat(position2x);
		this.position2[1]=Float.parseFloat(position2y);
		this.position3[0]=Float.parseFloat(position3x);
		this.position3[1]=Float.parseFloat(position3y);
	}
	//////getter
	public float[] position1getter() {return position1;}
	public float[] position2getter() {return position2;}
	public float[] position3getter() {return position3;}
	public String colorgetter() {return color;}
	public String typegetter () {return type;}
}

