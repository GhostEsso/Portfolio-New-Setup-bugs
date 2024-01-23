import { Container, Badge, Link, ListItem, List } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  // Remplacez l'import local de l'image par l'URL directe de GitHub
  const imageUrl = 'https://github.com/GhostEsso/cdn/raw/main/images/works/budgetapp.png?raw=true';

  return (
    <Layout title="Budget App">
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
          Budget App (SmartPocket) <Badge>2023</Badge>
        </Title>
      </Container>
      <P>
        The SmartPocket app manages your expenses. You have the ability to make,
        change, or remove categories and transactions. Each transaction is
        linked to one or multiple categories.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta> WEBAPP </Meta>
          <Link
            href="https://moyin-3unn.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Webapp <ExternalLinkIcon mr={2} />
          </Link>
        </ListItem>
        <ListItem>
          <Meta> Github </Meta>
          <Link
            href="https://github.com/GhostEsso/my-budget-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code <ExternalLinkIcon mr={2} />
          </Link>
        </ListItem>
        <ListItem>
          <Meta> STACK </Meta>
          <span>Ruby on Rails</span>
        </ListItem>
      </List>
      <WorkImage src={imageUrl} alt="budgetapp" layout="fill" loading="lazy" />
    </Layout>
  );
};

export default Work;
