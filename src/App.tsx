import { AppProvider, Button, ButtonGroup } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";

export default function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <ButtonGroup gap="loose">
        <Button
          children="Hi Polaris 💞"
          size="medium"
          textAlign="center"
          tone="success"
          variant="primary"
        />
      </ButtonGroup>
    </AppProvider>
  );
}
