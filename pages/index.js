import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  Stack,
  useColorModeValue,
  chakra,
  Text,
  Divider
} from '@chakra-ui/react'
import { ArrowForwardIcon, ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import ContactIconButton from '../components/ui/contact-icon-button'
import SocialLinkButton from '../components/ui/social-link-button'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import galleryImages from '../lib/gallery-data'

/** Wraps next/image with Chakra styling support */
const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  return (
    <Layout>
      <Container mt={6}>
        {/* Intro Banner */}
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Welcome! I&apos;m Jeffrey Fernandez, a passionate software engineering
          student currently employed at JPMorgan Chase.
        </Box>

        {/* Profile Header */}
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Jeffrey Fernandez
            </Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue('gray.600', 'gray.300')}
            >
              Software Engineer | Research Scientist | Data Enthusiast
            </Text>
            <Box mt={2} mb={4}>
              <Image
                src="/images/cloud-badge.png"
                alt="AWS Cloud Practitioner Badge"
                width={50}
                height={50}
              />
            </Box>
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

        {/* Quick Contact Actions */}
        <Box alignContent="center">
          <Stack direction="row" spacing={4} mt={4} mb={6}>
            <ContactIconButton
              label="Email Me"
              icon={<EmailIcon />}
              onClick={() =>
                window.open(
                  'mailto:ninjeff06@gmail.com?subject=Hello%20from%20Chakra%20UI'
                )
              }
            />
            <ContactIconButton
              label="Call Me"
              icon={<ArrowForwardIcon />}
              onClick={() => window.open('tel:+19294255178', '_self')}
            />
            <ContactIconButton
              label="View LinkedIn"
              icon={<IoLogoLinkedin />}
              onClick={() =>
                window.open(
                  'https://linkedin.com/in/jeffrey-fernandez-66857b269',
                  '_blank'
                )
              }
            />
          </Stack>
        </Box>

        {/* Current Role */}
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Current Role
          </Heading>
          <Paragraph>
            I am currently employed as a Software Engineer Intern at{' '}
            <Link href="https://www.jpmorgan.com/global" target="_blank">
              JPMorgan Chase (JPMC)
            </Link>
            . Here, I specialize in both front-end and back-end solutions for
            the Dining Technology team, contributing to projects that enhance
            customer experience and streamline operations.
          </Paragraph>
          <Paragraph mt={4}>
            My responsibilities include developing scalable applications using
            TypeScript, React, and Node.js, collaborating with cross-functional
            teams, and integrating libraries like Leaflet.js for dynamic
            restaurant location services.
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              Explore My Portfolio
            </Button>
          </Box>
        </Section>

        {/* Bio Timeline */}
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2006</BioYear>
            Born in{' '}
            <Link
              href="https://en.wikipedia.org/wiki/Manta,_Ecuador"
              target="_blank"
            >
              Manta, Ecuador.
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2021 - Present</BioYear>
            Richmond Hill High School - Co-Captain of Varsity Soccer Team,
            advanced placement in Computer Science and awarded high honors in
            Economics and Government.
          </BioSection>
          <BioSection>
            <BioYear>2020 - Present</BioYear>
            Software Engineer Intern at{' '}
            <Link href="https://www.jpmorgan.com" target="_blank">
              JPMorgan Chase
            </Link>
            , contributing to full-stack projects in the Dining Technology team.
          </BioSection>
        </Section>

        {/* Career Milestones */}
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Career Milestones
          </Heading>
          <Stack spacing={3}>
            <Box>
              <Text as="span" fontWeight="bold">
                2022:
              </Text>{' '}
              Accepted as NASA Summer Intern, worked as a Research Scientist for
              CCRI&apos;s Volcanic Emission Impacts project.
            </Box>
            <Box>
              <Text as="span" fontWeight="bold">
                2023:
              </Text>{' '}
              Completed AWS Certified Cloud Practitioner Certification with
              Arizona State University.
            </Box>
            <Box>
              <Text as="span" fontWeight="bold">
                2022:
              </Text>{' '}
              Joined JPMorgan Chase as a Software Engineer Intern, actively
              contributing to key technology initiatives.
            </Box>
          </Stack>
          <Divider my={4} />
        </Section>

        {/* Interests */}
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Art, Reading, Soccer, Programming, Machine Learning, Boxing, and
            Working Out.
          </Paragraph>
        </Section>

        {/* Online Presence */}
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the Web
          </Heading>
          <List>
            <SocialLinkButton
              href="https://github.com/wiggapony0925"
              icon={<IoLogoGithub />}
              label="@wiggapony0925"
            />
            <SocialLinkButton
              href="https://twitter.com/JeffreyF0925"
              icon={<IoLogoTwitter />}
              label="@JeffreyF0925"
            />
            <SocialLinkButton
              href="https://linkedin.com/in/jeffrey-fernandez-66857b269"
              icon={<IoLogoLinkedin />}
              label="@Jeffrey Fernandez"
            />
          </List>

          {/* Resume Link */}
          <Heading as="h3" variant="section-title" mt={4}>
            Resume
          </Heading>
          <Paragraph>
            Please find my resume below, detailing my software engineering
            experience and skills.
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="https://flowcv.com/resume/lrwhfk8wep"
              scroll={false}
              leftIcon={<EmailIcon />}
              colorScheme="teal"
            >
              View My Resume
            </Button>
          </Box>
        </Section>

        {/* Soccer Gallery */}
        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            Soccer Gallery
          </Heading>
          <Carousel showThumbs={false} infiniteLoop autoPlay>
            {galleryImages.map(({ src, alt }) => (
              <div key={src}>
                <Image
                  src={src}
                  alt={alt}
                  layout="responsive"
                  width={600}
                  height={400}
                />
              </div>
            ))}
          </Carousel>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
