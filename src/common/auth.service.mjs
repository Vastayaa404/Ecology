import axios from 'axios';
import { sha256 } from './functions.mts';

export const signin = async (username, password) => {
    try {
        if (username.length < 3 || password.length < 1) { return { c: 'e400', msg: 'Логин и пароль не могут быть пустыми' } };
        const hash = await sha256(password);
        const resp = await axios.post('/api/v2/auth/login', { login: username, hash });

        if (resp.data.code !== 0) { return { c: resp.data.code, msg: resp.data.msg } }; // Code 200, but ....

        localStorage.setItem('andoma:refreshToken', JSON.stringify(resp.data.result.refreshToken));
        localStorage.setItem('andoma:accessToken', JSON.stringify(resp.data.result.accessToken));
        localStorage.setItem('andoma:login', JSON.stringify(username));

        return { c: 200, msg: 'Authorization ok.' }
    } catch (e) { return { c: 503, msg: 'Ошибка получения данных.' } }
}
