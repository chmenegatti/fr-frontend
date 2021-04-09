import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  icon: React.ComponentType<IconBaseProps>;
};

const ActionButton: React.FC<ButtonProps> = ({
  children,
  loading,
  icon: Icon,
  ...rest
}) => (
  <Container type="button" {...rest}>
    {loading ? 'Carregando...' : <p>{children}</p>}
    {Icon && <Icon size={20} />}
  </Container>
);

export default ActionButton;
