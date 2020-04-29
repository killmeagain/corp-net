import React from 'react';
import { connect } from 'react-redux';
import { addMessage, getMessage, deleteMessage, editMessage } from '../../redux/thunk-creators'
import Messages from './Messages'; 
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

const MessageContainer = props => {
  // Деструктуризируем входящие пропсы
  const {
    messages,
    match,
    getMessage,
    addMessage,
    editMessage,
    deleteMessage,
  } = props;
  // Параметр из url строки
  const params = match.params.chat;

  const add = (textMessage) => addMessage(textMessage, params);
  const edit = (id, textMessage) => editMessage(id, textMessage, params);
  const remove = (id) => deleteMessage(id, params);

  // Определяем метод жизненного цикла
  useEffect(() => getMessage(params), [params]);

  return (
    <Messages
      messages={messages}
      addMessage={add}
      deleteMessage={remove}
      editMessage={edit}
    />
  )
}

// Извлекаем данные из стэйта
const mapStateToProps = state => ({
  // Сообщения
  messages: state.сhat.messages
});

// Определяем методы, через которые будем диспатчить
const mapDispatchToProps = dispatch => ({
  // Отправить сообщение
  addMessage: (textMessage, params) => dispatch(addMessage(textMessage, params)),
  // Удалить сообщение
  deleteMessage: (id, params) => dispatch(deleteMessage(id, params)),
  // Редактировать сообщение
  editMessage: (id, textMessage, params) => dispatch(editMessage(id, textMessage, params)),
  // Thunk, которая загружает существующие сообщения в чате
  getMessage: (params) => dispatch(getMessage(params)),
});

const chatMessages = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(MessageContainer)

export default chatMessages;