package com.example.demo;

public class rectangle implements shape {
	private String type = "rectangle" ;
	private float width ;
	private float height ;
	private float[] position = new float [2];
	private String color ;
	
	public rectangle(String color,String width,String height,String positionx,String positiony) {
		this.color=color;
		this.width=Float.parseFloat(width) ;
		this.height=Float.parseFloat(height);
		this.position[0]=Float.parseFloat(positionx);
		this.position[1]=Float.parseFloat(positiony);
	}
	
	//////getter
	public float widthgetter() {return width;}
	public float heightgetter() {return height;}
	public float[] positiongetter() {return position;}
	public String colorgetter() {return color;}
	public String typegetter () {return type;}
}
