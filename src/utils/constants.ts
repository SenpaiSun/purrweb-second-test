export const formInputsAuth = {
  title: 'Авторизация',
  inputs: [
    {
      label: 'Электронная почта',
      placeholder: 'example@mail.ru',
      type: 'email',
    },
    {
      label: 'Пароль',
      placeholder: 'Введите 8 значный пароль',
      type: 'password',
    },
  ],
  redirect: {
    textRedirect: 'Еще нет аккаунта?',
    linkRedirect: 'Зарегистрироваться',
  },
}

export const formInputsRegister = {
  title: 'Регистрация',
  inputs: [
    {
      label: 'Электронная почта',
      placeholder: 'example@mail.ru',
      type: 'email',
    },
    {
      label: 'Пароль',
      placeholder: 'Введите пароль',
      type: 'password',
    },
    {
      label: 'Повтор пароля',
      placeholder: 'Повторите пароль',
      type: 'password',
    },
  ],
  redirect: {
    textRedirect: 'Уже есть аккаунт?',
    linkRedirect: 'Войти',
  },
}
