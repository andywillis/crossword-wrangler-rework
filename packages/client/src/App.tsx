import { Router, Route } from 'preact-router';

import Layout from './layouts';

import Calendar from './components/Calendar';
import Content from './components/Content';
import Error from './components/Error';
import Footer from './components/Footer';
import Header from './components/Header';
import Help from './components/Help';
import Main from './components/Main';

function App() {
  return (
    <Layout>
      <Header />
      <Content>
        <Router>
          <Route path="/calendar" component={Calendar} />
          <Route path="/help" component={Help} />
          <Route path="/" component={Main} />
          <Route path="404" component={Error} default />
        </Router>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
