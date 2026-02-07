import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}

const semanticTokens = {
  colors: {
    'bg.page': { default: '#f0e7db', _dark: '#202023' },
    'bg.card': { default: 'whiteAlpha.700', _dark: 'whiteAlpha.200' },
    'bg.card.hover': { default: 'whiteAlpha.900', _dark: 'whiteAlpha.300' },
    'bg.section': { default: 'whiteAlpha.600', _dark: 'whiteAlpha.100' },
    'bg.navbar': { default: '#ffffff40', _dark: '#20202380' },
    'border.card': { default: 'gray.200', _dark: 'whiteAlpha.300' },
    'border.card.divider': { default: 'gray.100', _dark: 'whiteAlpha.100' },
    'text.secondary': { default: 'gray.600', _dark: 'gray.300' },
    'text.nav': { default: 'gray.800', _dark: 'whiteAlpha.900' }
  }
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca'
}

const breakpoints = {
  sm: '30em',   // 480px — large phones
  md: '48em',   // 768px — tablets
  lg: '62em',   // 992px — laptops
  xl: '80em',   // 1280px — desktops
  '2xl': '96em' // 1536px — large desktops
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  config,
  styles,
  semanticTokens,
  components,
  fonts,
  colors,
  breakpoints
})
export default theme
