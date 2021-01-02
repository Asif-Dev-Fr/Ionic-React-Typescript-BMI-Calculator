import React from 'react';
import { IonSegmentButton, IonLabel, IonSegment } from '@ionic/react';

const InputControls: React.FC<{
    selectedValue: "mkg" | "ftlbs"; 
    onSelectValue: (value: "mkg" | "ftlbs") => void;
}> = ({selectedValue, onSelectValue}) => {

    const inputChangeHangler = (event: CustomEvent) => {
        onSelectValue(event.detail.value);
    } 

    return(
        <IonSegment value={selectedValue} onIonChange={inputChangeHangler}>
            <IonSegmentButton value="mkg">
                <IonLabel>
                    m/kg
                </IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="ftlbs">
                <IonLabel>
                    ft/lbs
                </IonLabel>
            </IonSegmentButton>
        </IonSegment>
    )
}

export default InputControls;