import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';

const App = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/wizard/*" element={<Wizard />} />
    </Routes>
  </Router>
);

const Navigation = () => (
  <ul>
    <li>
      <Link to="/">Dashboard</Link>
    </li>
    <li>
      <Link to="/wizard">Wizard</Link>
    </li>
  </ul>
);

const Dashboard = () => <h1>Dashboard</h1>;

// Nested Routes
const Wizard = () => (
  <div>
    <h1>Wizard</h1>

    <Routes>
      <Route path="/" element={<StepZero />} />
      <Route path="/step-one" element={<StepOne />} />
    </Routes>
  </div>
);

// Declarative Navigation
const StepZero = () => (
  <div>
    <h2>Status: Step Zero</h2>

    <Link to="/wizard/step-one">
      Declarative navigation to Step 1
    </Link>
  </div>
);

// Programmatic Navigation
const StepOne = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Status: Step One</h2>

      <button onClick={() => navigate('/wizard')} type="button">
        Programmatic navigation to Step 0
      </button>
    </div>
  );
};

export default App;
