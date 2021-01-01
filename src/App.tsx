import React, { useState, useRef } from 'react';
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonGrid,
  IonAlert
} from '@ionic/react';

import BmiControls from './components/BmiControls';
import BmiResult from './components/BmiResult';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {

  const [bmi, setBmi] = useState<number>(0);
  const [error, setError] = useState<string>();

  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);

  const calculateBMI = () => {
    // current? : vérifie si la propriété n'est pas null 
    const enteredHeight = heightInputRef.current ? heightInputRef.current.value : null;
    const enteredWeight = weightInputRef.current?.value;

    if (
      !enteredHeight ||
      !enteredWeight ||
      +enteredHeight <= 0 ||
      +enteredWeight <= 0) {
        setError('Please enter a valid input number');
      return;
    }

    enteredHeight > 100 ? setBmi((+enteredWeight / (+enteredHeight * +enteredHeight)) * 10000) : setBmi(+enteredWeight / (+enteredHeight * + enteredHeight));
  }

  const resetInputs = () => {
    // current! : on garantit que la valeur ne sera jamais null 
    heightInputRef.current!.value = '';
    weightInputRef.current!.value = '';
    setBmi(0);
  }

  return (
    <React.Fragment>
      <IonAlert 
        isOpen={!!error} 
        message={error} 
        buttons={[{text: 'Close', handler: () => {
          setError('');
        }}]} 
      />
      <IonApp>
        <IonHeader>
          <IonToolbar color="warning">
            <IonTitle className="ion-text-center">
              Calculate your BMI
        </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonItem>
            <IonLabel position="floating">Your height (meters)</IonLabel>
            <IonInput type="number" ref={heightInputRef}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Your weight (kg)</IonLabel>
            <IonInput type="number" ref={weightInputRef}></IonInput>
          </IonItem>
          <IonGrid>
            <BmiControls onCalculate={calculateBMI} onReset={resetInputs} />
            {
              bmi !== 0 ? <BmiResult resultBmi={bmi} /> : null
            }
          </IonGrid>
        </IonContent>
      </IonApp>
    </React.Fragment>
  )
};

export default App;
