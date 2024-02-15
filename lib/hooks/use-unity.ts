declare global {
  interface Window {
    Unity: any;
    receive: any;
  }
}

const useUnity = () => {
  const addReceiver = async () => {
    window.receive = async (data: any) => {
      console.log('data', data);
    };
  };

  async function sendDataToUnity(type: string, message: string) {
    async function sendMessageToApp(type: string, message: string) {
      window?.Unity.call(
        JSON.stringify({
          TYPE: type,
          VALUE: message,
        })
      );
    }
    if (window?.Unity) {
      await sendMessageToApp(type, message);
    }
  }

  return { sendDataToUnity, addReceiver };
};

export default useUnity;
