import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Container } from '@mui/material';
// sections
import { AppWidgetSummary } from '../sections/app';
import CustomerList from '../sections/app/CustomerList';
import useLocales from 'src/hooks/useLocales';


// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const {translate} = useLocales();

  return (
    <>
      <Helmet>
        <title> Panel | Fon Radar </title>
      </Helmet>

      <Container maxWidth="xl">

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title={translate("Panel.cardTitle")} total={714000} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title={translate("Panel.cardTitle2")} total={1352831} color="info" icon={'ant-design:apple-filled'} />
          </Grid>
 
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title={translate("Panel.cardTitle3")} total={1723315} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title={translate("Panel.cardTitle4")} total={234} color="error" icon={'ant-design:bug-filled'} />
          </Grid>

          <Grid item xs={12}>
            <CustomerList/>
          </Grid>

        </Grid>
      </Container>
    </>
  );
}
