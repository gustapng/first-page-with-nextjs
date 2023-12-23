import React from "react";
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";
import Link from "@src/components/Link/Link";
import Button from "@src/components/Button/Button";
import {useTheme} from "@src/theme/ThemeProvider";

interface FeedProps {
  children: React.ReactNode;
}
export default function Feed({ children }) {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        marginTop: '-228px',
        width: '100%',
        maxWidth: '683px',
        borderRadius: '8px',
        paddingVertical: '40px',
        paddingHorizontal: '32px',
        boxShadow: '#959da533 0px 8px 24px'
      }}
    >
      {children}
    </Box>
  )
}

Feed.Header = () => {
  const theme = useTheme();

  return (
    <Box
      styleSheet={{
        borderBottom: `1px solid ${theme.colors.neutral.x200}`,
        marginBottom: '24px',
      }}
    >
      <Box
        styleSheet={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '16px',
        }}
      >
        <Image
          src="https://github.com/gustapng.png"
          alt="Imagem de perfil do Github"
          styleSheet={{
            width: { xs: '100px', md: '128px'},
            height: { xs: '100px', md: '128px'},
            borderRadius: '100%'
          }}
        />

        <Box
          styleSheet={{
            justifyContent: 'space-between'
          }}
        >
          <Box styleSheet={{flex: 1, justifyContent: 'space-between', display: {xs: 'none', md: 'flex'}}}>
            <Button fullWidth colorVariant="primary" size="xl">Newsletter</Button>
            <Button fullWidth colorVariant="neutral" size="xl">Buy me a coffe</Button>
          </Box>
          <Box styleSheet={{flex: 1, justifyContent: 'space-between', display: {xs: 'flex', md: 'none'}}}>
            <Button fullWidth colorVariant="primary" size="xs">Newsletter</Button>
            <Button fullWidth colorVariant="neutral" size="xs">Buy me a coffe</Button>
          </Box>
        </Box>
      </Box>
      <Text tag="h1" variant="heading4">
        Gustavo Ferreira
      </Text>

      {/*<Icon name="youtube" />*/}
      {/*<Icon name="twitter" />*/}
      {/*<Icon name="instagram" />*/}
      {/*<Link href="https://github.com/gustapng">*/}
      {/*  <Icon name="github" />*/}
      {/*</Link>*/}
      {/*<Icon name="linkedin" />*/}
      {/*<Text>*/}
      {/*  Feed Header*/}
      {/*</Text>*/}
    </Box>
  )
}

Feed.Posts = () => {
  return (
    <Box>
      <Text>
        Feed Posts
      </Text>
    </Box>
  )
}

