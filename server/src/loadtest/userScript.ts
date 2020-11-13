/**
 * A user script is a sequence of HTTP request (REST/GraphQL API requests, page loads, etc.)
 *
 * Each user arriving at the site during the load test will execute the user script.
 */
export type UserScript = () => Promise<any>

export async function userScript() {
  // Sign up
  await fetch('http://localhost:3000/auth/createUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: 'steph@warriors.com', name: 'Stephen Curry' })
  });
  // Log in
  // TODO: retrieve authtoken from response?
  await fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: 'steph@warriors.com', password: 'password' })
  });
  // Create Project
  await fetch('http://localhost:3000/createProject', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // ,
      // 'x-authtoken': 'aa347a6a-9a50-441d-b346-ee6352784087'
    },
    body: JSON.stringify({ title: 'Pied Piper', description: 'A compression software company that stores your data across a network of devices.' })
  });
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
