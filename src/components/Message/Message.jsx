import React, { useState } from 'react';
import EdingTextarea from '../EdingTextarea/EdingTextarea';

// Компонента отображения сообщения
const Message = props => {
  // Деструктуризируем входящие пропсы
  const { textMessage, deleteMessage, editMessage, id, time, name, isMy } = props;
  // Объявляем локальный стэйт для отображения редактирования сообщения
  const [isEdditingMessage, setIsEdditingMessage] = useState(false);

  // Обработчик кнопки удаления сообщения
  const deleteHandler = () => {
    deleteMessage(id)
  }

  // Обработчик кнопки включения режима редактирования сообщения
  const editingMessage = () => {
    setIsEdditingMessage(true);
  }

  // Возвращаем JSX
  return (
    <div className="message">
      <p className="message__name">{name}</p>
      <span className="message__time">{time}</span>
      {/* Условие, при котором отображается режим редактирования */}
      {isEdditingMessage ? <EdingTextarea
                              setIsEdditingMessage={setIsEdditingMessage}
                              editMessage={editMessage}
                              message={textMessage}
                              id={id}
                            /> :
        <div className="message__body">
          <p className="message__text">{textMessage}</p>

          {/* Кнопка удаления сообщения и кнопка редактирования отображаются только если это сообщение самого пользователя */}
          {isMy && <button onClick={editingMessage} type="button" className="message__edit"></button>}
          {isMy && <button onClick={deleteHandler} type="button" className="message__delete"></button>}
        </div>
      }

    </div>
  )
}

export default Message;