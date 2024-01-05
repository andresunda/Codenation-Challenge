import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

function Page() {
  const [showWarning, setShowWarning] = useState(true);

  const handleToggleClick = () => {
    setShowWarning(prevShowWarning => !prevShowWarning);
  };

  return (
    <div>
      <WarningBanner warn={showWarning} />
      <button onClick={handleToggleClick}>
        {showWarning ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}


function App() {
  return (
    <>
    <Page/>
    </>
  );
}

export default App;


/*Conditional-rendering in English
Technique in React that allows different components or elements to be rendered based on a condition.
Conditional rendering in this example allows you to show or hide a warning message depending on whether a state (showWarning) 
is true or false, thus controlling the visibility of the message based on user interaction.
*/

/*Conditional-rendering en Español
Técnica en React que permite renderizar diferentes componentes o elementos en función de una condición.
El conditional rendering en este ejemplo permite mostrar u ocultar un mensaje de advertencia en función de si un estado (showWarning) 
es verdadero o falso, controlando así la visibilidad del mensaje según la interacción del usuario.
*/