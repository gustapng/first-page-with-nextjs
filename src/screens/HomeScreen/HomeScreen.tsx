import { useTheme } from "@src/theme/ThemeProvider";
import Box from "@src/components/Box/Box";
import Background from "./patterns/Background/Background";
import Menu from "./patterns/Menu/Menu";
import Text from "@src/components/Text/Text";
import Feed from "@src/screens/HomeScreen/patterns/Feed/Feed";
import Footer from "@src/screens/HomeScreen/patterns/Footer/Footer";
import Link from "@src/components/Link/Link";

export default function HomeScreen() {
  const theme = useTheme();
  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.neutral.x400,
        flex: 1,
        alignItems: 'center'
      }}
    >
    <Link colorVariant="accent" href="/sobre">
      Vá para uma página sobre
    </Link>
    <Link href="https://google.com">
      Ir para o google
    </Link>
    <Background />
    <Menu />
    <Feed>
      <Feed.Header />
        <Text tag="h1" variant="display1">
          Últimas Atualizações
        </Text>
        <Feed.Posts />
     </Feed>
     <Footer />
  </Box>
  );
}
