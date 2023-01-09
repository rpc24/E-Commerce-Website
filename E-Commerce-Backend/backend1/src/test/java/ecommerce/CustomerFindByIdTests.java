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
import ecommerce.daos.CustomerDao;
import ecommerce.entities.Customer;
import ecommerce.services.CustomerServiceImpl;

@SpringBootTest
public class CustomerFindByIdTests {
Logger LOG=LoggerFactory.getLogger(this.getClass());
@Mock CustomerDao customerDao;
@InjectMocks CustomerServiceImpl customerServiceImpl;
 
Customer customer1=new Customer(123,"deblina","kolkata","deblisar","Deblina@1","8777807665","female");
Customer customer2=new Customer(124,"padma","kolkata","padma","padma","8617755319","male");
@Test
public void TestFindById() {
	Mockito.when(customerDao.findById(123)).thenReturn(Optional.of(customer1));
	Customer customer3=customerDao.findById(123).get();
	assertEquals(123,customer3.getId());	
}

@Test
public void TestFindByIdFail() {
	Mockito.when(customerDao.findById(123)).thenReturn(Optional.of(customer1));
	Customer customer3=customerDao.findById(123).get();
	assertNotEquals(123,customer3.getId());	
}

}