import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FilterPage } from "./FilterPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
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
            <Route path="/filters">
              <FilterPage />
            </Route>
          </FilterContextProvider>
        </Switch>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
