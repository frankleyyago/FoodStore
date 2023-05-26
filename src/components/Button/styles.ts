import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const ButtonStyles = styled.button`
  background-color: ${colors.red};
  color: ${colors.lightYellow};
  border: none;
  padding: 4px 6px;
`

export const LinkStyles = styled(Link)`
  background-color: ${colors.red};
  color: ${colors.lightYellow};
  font-size: 14px;
  border: none;
  padding: 4px 6px;
  text-decoration: none;
`

export const ButtonWrapperStyles = styled.div`
  margin-top: 16px;
  padding: 4px 0;
`
