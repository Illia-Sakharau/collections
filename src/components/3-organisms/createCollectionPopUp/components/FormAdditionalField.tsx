import {
  IconButton,
  Input,
  InputGroup,
  Select,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Field, FormikErrors } from 'formik';
import { FaTrashAlt } from 'react-icons/fa';

type Props = {
  index: number;
  remove: (index: number) => undefined;
  errors?: string | FormikErrors<{ name: string; type: string }>;
};

const FormAdditionalField = ({ index, remove, errors }: Props) => {
  const errorText =
    typeof errors === 'string'
      ? errors
      : errors
        ? (errors.name ? errors.name + '. ' : '') +
          (errors.type ? errors.type : '')
        : undefined;

  return (
    <FormControl isInvalid={!!errorText}>
      <InputGroup gap={4}>
        <Input
          as={Field}
          name={`fields.${index}.name`}
          type={'text'}
          focusBorderColor="brand.500"
          placeholder="Select type"
        />

        <Select
          as={Field}
          component="select"
          id={`fields.${index}.type`}
          name={`fields.${index}.type`}
          focusBorderColor="brand.500"
          placeholder="Select type"
        >
          <option value="opt1">Option 1</option>
          <option value="opt2">Option 2</option>
          <option value="opt3">Option 3</option>
        </Select>

        <IconButton
          colorScheme="negative"
          variant="outline"
          onClick={() => remove(index)}
          aria-label={'fdsf'}
          icon={<FaTrashAlt />}
        />
      </InputGroup>
      <FormErrorMessage>{errorText}</FormErrorMessage>
    </FormControl>
  );
};

export default FormAdditionalField;
