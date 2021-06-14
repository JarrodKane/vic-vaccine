// Changed to using async await syntax
export const getVicData = async () => {
//   try {
//     const response = await fetch(
//       "https://spreadsheets.google.com/feeds/list/1rhgWmbpo2pjKUUc6MGBOG-W2FUinXTnAxEXmi10P8-s/2/public/values?alt=json-in-script"
//     );

    // const dataJson = await response.json();

    // return dataJson;
  } catch (error) {
    console.log(`An error is being thrown: ${error}`);
  }
};
