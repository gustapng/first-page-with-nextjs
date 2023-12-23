import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text"
import {useTheme} from "@src/theme/ThemeProvider";
export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x900,
        color: theme.colors.neutral.x000,
        width: '100%',
        height: '120px',
        paddingHorizontal: '24px',
        paddingVertical: '24px',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
      }}
    >
      <Text variant="body2">
        Feito por Gustavo Ferreira (gustapng)
      </Text>
    </Box>
  );
}
