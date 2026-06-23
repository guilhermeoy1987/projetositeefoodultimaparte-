import styled from 'styled-components'
import { breakPoints } from '../styles'

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  padding: 56px 0;

  @media (max-width: ${breakPoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakPoints.mobile}) {
    grid-template-columns: 1fr;
  }
`
