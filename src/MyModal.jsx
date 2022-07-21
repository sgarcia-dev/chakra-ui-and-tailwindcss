import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';

MyModal.propTypes = {
  isOpen: PropTypes.bool,
};

export default function MyModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus sed reiciendis pariatur. Commodi aliquid, tempore reiciendis praesentium exercitationem quaerat quas porro ipsa minus, culpa aperiam aspernatur, eos at obcaecati?
          Possimus nisi incidunt pariatur voluptate at cupiditate illo qui saepe? Rem veritatis, at eaque distinctio, mollitia voluptas saepe dolore nulla commodi, quam sunt unde sapiente obcaecati recusandae placeat. Veniam, perspiciatis?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus sed reiciendis pariatur. Commodi aliquid, tempore reiciendis praesentium exercitationem quaerat quas porro ipsa minus, culpa aperiam aspernatur, eos at obcaecati?
          Possimus nisi incidunt pariatur voluptate at cupiditate illo qui saepe? Rem veritatis, at eaque distinctio, mollitia voluptas saepe dolore nulla commodi, quam sunt unde sapiente obcaecati recusandae placeat. Veniam, perspiciatis?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus sed reiciendis pariatur. Commodi aliquid, tempore reiciendis praesentium exercitationem quaerat quas porro ipsa minus, culpa aperiam aspernatur, eos at obcaecati?
          Possimus nisi incidunt pariatur voluptate at cupiditate illo qui saepe? Rem veritatis, at eaque distinctio, mollitia voluptas saepe dolore nulla commodi, quam sunt unde sapiente obcaecati recusandae placeat. Veniam, perspiciatis?</p>
        </ModalBody>

        <ModalFooter className="my-class-name">
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
