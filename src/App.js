import React, { Component, Fragment } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navigation />

          <Switch>
            <Route exact path="/faq" component={Faq} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

const Navigation = () => (
  <ul>
    <li>
      <Link to="/">Dashboard</Link>
    </li>
    <li>
      <Link to="/faq">FAQ</Link>
    </li>
  </ul>
);

const Faq = () => <h1>FAQ</h1>;

// Nested Routes
const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>

    <Switch>
      <Route exact path="/step-one" component={StepOne} />
      <Route exact path="/step-two" component={StepTwo} />
      <Route path="/" component={StepZero} />
    </Switch>
  </div>
);

// Declarative Navigation
const StepZero = () => (
  <div>
    <h2>Status: Step Zero</h2>

    <Link to="/step-one">Declarative navigation to Step 1</Link>
  </div>
);

// Programmatic Navigation
const StepOne = ({ history }) => (
  <div>
    <h2>Status: Step One</h2>

    <button onClick={() => history.push('/step-two')} type="button">
      Programmatic navigation to Step 2
    </button>
  </div>
);

const StepTwo = () => <h2>Status: Step Two</h2>;

export default App;
