export type ValidateType = (value: string) => string | undefined

// принимаем велью с формы
export const isRequired: ValidateType = (value) => {
    // если велью есть - возвращаем андефайнд, это значит, что ошибок не найдено
    if (value) return undefined;

    // если проверка не пройдет тогда возвратиться что поле обязательное
    return 'Field is required';
}

// у нас могут быть разные размеры максимальной длинны.
// эту форму вызывает сам редакс форм поэтому нам надо самим замыкать ее на каком то значени.
export const maxLength = (textLength: number): ValidateType => (value) => {
    // если поле есть (обязательное) и оно меньше длинны тогда все ок
    if (value && value.length < textLength) return undefined;

    return `Max length is ${textLength}`;
}

// замыкание нужно чтобы передать значение в нашу функцию, которую мы кому-то отдадим
// и другая сущьность будет ее вызывать когда ей нужно.