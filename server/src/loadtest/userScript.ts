/**
 * A user script is a sequence of HTTP request (REST/GraphQL API requests, page loads, etc.)
 *
 * Each user arriving at the site during the load test will execute the user script.
 */

var uuid = require("uuid");

export type UserScript = () => Promise<any>

export async function userScript() {

  var authToken = ''
  var userId;
  var projectId;
  const emailSuffixUnique = uuid.v4();

  // Sign up
  await fetch('http://localhost:3000/auth/createUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: 'steph-' + emailSuffixUnique + '@warriors.com', name: 'Stephen Curry' })
  })
  .then(async function(response) {
    var data = JSON.parse(await response.text())
    userId = parseInt(data.userId)
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
  .then(async function(response) {
    var data = JSON.parse(await response.text())
    projectId = parseInt(data.projectId)
    console.log('HTTP POST: /createProject');
    console.log('Response Code:', response.status)
  });

  // Join a Project
  await fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-authtoken': authToken
    },
    body: JSON.stringify({
      query : 'mutation { addUserToProject(input: {projectId: ' + projectId + ', userId: ' + userId + '}) { id } }'
    })
  })
  .then(async function(response) {
    console.log('HTTP POST: /createProject');
    console.log('Response Code:', response.status)
    var data = JSON.parse(await response.text())
    if (data.errors == undefined) {
      console.log('Success: ', data.data)
    }
    else {
      console.log('Errors: ', data.errors)
    }
  });

  for (let i = 0; i < 50; i++) {
    // Load Profile Page
    await fetch('http://localhost:3000/app/profile')

    // Load All Projects Page
    await fetch('http://localhost:3000/app/projects')
  }

  // TODO: query for projects user is in (profile page)

  // TODO: query for users in project (all projects page)

  // TODO: check slides for what i should be looking for in graphs then check graphs (with join project)
  // TODO: rethink which actions by a user would cause scaling problems and if i should do those actions multiple times per user
  // TODO: verify in graphs that cause at least 3 scaling problems

  // TODO: add any other routes/pages?

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