import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Particles from "react-tsparticles";
import { defaultOptions } from './Options';

const  useStyles = makeStyles(() => ({
  particleStyle: {
      position:   "absolute",
      top:        0,
      left:       0,
      width:      "100%",
      height:     "99vh",
  }
}))

export default function MyParticles() {

  const classes = useStyles();

  return (
    <Particles
      className={ classes.particleStyle }
      id="tsparticles"
      options={ defaultOptions }
    />
  )
}