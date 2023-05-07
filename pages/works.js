import { Center, Container, Heading, SimpleGrid, Badge, Avatar,Flex, Box, Button, Text, HStack} from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
    <Center>
      <Flex mt="35" align="center">
        <Avatar src="/images/takuya.png" ml="3" mb="3" alignContent="center" />
        <Box ml="3">
          <Text fontWeight="bold">
            Jeffrey Fernandez
            <Badge ml="3" colorScheme="teal">
              Active
            </Badge>
          </Text>
          <Text fontSize="sm">Software Engineer</Text>
        </Box>
      </Flex>
    </Center>

      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
        <WorkGridItem id="inkdrop" title="Python Virus Building Simulation" thumbnail={thumbInkdrop}>
        Graphs the state of each individual in the building simulation
          </WorkGridItem>
        </Section>

        <Section>
        <WorkGridItem
            id="walknote"
            title="MERRA-2 NetCDF plotting"
            thumbnail={thumbWalknote}
          > Plotting a Graph from MERRA-2 NetCDF Files using Python
            
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
        <WorkGridItem id="fourpainters" title="MNIST dataset with neural networks" thumbnail={thumbFourPainters}>
          MNIST provides a baseline for testing image processing systems
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Box align="center" my={4} display='flex' justifyContent="center">
      <HStack 
      alignItems={"center"}
      as={NextLink}
      href="https://github.com/wiggapony0925?tab=repositories"
      croll={false}>
        <Button colorScheme='teal' leftIcon={<FaGithub />}>
          My Projects
        </Button>
      </HStack>
      </Box>
     </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
