import axios from 'axios';

axios.defaults.withCredentials = true; // Include cookies with requests

export const signup = async ({ email, password, passwordConfirm }) => {
  const { data, error } = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/v1/users/signup`,
    {
      email,
      password,
      passwordConfirm,
    },
    {
      withCridentials: 'include',
    },
  );

  if (error) throw new Error(error.message);

  return data;
};

export const completeSignup = async ({
  token,
  firstname,
  lastname,
  othernames,
  phoneNumber,
  username,
}) => {
  const { data, error } = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/v1/users/complete-signup/${token}`,
    {
      firstname,
      lastname,
      othernames,
      phoneNumber,
      username,
    },
    {
      withCredentials: true,
    },
  );

  if (error) throw new Error(error.message);

  return data;
};

export const login = async ({ email, password }) => {
  const { data, error } = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/v1/users/login/`,
    {
      email: email,
      password: password,
    },
    {
      withCridentials: 'include',
    },
  );

  if (error) throw new Error(error.message);

  return data;
};

export const getCurrentUser = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/v1/users/me`,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data.data.data;
};

export const logout = async () => {
  const token = localStorage.getItem('token');

  if (!token) return null;

  const { error } = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/v1/users/logout`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (error) throw new Error(error.message);
};

export const forgetPassword = async ({ email }) => {
  const { data, error } = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/v1/users/forgotpassword`,
    {
      email,
    },
  );

  if (error) throw new Error(error.message);

  return data;
};

export const resetPassword = async ({ password, passwordConfirm, token }) => {
  const { data, error } = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/v1/users/resetpassword/${token}`,
    {
      password,
      passwordConfirm,
    },
  );

  if (error) throw new Error(error.message);

  return data;
};

export const updateCurrentUser = async (payload) => {
  const token = localStorage.getItem('token');

  if (!token) return null;

  const { data, error } = await axios.patch(
    `${import.meta.env.VITE_API_URL_LOCAL}/api/v1/users/me`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (error) throw new Error(error.message);

  return data;
};

export const updatePassword = async ({
  currentPassword,
  password,
  passwordConfirm,
}) => {
  const token = localStorage.getItem('token');

  if (!token) return null;

  const { data, error } = await axios.patch(
    `${import.meta.env.VITE_API_URL}/users/updateme`,
    {
      currentPassword,
      password,
      passwordConfirm,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (error) throw new Error(error.message);

  return data;
};