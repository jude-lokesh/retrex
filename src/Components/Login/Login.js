import './Login.css';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginBanner from './LoginBanner';
import LoginForm from './LoginForm';
import LoginAction from './LoginAction';

const theme = createTheme();

export default function Login() {
	return (
		<ThemeProvider theme={theme}>
			<Grid
				container
				component="main"
				sx={{ height: '100vh', display: 'flex', alignItem: 'end' }}
			>
				<CssBaseline />

				<LoginBanner />
				<LoginForm />
				<LoginAction />
				{/* --------------------------Grid-3------------------------------------------ */}
			</Grid>
		</ThemeProvider>
	);
}
