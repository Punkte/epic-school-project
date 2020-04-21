import styled from "styled-components";

export const Spacer = styled.div`
  margin-bottom: ${props => props.size ? props.size + 'px' : '8px'}
`