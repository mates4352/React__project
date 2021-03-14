import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        color: '#1C62CD'
    },
    track: {
        //color: '#1C62CD',
        height: '3px'
    },
    rail:{
        color: '#E0E0E0',
        height: '1px'
    },
    thumb:{
        width: '7.38px',
        height: '7.38px',
        'margin-left': '-3.69px',
        'margin-top': '-2.69px',
    },
    valueLabel:{
        fontSize: '8px',
    }
});

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState([100000, 500000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="off"     //"auto" to display on hover
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            classes={classes}
            min={0}
            max={1100000}
        />
    );
}