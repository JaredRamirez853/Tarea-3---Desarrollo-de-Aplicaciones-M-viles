import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';

import {
  Navigate,
  Route,
  Routes
} from 'react-router-dom';

import { menuController } from '@ionic/core';

import {
  personOutline,
  addCircleOutline,
  textOutline,
  calculatorOutline,
  videocamOutline
} from 'ionicons/icons';

import Inicio from './pages/Inicio';
import Sumadora from './pages/Sumadora';
import NumeroLetras from './pages/NumeroLetras';
import Multiplicacion from './pages/Multiplicacion';
import Experiencia from './pages/Experiencia';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './theme/variables.css';

setupIonicReact();

const menuItems = [
  {
    title: 'Datos personales',
    url: '/inicio',
    icon: personOutline
  },
  {
    title: 'Sumadora',
    url: '/sumadora',
    icon: addCircleOutline
  },
  {
    title: 'Números a letras',
    url: '/numero-letras',
    icon: textOutline
  },
  {
    title: 'Tabla de multiplicar',
    url: '/multiplicacion',
    icon: calculatorOutline
  },
    {
    title: 'Experiencia personal',
    url: '/experiencia',
    icon: videocamOutline
  }
];

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>

        <IonSplitPane contentId="main">

          <IonMenu contentId="main" type="overlay">

            <IonContent>

              <div className="menu-header">
                <h2>Tarea 3</h2>
                <p>Jared Ramirez Sosa - 20251207</p>
              </div>

              <IonList lines="none">

                {menuItems.map((item) => (
                  <IonItem
                    key={item.url}
                    routerLink={item.url}
                    routerDirection="root"
                    detail={false}
                    className="menu-item"
                    onClick={() => menuController.close()}
                  >
                    <IonIcon
                      slot="start"
                      icon={item.icon}
                    />

                    <IonLabel>
                      {item.title}
                    </IonLabel>
                  </IonItem>
                ))}

              </IonList>

            </IonContent>

          </IonMenu>

          <div className="ion-page" id="main">

            <IonToolbar className="main-toolbar">

              <IonMenuButton slot="start" />

              <IonTitle>
                Mi Aplicación
              </IonTitle>

            </IonToolbar>

            <IonRouterOutlet>

              <Routes>

                <Route
                  path="/inicio"
                  element={<Inicio />}
                />

                <Route
                  path="/sumadora"
                  element={<Sumadora />}
                />

                <Route
                  path="/numero-letras"
                  element={<NumeroLetras />}
                />

                <Route
                  path="/multiplicacion"
                  element={<Multiplicacion />}
                />

                <Route
                  path="/experiencia"
                  element={<Experiencia />}
                />

                <Route
                  path="/"
                  element={
                    <Navigate
                      to="/inicio"
                      replace
                    />
                  }
                />

              </Routes>

            </IonRouterOutlet>

          </div>

        </IonSplitPane>

      </IonReactRouter>
    </IonApp>
  );
};

export default App;