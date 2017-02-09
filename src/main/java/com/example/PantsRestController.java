package com.example;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

/**
 * Created by Ben on 2/8/17.
 */
@RestController
public class PantsRestController {
    @RequestMapping(path = "/api/thing", method = RequestMethod.GET)
    public String thing(HttpSession session) {
        return (String)session.getAttribute("userName");
    }
}
