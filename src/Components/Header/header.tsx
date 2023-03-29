import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import useLogout from '../../Hooks/useLogout';

import { AppButton } from '../../Module/Button/Button';

export const Header = () => {
	const { logoName } = useContext(UserContext);
	const { error, logout } = useLogout();

	const handleClick = async () => {
		await logout();
	};

	return (
		<header className=" bg-fill-main ">
			<div className="container  m-auto  flex flex-col sm:flex-row sm:justify-between sm:items-center py-6 pl-8 pr-8 shadow-lg">
				{logoName && <p className="mb-4 sm:mb-0 text-skin-base">{logoName.displayName}</p>}
				<nav>
					<Link to={'/tasks'}>
						<AppButton
							style="flex-shrink-0 border-transparent border-4 text-fill-weak  hover:text-fill-strong disabled:opacity-25 text-sm py-1 px-2 rounded shadow-lg"
							type="button"
							nameValue="Cataloge"
							title="Cataloge"
						/>
					</Link>
					<AppButton
						style="flex-shrink-0 border-transparent border-4 text-fill-weak  hover:text-fill-strong disabled:opacity-25 text-sm py-1 px-2 rounded shadow-lg"
						type="button"
						nameValue="logout"
						onClick={handleClick}
						title="Log out"
					/>
				</nav>
			</div>
		</header>
	);
};
