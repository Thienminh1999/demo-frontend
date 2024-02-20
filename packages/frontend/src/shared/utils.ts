import { NotificationInstance } from "antd/es/notification/interface";
import { NotificationType } from "./types/Port.type";

export const openNotification = (api: NotificationInstance, type: NotificationType, action: string = 'Action') => {
  if (type === 'error') {
    return api[type]({
      message: 'Something went wrong',
    });
  } else if (type === 'success') {
    return api[type]({
      message: `${action} successfully!`
    });
  }
};