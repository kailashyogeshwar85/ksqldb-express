import { message, notification } from 'antd';

export const alertMessage = (content, type='error') => message[type](content);

export const alertNotification = (content, type = 'error') => {
  return notification[type]({
    message: type.toUpperCase(),
    description: content,
    duration: 2,
  });
}
