import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import NoSsr from '../no-ssr.js'
import GamingSetup from '../gaming-setup.js'
import Footer from '../footer.js'


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Essohanam TAMBANA's homepage" />
        <meta name="author" content="Essohanam TAMBANA" />
        <meta name="author" content="Essohanam TAMBANA" />
        <link rel="apple-touch-icon" href="image.png" />
        <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@essohanamtambana_" />
        <meta name="twitter:creator" content="@essohanamtambana_" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Essohanam TAMBANA's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Essohanam TAMBANA - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
      <NoSsr>
        <GamingSetup />
      </NoSsr>
          {children}
          <Footer/>
      </Container>
    </Box>
  )
}

export default Main