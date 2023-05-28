import {
  AppShell,
  Burger,
  Button,
  ColorScheme,
  ColorSchemeProvider,
  Header,
  MantineProvider,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CgCalculator } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import { BsBarChartLine, BsPlusCircle } from "react-icons/bs";
import NavigationLink from "./NavigationLink";
import DarkLightThemeButton from "./DarkLightThemeButton";
import HomePage from "../pages/HomePage";
import { useLocalStorage } from "@mantine/hooks";
import AddExpensePage from "../pages/AddExpensePage";
import AddBudgetPage from "../pages/AddBudgetPage";

type HistoryElement = {
  id: string;
  label: string;
  amount: number;
  type: string;
};

const MainAppShell = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "theme",
    defaultValue: "dark",
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    // Handles providing the correct color scheme to child elements
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <BrowserRouter>
          <AppShell
            styles={(theme) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
              },
            })}
            navbarOffsetBreakpoint="lg"
            asideOffsetBreakpoint="md"
            navbar={
              <Navbar
                p="md"
                hiddenBreakpoint="lg"
                hidden={!opened}
                width={{ sm: 250, lg: 350 }}
              >
                <NavigationLink
                  label="Home"
                  icon={<AiOutlineHome />}
                  link="/"
                />
                <NavigationLink
                  label="Add an Expense"
                  icon={<BsPlusCircle />}
                  link="/newExpense"
                />
                <NavigationLink
                  label="Add / Update Your Budget"
                  icon={<MdAttachMoney />}
                  link="/newBudget"
                />
                <NavigationLink
                  label="View Spending in Categories"
                  icon={<BsBarChartLine />}
                  link="/categories"
                />
              </Navbar>
            }
            header={
              <Header
                height={{ base: 50, md: 70 }}
                p="md"
                sx={(theme) => ({
                  color:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[1]
                      : theme.colors.gray[9],
                  fontSize: "25px",
                })}
              >
                <div className="flex items-center justify-between h-full">
                  <MediaQuery largerThan="lg" styles={{ display: "none" }}>
                    <Burger
                      opened={opened}
                      onClick={() => setOpened((o) => !o)}
                      size="sm"
                      color={theme.colors.gray[6]}
                      mr="xl"
                    />
                  </MediaQuery>
                  <div className="flex items-center h-full">
                    <CgCalculator />
                    <Text className="text-lg md:text-2xl" ml={10}>
                      My Expense Tracker
                    </Text>
                  </div>
                  <DarkLightThemeButton />
                </div>
              </Header>
            }
          >
            {/* Handle Routing */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/newExpense" element={<AddExpensePage />} />
              <Route path="/newBudget" element={<AddBudgetPage />} />
            </Routes>
          </AppShell>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default MainAppShell;
