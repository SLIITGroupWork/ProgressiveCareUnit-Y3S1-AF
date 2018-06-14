const bcrypt = require('bcryptjs');

const appConfigs = require('../../../appConfig');
const applicationUserConsts = require('../../consts/application-user.consts');
const userConsts = require('../../consts/user.consts');
const tableNames = require('../db-schema/table-names.const');

//Sleep method for waitings
const sleep = (milliseconds) => {

    let start = new Date().getTime();

    for (let i = 0; i < 1e7; i++) {

        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

// For encry password
const createPassword = (password) => {

    let newPassword = '';

    let salt = bcrypt.genSaltSync(10);
    newPassword = bcrypt.hashSync(password, salt);
    
    return newPassword;
}

//For seed the database
const seedData = (mongoose) => {

    const userSchema = mongoose.model(tableNames.Users);
    const applicationUserSchema = mongoose.model(tableNames.ApplicationUsers);

    userSchema.count().then(count => {
        if (!count) {

            Promise.all([seedUserAndApplicationUser(userSchema, applicationUserSchema)]).then(() => {
                console.log('Database seeding completed...');
            }).catch(err => {
                console.log(err);
                process.exit(-4);
            });
        }
        else {
            console.log('Already seeded before.');
        }
    }).catch(err => {
        console.log(err);
        process.exit(-3);
    });
}

// User and Application User Seed
const seedUserAndApplicationUser = (userSchema, applicationUserSchema) => {

    return new Promise((resolve, reject) => {

        let users = [
            {
                nic: '871156255V',
                firstName: 'Jayarath',
                lastName: 'Withanage',
                gender: userConsts.gender.MALE,
                contact: '077xyxyxyx'
            },
            {
                nic: '861251155V',
                firstName: 'Anupama',
                lastName: 'Kurmarasiri',
                gender: userConsts.gender.FEMALE,
                contact: '077zyzyzyz'
            },
            {
                nic: '801156256V',
                firstName: 'Buddhi',
                lastName: 'Alwis',
                gender: userConsts.gender.MALE,
                contact: '077ayayaya'
            },
            {
                nic: '831346567V',
                firstName: 'Aysha',
                lastName: 'Madumashini',
                gender: userConsts.gender.FEMALE,
                contact: '077dydydyd'
            },
            {
                nic: '903345689V',
                firstName: 'Jayoda',
                lastName: 'Saparamadi',
                gender: userConsts.gender.FEMALE,
                contact: '077qyqyqyq'
            },
            {
                nic: '918278651V',
                firstName: 'Ashen',
                lastName: 'Jayasekara',
                gender: userConsts.gender.MALE,
                contact: '077wywywyw'
            }
        ];
        
        let userAccounts = [
            {
                username: 'jayarath',
                password: createPassword('user1'),
                userLevel: applicationUserConsts.userLevel.DOCTOR
            },
            {
                username: 'user2',
                password: createPassword('user2'),
                userLevel: applicationUserConsts.userLevel.DOCTOR
            },
            {
                username: 'user3',
                password: createPassword('user3'),
                userLevel: applicationUserConsts.userLevel.DOCTOR
            },
            {
                username: 'user4',
                password: createPassword('user4'),
                userLevel: applicationUserConsts.userLevel.NURSE
            },
            {
                username: 'user5',
                password: createPassword('user5'),
                userLevel: applicationUserConsts.userLevel.NURSE
            },
            {
                username: 'user6',
                password: createPassword('user6'),
                userLevel: applicationUserConsts.userLevel.COUNTER
            }
        ];

        for (let ind = 0, len = users.length; ind < len; ind++) {

            let us = new userSchema(users[ind]);

            us.save().then(user => {

                if (user) {
                    // userAccounts[ind]
                    aus = new applicationUserSchema({ 
                        username: userAccounts[ind].username, 
                        password: userAccounts[ind].password, 
                        userLevel: userAccounts[ind].userLevel,
                        userId: user._id
                    });

                    aus.save().then(userAccount => {

                    }).catch(err => {
                        reject(err);
                    })
                }
            }).catch(err => {
                reject(err);
            });

            sleep(500);
        }

        resolve(true);
    });
}

module.exports = (mongoose) => {
    // Connection to the Mongo DB
    mongoose.connect(appConfigs.mongoURI, err => {
        if (err) {
            console.log(err);
            process.exit(-2);
        }
        console.log('Connected to the Database...');
        
        console.log('Please wait. Database seeding in process...');
        
        seedData(mongoose);
    });
}