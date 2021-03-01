export default {
    id: '1',
    users: 
    [
        {
            id: 'u1',
            name:'Mahsun',
            imageUri: 'https://www.thetrendspotter.net/wp-content/uploads/2017/05/Blow-Out-with-Tapered-Sides.jpg'
        },
        {
            id: 'u2',
            name:'Lukas',
            imageUri: ''
        }
    ],
    messages: 
    [
        {
            id: 'm1',
            content: 'How are you, Lukas!',
            createdAt: '2020-10-03T14:48:00.000Z',
            user: {
                id: 'u1',
                name: 'Mahsun'
            }
        },
        {
            id: 'm2',
            content: 'I am good, What about you?',
            createdAt: '2020-10-03T14:48:00.000Z',
            user: {
                id: 'u2',
                name: 'Lukas'
            }
        },
        {
            id: 'm3',
            content: 'Good, I there any process about new implementation?',
            createdAt: '2020-10-03T14:50:00.000Z',
            user: {
                id: 'u1',
                name: 'Mahsun'
            }
        },
        {
            id: 'm4',
            content: 'Still developing, probably we gonna have a respone until tomorrow',
            createdAt: '2020-10-03T14:55:00.000Z',
            user: {
                id: 'u2',
                name: 'Lukas'
            }
        }
    ]
}