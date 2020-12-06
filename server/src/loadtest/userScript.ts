/**
 * A user script is a sequence of HTTP request (REST/GraphQL API requests, page loads, etc.)
 *
 * Each user arriving at the site during the load test will execute the user script.
 */

var uuid = require("uuid");

export type UserScript = () => Promise<any>

export async function userScript() {

  var authToken = ''
  const emailSuffixUnique = uuid.v4();

  // Sign up
  await fetch('http://localhost:3000/auth/createUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: 'steph-' + emailSuffixUnique + '@warriors.com', name: 'Stephen Curry' })
  })
  .then(function(response) {
    console.log('HTTP POST: /auth/createUser');
    console.log('Response Code:', response.status)
  });;

  // Log in
  await fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: 'steph-' + emailSuffixUnique + '@warriors.com', password: 'password' })
  })
  .then(function(response) {
    var respCookies = response.headers.get('Set-Cookie')
    if (respCookies != null) {
      authToken = respCookies.split(';')[0].substr(10);
    }
    console.log('HTTP POST: /auth/login');
    console.log('Response Code:', response.status)
  });

  // Create Project
  await fetch('http://localhost:3000/createProject', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-authtoken': authToken
    },
    body: JSON.stringify({ title: 'Pied Piper', description: 'A compression software company that stores your data across a network of devices.' })
  })
  .then(function(response) {
    console.log('HTTP POST: /createProject');
    console.log('Response Code:', response.status)
  });

  // TODO: Join a Project (apolloclient instead of fetch?, talk to sarthak)
  // TODO: send authToken?

  // TODO: add any other routes?
}

// set this is you require authenticated requests
// const authToken = undefined

// function makeApolloClient() {
//   return new ApolloClient({
//     ssrMode: true,
//     link: new HttpLink({
//       uri: `https://pitchporch.cloudcity.computer/graphql`,
//       credentials: 'same-origin',
//       fetch: async (uri: any, options: any) => {
//         const reqBody = JSON.parse(options!.body! as string)
//         const opName = reqBody.operationName
//         const actionName = reqBody.variables?.action?.actionName
//         const headers = authToken ? { ...options.headers, 'x-authtoken': authToken } : options.headers
//         return fetch(`${uri}?opName=${opName}${actionName ? `&actionName=${actionName}` : ''}`, {
//           ...options,
//           headers,
//         })
//       },
//     }),
//     cache: new InMemoryCache(),
//   })
// }
