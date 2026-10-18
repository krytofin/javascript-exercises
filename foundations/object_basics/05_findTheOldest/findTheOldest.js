function getPersonAge(person){
    if (!person.yearOfDeath){
        return new Date().getFullYear() - person.yearOfBirth;
    }
    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(people) {
    let person = people[0];
    for (let newPer of people){
        if (getPersonAge(person) < getPersonAge(newPer)){
            person = newPer;
        }
    }
    return person;

};

// Do not edit below this line
module.exports = findTheOldest;
