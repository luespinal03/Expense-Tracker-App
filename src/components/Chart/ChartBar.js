import React from 'react';
import './ChartBar.css';

const ChartBar = (props) => {
    console.log(props)
    let barFillHeight = '0%';

    if (props.maxValue > 0) {
        // code below defines the percentage needed to use as far as the bar height goes
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'
    }
    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                {/* adding a dynamic specific style which is the height */}
                <div className='chart-bar__fill' style={{ height: barFillHeight }}></div>
            </div>
            <div className='chartbar__label'>{props.label}</div>
        </div>
    );

};
export default ChartBar;
