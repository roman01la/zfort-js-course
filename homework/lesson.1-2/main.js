json // JSON data is assigned to `json` global variable which is declared in `json.js` file

/*
 * 1. Fix and convert balance value to number
 *
 *    Produce a new array of users including fixed balance values
 *    `balance` values might be of three types:
 *      - number as a string '100.5' (convert to Number type)
 *      - number as a string + currency symbol '100.5$' (remove currency symbol and convert to Number)
 *      - `false` (convert to 0)
 */
var users = 'Fix me';


/*
 * 2. Group users by balance (1000 - 2000, 2000+)
 *
 *    Groups should be defined in a single object,
 *    where key is the name of the group
 *    and value is array of users
 *    { '1000-2000': [], '2000+': [] }
 */
var grouped = 'Fix me';


/*
 * 3. Find average age and balance in all groups
 *
 *    The final result should be an object
 *    where key is the name of the group
 *    and value is an object of two fields:
 *    average age and average balance
 *    { '1000-2000': { avgAge: Number, avgBalance: Number }, ... }
 */
var averages = 'Fix me';
