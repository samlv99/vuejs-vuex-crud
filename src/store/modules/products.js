

const productsModule = {
    state: {
        products: [
            {
                id: 1,
                name: 'khẩu trang',
                price: 10000,
            },
            {
                id: 2,
                name: 'laptop',
                price: 10000000,
            },
            {
                id: 3,
                name: 'ổ cứng',
                price: 1000000,
            },
            {
                id: 4,
                name: 'thời trang',
                price: 100000,
            },
            {
                id: 5,
                name: 'làm đẹp',
                price: 90000,
            },
        ],
    },
    getters: {
        products: state => state.products,
        value: state => {
            return state.products.map((x) => x.name)
        },
    },

}

export default productsModule;