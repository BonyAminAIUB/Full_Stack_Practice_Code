type Gender = 'Male' | 'Female' | 'Others';

type Product = {
    id : number;
    name : string;
    price : number;
    description?: string;
    gender? : Gender;
};


const products: Product[] = [{
    id : 1,
    name : 'Laptop',
    price : 100000,
    description : 'High-performance laptop for professionals',
    gender : 'Male'
}, {
    id : 2,
    name : 'Smart-Phone',
    price : 50000,
    description : 'Latest model smartphone with advanced feature',
    gender : 'Male'
}];