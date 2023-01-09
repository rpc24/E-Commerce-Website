package ecommerce;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.mockito.Mockito.when;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ContextConfiguration;
import ecommerce.controllers.CustomerController;
import ecommerce.daos.CustomerDao;
import ecommerce.daos.SellerDao;
import ecommerce.entities.Customer;
import ecommerce.entities.Seller;
import ecommerce.services.CustomerServiceImpl;
import ecommerce.services.SellerServiceImpl;

@SpringBootTest
public class SellerLoginDetailsTests {
	Logger LOG=LoggerFactory.getLogger(this.getClass());
	@MockBean
	SellerDao sellerDao;
	@Autowired SellerServiceImpl sellerServiceImpl;
	
	Seller seller1=new Seller(1,"Rohan","Kolkata","rpc24","Rohan@1","9876543546");
	Seller seller2=new Seller(2,"Suchana","Delhi","Suchana","Suchana@1","9874658795");
	@Test
	public void TestAllSellers() {
		List<Seller> list=new ArrayList<>();
		list.add(seller1);
		list.add(seller2);
		Mockito.when(sellerDao.findAll()).thenReturn(list);
		assertEquals(2,sellerDao.findAll().size());
		
	}

	@Test
	public void TestAllSellersFail() {
		List<Seller> list=new ArrayList<>();
		list.add(seller1);
		list.add(seller2);
		Mockito.when(sellerDao.findAll()).thenReturn(list);
		assertNotEquals(4,sellerDao.findAll().size());
		
	}
}