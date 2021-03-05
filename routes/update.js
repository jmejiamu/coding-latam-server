const updateData = async (req, res, db) => {
    try {
        const { user_id } = req.params;
        const { name, email, fav_color } = req.body;

        const update = await db('coding').update({ name, email, fav_color }).where({ id: user_id });
        res.status(200).send({ response: "updated data" })
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = {
    updateData
}