const axios = require('axios');

const login = async () => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/login', {
            email: 'admin@eventhub.com',
            password: 'admin123'
        });
        console.log('Login Successful!');
        console.log('Token:', response.data.token);
    } catch (error) {
        console.error('Login Failed:', error.response ? error.response.data : error.message);
    }
};

login();
