import { Container, Badge, Link, ListItem, List } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  const imageUrl = 'https://github.com/GhostEsso/cdn/blob/main/images/works/math-magicians.png?raw=true';
  return (
    <Layout title="React Instagram Clone">
      <Container position="relative">
      <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '75%',
            height: '100%',
            backgroundColor: 'rgba(0, 100, 0, 0.5)',
            zIndex: -1,
          }}
        ></div>
        <Title>
          Math magicians <Badge>2023</Badge>
        </Title>
      </Container>
      <P>
        &quot;Math magicians&quot; is a website for all fans of mathematics. It
        is a Single Page App (SPA) that allows users to make simple calculations
        and read a random math-related quote. Built with React, Linters, CSS3,
        API Added unit and integration tests with Jest.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta> Webapp </Meta>
          <Link
            href="https://math-magician-htg1.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WebApp <ExternalLinkIcon mr={2} />
          </Link>
        </ListItem>
        <ListItem>
          <Meta> Github </Meta>
          <Link
            href="https://github.com/GhostEsso/Math-Magician"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code <ExternalLinkIcon mr={2} />
          </Link>
        </ListItem>
        <ListItem>
          <Meta> Stack </Meta>
          <span>React, Jest, API</span>
        </ListItem>
      </List>
      <WorkImage src={imageUrl} alt="math-magician" layout="fill" loading="lazy" />
    </Layout>
  )
}

export default Work
