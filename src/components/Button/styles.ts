import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${colors.red};
  color: ${colors.lightYellow};
  border: none;
  padding: 4px 6px;
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.red};
  color: ${colors.lightYellow};
  font-size: 14px;
  border: none;
  padding: 4px 6px;
  text-decoration: none;
`

export const ButtonWrapper = styled.div`
  margin-top: 16px;
  padding: 4px 0;
`
