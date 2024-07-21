import { Box } from '@mui/material';
// import Logo from '../assets/logo.jpeg';
import { keyframes } from '@emotion/react';

import * as React from 'react';
import { styled } from '@mui/material/styles';

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const bounce1 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 1px, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const bounce3 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 3px, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

function GradientCircularProgress() {
	return (
		<React.Fragment>
			<svg width={0} height={0}>
				<defs>
					<linearGradient id='my_gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
						<stop offset='0%' stopColor='#FDB515' />
						<stop offset='100%' stopColor='#F4F4F5' />
					</linearGradient>
				</defs>
			</svg>
			<CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} size='5rem' />
		</React.Fragment>
	);
}

export const SplashScreen = () => (
	<Box
		sx={{
			alignItems: 'center',
			// backgroundColor: 'neutral.900',
			display: 'flex',
			flexDirection: 'column',
			height: '100vh',
			justifyContent: 'center',
			left: 0,
			p: 3,
			position: 'fixed',
			top: 0,
			width: '100vw',
			zIndex: 2000,
		}}
	>
		<GradientCircularProgress />
		{/* <img
			src={Logo}
			alt='logo'
			style={{
				height: '80',
				width: '80',
				objectFit: 'contain', // or any other style you prefer
			}}
		/>*/}
	</Box>
);