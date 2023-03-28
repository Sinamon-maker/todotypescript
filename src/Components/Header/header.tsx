import React, { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';

import { AppButton } from '../../Module/Button/Button';

type Props = {
	handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Header = ({ handleClick }: Props) => {
	const logoName = useContext(UserContext);

	return (
		<header className=" bg-fill-main ">
			<div className="container  m-auto  flex flex-col sm:flex-row sm:justify-between sm:items-center py-6 pl-8 pr-8 shadow-lg">
				<p className="mb-4 sm:mb-0 text-skin-base">{logoName}</p>
				<nav>
					<AppButton
						style="flex-shrink-0 border-transparent border-4 text-fill-weak  hover:text-fill-strong disabled:opacity-25 text-sm py-1 px-2 rounded shadow-lg"
						type="button"
						nameValue="Cataloge"
						title="Cataloge"
					/>
					<AppButton
						style="flex-shrink-0 border-transparent border-4 text-fill-weak  hover:text-fill-strong disabled:opacity-25 text-sm py-1 px-2 rounded shadow-lg"
						type="button"
						nameValue="logout"
						onClick={(e) => handleClick(e)}
						title="Log out"
					/>
				</nav>
			</div>
		</header>
	);
};
