import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { currentUserContext } from '../contexts/CurrentUserContext.js';
import avatar from '../images/avatar.png';
import api from '../utils/api.js';
import * as auth from '../utils/auth.js';
import Footer from './Footer.js';
import Header from './Header.js';
import ImagePopup from './ImagePopup.js';
import Main from './Main.js';
import EditProfilePopup from './EditProfilePopup.js'
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import AcceptDeleteCardPopup from './AcceptDeleteCardPopup.js';
import Loader from './Loader.js';
import Login from './Login.js';
import Register from './Register.js';
import InfoTooltip from './InfoTooltip.js';
import ProtectedRoute from './ProtectedRoute.js';

function App() {
  const history = useHistory();
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false); // Открытие попапа редактирования профиля
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false); // Открытие попапа добавления карточек
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false); // Открытие попапа смены аватара
  const [selectedCard, setSelectedCard] = useState({}); // Данные карточки на полный экран
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false); // Открытие попап карточки на весь экран
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false); // Открытие попапа удаления карточки
  const [cardDelete, setCardDelete] = useState({}); // Данные для удалённой карточки
  const [currentUser, setCurrentUser] = useState({ name: 'Имя пользователя', about: 'О пользователе', avatar: avatar}); // Данные пользователя
  const [cards, setCards] = useState([]); // Карточки
  const [isLoader, setIsLoader] = useState(false); // Лоадер
  const [isInfoTooltipShow, setIsInfoTooltipShow] = useState({ isOpen: false, successful: false }); // успех/неудача

  // Вход
  const [loggedIn, setLoggedIn] =  useState(false);
  const [email, setEmail] = useState('');

  // Проверка токена и авторизация пользователя
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.checkToken(jwt)
      .then(data => {
        if (data) {
          setEmail(data.email);
          setLoggedIn(true);
          history.push('/');
        }
      })
      .catch(err => console.log(err))
    }
  }, [history])

  // При входе (залогиниться) получаем карточки и информацию о пользователе
  useEffect(() => {
    if (loggedIn) {
      setIsLoader(true);
      api.renderUserAndCards()
        .then(([dataUserInfo, dataCards]) => {
          setCurrentUser(dataUserInfo);
          setCards(dataCards);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoader(false))
    }
  }, [loggedIn])

  function useEscapePress(callback, dependency) {
    useEffect(() => {
      if (dependency) {
        const onEscClose = e => {
          if (e.key === 'Escape') {
            callback()
          }
        }
        document.addEventListener('keyup', onEscClose);
        return () => {
          document.removeEventListener('keyup', onEscClose)
        };
      }
    }, [callback, dependency])
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setIsDeletePopupOpen(false);
    setIsInfoTooltipShow({ isOpen: false, successful: false })
  }

  // Открытие картинки на полный экран
  function handleCardClick(data) {
    setIsImagePopupOpen(true);
    setSelectedCard(data)
  }

  // Функция-слушатель на клик по корзинке, чтобы открыть попап
  function handleDeleteCardClick(data) {
    setCardDelete(data)
    setIsDeletePopupOpen(true);
  }

  // Функция управляет удалением карточки
  function handleDeleteCard() {
    setIsLoader(true);
    api.deleteCard(cardDelete)
      .then(() => {
        setCards(state => state.filter(item => item._id !== cardDelete._id))
      })
      .then(() => closeAllPopups())
      .catch(err => console.log(err))
      .finally(() => setIsLoader(false))
  }

  // Функция по постановке и снятию лайка
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i === currentUser._id);

    if (!isLiked) {
      api.setLike(card)
        .then(newCard => {
          setCards(state => state.map(c => c._id === card._id ? newCard : c))
        })
        .catch(err => console.log(err))
      } else {
        api.deleteLike(card)
        .then(newCard => {
          setCards(state => state.map(c => c._id === card._id ? newCard : c))
        })
        .catch(err => console.log(err))
      }
  }

  // Отправка данных пользователя на сервер
  function handleUpdateUser(info) {
    setIsLoader(true);
    api.setUserInfo(info)
      .then(newInfo => { setCurrentUser(newInfo) })
      .then(() => { closeAllPopups() })
      .catch(err => console.log(err))
      .finally(() => setIsLoader(false))
  }

  // Отправка аватара пользователя на сервер
  function handleUpdateAvatar(input) {
    setIsLoader(true);
      api.setUserAvatar(input)
      .then(newInfo => { setCurrentUser(newInfo) })
      .then(() => { closeAllPopups() })
      .catch(err => console.log(err))
      .finally(() => setIsLoader(false))
  }

  // Отправка новой карточки и обновление
  function handleAddPlace(data) {
    setIsLoader(true);
    api.addCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoader(false))
  }

  function handleInfoTooltip(res) {
    setIsInfoTooltipShow({ isOpen: true, successful: res })
  }

  // Регистрация пользователя
  function handleRegister({ email, password }) {
    setIsLoader(true);
    auth.register(email, password)
      .then(data => {
        if (data) {
          handleInfoTooltip(true);
          history.push('/signin');
        }
      })
      .catch(err => {
        handleInfoTooltip(false);
        console.log(err);
      })
      .finally(() => setIsLoader(false))
  }

  // Вход
  function handleLogin({ email, password }) {
    setIsLoader(true);
    auth.login(email, password)
      .then(jwt => {
        if (jwt.token) {
          setEmail(email);
          setLoggedIn(true);
          localStorage.setItem('jwt', jwt.token);
          history.push('/');
        }
      })
      .catch(err => {
        handleInfoTooltip(false);
        console.log(err);
      })
      .finally(() => setIsLoader(false))
  }

  // Выход
  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    setEmail('');
    setLoggedIn(false);
    history.push('/signin');
  }

  return (
    <div className="page">
      <currentUserContext.Provider value={currentUser}>
        <Header
          email={email}
          onSignOut={handleSignOut} />
        <Switch>
          <ProtectedRoute exact path="/"
            component={Main}
            loggedIn={loggedIn}
            cards={cards}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardDelete={handleDeleteCardClick}
            onCardLike={handleCardLike} />
          <Route path="/signin">
            <Login onLogin={handleLogin} />
          </Route>
          <Route path="/signup">
            <Register handleRegister={handleRegister} />
          </Route>
        </Switch>
        <Footer />
        <Loader
          isOpen={isLoader} />
        <InfoTooltip
          onClose={closeAllPopups}
          status={isInfoTooltipShow}
          useEscapePress={useEscapePress} />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          useEscapePress={useEscapePress}/>
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlace}
          useEscapePress={useEscapePress} />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          useEscapePress={useEscapePress} />
        <AcceptDeleteCardPopup
          isOpen={isDeletePopupOpen}
          onClose={closeAllPopups}
          isAccept={handleDeleteCard}
          useEscapePress={useEscapePress} />
        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
          useEscapePress={useEscapePress} />
      </currentUserContext.Provider>
    </div>
  );
}

export default App;
