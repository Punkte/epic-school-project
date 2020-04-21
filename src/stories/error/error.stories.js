import React from 'react';
import Error from '../../components/atoms/error';

export const Small = () => <Error size='small'><span>Small error</span></Error>;
export const Medium = () => <Error><span>Medium error</span></Error>;
export const Large= () => <Error size='large'><span>Large error</span></Error>;
