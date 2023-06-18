import { PuffLoader } from 'react-spinners'

import { colors } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <PuffLoader color={colors.red} />
  </Container>
)

export default Loader
