import { useState, useEffect } from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import {
  Box,
  Container,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Icon,
  List,
  ListItem,
  Button
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io'
import React from 'react'
import Works from './works'

const Page = () => {
  const downloadResume = () => {
    const resumeUrl =
      'https://www.dropbox.com/scl/fi/iny6s6fcqksbwtq7j1t4n/Essohanam_Tambana_Resume.pdf?rlkey=bsyft4rpuhij2bbs9d79eqfvt&dl=0'
    window.open(resumeUrl, '_blank')
  }

  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const showBackToToButton = scrollPosition > 200

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello I&apos;m a fullstack developer based in Togo 🇹🇬
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Essohanam TAMBANA
            </Heading>
            <p>Full Stack Developer </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 3, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="image.png"
              alt="image Photo"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading id="work" as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Hi, I'm Essohanam, a full-stack software engineer skilled in
            Javascript and React. I honed my expertise at Microverse, a remote
            program emphasizing pair programming. As a Frontend Developer, I
            delivered strong projects, gaining experience in corporate
            collaboration and meeting tight deadlines. Passionate about coding,
            I'm always eager for new challenges and growth opportunities.
          </Paragraph>
        </Section>
        <Works />

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Tech Stack
          </Heading>
          <BioSection>
            <BioYear>Language:</BioYear>
            HTML5, CSS3, Javascript, Ruby, PostgreSql.
          </BioSection>
          <BioSection>
            <BioYear>Frameworks:</BioYear>
            React, Rails, Tailwind, Bootstrap, Sass.
          </BioSection>
          <BioSection>
            <BioYear>Proficiencies:</BioYear>
            Git, GitHub, Chrome Dev Tools.
          </BioSection>
        </Section>
        <Section delay={0.2}>
          <Heading id="bio" as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2016</BioYear>
            Bachelor degree in International Law and Community Law.
          </BioSection>
          <BioSection>
            <BioYear>2016 - present</BioYear>
            Technician, Designer: Maintained IT systems for various clients,
            specializing in operating system installations and antivirus
            updates. Created custom logos for clients businesses to enhance
            their brand identities.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            In 2022, I began developing an interest in programming 🖥️ and
            started self-teaching myself.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Started Microverse. A remote software development program that uses
            pair programming and project building to teach development.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Graduated as a Full-Stack software engineer.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ❤️
          </Heading>
          <Paragraph>
            God, Technology, Music, Horror Movies and Gaming <br />
            Football, Anime.
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/GhostEsso" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @GhostEsso
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/essohanam-tambana/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @Essohanam_Tambana
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://x.com/TambanaEssohana?t=4FF84aFOHgOplULHvz-6pQ&s=09"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @essohana_tambana
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/phil_essohanam"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @phil_essohanam
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
        <Section delay={0.5}>
          <button
            onClick={downloadResume}
            style={{
              padding: '10px 20px',
              borderRadius: '5px',
              border: 'none',
              background: '#007bff',
              color: '#fff',
              fontSize: '16px',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'background 0.3s ease'
            }}
          >
            Get my Resume
          </button>
        </Section>
        <Section id="contact" delay={0.4}>
          <Heading id="contact" as="h3" variant="section-title">
            Contact Me
          </Heading>
          <form
            id="form"
            action="https://formspree.io/f/myyawnzb"
            method="post"
            style={{ maxWidth: '400px', margin: '0 auto' }}
          >
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              style={{
                padding: '8px',
                marginBottom: '16px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                width: '100%',
                boxSizing: 'border-box',
                color: 'black'
              }}
              placeholder="Enter your name"
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              style={{
                padding: '8px',
                marginBottom: '16px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                width: '100%',
                boxSizing: 'border-box',
                color: 'black'
              }}
              placeholder="Enter your email"
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              required
              style={{
                padding: '8px',
                marginBottom: '16px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                width: '100%',
                height: '100px',
                resize: 'vertical',
                boxSizing: 'border-box',
                color: 'black'
              }}
              placeholder="Enter your message"
            ></textarea>

            <button
              type="submit"
              style={{
                padding: '8px 16px',
                borderRadius: '4px',
                border: 'none',
                background: '#007bff',
                color: '#fff',
                cursor: 'pointer',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              Submit
            </button>
          </form>
        </Section>
        {showBackToToButton && (
          <Button
            onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              borderRadius: '5px',
              background: '#007bff',
              color: '#fff',
              fontSize: '16px',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'background 0.3s ease'
            }}
          >
            <IoIosArrowUp />
          </Button>
        )}
      </Container>
    </Layout>
  )
}

export default Page
