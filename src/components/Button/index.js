import { styled } from '@stitches'

export const BaseButton = styled('button', {
  border: 'none',
  cursor: 'pointer',
});

export const FirstButton = styled(BaseButton, {
  transition: 'ease 0.2s',
  borderRadius: '0.4rem',
  backgroundColor: '$gray400',
  color: '$fontPrimary',
  padding: '0.5rem 0.8rem',
  '&:hover': {
    backgroundColor: '$gray500',
  },
});

export const SecondButton = styled(BaseButton, {
  transition: 'ease 0.2s',
  borderRadius: '0.4rem',
  backgroundColor: '$gray400',
  color: '$fontPrimary',
  padding: '0.5rem 0.8rem',
  '&:hover': {
    backgroundColor: '$gray500',
  },
});

