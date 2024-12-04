import './app.css';
import { CoreModels } from '@kosdev-code/kos-ui-sdk';
import {
  ErrorBoundaryWithFallback,
  initKosProvider,
  LoadingMessage,
  getLogLevel,
} from '@kosdev-code/kos-ui-sdk';
import type { IKosRegistry } from '@kosdev-code/kos-ui-sdk';
import log from 'loglevel';
import { Suspense } from 'react';
import { Registry } from '../registration';
import { DispenserView } from './components/dispenser-view';

const level = getLogLevel();

log.setLevel(level);

const { KosCoreContextProvider } = initKosProvider(Registry);

const App = () => (
  <ErrorBoundaryWithFallback>
    <Suspense fallback={<LoadingMessage></LoadingMessage>}>
      <KosCoreContextProvider>
        <div className="App">
          <DispenserView></DispenserView>
        </div>
      </KosCoreContextProvider>
    </Suspense>
  </ErrorBoundaryWithFallback>
);

export default App;
