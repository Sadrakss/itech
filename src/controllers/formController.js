const Form = require('../models/form');

module.exports = {
    async index(request, response) {
        let developers = await Form.find();
        return response.json(developers);
    },
    async store(req, res) {
        const { email,
            name,
            skype,
            phone,
            linkdin,
            city,
            state,
            portfolio,
            freeTimeToWork,
            bestTimeToWork,
            salaryRequeriments,
        } = req.body;

        let developer = await Form.findOne({ email });

        if (!developer) {
            developer = await Form.create({
                email,
                name,
                skype,
                phone,
                linkdin,
                city,
                state,
                portfolio,
                freeTimeToWork,
                bestTimeToWork,
                salaryRequeriments,
            })
            return res.status(200).json(developer);
        } else {
            res.status(400).json({ email: `${email} - already exists` })
        }


    },
}