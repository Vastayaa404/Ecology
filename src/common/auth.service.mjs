import axios from 'axios';
import { sha256 } from './functions.mts';

export const signin = async (username, password) => {
    try {
        if (username.length < 3 || password.length < 1) { return { c: 'e400', msg: 'Логин и пароль не могут быть пустыми' } };
        // const hash = await sha256(password);
        const resp = await axios.post('http://127.0.0.1:5000/auth/signin', { username, password });

        // if (resp.data.code !== 0) { return { c: resp.data.code, msg: resp.data.msg } }; // Code 200, but ....
        if (resp.data.code !== 200) { return { c: resp.data.code, msg: "Ошибка авторизации" } }

        // localStorage.setItem('rt', JSON.stringify(resp.data.result.refreshToken));
        localStorage.setItem('at', JSON.stringify(resp.data.data.accessToken));
        localStorage.setItem('user', JSON.stringify(resp.data.data.username));

        return { c: 200, msg: 'Authorization ok.' }
    } catch (e) { return { c: 503, msg: 'Ошибка получения данных.' } }
}
