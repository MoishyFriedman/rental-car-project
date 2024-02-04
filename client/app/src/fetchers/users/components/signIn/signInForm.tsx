import { FieldValues, useForm } from "react-hook-form";
import { DivBox, FormStyle, InputStyle, SelectStyle } from "../../../global/styled/styled";
import ButtonSubmit from "../../../cars/components/filter/button/ButtonSubmit";
import { ErrorMessage } from "@hookform/error-message";

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (dataLogin: FieldValues) => {
    console.log(dataLogin);
  };
  return (
    <>
      <FormStyle onSubmit={handleSubmit(onSubmit)} grow="1">
        <DivBox height="5vh" align="center" space="space-around">
          <ButtonSubmit text="שלח" />
          <InputStyle {...register("firstName")} height="max-content" width="max-content" size="x-large"></InputStyle>
          {errors.email && <ErrorMessage errors={errors} name="firstName" render={({ message }) => <p>{message}</p>} />}
          
          <InputStyle {...register("lastName")} height="max-content" width="max-content" size="x-large"></InputStyle>
          {errors.email && <ErrorMessage errors={errors} name="lastName" render={({ message }) => <p>{message}</p>} />}
          <InputStyle
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "email must be correct",
              },
            })}
          ></InputStyle>
          {errors.email && <ErrorMessage errors={errors} name="email" render={({ message }) => <p>{message}</p>} />}
          
          <InputStyle {...register("phoneNumber")} height="max-content" width="max-content" size="x-large"></InputStyle>
          {errors.email && <ErrorMessage errors={errors} name="lastName" render={({ message }) => <p>{message}</p>} />}

          <InputStyle {...register("password")} height="max-content" width="max-content" size="x-large"></InputStyle>
          {errors.email && <ErrorMessage errors={errors} name="lastName" render={({ message }) => <p>{message}</p>} />}

          <InputStyle {...register("confirmPassword")} height="max-content" width="max-content" size="x-large"></InputStyle>
          {errors.email && <ErrorMessage errors={errors} name="lastName" render={({ message }) => <p>{message}</p>} />}
        </DivBox>
      </FormStyle>
    </>
  );
}
