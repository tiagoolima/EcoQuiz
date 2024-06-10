import { ButtonContainer, ContainerButton } from './styles';

const Button = ({label, onClick}) => {
  return (
    <ContainerButton>
      <ButtonContainer onClick={onClick}>
        {label}
      </ButtonContainer>
    </ContainerButton>
  )
}

export default Button;