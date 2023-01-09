package ecommerce;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import ecommerce.daos.CustomerDao;
import ecommerce.entities.Customer;
import ecommerce.services.CustomerServiceImpl;

@SpringBootTest
public class CustomerLoginDetailTests {
Logger LOG=LoggerFactory.getLogger(this.getClass());
@MockBean 
CustomerDao customerDao;
@Autowired CustomerServiceImpl customerServiceImpl;
Customer customer1=new Customer(123,"deblina","kolkata","deblisar","Deblina@1","8777807665","female");
Customer customer2=new Customer(124,"padma","kolkata","padma","padma","8617755319","male");

@Test
public void TestAllCustomers() {
	List<Customer> list=new ArrayList<>();
	list.add(customer1);
	list.add(customer2);
	Mockito.when(customerDao.findAll()).thenReturn(list);
	assertEquals(2,customerDao.findAll().size());
	
}

@Test
public void TestAllCustomersFail() {
	List<Customer> list=new ArrayList<>();
	list.add(customer1);
	list.add(customer2);
	Mockito.when(customerDao.findAll()).thenReturn(list);
	assertNotEquals(4,customerDao.findAll().size());
	
}



}