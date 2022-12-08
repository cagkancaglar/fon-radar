import { useTranslation } from 'react-i18next';
// '@mui
import { enUS, trTR, zhTW, heIL } from '@mui/material/locale';

// ----------------------------------------------------------------------

const LANGS = [
  {
    label: 'Türkçe',
    value: 'tr',
    systemValue: trTR,
    icon: '/assets/icons/lang/turkey.png',
  },
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
    icon: '/assets/icons/lang/english.png',
  },
  {
    label: 'Chinese',
    value: 'chs',
    systemValue: zhTW,
    icon: '/assets/icons/lang/chinese.png',
  },
  {
    label: 'Hebrew',
    value: 'he',
    systemValue: heIL,
    icon: '/assets/icons/lang/hebrew.png',
  }
];

export default function useLocales() {
  const { i18n, t: translate } = useTranslation();
  const langStorage = localStorage.getItem('i18nextLng');
  const currentLang = LANGS.find((_lang) => _lang.value === langStorage) || LANGS[0];

  const handleChangeLanguage = (newlang) => {
    i18n.changeLanguage(newlang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate,
    currentLang,
    allLang: LANGS,
  };
}