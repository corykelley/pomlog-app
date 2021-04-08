import { Button, IconButton } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { EditIcon } from '@chakra-ui/icons';
import {
	Popover,
	PopoverArrow,
	PopoverCloseButton,
	PopoverContent,
	PopoverTrigger,
} from '@chakra-ui/popover';
import { useRef } from 'react';
import FocusLock from 'react-focus-lock';
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

const PopoverForm = ({ taskSubmit }) => {
	const { onOpen, onClose, isOpen } = useDisclosure();
	const firstFieldRef = useRef(null);

	return (
		<>
			<Popover
				isOpen={isOpen}
				initialFocusRef={firstFieldRef}
				onOpen={onOpen}
				onClose={onClose}
				placement='right'
				closeOnBlur={false}
			>
				<PopoverTrigger>
					<IconButton size='sm' icon={<EditIcon />} />
				</PopoverTrigger>
				<PopoverContent p={5}>
					<FocusLock returnFocus persistentFocus={false}>
						<PopoverArrow />
						<PopoverCloseButton />
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
										taskSubmit('POST', values);
										actions.setSubmitting(false);
										actions.resetForm();
										onClose();
									}, 400);
								}}
							>
								{({ isSubmitting }) => (
									<Form>
										<Field type='text' name='title'>
											{({ field }) => (
												<FormControl isRequired>
													<FormLabel htmlFor='title'>Title:</FormLabel>
													<Input
														{...field}
														id='title'
														placeholder='Take out the garbage'
													/>
												</FormControl>
											)}
										</Field>
										<Field type='text' name='description'>
											{({ field }) => (
												<FormControl isRequired>
													<FormLabel htmlFor='description'>
														Description:
													</FormLabel>
													<Input
														{...field}
														id='description'
														placeholder='Its really starting to smell'
													/>
												</FormControl>
											)}
										</Field>
										<Field type='number' name='time_limit'>
											{({ field }) => (
												<FormControl mb='4'>
													<FormLabel htmlFor='time_limit'>
														Time Limit:
													</FormLabel>
													<NumberInput max={50} min={1}>
														<NumberInputField id='time_limit' {...field} />
														<NumberInputStepper id='time_limit' {...field}>
															<NumberIncrementStepper />
															<NumberDecrementStepper />
														</NumberInputStepper>
													</NumberInput>
												</FormControl>
											)}
										</Field>
										<Field type='number' name='sprints'>
											{({ field }) => (
												<FormControl mb='4'>
													<FormLabel htmlFor='sprints'>
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
										<Button
											colorScheme='teal'
											type='submit'
											disabled={isSubmitting}
										>
											Submit
										</Button>
									</Form>
								)}
							</Formik>
						</div>
					</FocusLock>
				</PopoverContent>
			</Popover>
		</>
	);
};

export default PopoverForm;
