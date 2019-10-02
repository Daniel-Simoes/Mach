const User = require('../models/User');
const Spot = require('../models/Spot');

module.exports = {
    async index(req, res) {
        const { genre } = req.query;

        const spots =  await Spot.find({ genres: genre });

        return res.json (spots);
    },
        

    async store(req, res) {
        const { filename } = req.file;
        const { company, genres, price } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if(!user) {
            return res.status(400).json({ error: 'User Does Not Exists' });
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            genres: genres.split(',').map(genre=> genre.trim()),
            price
        });

         return res.json(spot) 
    }
    

};