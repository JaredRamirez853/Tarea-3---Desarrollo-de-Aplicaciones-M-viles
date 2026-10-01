import {
    IonCard,
    IonCardContent,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';

const Inicio: React.FC = () => {
    return (
    <IonPage>
        <IonHeader>
        <IonToolbar>
            <IonTitle>Datos personales</IonTitle>
        </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
        <IonCard className="profile-card">
            <IonCardContent>

            <img
                src="/assets/Foto.jpg"
                alt="Foto de perfil"
                className="profile-image"
            />

            <h1>Jared Ramirez Sosa</h1>

            <p className="profile-email">
                ramirezjared853@gmail.com
            </p>

            </IonCardContent>
        </IonCard>
        </IonContent>
    </IonPage>
    );
};

export default Inicio;