import React, { useState } from 'react';

// Компонента, отображающая режим редактирования сообщения
const EddingTextarea = props => {
  // Деструктуризируем входящие пропсы
  const { editMessage, setIsEdditingMessage, message, id } = props;
  // Объявляем локальный стэйт, для управления textarea
  const [editingMessage, changeMessage] = useState(message)

  // Обработчик изменения значения в textarea
  const handlerChangeMessage = ({ target }) => {
    changeMessage(target.value);
  };

  // Обработчик кнопки редактирования сообщения
  const handlerSetEditMessage = () => {
    if (editingMessage !== '') {
      editMessage(id, editingMessage);
      setIsEdditingMessage(false);
    } else {
      setIsEdditingMessage(false);
    }
  }

  // Обработчик кнопки закрытия режима редактирования
  const handlerCloseEditMode = () => {
    setIsEdditingMessage(false);
  }

  // Возвращаем JSX
  return (
    <div className="eding-textarea">
      <div className="eding-textarea__eding-controls">
        <textarea onChange={handlerChangeMessage} value={editingMessage} autoFocus className="eding-textarea__textarea"></textarea>
        <div className="eding-textarea__controls">
          <button onClick={handlerSetEditMessage} className="eding-textarea__save-changed">Изменить</button>
          <button onClick={handlerCloseEditMode} className="eding-textarea__close-eding"></button>
        </div>
      </div>
    </div>

  )
}

export default EddingTextarea;