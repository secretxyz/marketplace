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

export const getCurrentTime = () => {
	const now = new Date();
	return `${now.getHours()}:${now.getMinutes()}`;
};

export const getSummaryAddress = (addr) => {
	return `${addr.substring(0, 8)}...${addr.substring(addr.length - 8, addr.length)}`;
}

export const getSummaryTxID = (addr) => {
	return `${addr.substring(0, 12)}...${addr.substring(addr.length - 12, addr.length)}`;
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