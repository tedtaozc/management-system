import ajax from "./ajax";
/*
 notice: cannot be => {ajax(...)} because arrow function can automatically return value,
 if you want to write you should write as => {return ajax(...)}
*/
export const reqLogin = (username, password) => ajax('/login',{username, password}, 'POST');

export const addUser = (user) => ajax('/manage/user/add', user, 'POST');