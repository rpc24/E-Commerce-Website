/*
 * package ecommerce; import static
 * org.junit.jupiter.api.Assertions.assertEquals; import static
 * org.junit.jupiter.api.Assertions.assertNotEquals; import static
 * org.mockito.Mockito.when; import org.junit.jupiter.api.Test; import
 * org.slf4j.Logger; import org.slf4j.LoggerFactory; import
 * org.springframework.beans.factory.annotation.Autowired; import
 * org.springframework.boot.test.context.SpringBootTest; import
 * org.springframework.boot.test.mock.mockito.MockBean; import
 * org.springframework.test.context.ContextConfiguration;
 * 
 * import ecommerce.controllers.CustomerController; import
 * ecommerce.entities.Customer; import ecommerce.services.CustomerServiceImpl;
 * 
 * @SpringBootTest
 * 
 * @ContextConfiguration public class MockCustomerControllerTests{ Logger
 * LOG=LoggerFactory.getLogger(this.getClass());
 * 
 * @Autowired CustomerController customerController;
 * 
 * @MockBean CustomerServiceImpl customerServiceImpl;
 * 
 * 
 * Customer customer1=new
 * Customer(123,"deblina","kolkata","deblisar","Deblina@1","8777807665","female"
 * ); Customer customer2=new
 * Customer(124,"padma","kolkata","padma","padma","8617755319","male"); Customer
 * customer3= new
 * Customer(125,"prashant","agra","prashant","prashant","7654345786","male");
 * Customer customer4=new
 * Customer(123,"deblina","kolkata","deblisar","Deblina@1","8777807665","female"
 * );
 * 
 * @Test public void TestFindCustomerById() {
 * when(customerServiceImpl.findById(123)).thenReturn(customer1);
 * assertEquals(customer3.getId(),customer1.getId());
 * 
 * }
 * 
 * @Test public void TestFindCustomerByIdFail() {
 * when(customerServiceImpl.findById(123)).thenReturn(customer1);
 * assertNotEquals(customer4.getId(),customer1.getId());
 * 
 * } }
 */