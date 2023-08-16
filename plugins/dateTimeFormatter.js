export const dateTimeFormatter = (time = new Date()) => {
  time.setMinutes(time.getMinutes() - time.getTimezoneOffset());
  time.setSeconds(time.getSeconds(), 0);
  const temp = time.toISOString().slice(0, -1).split(":");
  temp.pop();
  return temp.join(":");
};
