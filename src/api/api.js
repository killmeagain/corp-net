const workMessages = [
  { id: 0, name: 'Петр Иванов', time: '12 : 31', textMessage: 'Привет!', isMy: false },
  { id: 1, name: 'Петр Иванов', time: '12 : 31', textMessage: 'Это рабочий чат, в котором мы будем обсуждать только рабочие моменты.', isMy: false },
  { id: 2, name: 'Петр Иванов', time: '12 : 31', textMessage: 'Ставь +, если согласен с этим', isMy: false },
];
const commonMessages = [
  { id: 0, name: 'Петр Иванов', time: '12 : 35', textMessage: 'Привет!', isMy: false },
  { id: 1, name: 'Петр Иванов', time: '12 : 35', textMessage: 'Это это общий чат, в котором мы будем общаться и веселиться во время карантина.', isMy: false },
  { id: 2, name: 'Петр Иванов', time: '12 : 35', textMessage: 'Ставь +, если согласен с этим', isMy: false },
];

if (!localStorage.getItem('workMessages')) localStorage.setItem('workMessages', JSON.stringify(workMessages));
if (!localStorage.getItem('commonMessages')) localStorage.setItem('commonMessages', JSON.stringify(commonMessages));

const mesagesAPI = {
  getMessages: (params) => {
    const messages = JSON.parse(localStorage.getItem(`${params}Messages`));
    return messages;
  },

  addMessageToLocalStorage: (textMessage, params) => {
    const messages = JSON.parse(localStorage.getItem(`${params}Messages`));
    messages.push({
      id: messages.length,
      name: 'Тимофей Судаков',
      time: `${new Date().getHours()} : ${(new Date().getMinutes() < 10) ? `0${new Date().getMinutes()}` : new Date().getMinutes()}`,
      textMessage: textMessage,
      isMy: true
    })
    localStorage.setItem(`${params}Messages`, JSON.stringify(messages));
  },

  deleteMessageToLocalStorage: (id, params) => {
    let messages = JSON.parse(localStorage.getItem(`${params}Messages`));
    messages = messages.filter((message) => message.id !== id);
    localStorage.setItem(`${params}Messages`, JSON.stringify(messages));
  },

  editMessageToLocalStorage: (id, textMessage, params) => {
    let messages = JSON.parse(localStorage.getItem(`${params}Messages`));
    messages = messages.map((message) => {
      if (message.id === id) {
        return {
          ...message,
          textMessage
        }
      }
      return message;
    });
    localStorage.setItem(`${params}Messages`, JSON.stringify(messages));
  }
};

export {
  mesagesAPI,
}
