import bcrypt from 'bcryptjs'
const Users = [
    {
        name : 'Abdessamad bourhjoul',
        email : 'Abdessamadbourhjoul@gmail.com',
        password : bcrypt.hashSync('samides2020',12),
        isAdmin : true
    },
    {
        name : 'Souhail Ouabou',
        email : 'Ouabou.souhail@ump.ac.com',
        password : bcrypt.hashSync('souhail2020',12),
        isAdmin : true
    },
    {
        name : 'Soufian Zaam',
        email : 'Soufian.Zaam@ump.ac.com',
        password : bcrypt.hashSync('zaam2020',12),
        isAdmin : true
    },
    {
        name : 'John Doe',
        email : 'JohnDoe2@gmail.com',
        password : bcrypt.hashSync('doe2020',12),
        isAdmin : false
    }
    
]
export default Users