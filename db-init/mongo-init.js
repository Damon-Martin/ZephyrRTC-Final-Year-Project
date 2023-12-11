auth_db = db.getSiblingDB('AuthDB');
auth_db.createCollection('AuthData');


main_db = db.getSiblingDB('MainDB');
// Making Collections/Tables ready to be used (If not defined sibiling db does not exist)
main_db.createCollection('UsersInfo');
main_db.createCollection('Chats');
main_db.createCollection('FriendList');

// Making Employee Level login details that's different to the administrator
// Higher Authorisation Level
auth_db.createUser({
    user: 'ImportantAdmin',
    pwd: 'very_strong_password',
    roles: [
      {
        role: 'readWrite',
        db: 'AuthDB'
      },
      {
        role: 'readWrite',
        db: 'MainDB'
      }
    ]
});

// Only for MainDB
// Lowest Authorisation Level
main_db.createUser({
    user: 'RegEmployee',
    pwd: 'strong_password',
    roles: [
      {
        role: 'readWrite',
        db: 'MainDB'
      }
    ]
});