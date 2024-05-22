<h1>TODO LIST</h1>
<h3>tech</h3>
<ul>
  <li>MERN</li>
  <li>vite</li>
  <li>react router</li>
  <li>tanstack react query</li>
  <li>auth</li>
</ul>
<p>
  strenghtening knowledge on authorization, routing, and general express knowledge
</p>
<h6>Express</h6>
  <p>const express = require('express') - gets express from node_modules</p>
  <p>app.use(express) - sets up a express server</p>
  <p>dotenv.config(); process.env.PORT  - allows variables to be changed in just one spot for setting up db/server</p>
  <p>"middleware" - functions ran infront of endpoints</p>
  <p>morgan middleware morgan('tiny')- logging library, logs req type, endpoint, code, response time</p>
  <p>cors middleware cors() - browser prevents hitting apis with different domain(react app on different port than server)</p>
  <p>app.use(express.json()) - allows to process json requests</p>
  <p>index app.use(routes) imported router.js file</p>
  <p>routes folder / routes inside</p>
  <p>router file routing endpoints to routes</p>

<h6>AUTH jsonwebtoken package -NOT ENCRYPTED</h6>
  <p>const jwt = require('jsonwebtoken'); - signs token object with secret password</p>
  <p>only jwt knows how to decrypt / sends back a random token </p>

<h6>tanstack react query instead of useEffect and useState</h6>
<p>create queryClient outside of the components (main/index.jsx)</p>
<ul>
<li>gcTime removes cache</li>
<li>staleTime refocusing tab or screen will do queries</li>
<li>refetchInterval requery every amt of seconds</li>
<li>enabled: (variable boolean) will fetch when the variable is true, can fetch an id or something store it in variable then whenever the variable is not null it will run the other query</li>
<li>refetchOnWindowFocus: boolean // removes the query on </li>
<li>retry: number // will retry on failure until reaches numbers or if last one fails</li>
</ul>