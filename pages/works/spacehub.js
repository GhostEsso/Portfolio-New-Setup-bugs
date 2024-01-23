import { Container, Badge, Link, ListItem, List } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  const imageUrl = 'https://github.com/GhostEsso/cdn/blob/main/images/works/spacehub.png?raw=true';
  return (
    <Layout title="Space Hub">
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
          Space Hub <Badge>2023</Badge>
        </Title>
      </Container>
      <P>
        Space Travelers Hub is a web application that provides commercial and
        scientific space travel services. The application will allow users to
        book rockets and join selected space missions. In collboration with
        <a
          href="https://github.com/Errytagedesign"
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: 'none',
            color: '#fff',
            transition: 'color 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseOver={e => {
            e.target.style.color = '#fff'
            e.target.style.textDecoration = 'underline'
          }}
          onMouseOut={e => {
            e.target.style.color = '#fff'
            e.target.style.textDecoration = 'none'
          }}
        >
          <br />
          Sodeeq Olaide Awoyemi
        </a>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta> Website </Meta>
          <Link
            href="https://space-travelers-qg24.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website <ExternalLinkIcon mr={2} />
          </Link>
        </ListItem>
        <ListItem>
          <Meta> Github </Meta>
          <Link
            href="https://github.com/GhostEsso/SpaceTravelersHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code <ExternalLinkIcon mr={2} />
          </Link>
        </ListItem>
        <ListItem>
          <Meta> Stack </Meta>
          <span>Ruby on Rails</span>
        </ListItem>
      </List>
      <WorkImage src={imageUrl} alt="spacehub" layout="fill" loading="lazy" />
    </Layout>
  )
}

export default Work
