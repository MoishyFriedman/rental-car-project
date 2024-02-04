import { FieldValues, useForm } from "react-hook-form";
import ButtonSubmit from "../filter/button/ButtonSubmit";
import { DivBox, FormStyle, InputStyle, Text } from "../../../global/styled/styled";
import { useMutation } from "@apollo/client";
import { ADD_NEW_CAR } from "../../../global/graphql/graphql.mutation";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from "react-router";
import Buttons from "./ButtonForm";

export default function FormAddCar() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [createCar, { loading, error, data }] = useMutation(ADD_NEW_CAR);

  const onSubmit = async (dataInput: FieldValues) => {
    try {
      dataInput.hour_price = parseInt(dataInput.hour_price, 10);
      dataInput.seats_number = parseInt(dataInput.seats_number, 10);
      dataInput.year = parseInt(dataInput.year, 10);
      await createCar({
        variables: { createCarInput: dataInput },
      });
      if (error) throw error;
      if (!loading && data) {
        console.log("The vehicle has been successfully added");
        navigate("/addCarPage");
      }
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };
  return (
    <>
      <FormStyle onSubmit={handleSubmit(onSubmit)}>
        <DivBox height="5vh" align="center" way="column">
          <InputStyle
            placeholder="manufacturer model"
            {...register("manufacturer_model", {
              required: "manufacturer model is required",
              minLength: {
                value: 1,
                message: "manufacturer model most be minimum 1 characters",
              },
              maxLength: {
                value: 20,
                message: "manufacturer model most be maximum 20 characters",
              },
            })}
          />
          {errors.manufacturer_model && <ErrorMessage errors={errors} name="manufacturer_model" render={({ message }) => <Text>{message}</Text>} />}

          <InputStyle type="number" placeholder="seats number" {...register("seats_number", { required: "seats number is required" })} />
          {errors.seats_number && <ErrorMessage errors={errors} name="seats_number" render={({ message }) => <Text>{message}</Text>} />}

          <InputStyle placeholder="color" {...register("color", { required: "color is required" })} />
          {errors.color && <ErrorMessage errors={errors} name="color" render={({ message }) => <Text>{message}</Text>} />}

          <InputStyle type="number" placeholder="year" {...register("year", { required: "year is required" })} />
          {errors.year && <ErrorMessage errors={errors} name="year" render={({ message }) => <Text>{message}</Text>} />}

          <InputStyle
            placeholder="license plate"
            {...register("license_plate", {
              required: "license plate is required",
              minLength: {
                value: 1,
                message: "license plate most be minimum 1 characters",
              },
              maxLength: {
                value: 9,
                message: "license plate most be maximum 9 characters",
              },
            })}
          />
          {errors.license_plate && <ErrorMessage errors={errors} name="license_plate" render={({ message }) => <Text>{message}</Text>} />}

          <InputStyle
            placeholder="description"
            {...register("description", {
              required: "description is required",
              minLength: {
                value: 1,
                message: "description most be minimum 1 characters",
              },
              maxLength: {
                value: 200,
                message: "description most be maximum 200 characters",
              },
            })}
          />
          {errors.description && <ErrorMessage errors={errors} name="description" render={({ message }) => <Text>{message}</Text>} />}

          <InputStyle type="url" placeholder="image" {...register("image", { required: "image is required" })} />
          {errors.image && <ErrorMessage errors={errors} name="image" render={({ message }) => <Text>{message}</Text>} />}

          <InputStyle placeholder="image alt" {...register("image_alt", { required: "image alt is required" })} />
          {errors.image_alt && <ErrorMessage errors={errors} name="image_alt" render={({ message }) => <Text>{message}</Text>} />}

          <InputStyle placeholder="location" {...register("location", { required: "location is required" })} />
          {errors.location && <ErrorMessage errors={errors} name="location" render={({ message }) => <Text>{message}</Text>} />}

          <InputStyle type="number" placeholder="hour price" {...register("hour_price", { required: "hour price is required" })} />
          {errors.hour_price && <ErrorMessage errors={errors} name="hour_price" render={({ message }) => <Text>{message}</Text>} />}
          <Buttons />
        </DivBox>
      </FormStyle>
    </>
  );
}
