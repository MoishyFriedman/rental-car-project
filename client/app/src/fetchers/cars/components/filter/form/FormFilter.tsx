import { DivBox, FormStyle, SelectStyle } from "../../../../global/styled/styled";
import { FieldValues, useForm } from "react-hook-form";
import ButtonSubmit from "../button/ButtonSubmit";

export default function FormFilter(prop: { modelArray: string[]; priceArray: number[] }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (dataLogin: FieldValues) => {
    console.log(dataLogin);
  };
  return (
    <>
      <FormStyle onSubmit={handleSubmit(onSubmit)} grow="1">
        <DivBox height="5vh" align="center" space="space-around">
          <ButtonSubmit text="שלח" />
          <SelectStyle {...register("model")} height="max-content" width="max-content" size="x-large" padding="6px">
            {prop.modelArray.map((model, index) => (
              <option key={index} value={model}>
                {model}
              </option>
            ))}
          </SelectStyle>
          <SelectStyle {...register("price")} height="max-content" width="max-content" size="x-large" padding="6px">
            {prop.priceArray.map((price, index) => (
              <option key={index} value={price}>
                {price}
              </option>
            ))}
          </SelectStyle>
        </DivBox>
      </FormStyle>
    </>
  );
}
