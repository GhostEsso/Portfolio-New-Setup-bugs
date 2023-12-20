import { Box, Container, Heading, Image, useColorModeValue, Link, Icon, List, ListItem, Button } from "@chakra-ui/react"
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io';
import React from 'react';

const Page = () => {

  const downloadResume = () => {
    const resumeUrl = 'https://www.dropbox.com/scl/fi/57gguqrnjn6vw1ge8r2h2/Resume.pdf?rlkey=9lwoqrg8pyoye05b7haguyaur&dl=0';
    window.open(resumeUrl, '_blank');
  };
    return (
        <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center"> 
                Hello I&apos;m a fullstack developer based in Togo 🇹🇬
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Essohanam TAMBANA
                    </Heading>
                    <p>Full Stack Developer </p>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                Hi, I&apos;m Essohanam, call me Philippe as well. I&apos;m a full-stack software engineer with 1 year of experience specializing in Javascript, and React. 
                At the end of 2022 and the beginning of 2023, I joined Microverse. Microverse is a remote software development program that uses pair programming and project building to teach development. 
                Last year, during my learning journey, I built strong projects as a Frontend Developer and this experience taught me how to work with corporate businesses and handle tight deadlines.
                I&apos;m very passionate about coding and I&apos;m always looking for new challenges and opportunities to learn and grow.
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme="green">
                            My Portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2016</BioYear>
                    Bachelor degree in International Law and Community Law.
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    In 2022, I began developing an interest in programming 🖥️ and started self-teaching myself.
                </BioSection>
                      <BioSection>
                    <BioYear>2023</BioYear>
                    Started Microverse. A remote software development program that uses pair programming and project building to teach development. 
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
            <Link href="https://x.com/TambanaEssohana?t=4FF84aFOHgOplULHvz-6pQ&s=09" target="_blank">
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
            <Link href="https://www.instagram.com/phil_essohanam" target="_blank">
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
                            transition: 'background 0.3s ease',
                        }}
                    >
                        Get my Resume
                    </button>
        </Section>

        <Section id="contact" delay={0.4}>
                    <Heading id="contact" as="h3" variant="section-title">
                        Contact Me
                    </Heading>
                    <form id="form" action="https://formspree.io/f/myyawnzb" method="post" style={{ maxWidth: '400px', margin: '0 auto' }}>
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
                                boxSizing: 'border-box',
                            }}
                        >
                            Submit
                        </button>
                    </form>
                </Section>            
        </Container>
        </Layout>
    );
}

export default Page