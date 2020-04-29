import React, { useState } from 'react';
import Message from '../Message/Message';

// Компонента, отображающая сообщения
const Messages = props => {
  // Деструктуризируем входящие пропсы
  const { addMessage, messages, deleteMessage, editMessage } = props;
  // Объявляем локальный стэйт, для контроля textarea
  const [newMessage, setMessage] = useState('');
  // Мапимся по массиву сообщений и возвращаем массив с элементами сообщений
  const messagesElements = messages.map(message => {
    return (
      <li key={message.id} className={`messages__item ${message.isMy && 'messages__item_my-message'}`}>
        <Message
          {...message}
          editMessage={editMessage}
          deleteMessage={deleteMessage}
        />
      </li>
    )
  });

  // Обработчик события изменения текста в текстовом поле
  const changeMessageTextareaHandler = ({ target }) => {
    setMessage(target.value);
  };

  // Обработчик кнопки отпавки письма
  const addMessageHandler = () => {
    if (newMessage !== '') {
      addMessage(newMessage);
      setMessage('');
    }
  };

  // Возвращаем JSX
  return (
    <div className="messages">
      <ul className="messages__list">
        {messagesElements}
      </ul>

      <div className="messages__send-message">
        <textarea onChange={changeMessageTextareaHandler} value={newMessage} placeholder="Введите текст сообщения" className="messages__textarea"></textarea>
        <button onClick={addMessageHandler} type="button" className="messages__send-button">Отправить</button>
      </div>
    </div>
  )
}

export default Messages;