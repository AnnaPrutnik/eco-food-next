import { FC } from 'react';
import { Box, Filter, ScrollArea } from 'components';
import {
	CommonFilter,
	Trigger,
	Content,
	ExitBtn,
	Overlay,
} from './mobile-filter.styled';
import { FiltersCount } from '../applied-filters.styled';
import * as Dialog from '@radix-ui/react-dialog';
import { ExitIcon } from 'components/svg';

interface MobileFilterProps {
	filterCount: number;
	totalProduct: number;
}

export const MobileFilter: FC<MobileFilterProps> = ({
	filterCount,
	totalProduct,
}) => {
	return (
		<Box display={['block', 'block', 'none']}>
			<Dialog.Root>
				<Trigger>
					<CommonFilter>Filter ({filterCount})</CommonFilter>
					<FiltersCount>Showed {totalProduct} goods</FiltersCount>
				</Trigger>
				<Dialog.Portal>
					<Overlay />
					<Content>
						<Box mt='sp28'>
							<ScrollArea maxHeight={0.75}>
								<Box pl='sp32' pr='sp32'>
									<Filter />
								</Box>
							</ScrollArea>
						</Box>

						<Dialog.Close asChild>
							<ExitBtn className='IconButton' aria-label='Close'>
								<ExitIcon />
							</ExitBtn>
						</Dialog.Close>
					</Content>
				</Dialog.Portal>
			</Dialog.Root>
		</Box>
	);
};
