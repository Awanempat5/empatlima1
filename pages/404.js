import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Tidak ditemukan</Heading>
      <Text>Halaman yang Anda cari tidak ditemukan.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="teal">Kembali ke rumah</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
