const onError = res => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка: ${res.status}`);
};

class Api {
  constructor({baseUrl, headers}) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _getHeaders() {
    const jwt = localStorage.getItem('jwt');
    return {
      'Authorization': `Bearer ${jwt}`,
      ...this._headers,
    };
  }

  // Получение карточек с сервера
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._getHeaders()
    })
      .then(onError);
  }

  // Получение данных о пользователе с сервера
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._getHeaders()
    })
      .then(onError);
  }

  // Возврат массива промисов
  renderUserAndCards() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()])
  }

  // Запись данных пользователя на сервер
  setUserInfo(info) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: info.name,
        about: info.about
      })
    })
    .then(onError)
  }

  // Добавление карточки на сервер
  addCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(onError);
  }

  // Запись аватарка на сервер
  setUserAvatar(input) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify({
        avatar: input.avatar
      })
    })
    .then(onError)
  }

  // Отправление лайка на сервер
  setLike(data) {
    return fetch(`${this._url}/cards/${data._id}/likes`, {
      method: 'PUT',
      headers: this._getHeaders()
    })
      .then(onError);
  }

  // Убираем лайк с сервера
  deleteLike(data) {
    return fetch(`${this._url}/cards/${data._id}/likes`, {
      method: 'DELETE',
      headers: this._getHeaders()
    })
      .then(onError);
  }

  // Удаление карточки
  deleteCard(data) {
    return fetch(`${this._url}/cards/${data._id}`, {
      method: 'DELETE',
      headers: this._getHeaders()
    })
      .then(onError);
  }
}

const api = new Api({
  baseUrl: 'https://api.domainname.aflamme.nomorepartiesxyz.ru',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
