import { FunctionComponent } from "react";
import SCInstruction from "./Instruction.styled.tsx";

type Props = {
  Icon: FunctionComponent;
  title: string;
  description: string;
};

export default function Instruction({ Icon, title, description }: Props) {
  return (
    <SCInstruction>
      <div className="svg">
        <Icon />
      </div>
      <div className="text">
        <h4 className="fs-h4">{title}</h4>
        <p className="fs-body-1">{description}</p>
      </div>
    </SCInstruction>
  );
}
