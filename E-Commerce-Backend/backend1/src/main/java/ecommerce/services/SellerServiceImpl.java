package ecommerce.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import ecommerce.daos.ProductDao;
import ecommerce.daos.SellerDao;
import ecommerce.entities.Customer;
import ecommerce.entities.Product;
import ecommerce.entities.Seller;

@Service
public class SellerServiceImpl implements SellerService {

	@Autowired private SellerDao dao;
	@Autowired ProductDao dao1;
	@Override
	public void registerSeller(Seller seller) {
		// TODO Auto-generated method stub
		dao.save(seller);
	}

	@Override
	public List<Seller> allSellers() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public Seller findById(int id) {
		// TODO Auto-generated method stub
		return dao.getById(id);
	}
	

	@Override
	public Seller findByUserid(String userid) {
		return dao.findByUserid(userid);
	}
	@Override
	public Seller validate(String userid, String pwd) {
		Seller seller=dao.findByUserid(userid);
		if(seller!=null && seller.getPwd().equals(pwd)) {
			return seller;
		}
		return null;
	}

	@Override
	public void deleteSeller(int id) {
		// TODO Auto-generated method stub
	
		
			// TODO Auto-generated method stub
			List<Product> p1=dao1.findBySeller(dao.getById(id), null);
			
			for( Product p : p1 )
			dao1.delete(p);
		
		
		
		
		Seller seller=dao.getById(id);
		dao.delete(seller);
	
	
	
	}
	

	@Override
	public void updateProfile(Seller cust) {
		// TODO Auto-generated method stub
		if(cust.getPwd().equals("") || cust.getPwd()==null) {
			cust.setPwd(findById(cust.getId()).getPwd());
		}
		dao.save(cust);	
	}
}
