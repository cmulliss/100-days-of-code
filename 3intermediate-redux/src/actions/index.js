const URL_ROOT = "http://localhost:3004";

export function getCars(keywords) {
  //console.log(`${URL_ROOT}/carsIndex?q=${keywords}`);

  const request = fetch(`${URL_ROOT}/carsIndex?q=${keywords}`, {
    method: "GET"
  });
  // making a network request to json server
  return {
    type: "SEARCH_CARS",
    payload: request
  };
}
//Unexpected template string expression  no-template-curly-in-string

// action creator takes an argument, the keyword

//console.log(`Made a request with the ${keywords} KEY `);
