export const getVicData = async () => {
  try {
    const response = await fetch(
      "https://spreadsheets.google.com/feeds/list/1rhgWmbpo2pjKUUc6MGBOG-W2FUinXTnAxEXmi10P8-s/2/public/values?alt=json"
    );

    const body = await response.json();

    return body;
  } catch (error) {
    console.log(`An error is being thrown: ${error}`);
  }
};
