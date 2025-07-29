import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  //REVIEW - Cambia a false para simular un usuario normal
  const [isCreator, setIsCreator] = useState(true);

  return (
    <div>
      <h1>¡Hola RoxDev!</h1>
      <p>Bienvenida a tu aplicación React con TypeScript.</p>
      {isCreator ? (
        <p>¡Eres la creadora!, tienes acceso gratuito a todas las funciones.</p>
      ) : (
        <p>Acceso limitado. Necesitas comprar una suscripción para acceder a todas las funciones</p>
      )}
      <button onClick={() => alert('Botón clickeado!')}>Click aquí</button>
      <a href="#">Este es un enlace</a>
    </div>
  );
};

export default App;

const PremiumFeature: React.FC =() => {
  return <div>Esta es una característica premium que solo los usuarios pagos pueden ver.</div>

};

//NOTE - En el componente proncipal
{!isCreator && <PremiumFeature />}

const App: React.FC = () => {
//REVIEW - Cambia a false para simular un usuario normal
  const [isCreator, setIsCreator] = useState(true);

  const handlePurchase = () => {
    alert('Gracias por tu compra, ahora tienes acceso a todas las funciones premium!');
    //NOTE - Cambia el estado a usuario normal
    setIsCreator(false);
  };

  return (
    <div>
      <h1>¡Hola RoxDev!</h1>
      <p>Bienvenida a tu aplicación React con TypeScript.</p>
      {isCreator ? (
        <p>¡Eres la creadora!, tienes acceso gratuito a todas las funciones.</p>
      ) : (
        <p>Acceso limitado. Necesitas comprar una suscripción para acceder a todas las funciones</p>
      )}
      <button onClick={() => alert('Botón clickeado!')}>Click aquí</button>
      <a href="#">Este es un enlace</a>
      {!isCreator && <PremiumFeature />}
      {!isCreator && <button onClick={handlePurchase}>Comprar Suscripción</button>}
    </div>
  ); 
};

