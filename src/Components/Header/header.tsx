import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../Context/userContext';
import useLogout from '../../Hooks/useLogout';

import { AppButton } from '../../Module/Button/Apbutton';
import { styleType } from '../../styles/styles';

export const Header = () => {
	const { logoName } = useContext(UserContext);
	const { logout } = useLogout();

	const handleClick = async () => {
		await logout();
	};
	const myCatalogueLink = logoName ? `/catalogue/${logoName?.uid}` : 'catalogue';

	return (
		<header className=" bg-fill-main ">
			<div className="container  m-auto  flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 sm:py-6 pl-8 pr-8 shadow-lg">
				{logoName && <p className="mb-2 sm:mb-4 sm:mb-0 text-skin-base">{logoName.displayName}</p>}
				<nav className="flex justify-between items-center flex-wrap gap-4">
					<AppButton style={`${styleType.link} ssm:order-last`} type="button" nameValue="logout" onClick={handleClick} title="Log out" />
					<div className="flex gap-2">
						<NavLink to={`${myCatalogueLink}`} end>
							{({ isActive }) => <span className={isActive ? `${styleType.link} underline` : styleType.link}>My Cataloge</span>}
						</NavLink>
						<NavLink to="/catalogue" end>
							{({ isActive }) => <span className={isActive ? `${styleType.link} underline` : styleType.link}>Cataloge</span>}
						</NavLink>
					</div>
				</nav>
			</div>
		</header>
	);
};
