//GETS
const getLastId = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT MAX(id) as id FROM texts_languages', (err, rows) => {
            if (err) return res.send(err)
                res.json(rows);
        })
    })
}

const getAll = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('select r.id as challenge_id, r.game_id, r.tematica_id as theme_id ,r.text_id, tl.language_id ,tl.value as question from retos r JOIN texts_languages tl ON r.text_id = tl.text_id where r.activo = 1', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);
        })
    })
}

//POSTS
const addTextLanguage = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('INSERT INTO casinodb_concurso.texts_languages set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.json({ rows, message: "Text Language added" });
        })
    })
}

module.exports = {
    addTextLanguage,
    getLastId,
    getAll
}
