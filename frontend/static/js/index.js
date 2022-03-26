/*This is the actual client-side javascript
 * Here we want to write the actual client-side router*/
console.log("JS is loaded!");

/*we are going to load our content for 'dashboard' and 'settings' all in here,
 * asynchronously, not synchronously. It needs to be asynchronous because
 * we need all of the data (e.g for 'settings') to be loaded even if they
 * don't click on the button*/
const router = async () => {
  const routes = [ /*this function says whenever a user goes to the 'root' path, run righthand function*/
    {path: "/", view: () => console.log("Viewing Dashoboard") },// "/" is the root path of our webpage
    {path: "/posts", view: () => console.log("Viewing Dashoboard") },
    {path: "/settings", view: () => console.log("Viewing Dashoboard") },
  ];

  //test each roots for potential match
  const potentialMatches = routes.map(route => {
  return {
    route: route,
    isMatch: location.pathname === route.path
  }; //the map method creates a new object for each root (there are 3 'roots')
  });

  /*The find method will look through the array and find something that matches our condition
   * This is to see what the are typing and save the path they type*/
  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

  /*We need to prepare if they type a match that is not there. If it doesn't match, ..*/
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true
    };
  }

  console.log(match);
};

document.addEventListener("DOMContentLoaded", () => {
  router();
});
