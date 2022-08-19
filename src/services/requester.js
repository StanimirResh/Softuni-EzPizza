const request = async (method, url, data) => {
    let buildRequest;

    let loggedUser = localStorage.getItem('user');

    let headers = {}

    if (loggedUser) {
        loggedUser = JSON.parse(loggedUser);
        headers['X-Authorization'] = loggedUser.accessToken
    }

    if (method === 'GET') {
        buildRequest = fetch(url, { headers })
    } else {
        try {
            buildRequest = fetch(url, {
                method,
                headers: {
                    ...headers,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        } catch (err) {
            console.log('test');
        }
    }

    const response = await buildRequest;
    if (!response.ok) {
        throw new Error()
    }
    const result = await response.json();
    return result;

}


export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const patch = request.bind({}, 'PATCH');
export const put = request.bind({}, 'PUT');
export const del = request.bind({}, 'DELETE');

