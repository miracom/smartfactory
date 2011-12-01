package com.mesplus.CMN.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mesplus.CMN.dao.FileDao;
import com.mesplus.smartfactory.HomeController;

@Controller
public class FileController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	private String getBrowser(HttpServletRequest request) {
		String ua = request.getHeader("User-Agent");
		if(ua.indexOf("MSIE") > -1)
			return "MSIE";
		if(ua.indexOf("Chrome") > -1)
			return "Chrome";
		if(ua.indexOf("Opera") > -1)
			return "Opera";
		return "Firefox";
	}
	
	private void setDispositionHeader(HttpServletRequest request, HttpServletResponse response, String filename) throws Exception {
		String browser = getBrowser(request);
		String encoded = null;
		if(browser.equals("MSIE"))
			encoded = URLEncoder.encode(filename, "UTF-8").replaceAll("\\+", "%20"); // I'm not sure..
		else if(browser.equals("Chrome"))
			encoded = URLEncoder.encode(filename, "UTF-8").replaceAll("\\+", "%20");
		else if(browser.equals("Opera"))
			encoded = URLEncoder.encode(filename, "UTF-8").replaceAll("\\+", "%20"); // I'm not sure..
		else if(browser.equals("Firefox"))
			encoded = new String(filename.getBytes("UTF-8"), "8859_1"); // I'm not sure..
		else
			encoded = URLEncoder.encode(filename, "UTF-8").replaceAll("\\+", "%20"); // I'm not sure..
		
		response.setHeader("Content-Disposition","attachment;filename=\"" + encoded + "\"");
	}
	
	@Autowired
	private FileDao fileDao;

    private static final String DESTINATION_DIR_PATH = "files";
    private static String realPath;
    
    @RequestMapping(value = "module/CMN/file_upload", method = RequestMethod.POST)
	public @ResponseBody
	Map<String, Object> upload(HttpServletRequest request, HttpServletResponse response) {
    	try {
    		request.setCharacterEncoding("utf-8");
    	} catch(Exception e) {
            logger.error(this.getClass().getName() + "cannot set character encoding to 'UTF-8': " + e.getMessage());
    	}

    	realPath = request.getServletContext().getRealPath(DESTINATION_DIR_PATH) + "/";
    	
    	logger.info("Realpath:" + realPath);
    	
        PrintWriter writer = null;
        InputStream is = null;
        FileOutputStream fos = null;

        try {
            writer = response.getWriter();
        } catch (IOException ex) {
            logger.error(this.getClass().getName() + "has thrown an exception: " + ex.getMessage());
        }

        try {
            String filename = URLDecoder.decode(request.getHeader("X-File-Name"), "UTF-8");
        	logger.info("Filename:" + filename);

        	is = request.getInputStream();
            fos = new FileOutputStream(new File(realPath + filename));
            IOUtils.copy(is, fos);
            response.setStatus(HttpServletResponse.SC_OK);
            writer.print("{success: true}");
        } catch (FileNotFoundException ex) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            writer.print("{success: false}");
            logger.error(this.getClass().getName() + "has thrown an exception: " + ex.getMessage());
        } catch (IOException ex) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            writer.print("{success: false}");
            logger.error(this.getClass().getName() + "has thrown an exception: " + ex.getMessage());
        } finally {
            try {
                fos.close();
                is.close();
            } catch (IOException ignored) {
            }
        }

        writer.flush();
        writer.close();
		
		return null;
	}

    @RequestMapping(value = "module/CMN/file_download", method = RequestMethod.POST)
	public void download(HttpServletRequest request, HttpServletResponse response) {
    	try {
        	request.setCharacterEncoding("utf-8");
        	response.setCharacterEncoding("utf-8");

        	realPath = request.getServletContext().getRealPath(DESTINATION_DIR_PATH) + "/";
        	
        	logger.info("Realpath:" + realPath);
        	
        	String filename = request.getParameter("fileId");
        	logger.info("Filename : " + filename);
        	
        	File file = new File(realPath + filename);
    		
        	FileInputStream is = new FileInputStream(realPath + filename);
        	
        	response.setContentType("application/octet-stream");
        	setDispositionHeader(request, response, filename);
        	
        	response.setContentLength((int)file.length());
        	IOUtils.copy(is, response.getOutputStream());
    	} catch(Exception e) {
    		logger.error(e.getMessage());
    		// At this time ignore. I'll throw specific exception to handle error case.
    	}
    }

    @RequestMapping(value = "module/CMN/file_download", method = RequestMethod.GET)
	public void view(HttpServletRequest request, HttpServletResponse response) {
    	try {
        	request.setCharacterEncoding("utf-8");
        	response.setCharacterEncoding("utf-8");

        	realPath = request.getServletContext().getRealPath(DESTINATION_DIR_PATH) + "/";
        	
        	logger.info("Realpath:" + realPath);
        	
        	String filename = request.getParameter("fileId");
        	logger.info("Filename : " + filename);

        	File file = new File(realPath + filename);
    		
        	String mimetype = request.getServletContext().getMimeType(filename);
        	FileInputStream is = new FileInputStream(realPath + filename);
        	
        	response.setContentType(mimetype);
        	
        	response.setContentLength((int)file.length());
        	IOUtils.copy(is, response.getOutputStream());
    	} catch(Exception e) {
    		logger.error(e.getMessage());
    		// At this time ignore. I'll throw specific exception to handle error case.
    	}
    }
}
