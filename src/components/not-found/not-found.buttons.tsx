import React from 'react';
import { Box } from 'components';
import { useRouter } from 'next/router';
import { ErrorButton } from './not-found.styled';

export const NotFoundButtons = () => {
	const router = useRouter();

	const onClickHome = () => {
		router.push('/');
	};

	const onClickReport = () => {
		const path = router.asPath;
		console.log(`user came to url "${path}" and there is no page here`);
	};

	return (
		<Box display='flex' gridGap={10} flexDirection='column' alignItems='center'>
			<ErrorButton color='red' onClick={onClickHome}>
				Go to homepage
			</ErrorButton>
			<ErrorButton color='transparent' onClick={onClickReport}>
				Report a bug
			</ErrorButton>
		</Box>
	);
};
