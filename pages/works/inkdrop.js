import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Virus Simulation">
    <Container>
      <Title>
       Virus Simulation <Badge>2021-2021</Badge>
      </Title>
      <P>
      I have acquired proficiency in using the matplotlib package to create informative data visualizations, and have also leveraged the power of Pythons object-oriented programming paradigm to simulate the spread of a deadly virus among a population. Through the use of subplots, I have effectively displayed multiple visualizations in a single figure, enabling a more comprehensive analysis of the various aspects of my simulation. If I require any further assistance or have any specific inquiries, I will not hesitate to ask for help
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/wiggapony0925/Python-Virus-Building-Simulation-">
            GITHUB <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>python</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/inkdrop_eyecatch.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
