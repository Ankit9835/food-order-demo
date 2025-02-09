import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';


function App() {
  cont [cartShown,setCartIsShown] = useState(true)
  return (
    <CartProvider>
      {cartShown && <div>cart...</div>}
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
