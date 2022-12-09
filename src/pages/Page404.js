import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';
import useLocales from 'src/hooks/useLocales';

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Page404() {
  const {translate} = useLocales();
  
  return (
    <>
      <Helmet>
        <title> 404 Page Not Found | Fon Radar </title>
      </Helmet>

      <Container>
        <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h3" paragraph>
            {translate("404.title")}
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
          {translate("404.desc")}
          </Typography>

          <Box component="img" src="/assets/images/404.jpg" sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }} />

          <Button to="/" size="large" variant="contained" component={RouterLink}>
          {translate("404.button")}
          </Button>
        </StyledContent>
      </Container>
    </>
  );
}
