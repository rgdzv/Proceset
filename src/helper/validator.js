export const required = (value) =>
  !value ? "Произошла ошибка. Поле должно быть заполнено!" : undefined

export const email = (value) => 
  !/^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? "Введите корректный e-mail!" : undefined
  
export const password = (value) => 
  value.length < 8 ? "Пароль - не менее 8 символов!" : undefined

export const repeatPassword = (value, allValues) => 
  value !== allValues.password ? "Пароли не совпадают!" : undefined


