import React from 'react';
import { Container } from '../../Module/Container/Container';
import { AppButton } from '../../Module/Button/Button';
import { NewCatalogeForm } from '../../Components/NewCatalogeForm/NewCatalogeForm';
export const TasksCataloge = () => (
	<main className="w-full border border-white  m-auto grow overflow-y-auto scroll-smooth ">
		<Container>
			<div className="w-full flex flex-col ">
				<NewCatalogeForm />
				<div className="w-full flex  flex-col gap-4">
					<div className="w-full grow p-4 rounded-lg border flex gap-4 items-center text-skin-base">
						<div className="grow">Buy</div>
						<div>11/20</div>
						<AppButton
							style="flex-shrink-0 border-transparent border-4 text-fill-weak hover:text-fill-strong text-sm py-1 px-2 rounded shadow-lg"
							nameValue="cansel"
							title="Delete"
						/>
						<AppButton
							style="flex-shrink-0 bg-fill-weak hover:bg-fill-strong disabled:opacity-25 border-fill-weak hover:border-fill-strong text-sm border-4 text-skin-base py-1 px-2 rounded shadow-lg"
							type="submit"
							nameValue="loginUser"
							title="Go"
						/>
					</div>
					<div className="w-full grow p-4 rounded-lg border">Buy</div>
					<div className="w-full grow p-4 rounded-lg border">Buy</div>
				</div>
			</div>
		</Container>
	</main>
);
