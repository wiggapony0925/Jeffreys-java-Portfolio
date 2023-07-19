import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const WeekOne = () => (
  <Layout title="Week One">
    <Container>
      <Title>
        Excel Formulas, Professional Email Templates, and Resume Writing <Badge>Week One</Badge>
      </Title>
      <P>
        During the first week, we focused on mastering Excel formulas, creating professional email templates, and developing effective resumes. We learned various techniques to efficiently manipulate data and automate calculations using Excel. Additionally, we explored best practices for designing email templates to communicate professionally in a business setting, and we gained insights into crafting compelling and well-structured resumes to showcase our skills and experiences.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Excel Formulas</Meta>
          <span>
            - Advanced functions like VLOOKUP and IF statements <br />
            - Data manipulation using formulas and conditional formatting <br />
            - Creating dynamic charts and graphs
          </span>
        </ListItem>
        <ListItem>
          <Meta>Professional Email Templates</Meta>
          <span>
            - Crafting effective subject lines and email greetings <br />
            - Writing clear and concise email content <br />
            - Incorporating proper email etiquette and professional tone
          </span>
        </ListItem>
        <ListItem>
          <Meta>Resume Writing</Meta>
          <span>
            - Structuring a compelling resume layout <br />
            - Showcasing relevant skills, experiences, and achievements <br />
            - Tailoring the resume to specific job requirements
          </span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media Coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://www.example.com">
            <Badge mr={2}>Video</Badge>
            Excel Formulas Mastery
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://www.example.com">
            <Badge mr={2}>Article</Badge>
            Creating Professional Email Templates
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://www.example.com">
            <Badge mr={2}>Guide</Badge>
            Effective Resume Writing Techniques
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <WorkImage
        src="/images/works/excel.png"
        alt="excel"
      />
    </Container>
  </Layout>
);

export default WeekOne;
export { getServerSideProps } from '../../components/chakra';
