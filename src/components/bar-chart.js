import React, { Component } from 'react';
import sample from '../data/bar-chart.json';

class RenderData extends Component {
    render() {
        let dates = [];
        let data = this.props.data;


        let renderData = data.map((item, index) => {
            if (index % 25 === 0) {
                dates[index] = item[0].substr(0, 4);
            }

            return <div key={index}>
                <div
                    className="bar"
                    id={index}
                    style={{ height: Math.round(parseFloat(item[1])) / 30, width: 1000 / (data.length - 1) }}>
                    <span className="barValue">
                        {"Date: " + item[0]}<br></br>{"GDP: $" + item[1] + " (billions)"}
                    </span>
                </div>
                <div>
                    <span className="dates">
                        {dates[index]}
                    </span>
                </div>
            </div>
        });

        return renderData;
    }
}

class SliderControl extends Component {
    render() {
        return (
            <div className="scroll">
                <h2>Zoom the Chart Range:</h2>
                <input
                    className="slider"
                    style={{ width: "500px" }}
                    name="slider"
                    type="range"
                    min="1"
                    max="273"
                    value={this.props.slider}
                    onChange={this.props.handleRange.bind(this)} />
            </div>
        );
    }
}

class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            data: [],
            array: [],
            slider: 10
        });

        this.handleRange = this.handleRange.bind(this);
    }

    componentDidMount() {
        this.setState({
            data: sample.data,
            array: sample.data
        })
    }

    handleRange(e) {
        let num = parseInt(e.target.value, 10);
        this.setState({ array: [] });
        this.setState({ slider: num });
        let curData = this.state.data.slice();
        var scaledData = curData.splice(num, curData.length);
        this.setState({ array: scaledData });
    }

    render() {
        return (
            <div className="outerwrapper">
                <h1>Modeling US GDP Economic Data</h1>
                <div className="chart">
                    <RenderData
                        data={this.state.array} />
                </div>
                <SliderControl
                    handleRange={this.handleRange}
                    slider={this.state.slider} />
            </div>
        );
    }
}

export default BarChart;