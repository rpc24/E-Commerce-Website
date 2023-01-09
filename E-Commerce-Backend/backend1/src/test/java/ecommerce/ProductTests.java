package ecommerce;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.SpringBootTest;
import ecommerce.daos.ProductDao;
import ecommerce.entities.Product;
import ecommerce.entities.Seller;
import ecommerce.services.ProductServiceImpl;

@SpringBootTest
public class ProductTests {
	Logger LOG=LoggerFactory.getLogger(this.getClass());
	@Mock ProductDao productDao;
	@InjectMocks ProductServiceImpl productServiceImpl;
	
	Seller seller1=new Seller(1,"Rohan","Kolkata","rpc24","Rohan@1","9876543546");
	Seller seller2=new Seller(2,"Suchana","Delhi","Suchana","Suchana@1","9874658795");
	Product product1=new Product(1,"laptop","Asus","flipbook","version 14",33450,seller1);
	Product product2=new Product(2,"television","lenovo","digital","version1",10200,seller2);

	List<Seller> list1=new ArrayList<Seller>();
	List<Product> list2= new ArrayList<Product>();
	@Test
	public void TestfindProductById() {
		Mockito.when(productDao.getById(1)).thenReturn(product1);
		Product product3=productDao.getById(1);
		assertEquals(1,product3.getProdid());
		
	}

	@Test
	public void TestfindProductByIdFail() {
		Mockito.when(productDao.getById(1)).thenReturn(product1);
		Product product3=productDao.getById(1);
		assertNotEquals(2,product3.getProdid());
		
	}
	

	@Test
	public void TestallProducts() {
		List<Product> list=new ArrayList<>();
		list.add(product1);
		list.add(product2);
		Mockito.when(productDao.findAll()).thenReturn(list);
		assertEquals(2,productDao.findAll().size());
		
	}
	
	@Test
	public void TestallProductsFail() {
		List<Product> list=new ArrayList<>();
		list.add(product1);
		list.add(product2);
		Mockito.when(productDao.findAll()).thenReturn(list);
		assertNotEquals(3,productDao.findAll().size());
		
	}
	
}