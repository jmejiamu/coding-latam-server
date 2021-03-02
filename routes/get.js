const getUserData = async (req, res, db) => {
    try {
        const data = await db.select('*').from('coding').orderBy('id', 'desc');
        res.status(200).send(data);

    } catch (error) {
        console.error(error.message);
    }
}

module.exports = {
    getUserData
}