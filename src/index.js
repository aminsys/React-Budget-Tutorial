import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import { BudgetsProdivder } from "./Contexts/BudgetContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BudgetsProdivder>
      <App />
    </BudgetsProdivder>
  </React.StrictMode>
);

