import Grid from '@mui/material/Grid';
import BackgroundImage from '../../images/login-bottom.png';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	paperContainer: {
		backgroundImage: `url(${BackgroundImage})`,
		backgroundRepeat: 'no-repeat',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'end',
		backgroundColor: '#FAFAFA',
		backgroundPosition: 'bottom',
		height: '100vh',
		padding: '0 20px',
	},
	accountCreate: {
		color: '#8651D9',
		fontSize: '14px',
		[theme.breakpoints.up('lg')]: {
			fontSize: '16px',
		},
		[theme.breakpoints.up('xl')]: {
			fontSize: '18px',
		},
	},
	signUp: {
		backgroundColor: '#5facdf',
		backgroundImage:
			'linear-gradient(43deg, #5facdf 0%, #6668db 46%, #c6a7d5 100%)',
		border: 'none',
		padding: '10px',
		fontSize: '12px',
		letterSpacing: '2px',
		fontWeight: '500',
		minWidth: '100px',
		[theme.breakpoints.up('lg')]: {
			fontSize: '12px',
		},
		[theme.breakpoints.up('xl')]: {
			fontSize: '17px',
			padding: '13px 45px',
		},
	},
}));

const LoginAction = (props) => {
	const styleClass = useStyles(props);
	return (
		<Grid item xs={3} sm={3} md={4.3} lg={3}>
			<div className={styleClass.paperContainer}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-evenly',
						alignItems: 'center',
						gap: '30px',
					}}
				>
					<p className={styleClass.accountCreate}>Don’t have an account?</p>
					<button type="submit" className={styleClass.signUp}>
						SIGN UP
					</button>
				</div>
				<div
					style={{
						textAlign: 'end',
						width: 'fit-content',
					}}
				>
					<img
						alt=""
						sx={{
							width: '292px',
							height: '292px',
						}}
						src={require('../../images/ssl.png')}
					/>
					<p
						style={{
							fontSize: '12px',
							fontWeight: '300',
						}}
					>
						Copyright 2020-Retrex pty Ltd.
					</p>
				</div>
			</div>
		</Grid>
	);
};

export default LoginAction;
