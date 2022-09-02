import { ButtonContainer, ButtonVariant } from "./Button.styles";

interface ButtonProps {
  variant?: ButtonVariant;
}

export function Button({ variant: color = "primary" }: ButtonProps) {
  return <ButtonContainer variant={color}>Send</ButtonContainer>;
}
