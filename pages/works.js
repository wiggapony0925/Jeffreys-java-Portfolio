import { Container, Heading, SimpleGrid, } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
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

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
