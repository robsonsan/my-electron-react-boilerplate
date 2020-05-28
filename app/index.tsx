import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import './app.global.css';

document.addEventListener('DOMContentLoaded', () =>
  render(
    <Root />
    ,
    document.getElementById('root')
  )
);
