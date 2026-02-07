import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 480px) {
    padding-left: 0;
    text-indent: 0;
  }
`

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`
