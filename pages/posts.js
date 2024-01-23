import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import webpack from '../public/images/contents/webpack.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to set up webpack easily in a React project"
            thumbnail={webpack}
            href="https://www.linkedin.com/posts/essohanam-tambana_webpack-activity-7084848765458640896-TrLZ?utm_source=combined_share_message&utm_medium=member_desktop"
            loading="lazy"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts