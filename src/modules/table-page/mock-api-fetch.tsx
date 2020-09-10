export default function mockProduct() {
    const single = (cod = 1) => {
        return {
            id: cod,
            name: 'name',
            price: 2,
            category: 'category',
            amount: 3,
            reserve: 4,
            buyOrder: 5,
            prodOrder: 6,
            balance: 7,
        }
    }
       
    const array = (lenght: number) => 
        Array.apply(null, Array(lenght)).map(function (x, i) { return single(i); })

    return {
        single,
        array
    }
}
