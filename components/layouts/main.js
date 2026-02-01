import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'



const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Jeffrey's homepage" />
        <meta name="author" content="Jeffrey Fernandez" />
        <link rel="apple-touch-icon" href="/images/logo_icon.png" />
        <link rel="shortcut icon" href="/images/logo_icon.png" type="image/x-icon" />
        <meta name="twitter:title" content="Jeffrey Fernandez" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@JeffreyF0925" />
        <meta name="twitter:creator" content="@JeffreyF0925" />
        <meta name="twitter:image" content="/images/card.png" />
        <meta property="og:site_name" content="Jeffrey Fernandez" />
        <meta name="og:title" content="Jeffrey Fernandez" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/card.png" />
        <title>Jeffrey Fernandez - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>


        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
