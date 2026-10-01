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

const unidades = [
    '',
    'uno',
    'dos',
    'tres',
    'cuatro',
    'cinco',
    'seis',
    'siete',
    'ocho',
    'nueve'
];

const especiales = [
    'diez',
    'once',
    'doce',
    'trece',
    'catorce',
    'quince',
    'dieciséis',
    'diecisiete',
    'dieciocho',
    'diecinueve'
];

const veintenas = [
    'veinte',
    'veintiuno',
    'veintidós',
    'veintitrés',
    'veinticuatro',
    'veinticinco',
    'veintiséis',
    'veintisiete',
    'veintiocho',
    'veintinueve'
];

const decenas = [
    '',
    '',
    'veinte',
    'treinta',
    'cuarenta',
    'cincuenta',
    'sesenta',
    'setenta',
    'ochenta',
    'noventa'
];

const centenas = [
    '',
    'ciento',
    'doscientos',
    'trescientos',
    'cuatrocientos',
    'quinientos',
    'seiscientos',
    'setecientos',
    'ochocientos',
    'novecientos'
];

const numeroALetras = (numero: number): string => {
    if (numero === 1000) {
        return 'mil';
    }

    if (numero < 10) {
        return unidades[numero];
    }

    if (numero < 20) {
        return especiales[numero - 10];
    }

    if (numero < 30) {
        return veintenas[numero - 20];
    }

    if (numero < 100) {
    const decena = Math.floor(numero / 10);
    const unidad = numero % 10;

    if (unidad === 0) {
        return decenas[decena];
    }

    return `${decenas[decena]} y ${unidades[unidad]}`;
    }

    if (numero === 100) {
    return 'cien';
    }

    const centena = Math.floor(numero / 100);
    const resto = numero % 100;

    if (resto === 0) {
    return centenas[centena];
    }

    return `${centenas[centena]} ${numeroALetras(resto)}`;
};

const NumeroLetras: React.FC = () => {
    const [numero, setNumero] = useState('');
    const [resultado, setResultado] = useState('');

    const convertir = () => {
    const valor = Number(numero);

    if (!Number.isInteger(valor) || valor < 1 || valor > 1000) {
        setResultado('Ingresa un número entero entre 1 y 1000.');
        return;
    }

    const texto = numeroALetras(valor);

    setResultado(
        texto.charAt(0).toUpperCase() + texto.slice(1)
        );
    };

    return (
    <IonPage>
        <IonHeader>
        <IonToolbar>
            <IonTitle>Números a letras</IonTitle>
        </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">

        <IonCard>
            <IonCardContent>

            <IonItem>
                <IonLabel position="stacked">
                Número del 1 al 1000
                </IonLabel>

                <IonInput
                type="number"
                min="1"
                max="1000"
                placeholder="Ejemplo: 125"
                value={numero}
                onIonInput={(e) =>
                    setNumero(e.detail.value ?? '')
                }
                />
            </IonItem>

            <IonButton
                expand="block"
                className="main-button"
                onClick={convertir}
            >
                Convertir
            </IonButton>

            {resultado && (
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

export default NumeroLetras;