// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ReactFlowProvider } from 'reactflow'; // ✅ import provider

const rootEl = document.getElementById('root');

if (rootEl) {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <ReactFlowProvider> {/* ✅ wrap App */}
        <App />
      </ReactFlowProvider>
    </React.StrictMode>
  );
}
