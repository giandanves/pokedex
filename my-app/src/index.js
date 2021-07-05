import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TeamsPage } from "./TeamsPage";
import { FavoritesPage } from "./FavoritesPage";
import { SignInPage } from "./SignInPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FilterContextProvider from "./FilterContext";

async function fetcher(key) {
  const response = await fetch(key.queryKey);
  return response.json();
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: fetcher,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <FilterContextProvider>
            <Route path="/" exact>
              <App />
            </Route>
            <Route path="/teams" exact>
              <TeamsPage />
            </Route>
            <Route path="/favorites" exact>
              <FavoritesPage />
            </Route>
            <Route path="/signin" exact>
              <SignInPage />
            </Route>
          </FilterContextProvider>
        </Switch>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
