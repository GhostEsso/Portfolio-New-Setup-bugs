import { Container, Badge, Link, ListItem, List } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  const imageUrl = 'https://github.com/GhostEsso/cdn/blob/main/images/works/mealconnect.png?raw=true';
  return (
    <Layout title="Meal Connect">
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
          Meal Connect <Badge>2023</Badge>
        </Title>
      </Container>
      <P>
        MealConnect is a vibrant web application designed for those who
        appreciate the art of cooking and the pleasure of savoring exquisite
        meals. Dive into a world of flavors, discover new recipes, and make
        customized reservations based on your taste buds.
        <br /> In Collaboration with:
        <br />
        <a
          href="https://github.com/zbahati"
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: 'none',
            color: '#000',
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
          Bahati zirimwabagabo
        </a>
        <a
          href="https://github.com/BranBayou"
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: 'none',
            color: '#000',
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
          Berhanu Baye
        </a>
        <a
          href="https://github.com/JoyTaribagshaw"
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: 'none',
            color: '#000',
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
          Joy Tari-bagshaw
        </a>
        <a
          href="https://github.com/MargaretTechworld"
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: 'none',
            color: '#000',
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
          MARGARET KOJO-MUSA
        </a>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta> Github </Meta>
          <Link
            href="https://github.com/GhostEsso/meal_connect-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code <ExternalLinkIcon mr={2} />
          </Link>
        </ListItem>
        <ListItem>
          <Meta> Website </Meta>
          <Link
            href="https://deployment--eloquent-malabi-441830.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website <ExternalLinkIcon mr={2} />
          </Link>
        </ListItem>
        <ListItem>
          <Meta> Stack </Meta>
          <span> React, Ruby on Rails, PostgreSql</span>
        </ListItem>
      </List>
      <WorkImage src={imageUrl} alt="meal connect" layout="fill" loading="lazy" />
    </Layout>
  )
}

export default Work
