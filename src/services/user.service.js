// import { authHeader } from '../helpers';
import { appConstants } from '../helpers/app-constants';
export const userService = {
	login,
	logout,
	register
};

function login(email, password) {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email,
			password
		})
	};
//console.log(requestOptions)
	// fetch(appConstants.LOG, requestOptions)
	return fetch(appConstants.LOG, requestOptions)
		.then(handleResponse)
		.then(user => {
			console.log(user);
		//	console.log(requestOptions)
			localStorage.setItem('user', JSON.stringify(user));
			return user;
		});
		
		
	}

// remove user from local storage to log user out
function logout() {
	localStorage.removeItem('user');
}

// register user request
function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
	};
	//console.log(user);
    return fetch(appConstants.SIGN, requestOptions).then(handleResponse);
}


function handleResponse(response) {
	return response.text().then(text => {
		const data = text && JSON.parse(text);
		if (!response.ok) {
			if (response.status === 401) {
				// auto logout if 401 response returned from api
				logout();
				// location.reload(true);
			}
			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}

		return data;
	});
}
