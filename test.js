
const axios = require('axios')
async function getToken() {

  let customObj= {
			grant_type: "client_credentials",
			audience: "https://bbz-admin.eu.auth0.com/api/v2/",
			client_id: "ARB0mfwSALPVZHfRuOZhl2IwR5bytsHX",
			client_secret: "fPPSAkd0I_U9fzV0Rv-Jjc8A8HmWohRAFOfzLEFFyFZ7KNEVZDV1JkWSbFhErcdj",
		};
		let options  = {
			method: 'POST',
			url: "https://auth.zebbadmin.rockingrhinos.trade/oauth/token",
			headers: { 'content-type': 'application/json' },
			data: customObj,
		};

               try {
                        console.log('calling')
			response = await axios.request(options);
                       console.log(response)
  
		} catch (error) {
                   console.log('error ', error)
			return (response = error.response);
		}
                console.log('returning ', response.data)
		return response.data;
}


async function fetchRoles() {
                const tokenResponse = await getToken();
		console.log('tr ', tokenResponse)
                let authToken = `Bearer ${tokenResponse.access_token}`;
		let options  = {
			url: `https://auth.zebbadmin.rockingrhinos.trade/api/v2/roles`,
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				Authorization: `${authToken}`,
				'cache-control': 'no-cache',
			},
		};
                console.log('roles ', options)
		try {
			const response = await axios.request(options);
			if (!response) return;
			return response.data;
		} catch (error) {
			throw error;
		}
}


fetchRoles()
