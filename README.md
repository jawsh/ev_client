# EV_Client

ev_client is a React frontend that visualises and displays data processed by ev_server.

## Installation

Clone the repository.

```bash
git clone https://github.com/jawsh/ev_client.git
```

Install node modules

```bash
npm i
```

Start server using nodemon

```bash
npm start
```

Optional

Edit .env file to point your client at a non local instance of ev_server

```bash
ev_client/.env
```

Edit the below line to reflect wherever your instance of ev_server is running

```bash
REACT_APP_SERVER_URL=http://localhost:3001
```
