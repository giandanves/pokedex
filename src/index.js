import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import TeamsPage from "./pages/TeamsPage";
import FavoritesPage from "./pages/FavoritesPage";
import SignPage from "./pages/SignPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FilterContextProvider from "./FilterContext";
import AuthProvider from "./Authentication";
import { Navbar } from "./components/Navbar";
import { NavbarMobile } from "./components/NavbarMobile";
import PokemonPageIndex from "./pages/PokemonPageIndex.js";
import history from "./history";

async function fetcher(key) {
  let error;
  const response = await fetch(key.queryKey);
  if (!response.ok) {
    error = response.status;
    throw error;
  }
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
      <Router history={history}>
        <Switch>
          <AuthProvider>
            <FilterContextProvider>
              <Navbar />
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/teams" exact>
                <TeamsPage />
              </Route>
              <Route path="/favorites" exact>
                <FavoritesPage />
              </Route>
              <Route path="/signin" exact>
                <SignPage />
              </Route>
              <Route
                path="/pokemon/:name"
                children={<PokemonPageIndex />}
              ></Route>

              <NavbarMobile />
            </FilterContextProvider>
          </AuthProvider>
        </Switch>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
