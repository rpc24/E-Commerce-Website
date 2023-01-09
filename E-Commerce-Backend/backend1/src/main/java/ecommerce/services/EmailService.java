package ecommerce.services;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender emailSender;

    public void sendSimpleMessage(String to, String subject, String text) {
    	SimpleMailMessage helper = new SimpleMailMessage();
       // MimeMessage message=emailSender.createMimeMessage();
        try {
	        helper.setSubject(subject);
	        //MimeMessageHelper helper=new MimeMessageHelper(message,true);
	        helper.setFrom("noreply@ecommerce.com");
	        helper.setTo(to); 
	        helper.setText(text);
	        emailSender.send(helper);
	        System.out.println("Mail Sent Successfully...!!");
        }catch(Exception ex) {
        	System.out.println("Error "+ex.getMessage());
        }
    }
}
