import { InputGroup, InputLeftElement, Icon, Input } from '@chakra-ui/react'
import React from 'react'
import { FiSearch } from 'react-icons/fi'

type Props = {}

function SearchBar({}: Props) {
  return (
    <>
    <InputGroup>
    <InputLeftElement
      pointerEvents="none"
      children={<Icon as={FiSearch} color="gray.400" />}
    />
    <Input
      type="tel"
      placeholder="Search Twitter"
      color="gray.400"
      backgroundColor="gray.100"
      borderRadius="full"
      border="none"
    />
  </InputGroup>
  </>
  )
}

export default SearchBar