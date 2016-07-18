var data = JSON.parse(json);

/*
 * 1. Fix and convert balance value to number
 *
 *    Produce a new array of users including fixed balance values
 *    `balance` values might be of three types:
 *      - number as a string '100.5' (convert to Number type)
 *      - number as a string + currency symbol '100.5$' (remove currency symbol and convert to Number)
 *      - `false` (convert to 0)
 */
var users = data.map(function(user) {

  var balance = parseFloat(user.balance, 10);

  if (typeof user.balance === 'boolean') {
    balance = +user.balance;
  }

  user.balance = balance;

  return user;
});

console.log(users);

/*
 * 2. Group users by balance (1000 - 2000, 2000+)
 *
 *    Groups should be defined in a single object,
 *    where key is the name of the group
 *    and value is array of users
 *    { '1000-2000': [], '2000+': [] }
 */
var grouped = users
  .filter(function(user) {
    return user.balance >= 1000;
  })
  .reduce(function(group, user) {
    if (user.balance >= 1000 && user.balance <= 2000) {
      group['1000-2000'].push(user);
    }
    if (user.balance > 2000) {
      group['2000+'].push(user);
    }
    return group;
  }, { '1000-2000': [], '2000+': [] });

console.log(grouped);

/*
 * 3. Find average age and balance in all groups
 *
 *    The final result should be an object
 *    where key is the name of the group
 *    and value is an object of two fields:
 *    average age and average balance
 *    { '1000-2000': { avgAge: Number, avgBalance: Number }, ... }
 */
var averages = Object.keys(grouped)
  .reduce(function(avgGrouped, groupName) {

    var group = grouped[groupName];

    var totalAge = group.reduce(function(sum, user) {
      return sum + user.age;
    }, 0);

    var totalBalance = group.reduce(function(sum, user) {
      return sum + user.balance;
    }, 0);

    avgGrouped[groupName] = {
      avgAge: totalAge / group.length,
      avgBalance: totalBalance / group.length
    };

    return avgGrouped;
  }, {})

console.log(averages);
