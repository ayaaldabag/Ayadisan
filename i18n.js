import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "username": "Username",
      "enter_username": "Enter username",
      "password": "Password",
      "enter_password": "Enter password",
      "login": "Login"
    }
  },
  ar: {
    translation: {
      "username": "اسم المستخدم",
      "enter_username": "ادخل اسم المستخدم",
      "password": "كلمة المرور",
      "enter_password": "ادخل كلمة المرور",
      "login": "تسجيل الدخول"
    }
  },
  fr: {
    translation: {
      "username": "Nom d'utilisateur",
      "enter_username": "Entrez le nom d'utilisateur",
      "password": "Mot de passe",
      "enter_password": "Entrez le mot de passe",
      "login": "Connexion"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
