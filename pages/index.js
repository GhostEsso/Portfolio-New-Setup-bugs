import { useState, useEffect } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
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

  const [_scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToTop = (sectionId = null) => {
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth',
        });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };  

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
          FULL-STACK SOFTWARE DEVELOPER
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Essohanam TAMBANA
            </Heading>
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
        <Section delay={0.5}>
          <Paragraph>
            Full-stack web developer with a backgroung in International Law and Community Law.
            I honed my expertise at Microverse, a remote
            program emphasizing pair programming. Passionate about coding,
            I&apos;m always eager for new challenges and growth opportunities.
          </Paragraph>
        </Section>
        <Section id="work" delay={0.2}>
          <Works />
          <Button onClick={() => scrollToTop('web')}><IoIosArrowDown /></Button>
          <Heading id="tech" as="h3" variant="section-title">
            TECH STACK
          </Heading>
          <BioSection>
            <BioYear>Language:</BioYear>
            HTML, CSS, Ruby, Javascript (ES5/ES6)
          </BioSection>
          <BioSection>
            <BioYear>Frameworks:</BioYear>
            React, Ruby on rails, Rspec, Capibara
          </BioSection>
          <BioSection className="skills-section">
            <BioYear>Skills:</BioYear>
            Database Management, CLI, API Design, Version Control
          </BioSection>

          <Heading as="h3" variant="section-title">
            I ❤️
          </Heading>
          <Paragraph>
            God, Technology, Music, Horror Movies and Gaming <br />
            Football, Anime.
          </Paragraph>
        </Section>
        <Section id="web" delay={0.3}>
          <Heading id="web" as="h3" variant="section-title">
            ON THE WEB
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
          </button> <br />
          <Button onClick={() => scrollToTop('contact')}><IoIosArrowDown /></Button>
        </Section>
        <Section delay={0.4}>
          <Heading id="contact" as="h3" variant="section-title">
            GET STARTED
          </Heading>
          <p>I&apos;m always interested in hearing about new projects, so if you&apos;d like to chat please get in touch.</p>
          <br />
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
        <Button onClick={() => scrollToTop('work')}><IoIosArrowUp /></Button>
      </Container>
    </Layout>
  )
}

export default Page
