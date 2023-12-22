import React from "react";
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";
import Link from "@src/components/Link/Link";
import Button from "@src/components/Button/Button";

interface FeedProps {
  children: React.ReactNode;
}
export default function Feed({ children }) {
  return (
      <Box>
        <Text>
          Feed Base
        </Text>
        {children}
      </Box>
    )
}

Feed.Header = () => {
  return (
    <Box>
      <Button.Base>
        <Image
          src="https://github.com/gustapng.png"
          alt="Imagem de perfil do Github"
          styleSheet={{
            width: '128px',
            height: '128px',
            borderRadius: '100%'
          }}
        />
      </Button.Base>
      <Icon name="youtube" />
      <Icon name="twitter" />
      <Icon name="instagram" />
      <Link href="https://github.com/gustapng">
        <Icon name="github" />
      </Link>
      {/*<Icon name="linkedin" />*/}
      <Text>
        Feed Header
      </Text>
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

