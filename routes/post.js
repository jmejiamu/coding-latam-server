const saveUserData = async (req, res, db) => {
    try {
        const { name, email, fav_color } = req.body;
        const data = await db
            .insert({
                name: name,
                email: email,
                fav_color: fav_color
            })
            .into('coding')
        res.status(200).send({ response: "Data Saved" })
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    saveUserData
}