import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  console.log("sayfalar çalıştı");
  return <Component {...pageProps} />;
}
