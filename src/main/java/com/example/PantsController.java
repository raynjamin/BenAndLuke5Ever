package com.example;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpSession;

/**
 * Created by Ben on 2/8/17.
 */
@Controller
public class PantsController {
    @RequestMapping(path = "/", method = RequestMethod.GET)
    public String home(HttpSession session) {
        if (session.getAttribute("userName") == null) {
            return "redirect:notloggedin.html";
        } else {
            return "redirect:loggedin.html";
        }
    }

    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public String login(HttpSession session, String userName) {
        session.setAttribute("userName", userName);
        return "redirect:/";
    }
}
