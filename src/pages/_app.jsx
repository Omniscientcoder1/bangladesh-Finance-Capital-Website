import "../styles/globals.css";
import Layout from "../components/Layout";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Head from "next/head";

const theme = createTheme({
  palette: {
    primary: { main: "#002244" },
    secondary: { main: "#00c6ff" },
  },
});

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
}