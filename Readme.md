
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/aravindanb/OrderService">
    <img src="images/API.png" alt="Logo" width="90" height="80">
  </a>

  <h3 align="center">Order Service REST API </h3>

  <p align="center">
    Node Server serving Order Service API (REST)
    <br />
    <a href="https://github.com/aravindanb/OrderService"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/aravindanb/OrderService">View Demo</a>
    ·
    <a href="https://github.com/aravindanb/OrderService/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc">Report Bug</a>
    ·
    <a href="https://github.com/aravindanb/OrderService/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Database account](#database-account)
- [Usage](#usage)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

A Node js backend REST API.

### Built With

* [Node](https://nodejs.org/en/)
* [mongoDB](https://docs.mongodb.com/guides/server/install/)



<!-- GETTING STARTED -->
## Getting Started

To get a order service up and running on `PORT:3000` and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```
* [mongoDB](https://docs.mongodb.com/guides/server/install/)


### Installation

1. Clone the repo
```sh
git clone https://github.com/aravindanb/OrderService.git
```
2. Install NPM packages
```sh
npm install
```
3. Run the Order Service
  
```sh
node app.js
```
or

```sh
npm run dev
```

**debug mode**
- `DEBUG=* node app.js` to run in debug mode.
- `DEBUG=app node app.js` to run in minimalist debug mode


### Database account

```
user : AravindanB
password : 
```
- To connect using the mongo shell:

  ` mongo ds149682.mlab.com:49682/aravindan-orderservice-node -u <dbuser> -p <dbpassword> `

- To connect using a driver via the standard MongoDB URI 

  `mongodb://<dbuser>:<dbpassword>@ds149682.mlab.com:49682/aravindan-orderservice-node`


<!-- USAGE EXAMPLES -->
## Usage

Example client to consume this service https://github.com/aravindanb/ShoppingCartUI 

_For more examples, please refer to the [Documentation](https://github.com/aravindanb/OrderService/wiki)_



<!-- CONTACT -->
## Contact

Aravindan Balasubramanian - [aravindannair24](https://www.linkedin.com/in/aravindan24/)

Project Link: [https://github.com/aravindanb/OrderService](https://github.com/aravindanb/OrderService)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template/blob/master/README.md)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/aravindanb/OrderService.svg?style=flat-square
[contributors-url]: https://github.com/aravindanb/OrderService/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/aravindanb/OrderService.svg?style=flat-square
[issues-url]: https://github.com/aravindanb/OrderService/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/aravindan24/
[product-screenshot]: images/API.png



