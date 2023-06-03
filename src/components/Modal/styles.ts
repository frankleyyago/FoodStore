import styled from 'styled-components'

export const ModalStyles = styled.div`
  position: fixed;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 344px;
  width: 1024px;
  background-color: red;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .container {
    max-width: 960px;
  }

  < img {
    height: 280px;
    width: 280px;
  }
`

export const ModalContent = styled.div``

export const TitleStyles = styled.h2``

export const DescriptionStyles = styled.h3``
