const URL_ROOT = "http://localhost:3004";

export function getCars(keyword) {
  //console.log(`${URL_ROOT}/carsIndex?q=${keywords}`);

  const request = fetch(`${URL_ROOT}/carsIndex?q=${keywords}`, {
    method: "GET"
  }).then((response) => response.json());
  // making a network request to json server
  return {
    type: "SEARCH_CARS",
    payload: request
  };
}

export function carDetail(id) {
  const request = fetch(`${URL_ROOT}/carsIndex?id=${id}`, {
    method: "GET"
  }).then((response) => response.json());
  console.log(request);

  return {
    type: CAR_DETAIL,
    payload: request
  };
}

/* as actions are just fns, can create as many as wanted.
carDetail is going to receive an argument, it's going to be whatever we get inside the id.
Going back to Car, we need to have access to whatever 
*/

//Unexpected template string expression  no-template-curly-in-string

// action creator takes an argument, the keyword

//console.log(`Made a request with the ${keywords} KEY `);
