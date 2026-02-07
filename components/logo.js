import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  max-width: 100%;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    (<Link href="/" scroll={false}>

      <LogoBox>
        <Image src="/images/logo_icon.png" width={20} height={20} alt="logo" />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
          fontSize={{ base: '14px', sm: '16px', md: '18px' }}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          Jeffrey Fernandez
        </Text>
      </LogoBox>

    </Link>)
  );
}

export default Logo
