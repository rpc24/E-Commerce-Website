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
import ecommerce.daos.OrderDao;
import ecommerce.entities.Address;
import ecommerce.entities.Customer;
import ecommerce.entities.Order;
import ecommerce.entities.Payment;
import ecommerce.services.OrderServiceImpl;

@SpringBootTest
public class OrderServiceTests {
	Logger LOG=LoggerFactory.getLogger(this.getClass());
	@Mock OrderDao orderDao;
	@InjectMocks OrderServiceImpl orderServiceImpl;
	
	Customer customer1=new Customer(123,"deblina","kolkata","deblisar","Deblina@1","8777807665","female");
	Customer customer2=new Customer(124,"padma","kolkata","padma","padma","8617755319","male");
	
	Payment payment1=new Payment(1,"12234","sterio",23456);
	Payment payment2=new Payment(2,"2637","studio",42637);
	
	Address address1=new Address(1,"kolkata","wb","700056","India");
	Address address2=new Address(2,"bhubaneswar","wb","786453","India");
	
	Order order1=new Order(1,customer1,address1,payment1);
	Order order2=new Order(2,customer2,address2,payment2);
	
	
	@Test
	public void TestgetAllOrders() {
		List<Order> list=new ArrayList<>();
		list.add(order1);
		list.add(order2);
		Mockito.when(orderDao.findAll()).thenReturn(list);
		assertEquals(2,orderDao.findAll().size());
		
	}
	
	@Test
	public void TestgetAllOrdersFail() {
		List<Order> list=new ArrayList<>();
		list.add(order1);
		list.add(order2);
		Mockito.when(orderDao.findAll()).thenReturn(list);
		assertNotEquals(5,orderDao.findAll().size());
		
	}
	
	@Test
	public void TestgetCustomerOrders() {
		List<Order> list=new ArrayList<>();
		list.add(order1);
		Mockito.when(orderDao.findByCustomer(customer1)).thenReturn(list);
		List<Order> order3=orderDao.findByCustomer(customer1);
		assertEquals(1,order3.size());
		
	}

	@Test
	public void TestgetCustomerOrdersFail() {
		List<Order> list=new ArrayList<>();
		list.add(order1);
		list.add(order2);
		Mockito.when(orderDao.findByCustomer(customer1)).thenReturn(list);
		assertNotEquals(3,orderDao.findByCustomer(customer1).size());
		
	}
	
	@Test
	public void TestfindById() {
		Mockito.when(orderDao.getById(1)).thenReturn(order1);
		Order order3=orderDao.getById(1);
		assertEquals(1,order3.getOrderid());
		
	}
	
	@Test
	public void TestfindByIdFail() {
		Mockito.when(orderDao.getById(1)).thenReturn(order1);
		Order order3=orderDao.getById(1);
		assertNotEquals(4,order3.getOrderid());
		
	}
	
}