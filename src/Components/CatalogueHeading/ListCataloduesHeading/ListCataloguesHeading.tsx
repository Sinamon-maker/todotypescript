import React, { useState, Fragment } from 'react';
import { Combobox, Transition } from '@headlessui/react';

import { IconComponent } from '../../../Icons/Icon';
import { Data } from '../../../globalTypes';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const people = [
	{ id: 1, name: 'Durward Reynolds' },
	{ id: 2, name: 'Kenton Towne' },
	{ id: 3, name: 'Therese Wunsch' },
	{ id: 4, name: 'Benedict Kessler' },
	{ id: 5, name: 'Katelyn Rohan' },
];

type Props = {
	catalogues: Data[];
};

export const ListCataloguesHeading = ({ catalogues }: Props) => {
	const [selectedCatalogue, setSelectedCatalogue] = useState(catalogues[0]);
	const [query, setQuery] = useState('');
	const { userId } = useParams();
	const navigate = useNavigate();

	const renderTasks = (data: Data) => {
		setSelectedCatalogue(data);
		navigate(`/catalogue/${userId}/tasks/${data.id}`);
	};
	const filteredCatalogues =
		query === ''
			? catalogues
			: catalogues.filter((item) => {
					return item.title.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''));
			  });

	return (
		<Combobox value={selectedCatalogue} onChange={renderTasks}>
			<div className="relative mt-1">
				<div className="relative border border-fill-weak py-2 rounded-lg">
					<Combobox.Input
						className="appearance-none bg-transparent border-none w-full  text-skin-base mr-3 py-1 px-2 leading-tight focus:outline-none"
						displayValue={(item: Data) => item.title}
						onChange={(event) => setQuery(event.target.value)}
					/>
					<Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
						<IconComponent Icon="expand" style="h-5 w-5 text-gray-400" />
					</Combobox.Button>
				</div>
				<Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" afterLeave={() => setQuery('')}>
					<Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gradient-to-tr from-blue-800  to-red-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
						{filteredCatalogues.length === 0 && query !== '' ? (
							<div className="relative cursor-default select-none py-2 px-4 text-gray-700">Nothing found.</div>
						) : (
							filteredCatalogues.map((item) => (
								<Combobox.Option
									key={item.id}
									value={item}
									className="relative cursor-default select-none py-2 pl-10 pr-4 font-normal ui-active:bg-blue-500 ui-selected:underline ui-selected:font-medium"
								>
									<span className="font-normal ui-selected:font-medium">{item.title}</span>
									<span className="absolute inset-y-0 left-0 flex items-center pl-3">
										<IconComponent Icon="done" style="hidden ui-selected:block" />
									</span>
								</Combobox.Option>
							))
						)}
					</Combobox.Options>
				</Transition>
			</div>
		</Combobox>
	);
};
