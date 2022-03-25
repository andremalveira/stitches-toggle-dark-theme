import { styled } from "@stitches";


export const ContainerApp = styled('div', {
  backgroundColor: '$background',
  width: '100%',
  height: '100vh',
  position: 'relative',
  boxSizing: 'border-box',
  variants: {
    placement: {
      center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    direction: {
      column: {
        flexDirection: 'column'
      }
    }
  },
})