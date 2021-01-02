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
  IonAlert,
  IonRow,
  IonCol
} from '@ionic/react';

import BmiControls from './components/BmiControls';
import BmiResult from './components/BmiResult';
import InputControls from './components/InputControls';

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
  const [calcUnits, setCalcUnits] = useState<'mkg' | 'ftlbs'>('mkg');

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
    };

    // From lbs to kg : 
    const weightConversionFactor = calcUnits === 'ftlbs' ? 2.2 : 1;
    const weight = +enteredWeight / weightConversionFactor;

    // From feet to meters : 
    const heightConversionFactor = calcUnits === 'ftlbs' ? 3.28 : 1;
    const height = +enteredHeight / heightConversionFactor

    // calculate BMI : 
    height > 100 ? setBmi((+weight / (+height * +height)) * 10000) : setBmi(+weight / (+height * + height));
  };

  const resetInputs = () => {
    // current! : on garantit que la valeur ne sera jamais null 
    heightInputRef.current!.value = '';
    weightInputRef.current!.value = '';
    setBmi(0);
  };

  const selectCalcUnitHandler = (selectedValue: 'mkg' | 'ftlbs') => {
    setCalcUnits(selectedValue);
  };

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
        <IonGrid>
          <IonRow>
            <IonCol>
              <InputControls selectedValue={calcUnits} onSelectValue={selectCalcUnitHandler} />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your height ({calcUnits === 'mkg' ? 'meters' : 'feets'})</IonLabel>
                <IonInput type="number" ref={heightInputRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your weight ({calcUnits === 'mkg' ? 'kg' : 'lbs'})</IonLabel>
                <IonInput type="number" ref={weightInputRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
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
