import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import App from './App';
import RegCustomer from './components/RegCustomer';
import RegSupplier from './components/RegSupplier';
import AdminLogin from './components/AdminLogin';
import SellerLogin from './components/SellerLogin';
import CustomerLogin from './components/CustomerLogin';
import SellerProfile from './components/SellerProfile';
import store from './store';
import AdminProfile from './components/AdminProfile';
import CustomerProfile from './components/CustomerProfile';
import AllCustomers from './components/AllCustomers';
import AllSellers from './components/AllSellers';
import MyProducts from './components/MyProducts';
import Orders from './components/Orders';
import MyOrders from './components/MyOrders';

test('renders Add Product Form', ()=>{
render(<AddProduct />);
const linkElement=screen.getByText("Add Product Form");
expect(linkElement).toBeInTheDocument();

});

test('renders Customer Registration Form',()=>{
  render(<RegCustomer />);
  const linkElement=screen.getByText("Customer Registration Form");
  expect(linkElement).toBeInTheDocument();
});

test('renders Seller Registration Form',()=>{
  render(<RegSupplier />);
  const linkElement=screen.getByText("Seller Registration Form");
  expect(linkElement).toBeInTheDocument();
});

test('renders Seller Login Form',()=>{
render(
<Provider store={store}>
  <SellerLogin/>
</Provider>
);
const linkElement=screen.getByText("Seller Login");
expect(linkElement).toBeInTheDocument();
});
test('renders Admin Login Form',()=>{
  render(
  <Provider store={store}>
    <AdminLogin/>
  </Provider>
  );
  const linkElement=screen.getByText("Admin Login ");
  expect(linkElement).toBeInTheDocument();
  });

  test('renders Customer Login Form',()=>{
    render(
    <Provider store={store}>
      <CustomerLogin/>
    </Provider>
    );
    const linkElement=screen.getByText("Customer Login");
    expect(linkElement).toBeInTheDocument();
    });

    test('renders Seller Profile Page',()=>{
      render(
      <Provider store={store}>
        <SellerProfile/>
      </Provider>
      );
      const linkElement=screen.getByText("Seller Profile Page");
      expect(linkElement).toBeInTheDocument();
      });

      test('renders Seller Profile Page',()=>{
        render(
        <Provider store={store}>
          <SellerProfile/>
        </Provider>
        );
        const linkElement=screen.getByText("Seller Profile Page");
        expect(linkElement).toBeInTheDocument();
        });

        test('renders All Customers',()=>{
          render(
          <Provider store={store}>
            <AllCustomers/>
          </Provider>
          );
          const linkElement=screen.getByText("All Customers");
          expect(linkElement).toBeInTheDocument();
          });

          test('renders All Sellers',()=>{
            render(
            <Provider store={store}>
              <AllSellers/>
            </Provider>
            );
            const linkElement=screen.getByText("All Sellers");
            expect(linkElement).toBeInTheDocument();
            });

            test('renders My Products',()=>{
              render(
              <Provider store={store}>
                <MyProducts/>
              </Provider>
              );
              const linkElement=screen.getByText("My Products");
              expect(linkElement).toBeInTheDocument();
              });

              test('renders Purchased Orders',()=>{
                render(
                <Provider store={store}>
                  <Orders/>
                </Provider>
                );
                const linkElement=screen.getByText("Purchased Orders");
                expect(linkElement).toBeInTheDocument();
                });

                test('renders My Purchased Orders',()=>{
                  render(
                  <Provider store={store}>
                    <MyOrders/>
                  </Provider>
                  );
                  const linkElement=screen.getByText("My Purchased Orders");
                  expect(linkElement).toBeInTheDocument();
                  });