import { Provider } from 'react-redux';
import store from './configureStore';
import Layout from './components/Layout';
import Main from './components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TripDetailsContainer from './containers/TripDetails';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/:id" element={<TripDetailsContainer />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
