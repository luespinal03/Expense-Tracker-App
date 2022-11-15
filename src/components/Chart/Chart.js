import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    // spread operator used so we can individually add every dataPointValue as a parameter into Math.max() aka 12 arguments
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}
            />
            )}
        </div>
    )
};

export default Chart;