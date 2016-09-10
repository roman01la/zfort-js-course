class DBConnection {
  static create() {
    const config = readConfig();
    return new DBConnection(config);
  }
  constructor(config) {
    // ...
  }
  close() {
    // ...
  }
  query(q) {
    // ...
  }
}


// server 1 MongoDB
const connection = DBConnection.create();

// server 2 PostgreSQL
const connection = DBConnection.create();
