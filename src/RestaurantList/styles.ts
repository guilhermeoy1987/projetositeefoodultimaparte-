import styled from 'styled-components'
import { breakPoints } from '../styles'

export const ListContainer = styled.section`
  display: grid;
  padding: 80px 0;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 24px;

  @media (max-width: ${breakPoints.mobile}) {
    grid-template-columns: 1fr;
  }
`
