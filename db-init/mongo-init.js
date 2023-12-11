// user is username
// pws is password
db.createUser(
    {
        user: "importantEmployee",
        pwd: "strong_password_here",
        roles: [
            {
                role: "readWrite",
                db: "AuthDB"
            }
        ]
    }
);

