import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="MNIST dataset with neural networks">
    <Container>
      <Title>
        Neural Networks & MNIST Dataset <Badge>April 2024</Badge>
      </Title>
      <P>
      code and resources for working with neural networks and the MNIST dataset. The MNIST dataset is a widely used benchmark dataset in machine learning, consisting of 70,000 handwritten digit images, each 28 x 28 pixels in size. The goal of the dataset is to train a neural network to accurately classify the digits from 0 to 9.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>DeepLearning, neural-style, Python, Tensorflow, Google Colab</span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <Link href="https://github.com/wiggapony0925/MNIST-Dataset-">
          Python 3 and several Python packages, including NumPy, TensorFlow, and Keras. <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/wiggapony0925/MNIST-Dataset-">
            MNIST-Dataset- Google Colab On Github{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://jeffreysblog.vercel.app">
            Neural networks and MNIST dataset
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://www.youtube.com/watch?v=w8yWXqWQYmU&t=674s">
            <Badge mr={2}>Video</Badge>
             Video Work Created with Deep Learning
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://medium.com/tebs-lab/how-to-classify-mnist-digits-with-different-neural-network-architectures-39c75a0f03e3">
            <Badge mr={2}>Article</Badge>
            How to classify MNIST digits with different neural network architectures
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <WorkImage
        src="/images/works/the-four-painters_eyecatch.png"
        alt="walknote"
      />
      <WorkImage src="/images/works/the-four-painters_01.png" alt="walknote" />
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Created With</Center>
      </Heading>
      <WorkImage src="/images/works/the-four-painters_02.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
