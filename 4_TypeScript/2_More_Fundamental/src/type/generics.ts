interface Response<T>{
    data : T;
    status : number;
}

const transactionResponse : Response<string> = {
    data : 'Transaction successful',
    status : 200
}

const transactionAmount : Response<number> = {
    data : 1000,
    status : 404
}

function getLength<T>(value: T[]): number{
    return value.length;
}

getLength<number>([1, 2, 3, 4, 5]);

