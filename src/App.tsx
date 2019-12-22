import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './pages/about/About';
import CompanyPage from './pages/company-page/CompanyPage';
import HomePage from './pages/home/HomePage';

const App = () => {
  return (
    <div>
      <Switch>
        {/* If the current URL is /about, this route is rendered
          while the rest are ignored */}
        <Route path="/about">
          <About />
        </Route>

        {/* Note how these two routes are ordered. The more specific
          path="/contact/:id" comes before path="/contact" so that
          route will render when viewing an individual contact */}
        <Route path="/company-page/:id">
          <CompanyPage />
        </Route>

        {/* If none of the previous routes render anything,
          this route acts as a fallback.

          Important: A route with path="/" will *always* match
          the URL because all URLs begin with a /. So that's
          why we put this one last of all */}
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
