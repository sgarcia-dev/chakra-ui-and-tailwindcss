import React from 'react';
import {
  ChakraProvider,
  theme,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import MyModal from './MyModal';

function App() {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <ChakraProvider theme={theme}>
      <Button onClick={onOpen}>Click me to Show Modal</Button>
      <MyModal isOpen={isOpen} onClose={onClose} />
    </ChakraProvider>
  );
}

export default App;
