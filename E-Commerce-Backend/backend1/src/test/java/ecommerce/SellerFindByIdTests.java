package ecommerce;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import java.util.Optional;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.SpringBootTest;
import ecommerce.daos.SellerDao;
import ecommerce.entities.Seller;
import ecommerce.services.SellerServiceImpl;
@SpringBootTest
public class SellerFindByIdTests {
	Logger LOG=LoggerFactory.getLogger(this.getClass());
	@Mock SellerDao sellerDao;
	@InjectMocks SellerServiceImpl sellerServiceImpl;
	 
	Seller seller1=new Seller(1,"Rohan","Kolkata","rpc24","Rohan@1","9876543546");
	Seller seller2=new Seller(2,"Suchana","Delhi","Suchana","Suchana@1","9874658795");
	@Test
	public void TestFindById() {
		Mockito.when(sellerDao.findById(1)).thenReturn(Optional.of(seller1));
		Seller seller3=sellerDao.findById(1).get();
		assertEquals(1,seller3.getId());	
	}

	@Test
	public void TestFindByIdFail() {
		Mockito.when(sellerDao.findById(2)).thenReturn(Optional.of(seller2));
		Seller seller3=sellerDao.findById(2).get();
		assertNotEquals(1,seller3.getId());	
	}
}