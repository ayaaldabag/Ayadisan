import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import './i18n';
import LoginPage from './LoginPage';

const root = createRoot(document.getElementById('root'));
root.render(<LoginPage />);
