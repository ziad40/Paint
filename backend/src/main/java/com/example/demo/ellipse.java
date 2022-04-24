package com.example.demo;

public class ellipse implements shape{
	private String type = "ellipse" ;
	private float  Xradius ;
	private float  Yradius ;
	private float[] position = new float [2];
	private String color ;
	
	public ellipse(String color,String Xradius,String Yradius,String positionx,String positiony) {
		this.color=color;
		this.Xradius=Float.parseFloat(Xradius);
		this.Yradius=Float.parseFloat(Yradius);
		this.position[0]=Float.parseFloat(positionx);
		this.position[1]=Float.parseFloat(positiony);
	}
	//////getter
	public float Xradiusgetter() {return Xradius;}
	public float Yradiusgetter() {return Yradius;}
	public float[] positiongetter() {return position;}
	public String colorgetter() {return color;}
	public String typegetter () {return type;}
}
