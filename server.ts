const faker = require('faker');

module.exports = () => {
    const data = {
        users: [],
    }

    for (let i = 1; i < 100; i++) {
        data.users.push({
            id: i,
            name: faker.name.firstName(),
            email: faker.internet.email()
        })
    }

    return data;
}