import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	bannerContainer: {
		backgroundRepeat: 'no-repeat',
		backgroundColor: '#345B83',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		padding: '0px 40px',
	},
	logo: {
		[theme.breakpoints.up('lg')]: {
			width: '220px',
		},
		[theme.breakpoints.up('xl')]: {
			width: '290px',
		},
	},
	title: {
		color: '#fff',
		fontFamily: 'poppins',
		fontWeight: '700',
		[theme.breakpoints.up('lg')]: {
			fontSize: '38px',
			textAlign: 'end',
			margin: 0,
			paddingLeft: '20px',
		},
		[theme.breakpoints.up('xl')]: {
			fontSize: '50px',
			textAlign: 'end',
			paddingLeft: '76px',
		},
	},
}));

const LoginBanner = (props) => {
	const styleClass = useStyles(props);
	return (
		<Grid item xs={4} sm={4} md={3.5} lg={4} sx={{ display: 'flex' }}>
			<Box className={styleClass.bannerContainer}>
				<Box>
					<img
						alt="Logo"
						className={styleClass.logo}
						src={require('../../images/logo.png')}
					/>
				</Box>
				<Box>
					<p className={styleClass.title}>
						Powerful, easy-to-use application for real estate trading
					</p>
				</Box>
			</Box>
		</Grid>
	);
};

export default LoginBanner;
