import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import React from "react";
import ReactDOM from "react-dom/client";

// const data: number[] = [1, 2, 3];
// const App = () => {
//   return (
//     <>
//       <h1>Hello array</h1>

//       {data.map((item) => (
//         <p key={item}>{item}</p>
//       ))}
//     </>
//   );
// };

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider i18n={enTranslations}>
      <main>
        <h1>Setting the Exposure Manually on a Camera</h1>
        <h2>Set the ISO</h2>
      </main>
    </AppProvider>
  </React.StrictMode>
);
