import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppButton } from '../../../Module/Button/Button';

import { AppInput } from '../../../Module/Input/Input';
import { styleType } from '../../../styles/styles';

export const SideBar = () => {
	const { userId } = useParams();
	const folder = '';
	return (
		<aside className=" p-4 w-1/3 h-full rounded text-skin-base border border-fill-weak">
			<h2 className="text-lg">Folders</h2>
			<div className="h-full flex flex-col ">
				<ul className="grow my-4">
					<li className="mb-2">
						<Link to={`/catalogue/${userId}/${folder}`}></Link>
						Folder1
					</li>
					<li>Folder2</li>
					<li>Folder3</li>
				</ul>
				<form className="h-full w-full mt-6">
					<div className="w-full border-2 border-sky-800 p-2 rounded flex ">
						<AppInput style="w-full bg-transparent" placeholder="Add new folder" value="" onChange={(e) => console.log('folder')} />
						<AppButton
							style={styleType.buttonStyle}
							disabled={false}
							ariaLabel=""
							type="submit"
							nameValue="addFolder"
							title="Add"
							onClick={() => console.log('add folder')}
						/>
					</div>
				</form>
			</div>
		</aside>
	);
};
