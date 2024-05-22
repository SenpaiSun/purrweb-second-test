import axios from 'axios'

const BASE_URL = 'http://test-task-second-chance-env.us-east-1.elasticbeanstalk.com'

axios.defaults.baseURL = BASE_URL

export const registerApi = async (email: string, password: string, name: string, surname: string, phone: string) => {
  console.log('qwe')
  try {
    const res = await axios.post('/auth/register', { email: email, password: password, name: name, surname: surname, phone: phone })
    return res.data
  } catch (error) {
    return error
  }
}

export const loginApi = async (email: string, password: string) => {
  try {
    const res = await axios.post('/auth/login', { email: email, password: password })
    return res.data
  } catch (error) {
    return error
  }
}

export const getUserApi = async (userId: string) => {
  try {
    const res = await axios.get(`/users/${userId}`)
    return res.data
  } catch (error) {
    console.error('Пользователь не найден', error);
    throw error;
  }
}