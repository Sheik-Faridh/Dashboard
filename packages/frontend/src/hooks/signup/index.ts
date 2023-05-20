import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { passwordSchema } from '@/utils/form';
import { CustomFormFields, useRegisterCrayonsFormFields } from '@/hooks/common';
import { CrayonsEventType, FieldType } from '@/types/common';
import { useCallback, useMemo } from 'react';

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type UseSignupFormProps = {
  selectors: {
    nameSelector: string;
    emailSelector: string;
    passwordSelector: string;
    confirmPasswordSelector: string;
    submitBtnSelector: string;
  };
};

export const useSignupForm = ({ selectors }: UseSignupFormProps) => {
  const {
    nameSelector,
    emailSelector,
    passwordSelector,
    confirmPasswordSelector,
    submitBtnSelector,
  } = selectors;
  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: passwordSchema,
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), ''], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const {
    setValue,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const fields: CustomFormFields<FormData>[] = useMemo(
    () => [
      {
        name: 'name',
        selector: nameSelector,
        type: FieldType.Input,
        event: CrayonsEventType.InputChange,
      },
      {
        name: 'email',
        selector: emailSelector,
        type: FieldType.Input,
        event: CrayonsEventType.InputChange,
      },
      {
        name: 'password',
        selector: passwordSelector,
        type: FieldType.Input,
        event: CrayonsEventType.InputChange,
      },
      {
        name: 'confirmPassword',
        selector: confirmPasswordSelector,
        type: FieldType.Input,
        event: CrayonsEventType.InputChange,
      },
    ],
    [confirmPasswordSelector, emailSelector, nameSelector, passwordSelector],
  );

  const onSubmit = useCallback((data: FormData) => {
    console.log(data); // You can handle form submission here
  }, []);

  const formSubmit = useMemo(
    () => ({
      selector: submitBtnSelector,
      callback: handleSubmit(onSubmit),
    }),
    [submitBtnSelector, onSubmit, handleSubmit],
  );

  useRegisterCrayonsFormFields<FormData>({
    fields,
    trigger,
    setValue,
    formSubmit,
  });

  return { errors };
};
