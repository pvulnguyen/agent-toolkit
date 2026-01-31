import '@mantine/core/styles.css';
import {createTheme, MantineProvider} from '@mantine/core';

const theme = createTheme({
  fontFamily: 'Satoshi, sans-serif',
});

export function App() {
  return (
    <MantineProvider theme={theme}>
      <div>Hello, World!</div>;
    </MantineProvider>
  );
}
