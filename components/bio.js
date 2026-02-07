/**
 * Bio styled components for the timeline section.
 * BioSection - Indented paragraph with hanging year label.
 * BioYear - Bold year label within a BioSection.
 */
import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`
