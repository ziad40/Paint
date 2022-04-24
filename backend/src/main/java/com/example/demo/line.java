package com.example.demo;

public class line implements shape{
	private String type = "LineSegment" ;
	private float[] position1 = new float [2];
	private float[] position2 = new float [2];
	private String color ;
	
	public line(String color,String position1x,String position1y,String position2x,String position2y) {
		this.color=color;
		this.position1[0]=Float.parseFloat(position1x);
		this.position1[1]=Float.parseFloat(position1y);
		this.position2[0]=Float.parseFloat(position2x);
		this.position2[1]=Float.parseFloat(position2y);
	}
	//////getter
	public float[] position1getter() {return position1;}
	public float[] position2getter() {return position2;}
    public String colorgetter() {return color;}
	public String typegetter () {return type;}
}
