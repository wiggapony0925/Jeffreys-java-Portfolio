import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Heading,
    Center
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="MERRA-2 Plotting">
      <Container>
        <Title>
          walknote <Badge>April 5 - April 7, 2023</Badge>
        </Title>
        <P>
        In this notebook, I utilized Python to plot a graph from the M2TMNXSLV (or tavgM_2d_slv_Nx) dataset, which is a time-averaged 2-dimensional monthly mean data collection within the Modern-Era Retrospective analysis for Research and Applications version 2 (MERRA-2).
        </P>
        <P>
        The M2TMNXSLV dataset includes meteorology diagnostics at commonly used vertical levels, such as air temperature, wind components, sea level pressure, surface pressure, and total precipitable water vapor. The dataset is provided in NetCDF format.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>iOS, Windows, Mac</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="https://jeffreysblog.vercel.app/posts/majextand">
              NASA Summer Internship Studying Project{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>python(Matplotlib, Numpy, NetCDF4), Jupyter notebook</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Media coverage</Center>
        </Heading>
  
        <UnorderedList my={4}>
          <ListItem>
            <Link href="https://github.com/wiggapony0925/MERRA-2-netCDF-file-reading-using-python">
              <Badge mr={2}>Git Hub</Badge>
              Source Code
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

        </UnorderedList>
  
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/walknote_01.png" alt="walknote" />
          <WorkImage src="/images/works/walknote_02.png" alt="walknote" />
        </SimpleGrid>
        <WorkImage src="/images/works/walknote_03.png" alt="walknote" />
        <WorkImage src="/images/works/walknote_04.png" alt="walknote" />
        <WorkImage src="/images/works/walknote_05.png" alt="walknote" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  