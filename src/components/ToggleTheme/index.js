import { useEffect, useState } from 'react'
import { styled, darkTheme } from '@stitches'

const ToggleThemeButton = styled('div', {
  width: '3.5rem',
  height: '1.5rem',
  transition: 'ease 0.2s',
  borderRadius: '25rem',
  backgroundColor: '$gray400',
  color: 'fontPrimary',
  position: 'relative',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  '&::before': {
    content: '',
    display: 'flex',
    width: '1.3rem',
    height: '1.3rem',
    borderRadius: '50%',
    background: '$dot',
    transition: 'ease 0.2s',
    transform: 'translateX(2px)',
  },
  variants: {
    active: {
      true: {
        '&::before': {
          transform: 'translateX(33px)',
        },

      }
    }
  }
})

const ContainerToggleButton = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  fontFamily: 'monospace',
  color: '$fontSecondary',
})

export const ToggleTheme = () => {
  //state
  const [themeState, setThemeState] = useState(false)

  //Adiciona a class darkTheme no <html>
  const ChangeTheme = (themeState) => {
    themeState 
    ? document.documentElement.classList.add(darkTheme)
    : document.documentElement.classList.remove(darkTheme)
  }
  //Alterna o themeState no Button e armazena no LocalStorage
  const ToggleButton = () => {
    setThemeState(!themeState)
    ChangeTheme(!themeState)
    localStorage.setItem('theme', !themeState)
  }

  //Verifica se theme n LocalStorage é true, 
  //se true ele aplica o theme darkTheme e altera o themeState
  useEffect(() => {
    if(localStorage.getItem('theme') === 'true')  {
      setThemeState(true)
      ChangeTheme(true)
    }
  },[])

  return(<>
    <ContainerToggleButton>
      Light
      <ToggleThemeButton
        onClick={() => ToggleButton()}
        active={themeState}
      />
      Dark
    </ContainerToggleButton>
  </>)
}