import React from "react";
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Icon from "@src/components/Icon/Icon";

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
    <Box styleSheet={{
      color: 'white'
    }}>
      <Icon name="youtube" size="xl"/>
      <Icon name="twitter" size="lg"/>
      <Icon name="instagram" />
      <Icon name="github" />
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

