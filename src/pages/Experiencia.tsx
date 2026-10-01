import {
    IonCard,
    IonCardContent,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';

const Experiencia: React.FC = () => {
    return (
    <IonPage>
        <IonHeader>
        <IonToolbar>
            <IonTitle>Experiencia Personal</IonTitle>
        </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">

        <IonCard className="experience-card">
            <IonCardContent>

            <h2>Mi experiencia realizando esta tarea</h2>

            <p className="experience-text">
                En esta tarea pude conocer mejor el funcionamiento de Ionic
                y utilizar React para crear una aplicación móvil con varias
                funcionalidades. Durante el desarrollo trabajé con diferentes
                componentes y aprendí a manejar la navegación entre páginas.
            </p>


            <p className="experience-text">
                También pude practicar la creación de operaciones matemáticas,
                la conversión de números a letras y la generación de tablas de
                multiplicar. Una de las partes más interesantes fue organizar
                todas estas funciones dentro de un mismo menú.
            </p>

            <div className="video-container">
                <iframe
                    src="https://www.youtube.com/embed/NS-03DFifsY"
                    title="Video de referencia"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>

            </IonCardContent>
        </IonCard>

        </IonContent>
    </IonPage>
);
};

export default Experiencia;