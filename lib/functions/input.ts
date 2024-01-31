export const validateInput = (phone: string, regexString: string) => {
    const regex = new RegExp(regexString);
    const res = regex.test(phone);

    if (res) {
      return true;
    }
    return false;
  };