import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ColumnChart2 = () => {
	const options = {
		chart: {
			type: "bar",
		},
		title: {
			text: "Enrollment By Health Facility",
		},
		xAxis: {
			categories: ["Nakuru CRH", "Loitoktok CRH", "Busia CRH", "Kapenguria CRH", "Makueni CRH"],
		},
		yAxis: {
			title: {
				text: "",
			},
		},
		series: [
			{
				name: "No of Cases",
				data: [10, 20, 30, 40, 50].reverse(),
				color: "purple",
			},
		],
	};

	return (
		<div>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
};

export default ColumnChart2;
