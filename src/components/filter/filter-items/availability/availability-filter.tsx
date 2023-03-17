import { FC } from 'react';
import { Accordion } from 'components';
import { OptionGroup } from '../options-group';
import { ICollectionItem } from 'types';

interface AvailabilityFilterProps {
	data: ICollectionItem[];
}

export const AvailabilityFilter: FC<AvailabilityFilterProps> = ({
	data: availability,
}) => {
	return (
		<Accordion title='availability'>
			<OptionGroup options={availability} name='availability' />
		</Accordion>
	);
};
