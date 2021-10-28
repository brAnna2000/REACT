export const baseUrl = 'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json';

export const defaultConfig = {
    headers: {
        Accept: 'application/json',
    }
}

export const API = {
    request(url, config = {}) {
        return fetch(url, {
            ...defaultConfig,
            ...config,
        });
    },
    get(config = {}) {
        return this.request(`${baseUrl}`, config);
    },
    // post(path, config = {}) { },
    // put(path, config = {}) { },
    // patch(path, config = {}) { },
    // delete(path, config = {}) { },
};
