import './styles.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AdminPage from './Pages/AdminPage';
import ContactPage from './Pages/ContactPage';
import ProductPage from './Pages/ProductPage';
import FrontPage from './Pages/FrontPage';

function App() {
  let dataBase = [
    {
      title: 'https://via.placeholder.com/240x350?text=ProductCard',

      text: 'Product ',
    },
    {
      title: 'https://via.placeholder.com/240x350?text=ProductCard',

      text: 'Product ',
    },
    {
      title: 'https://via.placeholder.com/240x350?text=ProductCard',

      text: 'Product ',
    },
    {
      title: 'https://via.placeholder.com/240x350?text=ProductCard',

      text: 'Product ',
    },

    {
      title: 'https://via.placeholder.com/240x350?text=ProductCard',

      text: 'Product ',
    },
    {
      title: 'https://via.placeholder.com/240x350?text=ProductCard',

      text: 'Product ',
    },
    {
      title: 'https://via.placeholder.com/240x350?text=ProductCard',

      text: 'Product ',
    },
    {
      title: 'https://via.placeholder.com/240x350?text=ProductCard',

      text: 'Product ',
    },
    {
      title: 'https://via.placeholder.com/240x350?text=ProductCard',

      text: 'Product ',
    },
    {
      title: 'https://via.placeholder.com/240x350?text=ProductCard',

      text: 'Product ',
    },
    {
      title: 'https://via.placeholder.com/240x350?text=ProductCard',

      text: 'Product ',
    },
    {
      title: 'https://via.placeholder.com/240x350?text=ProductCard',

      text: 'Product ',
    },
    {
      title: 'https://via.placeholder.com/240x350?text=ProductCard',

      text: 'Product ',
    },
    {
      title: 'https://via.placeholder.com/240x350?text=ProductCard',

      text: 'Product ',
    },
    {
      title: 'https://via.placeholder.com/240x350?text=ProductCard',

      text: 'Product ',
    },
  ];

  let newProducts = dataBase.slice(-5).map((obj) => {
    if (obj.title) {
      return {
        // ...obj,
        title: 'https://via.placeholder.com/240x350?text=NewProduct',
        text: obj.text,
      };
    }

    return obj;
  });

  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route
          exact
          path='/'
          render={(props) => <FrontPage newProducts={newProducts} {...props} />}
        />
        <Route path='/admin' render={() => <AdminPage />} />
        <Route path='/contact' render={() => <ContactPage />} />
        <Route
          path='/productPage'
          render={(props) => <ProductPage dataBase={dataBase} {...props} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
