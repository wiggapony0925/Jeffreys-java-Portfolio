import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'



const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Jeffrey Fernandez — Software Engineer at JPMorgan Chase. Portfolio showcasing full-stack projects, AWS cloud work, and scalable web applications." />
        <meta name="author" content="Jeffrey Fernandez" />
        <meta name="keywords" content="Jeffrey Fernandez, Software Engineer, JPMorgan Chase, Portfolio, React, Next.js, AWS, Full-Stack Developer, PurePay, John Jay College" />
        <link rel="apple-touch-icon" href="/images/logo_icon.png" />
        <link rel="shortcut icon" href="/images/logo_icon.png" type="image/x-icon" />
        <meta name="twitter:title" content="Jeffrey Fernandez — Software Engineer" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@JeffreyF0925" />
        <meta name="twitter:creator" content="@JeffreyF0925" />
        <meta name="twitter:image" content="/images/card.png" />
        <meta name="twitter:description" content="Software Engineer at JPMorgan Chase. Explore my portfolio of full-stack projects, AWS cloud work, and scalable web applications." />
        <meta property="og:site_name" content="Jeffrey Fernandez" />
        <meta property="og:title" content="Jeffrey Fernandez — Software Engineer Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/card.png" />
        <meta property="og:description" content="Software Engineer at JPMorgan Chase. Explore my portfolio of full-stack projects, AWS cloud work, and scalable web applications." />
        <title>Jeffrey Fernandez — Software Engineer Portfolio</title>
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
