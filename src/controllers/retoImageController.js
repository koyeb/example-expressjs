//GETS
const getRetoImageById = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM reto_image WHERE id = ?', [req.params.id], (err, rows) => {
            if (err) res.send(err)
            res.json(rows);
        })
    })
}

const getLastId = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT MAX(id) as id FROM reto_image', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);
        })
    })
}

//POSTS
const addRetoImage = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        console.log(req.body)
        conn.query('INSERT INTO reto_image set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.json({ rows, message: "Reto_image added" });
        })
    })
}


module.exports = {
    addRetoImage,
    getRetoImageById,
    getLastId
}