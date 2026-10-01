import { useState } from 'react';

import {
    IonButton,
    IonCard,
    IonCardContent,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';

const Sumadora: React.FC = () => {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [resultado, setResultado] = useState<number | null>(null);

    const sumar = () => {
        const n1 = Number(numero1);
        const n2 = Number(numero2);

        setResultado(n1 + n2);
    };

    return (
    <IonPage>
        <IonHeader>
        <IonToolbar>
            <IonTitle>Sumadora</IonTitle>
        </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">

        <IonCard>
            <IonCardContent>

            <IonItem>
                <IonLabel position="stacked">Primer número</IonLabel>
                <IonInput
                type="number"
                value={numero1}
                placeholder="Escribe un número"
                onIonInput={(e) =>
                    setNumero1(e.detail.value ?? '')
                }
                />
            </IonItem>

            <IonItem>
                <IonLabel position="stacked">Segundo número</IonLabel>
                <IonInput
                type="number"
                value={numero2}
                placeholder="Escribe un número"
                onIonInput={(e) =>
                    setNumero2(e.detail.value ?? '')
                }
                />
            </IonItem>

            <IonButton
                expand="block"
                className="main-button"
                onClick={sumar}
            >
                Sumar
            </IonButton>

            {resultado !== null && (
                <div className="result-box">
                <p>Resultado</p>
                <strong>{resultado}</strong>
                </div>
            )}

            </IonCardContent>
        </IonCard>

        </IonContent>
        </IonPage>
    );
};

export default Sumadora;