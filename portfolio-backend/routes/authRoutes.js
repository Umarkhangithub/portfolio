import express from 'express'
import bcrypt from 'bcrypt';
import Auth from '../models/auth.js'

const router = express.Router();

// get data
router.get('/', async (req, res) => {
    try {
        const users = await Auth.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }    
});

// Login User
// router.post('/login', async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Find user by email
//         const user = await Auth.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Compare passwords
//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid) {
//             return res.status(401).json({ message: 'Invalid password' });
//         }

//         res.status(200).json({ message: 'Login successful', user });
//     } catch (error) {
//         res.status(500).json({ message: 'Error logging in', error: error.message });
//     }
// });

export default router