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
    IonList,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';

const Multiplicacion: React.FC = () => {
    const [numero, setNumero] = useState('');
    const [tabla, setTabla] = useState<number[]>([]);

    const mostrarTabla = () => {
        const valor = Number(numero);

    if (!Number.isFinite(valor)) {
        setTabla([]);
        return;
    }

    const resultados = [];

    for (let i = 1; i <= 13; i++) {
      resultados.push(valor * i);
    }

    setTabla(resultados);
    };

return (
    <IonPage>
        <IonHeader>
        <IonToolbar>
            <IonTitle>Tabla de multiplicar</IonTitle>
        </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">

        <IonCard>
            <IonCardContent>

            <IonItem>
                <IonLabel position="stacked">
                Número
                </IonLabel>

                <IonInput
                type="number"
                placeholder="Ejemplo: 7"
                value={numero}
                onIonInput={(e) =>
                    setNumero(e.detail.value ?? '')
                }
                />
            </IonItem>

            <IonButton
                expand="block"
                className="main-button"
                onClick={mostrarTabla}
            >
                Mostrar tabla
            </IonButton>

            {tabla.length > 0 && (
                <IonList className="multiplication-list">
                {tabla.map((resultado, index) => (
                    <IonItem key={index}>
                    <IonLabel>
                        {numero} × {index + 1} = {resultado}
                    </IonLabel>
                    </IonItem>
                ))}
                </IonList>
            )}

            </IonCardContent>
        </IonCard>

        </IonContent>
    </IonPage>
    );
};

export default Multiplicacion;