package com.example.demo;

public class circle implements shape{
	private String type = "circle" ;
	private float radius ;
	private float[] position = new float [2];
	private String color ;
	
	public circle(String color,String radius,String positionx,String positiony) {
		this.color=color;
		this.radius=Float.parseFloat(radius);
		this.position[0]=Float.parseFloat(positionx);
		this.position[1]=Float.parseFloat(positiony);
	}
	
	//////getter
	public float radiusgetter() {return radius;}
	public float[] positiongetter() {return position;}
	public String colorgetter() {return color;}
	public String typegetter () {return type;}
}
