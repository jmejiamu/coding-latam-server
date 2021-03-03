const deleteInfo = async (req, res, db) => {
    try {
        const { user_id } = req.params;
        const deleteData = await db('coding').where({ id: user_id }).del()
        res.status(200).send({ response: 'data delete' });
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = {
    deleteInfo
}