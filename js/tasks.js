import users from './users.js';

//task1
const getUserNames = users => {
  return users.reduce((userNames, user) => {
    userNames.push(user.name);
    return userNames;
  }, [])
};

console.log(getUserNames(users));

//task2
const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue'));

//task3
const getUsersWithGender = (users, gender) => {
  return users
    .filter(user => user.gender === gender)
    .reduce((userNames, user) => {
      userNames.push(user.name);
      return userNames;
    }, [])
};

console.log(getUsersWithGender(users, 'male'));

//task4
const getInactiveUsers = users => {
  return users.filter(user => user.isActive === false);
};

console.log(getInactiveUsers(users));

//task5
const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

//task6
const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age > min && user.age < max);
};

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));

//task7
const calculateTotalBalance = users => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};

console.log(calculateTotalBalance(users));

//task8
const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => user.friends.includes(friendName))
    .reduce((userNames, user) => {
      userNames.push(user.name);
      return userNames;
    }, []);
};

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

//task9
const getNamesSortedByFriendsCount = users => {
  return users
    .sort((a, b) => a.friends.length - b.friends.length)
    .reduce((userNames, user) => {
      userNames.push(user.name);
      return userNames;
    }, []);
};

console.log(getNamesSortedByFriendsCount(users));

//task10
const getSortedUniqueSkills = users => {
  return users
    .reduce((skills, user) => {
      user.skills.forEach(skill => {
        if(!skills.includes(skill)) {
          skills.push(skill)
        }
      })
      return skills;
    }, [])
    .sort();
};

console.log(getSortedUniqueSkills(users));