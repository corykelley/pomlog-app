import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { AddIcon } from '@chakra-ui/icons';
import { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/number-input';
import { Input } from '@chakra-ui/input';
import { Center } from '@chakra-ui/layout';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';

interface Props {
  taskSubmit?: (method: string, data: object, id?: number) => void;
  inNav?: boolean;
}

const AddTask: React.FC<Props> = ({ taskSubmit, inNav }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = useRef(null);

  return (
    <>
      <Modal initialFocusRef={firstFieldRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <div>
              <Formik
                initialValues={{
                  title: '',
                  description: '',
                  time_limit: 1,
                  sprints: 1,
                }}
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    taskSubmit && taskSubmit('POST', values);
                    actions.setSubmitting(false);
                    actions.resetForm();
                    onClose();
                  }, 400);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Field type="text" name="title">
                      {({ field }) => (
                        <FormControl isRequired>
                          <FormLabel htmlFor="title">Title:</FormLabel>
                          <Input
                            {...field}
                            ref={firstFieldRef}
                            id="title"
                            placeholder="Take out the garbage"
                          />
                        </FormControl>
                      )}
                    </Field>
                    <Field type="text" name="description">
                      {({ field }) => (
                        <FormControl isRequired>
                          <FormLabel htmlFor="description">
                            Description:
                          </FormLabel>
                          <Input
                            {...field}
                            id="description"
                            placeholder="Its really starting to smell"
                          />
                        </FormControl>
                      )}
                    </Field>
                    <Field type="number" name="time_limit">
                      {({ field }) => (
                        <FormControl mb="4">
                          <FormLabel htmlFor="time_limit">
                            Time Limit:
                          </FormLabel>
                          <NumberInput max={50} min={1}>
                            <NumberInputField id="time_limit" {...field} />
                            <NumberInputStepper id="time_limit" {...field}>
                              <NumberIncrementStepper />
                              <NumberDecrementStepper />
                            </NumberInputStepper>
                          </NumberInput>
                        </FormControl>
                      )}
                    </Field>
                    <Field type="number" name="sprints">
                      {({ field }) => (
                        <FormControl mb="4">
                          <FormLabel htmlFor="sprints">
                            How many sprints?
                          </FormLabel>
                          <NumberInput max={50} min={1}>
                            <NumberInputField {...field} />
                            <NumberInputStepper>
                              <NumberIncrementStepper />
                              <NumberDecrementStepper />
                            </NumberInputStepper>
                          </NumberInput>
                        </FormControl>
                      )}
                    </Field>
                    <ModalFooter>
                      <Button
                        colorScheme="teal"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Submit
                      </Button>
                      <Button ml="4" onClick={onClose}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Form>
                )}
              </Formik>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
      {inNav ? (
        <AddIcon w={4} h={4} onClick={onOpen} cursor="pointer" />
      ) : (
        <Center mt="4">
          <Button colorScheme="teal" size="lg" onClick={onOpen}>
            Add Task
          </Button>
        </Center>
      )}
    </>
  );
};

export default AddTask;
