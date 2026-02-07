/**
 * SocialLinkButton - A reusable button for social media / web presence links.
 *
 * @param {string}    href        - URL to link to.
 * @param {ReactNode} icon        - Icon displayed on the left side of the button.
 * @param {string}    label       - Visible button text.
 * @param {string}    [colorScheme='teal'] - Chakra UI color scheme.
 */
import { Link, Button, ListItem } from '@chakra-ui/react'

const SocialLinkButton = ({
  href,
  icon,
  label,
  colorScheme = 'teal',
  ...props
}) => (
  <ListItem>
    <Link href={href} target="_blank">
      <Button
        variant="ghost"
        colorScheme={colorScheme}
        leftIcon={icon}
        {...props}
      >
        {label}
      </Button>
    </Link>
  </ListItem>
)

export default SocialLinkButton
