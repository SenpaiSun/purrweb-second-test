export const formInputsAuth = {
  title: 'Авторизация',
  inputs: [
    {
      label: 'Электронная почта',
      storeItem: 'email',
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
      storeItem: 'password',
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
      storeItem: 'email',
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
      storeItem: 'password',
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
      storeItem: 'confirmPassword',
      placeholder: 'Повторите пароль',
      type: 'password',
      validationRules: {
        required: 'Поле "Повтор пароля" обязательно для заполнения',
      },
    },
  ],
  redirect: {
    textRedirect: 'Уже есть аккаунт?',
    linkRedirect: 'Войти',
  },
}

export const formInputsAbout = {
  title: 'Заполните данные о себе',
  inputs: [
    {
      label: 'Имя',
      storeItem: 'firtName',
      placeholder: 'Введите имя',
      type: 'text',
      validationRules: {
        required: 'Поле "Имя" обязательно для заполнения',
        minLength: {
          value: 2,
          message: 'Минимальная длина имени 2 символа',
        },
      },
    },
    {
      label: 'Фамилия',
      storeItem: 'lastName',
      placeholder: 'Введите фамилию',
      type: 'text',
      validationRules: {
        required: 'Поле "Фамилия" обязательно для заполнения',
        minLength: {
          value: 2,
          message: 'Минимальная длина фамилии 2 символа',
        },
      },
    },
    {
      label: 'Телефон',
      storeItem: 'phone',
      placeholder: '+7 (333)-333-33-33',
      type: 'tel',
      validationRules: {
        required: 'Поле "Телефон" обязательно для заполнения',
        pattern: {
          value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
          message: 'Некорректный номер телефона',
        },
      },
    },
  ],
}
