import { Auth } from "../store/types"

export const formInputsAuth = {
  title: 'Авторизация',
  inputs: [
    {
      label: 'Электронная почта',
      storeItem: 'email' as keyof Auth,
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
      storeItem: 'password' as keyof Auth,
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
      storeItem: 'email' as keyof Auth,
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
      storeItem: 'password' as keyof Auth,
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
      storeItem: 'confirmPassword' as keyof Auth,
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
      storeItem: 'name' as keyof Auth,
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
      storeItem: 'surname' as keyof Auth,
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
      storeItem: 'phone' as keyof Auth,
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

export const faqData = [
  { title: 'Подписываете ли вы соглашение о неразглашении?', text: 'Конечно! Наша студия мобильной разработки и UI/UX дизайна гарантирует предотвращение утечки конфиденциальной информации и ее защиту.' },
  { title: 'Сколько займет создание MVP?', text: 'Чтобы создать надежный продукт, вам необходимо создать его прототип, спроектировать, разработать и протестировать. На прохождение всех этих этапов у вас уйдет около 3 месяцев.' },
  { title: 'Предоставляете ли вы маркетинговые услуги?', text: 'Наши сильные стороны - UI / UX, разработка, контроль качества и менеджмент. Не маркетинг. Мы не стремимся к достижению «средних» результатов, поэтому вам лучше найти для этого настоящих экспертов по маркетингу и агентство.' },
  {
    title: 'Различается ли MVP от прототипов?',
    text: 'В отличие от прототипов, MVP - это функциональный продукт, а не просто набор бумажных набросков. MVP это своего рода прототип, но процесс разработки занимает чуть больше времени, а его техническая начинка более сложная. Разработка MVP необходима как демонстрационная версия продукта для проверки жизнеспособности идеи. Это как-то работает (хотя и не то же самое, что в плохом исполнении) и уже приносит реальную пользу конечным пользователям. Он должен быть вашей «истинной» отправной точкой, поэтому вы можете использовать его, чтобы начать отслеживать намерение покупки (сколько пользователей превратится в клиентов) или получить финансирование.',
  },
]
