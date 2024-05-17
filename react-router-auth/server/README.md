<h1>TODO LIST</h1>
<h3>tech</h3>
<ul>
  <li>MERN</li>
  <li>vite</li>
  <li>react router</li>
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