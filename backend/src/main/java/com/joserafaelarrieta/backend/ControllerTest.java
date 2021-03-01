package com.joserafaelarrieta.backend;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerTest {

    @RequestMapping("/")
    public String index() {
        return "Hola Mundo";
    }
    
}
