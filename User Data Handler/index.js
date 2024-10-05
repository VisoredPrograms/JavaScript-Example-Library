
/**
 * Fetches users from the API.
 * @returns {Promise<Array<User>>} A promise that resolves with an array of
 * users.
 */
async function fetchUsersFromAPI() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonData = await response.json();
    return jsonData;
}
/**
 * Fetches users from the API and returns only those who have the isActive
 * property set to true.
 * @returns {Promise<Array<Object>>} A promise that resolves with an array of
 * active users.
 */
async function fetchActiveUsers() {
    const users = await fetchUsersFromAPI();
    return users.filter(({ isActive }) => isActive);
}

getActiveUsers().then(users => console.log(users));