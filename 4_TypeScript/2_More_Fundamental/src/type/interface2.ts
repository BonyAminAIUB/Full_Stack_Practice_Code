type userRole = 'Admin' | 'User' | 'Moderator' | 'Guest';

interface User{
    name : string;
    role : userRole;
    email : string;
}

interface Admin extends User{
    perMissions : string[];
}

interface Moderator extends User{
    moderateSections : string[];
}

const bigBoss : Admin = {
    name : 'Bony Amin',
    role : 'Admin',
    email : 'bony@gmail.com',
    perMissions : ['manage_users', 'edit content']
}


interface Gift{
    name : string;
}

interface Gift{
    price : number;
}

const bDayGift: Gift = {
    name : 'Book',
    price : 300
}

