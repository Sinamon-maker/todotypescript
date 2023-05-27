import React, { Fragment } from 'react';

import { Listbox, Transition } from '@headlessui/react';
import { Folder } from '../../../globalTypes';
import { IconComponent } from '../../../Icons/Icon';

type Props = {
	currentFolder: Folder;
	changeFolder: (val: Folder) => void;
	folders: Folder[];
};

export const ListFoldersHeading = ({ changeFolder, currentFolder, folders }: Props) => (
	<Listbox value={currentFolder} onChange={changeFolder}>
		<div className="relative mt-1 min-w-32 w-32">
			<Listbox.Button className="relative w-full min-w-32 border border-fill-weak px-2 py-2  cursor-default rounded-lg text-skin-base py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 ">
				<span className="block truncate ">{currentFolder.name}</span>
				<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
					<IconComponent Icon="expand" style="" />
				</span>
			</Listbox.Button>
			<Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
				<Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gradient-to-tr from-blue-800  to-red-800 py-1 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
					{folders.map((folder) => (
						<Listbox.Option
							key={folder.id}
							value={folder}
							className="relative cursor-default select-none py-2 pl-10 pr-4 font-normal ui-active:bg-blue-500 ui-selected:underline ui-selected:font-medium"
						>
							<span className="font-normal ui-selected:font-medium">{folder.name}</span>
							<span className="absolute inset-y-0 left-0 flex items-center pl-3">
								<IconComponent Icon="done" style="hidden ui-selected:block" />
							</span>
						</Listbox.Option>
					))}
				</Listbox.Options>
			</Transition>
		</div>
	</Listbox>
);
