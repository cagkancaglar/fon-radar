// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Müşteri Listesi',
    titleEn: 'Customer List',
    titleCn: '客户名单',
    titleHe: 'רשימת לקוחות',
    path: '/dashboard/app',
    icon: icon('ic_user'),
  }
];

export default navConfig;
