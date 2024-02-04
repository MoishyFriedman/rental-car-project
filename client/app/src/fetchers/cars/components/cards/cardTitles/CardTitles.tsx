import { DivBox, Text } from "../../../../global/styled/styled";

export default function Titles(prop: { model: string; description: string }) {
  return (
    <>
      <DivBox way="column">
        <Text size="xx-large">{prop.model}</Text>
        <Text size="large" font="math">
          {prop.description}
        </Text>
      </DivBox>
    </>
  );
}
