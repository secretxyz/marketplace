import React, { useEffect, useState } from 'react';
import Switch from "react-switch";
import { getThemeMode, setThemeMode, setTheme } from '../Helpers/Utils';

const SwitchMode = () => {
	const [mode, setMode] = useState(getThemeMode());

	useEffect(() => {
		setTheme(mode);
	}, [mode]);

	const onChangeMode = () => {
		setThemeMode(!mode);
		setMode(!mode);
	}

	return (
		<Switch
			onChange={onChangeMode}
			checked={mode}
			offColor="#393551"
			onColor="#5f8eff"
			onHandleColor="#524e67"
			handleDiameter={30}
			uncheckedIcon={false}
			checkedIcon={false}
			boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
			activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
			height={20}
			width={48}
			className="react-switch"
			uncheckedHandleIcon={
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100%",
						color: "#5f8eff",
						fontSize: 20
					}}
				>
					<i className="fas fa-sun fa-fw"></i>
				</div>
			}
			checkedHandleIcon={
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100%",
						color: "#fff",
						fontSize: 18
					}}
				>
					<i className="fas fa-moon fa-fw"></i>
				</div>
			}
		/>
	)
}

export default SwitchMode;