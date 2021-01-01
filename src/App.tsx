import React from 'react';
import { 
  IonApp, 
  IonHeader, 
  IonToolbar, 
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput
} from '@ionic/react';

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

const App: React.FC = () => (
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
        <IonInput></IonInput>
      </IonItem>
    </IonContent>
  </IonApp>
);

export default App;
