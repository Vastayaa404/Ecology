import { sha256 as sha256w } from 'hash-wasm';

//-Функция для хэширования текста алгоритмом SHA-256--------------
export const sha256 = async (text: string): Promise<string> => { const msgBuffer = new TextEncoder().encode(text); return await sha256w(msgBuffer) };
//----------------------------------------------------------------