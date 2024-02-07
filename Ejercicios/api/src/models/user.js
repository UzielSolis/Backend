const { response } = require("express");

const mockUsers = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@email.com'
    }
]

class User {
    find() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //reject(new Error("Something went wrong"));
                resolve([...mockUsers]);
            }, 1000)
        });
    }

    insert(newUser) {
        mockUsers.push(newUser);
    }
}

module.exports = User;
