export const formInputsAuth = {
  title: 'Авторизация',
  inputs: [
    {
      label: 'Электронная почта',
      placeholder: 'example@mail.ru',
      type: 'email',
      validationRules: {
        required: 'Поле "Электронная почта" обязательно для заполнения',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Некорректная электронная почта',
        },
      },
    },
    {
      label: 'Пароль',
      placeholder: 'Введите 8 значный пароль',
      type: 'password',
      validationRules: {
        required: 'Поле "Пароль" обязательно для заполнения',
        minLength: {
          value: 8,
          message: 'Минимальная длина пароля 8 символов',
        },
      },
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
      validationRules: {
        required: 'Поле "Электронная почта" обязательно для заполнения',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Некорректная электронная почта',
        },
      },
    },
    {
      label: 'Пароль',
      placeholder: 'Введите пароль',
      type: 'password',
      validationRules: {
        required: 'Поле "Пароль" обязательно для заполнения',
        minLength: {
          value: 8,
          message: 'Минимальная длина пароля 8 символов',
        },
      },
    },
    {
      label: 'Повтор пароля',
      placeholder: 'Повторите пароль',
      type: 'password',
      validationRules: {
        required: 'Поле "Повтор пароля" обязательно для заполнения',
        validate: (val: string) => {
          if (watch('Пароль') != val) {
            return 'Пароли должны совпадать';
          }
        },
      },
    },
  ],
  redirect: {
    textRedirect: 'Уже есть аккаунт?',
    linkRedirect: 'Войти',
  },
}
