export const mapOrder = (array, order, key) => {
	// eslint-disable-next-line func-names
	array.sort(function (a, b) {
		const A = a[key];
		const B = b[key];
		if (order.indexOf(`${A}`) > order.indexOf(`${B}`)) {
			return 1;
		}
		return -1;
	});
	return array;
};

export const getDateTimeWithFormat = (value) => {
	const dt = new Date(value);
	let dd = dt.getDate();
	let mm = dt.getMonth() + 1;

	const yyyy = dt.getFullYear();
	if (dd < 10) {
		dd = `0${dd}`;
	}
	if (mm < 10) {
		mm = `0${mm}`;
	}

	let ap = "AM";
	let hh = dt.getHours();
	let m = dt.getMinutes();
	if (hh < 10) {
		hh = `0${hh}`;
	}
	if (hh > 12) {
		hh = hh - 12;
	}
	if (hh >= 12) {
		ap = "PM"
	}
	if (m < 10) {
		m = `0${m}`;
	}

	return `${dd}/${mm}/${yyyy} ${hh}:${m} ${ap}`;
};

export const getDateWithFormat = () => {
	const today = new Date();
	let dd = today.getDate();
	let mm = today.getMonth() + 1; // January is 0!

	const yyyy = today.getFullYear();
	if (dd < 10) {
		dd = `0${dd}`;
	}
	if (mm < 10) {
		mm = `0${mm}`;
	}
	return `${dd}.${mm}.${yyyy}`;
};

export const getDifferenceTime = (dt) => {
	const end = new Date(dt);
	const today = new Date();

	let diff;
	if (today.getTime() > end.getTime()) {
		diff = new Date(today.getTime() - end.getTime());
	} else {
		diff = new Date(end.getTime() - today.getTime());
	}


	const yyyy = diff.getUTCFullYear() - 1970;
	const mm = diff.getUTCMonth();
	const dd = diff.getUTCDate() - 1;
	const hh = diff.getUTCHours();
	const m = diff.getUTCMinutes();
	const ss = diff.getUTCSeconds();

	if (today.getTime() > end.getTime()) {
		if (yyyy > 0) {
			return `${yyyy} Yrs ${mm} Months ago`;
		}
		if (mm > 0) {
			return `${mm} Months ${dd} Days ago`;
		}
		if (dd > 0) {
			return `${dd} Days ${hh} Hrs ago`;
		}
		if (hh > 0) {
			return `${hh} Hrs ${m} Mins ago`;
		}
		if (m > 0) {
			return `${m} Mins ${ss} Secs ago`;
		}
	} else {
		if (yyyy > 0) {
			return `in ${yyyy} Yrs ${mm} Months`;
		}
		if (mm > 0) {
			return `in ${mm} Months ${dd} Days`;
		}
		if (dd > 0) {
			return `in ${dd} Days ${hh} Hrs`;
		}
		if (hh > 0) {
			return `in ${hh} Hrs ${m} Mins`;
		}
		if (m > 0) {
			return `in ${m} Mins ${ss} Secs`;
		}
	}
}

export const getCurrentTime = () => {
	const now = new Date();
	return `${now.getHours()}:${now.getMinutes()}`;
};

export const getImageLink = (url) => {
	if (!url) {
		return "img/cover-photo.jpeg";
	}
	if (url.startsWith("ipfs://ipfs/")) {
		return `https://ipfs.io/${url.substring(7)}`;
	}
	if (url.startsWith("ipfs://")) {
		return `https://ipfs.io/ipfs/${url.substring(7)}`;
	}
	return url;
}

export const getSummaryUsername = (data) => {
	if (data && data.username) {
		return `@${data.username}`
	}
	return getSummaryAddress2(data.wallet);
}

export const getSummaryAddress = (addr) => {
	if (addr)
		return `${addr.substring(0, 8)}...${addr.substring(addr.length - 8, addr.length)}`;
}

export const getSummaryAddress2 = (addr) => {
	if (addr)
		return `${addr.substring(0, 8)}...`;
}

export const getSummaryTxID = (txid) => {
	if (txid)
		return `${txid.substring(0, 10)}...${txid.substring(txid.length - 10, txid.length)}`;
}

export const getAuthChannel = () => {
	let auth_channel = null;
	try {
		auth_channel =
			localStorage.getItem('auth_channel') != null ? localStorage.getItem('auth_channel') : null;
	} catch (error) {
		auth_channel = null;
	}
	return auth_channel;
};

export const setAuthChannel = (auth_channel) => {
	try {
		if (auth_channel) {
			localStorage.setItem('auth_channel', auth_channel);
		} else {
			localStorage.removeItem('auth_channel');
		}
	} catch (error) {
	}
};

export const isLoggedIn = () => {
	return localStorage.getItem('auth_token') != null;
};

export const getAuthToken = () => {
	let auth_token = null;
	try {
		auth_token =
			localStorage.getItem('auth_token') != null ? localStorage.getItem('auth_token') : null;
	} catch (error) {
		auth_token = null;
	}
	return auth_token;
};

export const setAuthToken = (auth_token) => {
	try {
		if (auth_token) {
			localStorage.setItem('auth_token', auth_token);
		} else {
			localStorage.removeItem('auth_token');
		}
	} catch (error) {
	}
};

export const getAccount = () => {
	let account = null;
	try {
		account = localStorage.getItem('account') != null ? JSON.parse(localStorage.getItem('account')) : {};
	} catch (error) {
		account = {};
	}
	return account;
};

export const setAccount = (account) => {
	try {
		if (account) {
			localStorage.setItem('account', JSON.stringify(account));
		} else {
			localStorage.removeItem('account');
		}
	} catch (error) {
		console.log(error);
	}
};

export const getRaffleStatus = (status) => {
	switch (status) {
		case "active":
			return "Live";
		case "canceling":
			return "Cancelling";
		case "canceled":
			return "Cancelled";
		case "raffling":
		case "raffled":
			return "Completed";
	}
}

export const getTicketStatus = (status) => {
	switch (status) {
		case "active":
			return <p className="badge bg-success">Live</p>
		case "winner":
			return <p className="badge bg-warning text-dark">
				<i className="fas fa-crown fa-fw"></i> Winner
			</p>
		case "canceled":
			return <p className="badge bg-danger">Cancelled</p>
		case "raffled":
			return <p className="badge bg-primary">Completed</p>
	}
}

export const getNumberFormat1 = (value) => {
	if (!value) {
		return 0;
	}

	let v = Number(value);
	if (v > 1000) {
		return `${(v / 1000).toFixed(2)}K`;
	}
	if (v > 1000000) {
		return `${(v / 1000000).toFixed(2)}M`;
	}
	return v;
}

export const getThemeMode = () => {
	let mode = localStorage.getItem("mode");
	if (!mode || mode == "false") {
		return false;
	}
	return true;
}

export const setThemeMode = (mode) => {
	localStorage.setItem("mode", mode);
}

export const setTheme = () => {
	// set theme
	let mode = getThemeMode();
	if (mode) {
		document.body.classList.remove("cs-dark");
	} else {
		document.body.classList.add("cs-dark");
	}
}