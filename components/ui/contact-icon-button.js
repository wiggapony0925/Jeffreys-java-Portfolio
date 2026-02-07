/**
 * ContactIconButton - A reusable tooltip-wrapped icon button for contact actions.
 *
 * @param {string}   label       - Tooltip text and aria-label for accessibility.
 * @param {ReactNode} icon       - The icon element to display inside the button.
 * @param {function} onClick     - Click handler for the button action.
 * @param {string}   [colorScheme='teal'] - Chakra UI color scheme.
 */
import { IconButton, Tooltip } from '@chakra-ui/react'

const ContactIconButton = ({
  label,
  icon,
  onClick,
  colorScheme = 'teal',
  ...props
}) => (
  <Tooltip label={label}>
    <IconButton
      aria-label={label}
      icon={icon}
      colorScheme={colorScheme}
      onClick={onClick}
      {...props}
    />
  </Tooltip>
)

export default ContactIconButton
