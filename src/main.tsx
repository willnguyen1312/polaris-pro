import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import React from "react";
import ReactDOM from "react-dom/client";
// import Playground from "./Playground";
import App from "./EmptyState";

// function Input(props) {
//   return <input {...props} />;
// }

// const App = () => {
//   const [value, setValue] = useState("Hi");

//   const renderMe = () => {
//     console.log("renderMe");
//     return (
//       <Input
//         value={value}
//         onChange={(event) => {
//           setValue(event.target.value);
//         }}
//         type="text"
//       />
//     );
//   };

//   return (
//     <>
//       <h1>Hello World</h1>

//       <HappenToMe renderMe={renderMe} />
//     </>
//   );
// };

// function HappenToMe({ renderMe }: any) {
//   return <div>{renderMe()}</div>;
// }

// export default function useForm(defaultState, label) {
//   const [state, setState] = useState(defaultState);

//   const FormComponent = () => {
//     useEffect(() => {
//       console.log("new me");
//     }, []);
//     return (
//       <form>
//         <label htmlFor={label}>
//           {label}
//           <input
//             // type="text"
//             // id={label}
//             // value={state}
//             // placeholder={label}
//             // onChange={(e) => setState(e.target.value)}

//             value={state}
//             onChange={(event) => {
//               setState(event.target.value);
//             }}
//             type="text"
//           />
//         </label>
//       </form>
//     );
//   };

//   return [state, FormComponent, setState];
// }

// function App() {
//   const [formValue, FormComponent] = useForm("San Francisco, CA", "Location");

//   return (
//     <>
//       <h1>{formValue}</h1>
//       <FormComponent />
//     </>
//   );
// }

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider i18n={enTranslations}>
      <App />
    </AppProvider>
  </React.StrictMode>
);
