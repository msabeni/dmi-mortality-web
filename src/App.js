import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import DemoMap from './Map';
import ColumnChart1 from './Chart1';
import { Grid } from '@mui/material';
import ColumnChart2 from './Chart2';
import PieChart from './Chart3';
import ColumnChart4 from './Chart4';
import PieChart2 from './Chart6';
import ColumnChart5 from './Chart5';
import ColumnChart7 from './Chart7';


export default function App() {
  return (
		<>
			<Container maxWidth="sm">
				<Box sx={{ my: 4 }}></Box>
				<Box height={"400px"}>
					<DemoMap />
				</Box>
				<ColumnChart1 />
			</Container>
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<ColumnChart2 />
				</Grid>
				<Grid item xs={4}>
					<PieChart />
				</Grid>
				<Grid item xs={4}>
					<ColumnChart4 />
				</Grid>
				<Grid item xs={4}>
					<ColumnChart5 />
				</Grid>
				<Grid item xs={4}>
					<PieChart2 />
				</Grid>
				<Grid item xs={4}>
					<ColumnChart7 />
				</Grid>
			</Grid>
		</>
  );
}
