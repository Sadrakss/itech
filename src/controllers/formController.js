const Form = require('../models/form');

module.exports = {
    async index(request, response) {
        let developers = await Form.find();
        return response.json(developers);
    },
    async store(request, response) {
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
        } = request.body;

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
            return response.status(200).json(developer);
        } else {
            response.status(400).json({ email: `${email} - already exists` })
        }


    },
    async delete(request, response) {
        const { id } = request.params;

        let developer = await Form.findOneAndDelete({ _id: id });
        if (!developer) {
            response.status(400).json({ Message: `ID ${id} does not exists` });
        } else {
            return response.status(204).json({ ID: `${id} was deleted.` });
        }


    },
    async update(request, response) {
        const { id } = request.params;
        const {
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
        } = request.body;

        Form.findOneAndUpdate({ _id: id }, {
            $set: {
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
            }
        }, function (err, result) {
            if (err) {
                response.status(400).json({ err });
            } else {
                response.status(201).json({ Message: `Updated succesfully.` });
            }
        })
    }
}