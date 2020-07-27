import React from 'react'
import styled from 'styled-components'

import LoaderSvg from './LoaderSvg'

const LoaderContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
`
const Loader = () => (
  <LoaderContainer>
    <LoaderSvg fill="#2ecc71" />
  </LoaderContainer>
)

export default Loader;
