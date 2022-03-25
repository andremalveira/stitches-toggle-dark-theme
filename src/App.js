
import { ContainerApp } from 'components/Container'
import { FirstButton, SecondButton } from 'components/Button'
import { ToggleTheme } from 'components/ToggleTheme'

function App() {
  return (
    <ContainerApp placement='center' direction='column'>
      <div className="container-buttons" style={{marginBottom: '5rem'}}>
        <FirstButton>First Button</FirstButton>
        <SecondButton>Second Button</SecondButton>
      </div>
      <ToggleTheme active/>
    </ContainerApp>
  );
}

export default App;
