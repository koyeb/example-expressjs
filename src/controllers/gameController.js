//GETS
const getAllGames = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM games', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);

        })
    })
}

const getGameById = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM games WHERE id = ?', [req.params.id], (err, rows) => {
            if (err) res.send(err)
            res.json(rows);
        })
    })
}

module.exports = {
    getAllGames,
    getGameById
}