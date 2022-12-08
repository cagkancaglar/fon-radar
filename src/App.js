// routes
import ThemeLocalization from './components/ThemeLocalization';
import RtlLayout from './components/RtlLayout';
import Router from './routes';
// theme
import ThemeProvider from './theme';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <ThemeLocalization>
        <RtlLayout>
          <Router />
        </RtlLayout>
      </ThemeLocalization>
    </ThemeProvider>
  );
}
