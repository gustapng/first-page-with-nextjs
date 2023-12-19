import Box from "@src/components/Box/Box";
import Background from "./patterns/Background/Background";
import Menu from "./patterns/Menu/Menu";
import Text from "@src/components/Text/Text";
import Feed from "@src/screens/HomeScreen/patterns/Feed/Feed";
import Footer from "@src/screens/HomeScreen/patterns/Footer/Footer";

export default function HomeScreen() {
  return (
    <Box tag="main"
     styleSheet={{backgroundColor: 'grey',
                  flex: 1,
                  alignItems: 'center'
                }}
  >
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
