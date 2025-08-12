import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LoginPage() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="login-container">
      <h1>Luxoria</h1>
      <label>{t('username')}</label>
      <input type="text" placeholder={t('enter_username')} />
      
      <label>{t('password')}</label>
      <input type="password" placeholder={t('enter_password')} />
      
      <button>{t('login')}</button>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('ar')}>عربي</button>
        <button onClick={() => changeLanguage('fr')}>Français</button>
      </div>
    </div>
  );
}
