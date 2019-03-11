import React, { PureComponent } from 'react';
import {
    PieChart, Pie, Legend, Tooltip,
} from 'recharts';


export default class Example extends PureComponent {

    render() {
        const {data} = this.props;
        return (
            <PieChart width={400} height={350}>
                <Pie dataKey="value" isAnimationActive={false} data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
                {/*<Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />*/}
                <Tooltip />
            </PieChart>
        );
    }
}
