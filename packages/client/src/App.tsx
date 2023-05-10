import { Router, Route } from 'preact-router';

import Layout from './layout';

import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './layout/Main';

import Calendar from './pages/Calendar';
import Error from './pages/Error';
import Help from './pages/Help';
import Home from './pages/Home';

function App() {
  return (
    <Layout>
      <Header />
      <Main>
        <Router>
          <Route path="/calendar" component={Calendar} />
          <Route path="/help" component={Help} />
          <Route path="/" component={Home} />
          <Route path="404" component={Error} default />
        </Router>
      </Main>
      <Footer />
    </Layout>
  );
}

export default App;
