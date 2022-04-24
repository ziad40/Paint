package com.example.demo;

public class square implements shape{
	private float[] position = new float [2];
	private String type = "square" ;
	private float side ;
	private String color ;
	
	public square(String color,String side,String positionx,String positiony) {
		this.color=color;
		this.side=Float.parseFloat(side);
		this.position[0]=Float.parseFloat(positionx);
		this.position[1]=Float.parseFloat(positiony);
	}
	
	//////getter
	public float sidegetter() {return side;}
	public float[] positiongetter() {return position;}
	public String colorgetter() {return color;}
	public String typegetter () {return type;}
	
}
