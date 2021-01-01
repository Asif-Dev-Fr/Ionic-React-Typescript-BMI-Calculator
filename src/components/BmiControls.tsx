import React from 'react';
import {
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
} from '@ionic/react';

// Import of Ionic Icons :
import { calculator, refreshCircleOutline } from 'ionicons/icons';

const BmiControls: React.FC<{
    onCalculate: () => void; 
    onReset: () => void}> = ({onCalculate, onReset}) => {
    return (
        <React.Fragment>
            <IonRow>
                <IonCol size='12'>
                    <IonButton color="warning" expand="full" shape="round" onClick={onCalculate}>
                        <IonIcon slot="end" icon={calculator} />
              Calculate
            </IonButton>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol size='12'>
                    <IonButton color="dark" expand="full" shape="round" fill="outline" onClick={onReset}>
                        <IonIcon slot="end" icon={refreshCircleOutline} />
              Reset
            </IonButton>
                </IonCol>
            </IonRow>
        </React.Fragment>
    )
}

export default BmiControls;