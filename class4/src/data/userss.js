
const users = [
    {
        id: 1,
        name : "ram",
        email: "ram@gmail.com",
        age: 24,
        address: {
            city: "Bangalore",
            pin: 34567
        },
        bank : [
            {
                accNo: 56789,
                bankName : "canera",
                type: "Saving",
            },
            {
                accNo: 567890,
                bankName : "idfc",
                type: "Current",
            }
        ]
    },
    {
        id: 2,
        name : "pajj",
        email: "pajj@gmail.com",
        age: 89,
        address: {
            city: "kerala",
            pin: 345678
        },
        bank : [
            {
                accNo: 5698765,
                bankName : "hdfc",
                type: "Current",
            },
            {
                accNo: 56789056789,
                bankName : "sbi",
                type: "Saving",
            }
        ]
    }
];

export default users
