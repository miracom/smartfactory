package com.mesplus.smartfactory;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mesplus.smartfactory.model.ObjectModel;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! the client locale is "+ locale.toString());
		
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		
		String formattedDate = dateFormat.format(date);
		
		model.addAttribute("serverTime", formattedDate );
		
		return "home";
	}

	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/json_test", method = RequestMethod.GET)
	public @ResponseBody ObjectModel home(@RequestParam String name, Locale locale) {
		logger.info("Welcome home! the client locale is "+ locale.toString());
		
		ObjectModel resp = new ObjectModel();
		resp.setDate(new Date());
		resp.setName(name);
		resp.setAddr("ADDR");
		resp.setAvailable(true);

		logger.info("QUEUE");
		return resp;
	}
	
	@RequestMapping(value = "/account", method=RequestMethod.POST)
	public @ResponseBody ObjectModel create(@RequestBody ObjectModel account, HttpServletResponse response) {
		logger.info(account.getName() + ":" + account.getAddr());
		account.setName("SHNAM");
		account.setAddr("KOREA");
		
		return account;
	}

}
