import React, {useState, useRef} from 'react';
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
  IonRow,
  IonCol,
  IonButton,
  IonIcon
} from '@ionic/react';

// Import of Ionic Icons :
import { calculator, refreshCircleOutline } from 'ionicons/icons'; 

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

  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);

  const calculateBMI = () => {
    // current? : vérifie si la propriété n'est pas null 
    const enteredHeight = heightInputRef.current ? heightInputRef.current.value : null ;
    const enteredWeight = weightInputRef.current?.value;

    if(!enteredHeight || !enteredWeight) {
      return;
    }

    const bmi = +enteredWeight / (+enteredHeight * +enteredHeight);

    console.log(bmi)

  }

  const resetInputs = () => {
    // current! : on garantit que la valeur ne sera jamais null 
    heightInputRef.current!.value = '';
    weightInputRef.current!.value = '';

  }

  return(
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
        <IonInput ref={heightInputRef}></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Your weight (kg)</IonLabel>
        <IonInput ref={weightInputRef}></IonInput>
      </IonItem>
      <IonGrid>
        <IonRow>
          <IonCol size='12'>
            <IonButton color="warning" expand="full" shape="round" onClick={calculateBMI}>
              <IonIcon slot="end" icon={calculator}/>
              Calculate
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size='12'>
            <IonButton color="dark" expand="full" shape="round" fill="outline" onClick={resetInputs}>
              <IonIcon slot="end" icon={refreshCircleOutline}/>
              Reset
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol></IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonApp>
  )
};

export default App;
