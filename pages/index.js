import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin, IoLogoGoogle } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, Im an Software Engineering Student based in New York City!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jeffrey Fernandez
          </Heading>
          <p>software Engineer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/takuya.png"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        Jeffrey is a highly motivated Computer Science Student based in New York City, specializing in the fields of Data Engineering and Software Development. Possessing a self-taught programming background, he exhibits a keen sense of drive towards continuous learning and the expansion of his knowledge in the field. 
        <Link href="https://www.jpmorgan.com/global" target="_blank">
              {' '}jeffreys dedication{' '}
            </Link>
         towards studying various subjects related to his area of expertise is evidence of his commitment to staying up-to-date with the latest technologies and techniques. Alongside his academic pursuits, he maintains an active lifestyle, frequently engaging in activities such as gym workouts, boxing, and soccer. Jeffrey is currently enrolled as a student at 
        <Link href="https://www.richmondhillhs.org" target="_blank">
              {' '}Richmond Hill High School{' '}
            </Link> 
        and is eager to leverage his skills and knowledge to take on the challenges posed by the tech industry.{' '}
          <Link as={NextLink} href="https://jeffreysblog.vercel.app" passHref scroll={false}>
            check out the blog...
          </Link>
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2006</BioYear>
          Born in 
          <Link href="https://en.wikipedia.org/wiki/Manta,_Ecuador" target="_blank">
              {' '}Manta, Ecuador{' '}
            </Link>
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          enrolled in courses, collaborated with programming teams, and applied best practices to engineer software.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          studied operating systems, hosted virtual machines, and explored cybersecurity concepts using Kali Linux tools.
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Working as a freelancer
        </BioSection>
        Accepted for AWS Cloud Computing 1 with{''} 
            <Link href="https://www.asu.edu" target="_blank">
              {' '}Arizona State University{' '}
            </Link>
            and works with software engineering teams to maintain cloud infrastructure while preparing for the Cloud Practitioner certification exam.
            <BioSection>
        <BioYear>2022 to Present</BioYear>
        developed effective methods for data analysis and organization, 
        <Link href="https://github.com/wiggapony0925/Python-Virus-Building-Simulation-" target="_blank">
              {' '}created data graphs{' '}
            </Link>
        and applied object-oriented programming.
      </BioSection>
      <BioSection>
        <BioYear>2023 - Present</BioYear>
        NASA Summer Intern, Research Scientist for 
        <Link href="https://github.com/wiggapony0925/Python-Virus-Building-Simulation-" target="_blank">
              {' '}CCRI Volcanic Emission Impacts on Climate Systems, Agriculture and Society.{' '}
            </Link>
        
      </BioSection>
        
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, reading,{' '}
          <Link href="https://www.psal.org/profiles/school-profile.aspx#27529" target="_blank">
            Soccer
          </Link>
          , Movies,{' '}
          <Link href="https://github.com/wiggapony0925" target="_blank">
           Programming
          </Link>
          ,  Machine Learning, Boxing,
          <Link href="https://www.planetfitness.com" target="_blank">
            {' '}Working Out
          </Link>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/wiggapony0925" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @wiggapony0925
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/JeffreyF0925" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @JeffreyF0925
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://linkedin.com/in/jeffrey-fernandez-66857b269" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Jeffrey Fernandez 
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://mail.google.com/mail/u/0/#sent" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGoogle />}
              >
                ninjeff06@gmail.com
              </Button>
            </Link>
          </ListItem>
        </List>


        <Heading as="h3" variant="section-title">
          Resume
        </Heading>
        <p>
        Please find my resume enclosed and review my software engineering experience and skills.
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://flowcv.com/resume/lrwhfk8wep"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Check Out My Resume
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
