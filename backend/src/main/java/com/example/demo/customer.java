package com.example.demo;
import java.beans.XMLEncoder;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.NoSuchFileException;
import java.nio.file.Paths;
import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import javax.swing.JFileChooser;
import javax.swing.JFrame;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonIOException;
@RestController
@CrossOrigin
@RequestMapping("/course")
public class customer {
	@GetMapping("/output")
	public String say(@RequestParam String[] parameters,@RequestParam String filename) throws JsonIOException, IOException{
		ArrayList<shape> shapes= new ArrayList<shape>(30);
		System.out.println("start load");
		if(parameters[0].equals("load")) {
			System.out.println("in load");
			String result = null ;
			try {

				result = new String(Files.readAllBytes(Paths.get("./"+filename+".json")));

				String finalresult = result.replaceAll("\"", "");
				finalresult = finalresult.replaceAll("n", "");
				finalresult = finalresult.replaceAll("\\:", "");
				finalresult = finalresult.replaceAll("\\[", "");
				finalresult = finalresult.replaceAll("\\]", "");
				finalresult = finalresult.replaceAll("\\{", "");
				finalresult = finalresult.replaceAll("\\}", "");
				finalresult = finalresult.replaceAll("type", "");
				finalresult = finalresult.replaceAll("width", "");
				finalresult = finalresult.replaceAll("height", "");
				finalresult = finalresult.replaceAll("color", "");

				finalresult = finalresult.replaceAll("positio1", "");
				finalresult = finalresult.replaceAll("positio2", "");
				finalresult = finalresult.replaceAll("positio3", "");
				finalresult = finalresult.replaceAll("positio", "");
				finalresult = finalresult.replaceAll("radius", "");
				finalresult = finalresult.replaceAll("X", "");
				finalresult = finalresult.replaceAll("Y", "");
				finalresult = finalresult.replaceAll("side", "");

				finalresult = finalresult.replaceAll(" ", "");

				finalresult = finalresult.replaceAll("\\\\", "");
				System.out.println(finalresult);
				return finalresult;


			} catch (IOException e) {
				e.printStackTrace();
			}

		}

		if(parameters!=null) {
			for(int i=0;i<parameters.length-1;i++) {

				if(parameters[i].equals("rectangle")) {
					rectangle rect=new rectangle(parameters[i+1],parameters[i+2],parameters[i+3],parameters[i+4],parameters[i+5]);
					i=i+5;
					shapes.add(rect);

				}
				else if(parameters[i].equals("LineSegment")) {
					line line=new line(parameters[i+1],parameters[i+2],parameters[i+3],parameters[i+4],parameters[i+5]);
					i=i+5;
					shapes.add(line);
				}
				else if(parameters[i].equals("square")) {
					square square=new square(parameters[i+1],parameters[i+2],parameters[i+3],parameters[i+4]);
					i=i+4;
					shapes.add(square);
				}
				else if(parameters[i].equals("circle")) {
					circle circle=new circle(parameters[i+1],parameters[i+2],parameters[i+3],parameters[i+4]);
					i=i+4;
					shapes.add(circle);
				}
				else if(parameters[i].equals("ellipse")) {
					ellipse ellipse=new ellipse(parameters[i+1],parameters[i+2],parameters[i+3],parameters[i+4],parameters[i+5]);
					i=i+5;
					shapes.add(ellipse);
				}
				else if(parameters[i].equals("Triangle")) {
					triangle triangle=new triangle(parameters[i+1],parameters[i+2],parameters[i+3],parameters[i+4],parameters[i+5],parameters[i+6],parameters[i+7]);
					i=i+7;
					shapes.add(triangle);
				}
			}
		}



		////////////////////////////////////////////////////////// TO json
		GsonBuilder gsonBuilder = new GsonBuilder();
		Gson gson = gsonBuilder.create();
		Gson prettyGson = new GsonBuilder().setPrettyPrinting().create();
		String prettyJson = prettyGson.toJson(shapes);
		System.out.println("\nPretty JSONObject ==> " + prettyJson);
		gson.toJson(prettyJson, new FileWriter("./embty.json"));   //Json.encode(list)

		ObjectMapper mapper = new ObjectMapper();
		try {
			// Java objects to JSON file
			mapper.writeValue(new File("./"+filename+".json"), prettyJson);
			// Java objects to JSON string - compact-print
			String jsonString = mapper.writeValueAsString(prettyJson);
			System.out.println(jsonString);
			// Java objects to JSON string - pretty-print
			String jsonInString2 = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(prettyJson);

			System.out.println(jsonInString2);
		} catch (IOException e) {
			e.printStackTrace();
		}
		///////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////from json
		//      ObjectMapper mapper2 = new ObjectMapper();



		return "dfdgnfgjmfg";
	}

}