//GETS
const getAllImages = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM images', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);
        })
    })
}

const getLastId = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT MAX(id) as id FROM images', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);
        })
    })
}

//POSTS
const addImage = (req, res) => { 
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('INSERT INTO images set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.json({ rows, message: "Image added" });
        })
    })
}

module.exports = {
    getAllImages,
    getLastId,
    addImage
}