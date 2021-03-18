package com.example.hexagonal.architecture;

import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@RestController
public class ControllerTest {
   @RequestMapping("/")
   
   public String index(){
       return "Hola Mundo";
   }
    
   @RequestMapping("/user")
   
   public String user(){
       return "Hola user";
   }
    
   @RequestMapping("/sumar")
   
   public int sumar(int numero1, int numero2){
      int suma=0;
      suma=numero1+numero2;
        return suma;

        
   }
   @Bean
        public WebMvcConfigurer corsConfigurer() {
            return new WebMvcConfigurer() {
                @Override
                public void addCorsMappings(CorsRegistry registry) {
                    registry.addMapping("/**").allowedOrigins("*").allowedMethods("GET", "POST","PUT", "DELETE");
                }
            };
        }
}
