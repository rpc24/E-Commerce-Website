package ecommerce.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ecommerce.entities.Customer;
import ecommerce.entities.Seller;
import ecommerce.models.LoginDTO;
import ecommerce.models.Response;
import ecommerce.services.SellerService;
import io.swagger.annotations.ApiOperation;

@CrossOrigin
@RestController
@RequestMapping("/api/sellers")
public class SellerController {

	@Autowired private SellerService sellerService;
	
	@PostMapping
	public ResponseEntity<?> save(@RequestBody Seller seller) {		
		sellerService.registerSeller(seller);
		return Response.success(seller);
	}
	
	@GetMapping
	public ResponseEntity<?> findAllCustomers() {
		List<Seller> result = sellerService.allSellers();
		return Response.success(result);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<?> findSellerProfile(@PathVariable("id") int id) {
		Seller result = sellerService.findById(id);
		return Response.success(result);
	}
	

	@GetMapping("/get/{userid}")
	@ApiOperation(value="Display the details of a customer by user id")
	public ResponseEntity<?> findCustomerByUserid(@PathVariable("userid") String userid) {
		Seller result = sellerService.findByUserid(userid);
		return Response.success(result);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<?> deleteSeller(@PathVariable("id") int id) {
		sellerService.deleteSeller(id);
		return Response.status(HttpStatus.OK);
	}
	
	@PostMapping("/validate")
	public ResponseEntity<?> validateUser(@RequestBody LoginDTO dto) {
		System.out.println(dto);
		Seller user=sellerService.validate(dto.getUserid(),dto.getPwd());
		if(user!=null)
			return Response.success(user);
		else
			return Response.status(HttpStatus.NOT_FOUND);
	}
	@PutMapping("{id}")
	public ResponseEntity<?> updateProfile(@RequestBody Seller cust,@PathVariable("id") int id) {
		sellerService.updateProfile(cust);
		return Response.status(HttpStatus.OK);
	
}
}
