import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
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
			<Container maxWidth="md">
				<h2>Mortality Dashboards</h2>
				<Box height={"400px"} sx={{ my: 4 }}>
					<Grid container spacing={2}>
						<Grid item xs={8}>
							<Card variant="outlined">
								<DemoMap />
							</Card>
						</Grid>
						<Grid item xs={4}>
							<Typography variant='h3'>Decription goes here</Typography>
						</Grid>
					</Grid>
				</Box>
				<Card variant="outlined" sx={{ my: 4 }}>
					<ColumnChart1 />
				</Card>
			</Container>
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<Card variant="outlined">
						<ColumnChart2 />
					</Card>
				</Grid>
				<Grid item xs={4}>
					<Card variant="outlined">
						<PieChart />
					</Card>
				</Grid>
				<Grid item xs={4}>
					<Card variant="outlined">
						<ColumnChart4 />
					</Card>
				</Grid>
				<Grid item xs={4}>
					<Card variant="outlined">
						<ColumnChart5 />
					</Card>
				</Grid>
				<Grid item xs={4}>
					<Card variant="outlined">
						<PieChart2 />
					</Card>
				</Grid>
				<Grid item xs={4}>
					<Card variant="outlined">
						<ColumnChart7 />
					</Card>
				</Grid>
			</Grid>
		</>
  );
}
