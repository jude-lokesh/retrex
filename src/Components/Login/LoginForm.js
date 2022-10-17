import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { IconButton, OutlinedInput } from '@mui/material';
import { InputAdornment } from '@mui/material';
import { MailOutlined, VisibilityOff } from '@mui/icons-material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import KeyIcon from '@mui/icons-material/Key';
import { Visibility } from '@mui/icons-material';
import Image from '../../images/login-top.png';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	loginArea: {
		backgroundImage: `url(/static/media/login-top.png)`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: '350px 170px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	primaryButton: {
		background: 'none',
		textDecoration: 'inherit',
		width: 'fit-content',
		color: 'black',
		backgroundColor: '#FAFAFA',
		padding: '10px 50px',
		fontSize: '16px',
		border: '10px solid',
		borderImageSlice: 1,
		borderWidth: '2px',
		fontWeight: 900,
		borderImageSource: 'linear-gradient(to left, #743ad5, #d53a9d)',
	},
}));

const styles = {
	paperContainer: {
		backgroundImage: `url(${Image})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: '350px 170px',
	},
};

const LoginForm = (props) => {
	const styleClass = useStyles(props);
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});
	};

	const [values, setValues] = React.useState({
		amount: '',
		password: '',
		weight: '',
		weightRange: '',
		showPassword: false,
	});

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<Grid
			item
			xs={5}
			sm={5}
			md={4.2}
			lg={5}
			sx={{
				backgroundColor: '#FAFAFA',
			}}
			className={styleClass.loginArea}
			style={styles.paperContainer}
		>
			<Box
				sx={{
					width: '400px',
				}}
			>
				<Box>
					<Typography
						component="h1"
						variant="h5"
						sx={{
							fontStyle: 'normal',
							fontSize: '36px',
							lineHeight: '54px',
							color: '#8651D9',
							fontWeight: 'Bold',
							textAlign: 'start',
							fontFamily: 'Poppins',
						}}
					>
						Log into RetreX
					</Typography>
					<p
						style={{
							fontSize: '16px',
							fontWeight: 'light',
						}}
					>
						Enter your login deatails below
					</p>
				</Box>

				<Box
					component="form"
					noValidate
					onSubmit={handleSubmit}
					sx={{
						mt: 1,
						'& .MuiInputBase-input': {
							paddingLeft: '20px',
						},
					}}
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '20px',
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '10px',
						}}
					>
						<label>
							<strong>Email Address</strong>
						</label>
						<OutlinedInput
							style={{
								weight: '100%',
							}}
							id="start-adornment-email"
							type="email"
							startAdornment={
								<MailOutlined
									style={{
										borderRight: '1px solid black',
										paddingRight: '6px',
									}}
								/>
							}
						/>
					</div>

					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							gap: '10px',
						}}
					>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								fontSize: '14px',
							}}
						>
							<label>
								<strong>Password</strong>
							</label>
							<Link href="#" variant="body2">
								Forgot password?
							</Link>
						</div>

						<OutlinedInput
							style={{
								width: '100%',
							}}
							id="outlined-adornment-password"
							type={values.showPassword ? 'text' : 'password'}
							value={values.password}
							onChange={handleChange('password')}
							startAdornment={
								<KeyIcon
									style={{
										borderRight: '1px solid black',
										paddingRight: '6px',
									}}
								/>
							}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge="start"
									>
										{values.showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
						/>
					</div>

					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<div className="button">
						<button type="submit" className={styleClass.primaryButton}>
							LOGIN
						</button>
					</div>
				</Box>
			</Box>
		</Grid>
	);
};

export default LoginForm;
