//GETS
const getAllQuizs = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM quiz', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);

        })
    })
}

const getLastId = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        //conn.query('SELECT id FROM casinodb_concurso.texts WHERE id != 100000 ORDER BY id DESC LIMIT 1;', (err, rows) => {
        conn.query('SELECT MAX(id) as id FROM quiz where id != 100000;', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);
        })
    })
}

//POSTS
const addQuiz = (req, res) => { 
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('INSERT INTO quiz set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.json({ rows, message: "Quiz added" });
        })
    })
}

module.exports = { 
    getAllQuizs,
    addQuiz,
    getLastId
}