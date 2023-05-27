import { Paper } from "@mantine/core";
import { MantineProvider } from "@mantine/core";
import MainAppShell from "./components/MainAppShell";

export default function App() {
  return (
    // Global styles
    <MantineProvider
      theme={{
        fontFamily: "open-sans",
        colorScheme: "dark",
      }}
    >
      <Paper>
        <MainAppShell />
      </Paper>
    </MantineProvider>
  );
}
