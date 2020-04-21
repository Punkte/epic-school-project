import React from 'react';
import Input from '../../components/atoms/input';
import styled from 'styled-components';

export const Spacer = styled.div`
  margin-bottom: 8px;
`

export const Small = () => <Input size='small'/>;
export const Medium = () => <Input/>;
export const Large= () => <Input size='large'/>;
