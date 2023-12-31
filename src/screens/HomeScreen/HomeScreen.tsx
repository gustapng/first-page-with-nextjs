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
        backgroundColor: theme.colors.neutral.x000,
        flex: 1,
        alignItems: 'center'
      }}
    >
  <Background />
  <Menu />
  <Feed>
    <Feed.Header />
  </Feed>
 <Footer />
  </Box>
  )
}
