//GETS
const getAllTexts = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM texts;', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);
        })
    })
}

const getLastId = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        //conn.query('SELECT id FROM casinodb_concurso.texts WHERE id != 100000 ORDER BY id DESC LIMIT 1;', (err, rows) => {
        conn.query('SELECT MAX(id) as id FROM texts where id != 100000;', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);
        })
    })
}

const getQuestionId = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT distinct t.id, t.value FROM casinodb_concurso.retos r join texts t on r.text_id = t.id join texts_languages tl on t.id = tl.text_id where r.activo = 1 and (SUBSTRING_INDEX(t.value, "_", 1)) LIKE "%p"', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);
        })
    })
}

const getQuizQuestions = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT distinct t.id, t.value FROM casinodb_concurso.retos r join texts t on r.text_id = t.id join texts_languages tl on t.id = tl.text_id where r.activo = 1 and (SUBSTRING_INDEX(t.value, "_", 1)) LIKE "%QZP%"', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);
        })
    })
}

const getFlashQuestions = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT distinct t.id, t.value FROM casinodb_concurso.retos r join texts t on r.text_id = t.id join texts_languages tl on t.id = tl.text_id where r.activo = 1 and (SUBSTRING_INDEX(t.value, "_", 1)) LIKE "%FLP%"', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);
        })
    })
}

const getChipsQuestions = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT distinct t.id, t.value FROM casinodb_concurso.retos r join texts t on r.text_id = t.id join texts_languages tl on t.id = tl.text_id where r.activo = 1 and (SUBSTRING_INDEX(t.value, "_", 1)) LIKE "%CHP%"', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);
        })
    })
}

const getJuegosQuestions = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT distinct t.id, t.value FROM casinodb_concurso.retos r join texts t on r.text_id = t.id join texts_languages tl on t.id = tl.text_id where r.activo = 1 and t.value LIKE "%P__Juegos%"', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);
        })
    })
}

const getDeportesQuestions = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT distinct t.id, t.value FROM casinodb_concurso.retos r join texts t on r.text_id = t.id join texts_languages tl on t.id = tl.text_id where r.activo = 1 and t.value LIKE "%P__Deportes%"', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);
        })
    })
}

const getViajarQuestions = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT distinct t.id, t.value FROM casinodb_concurso.retos r join texts t on r.text_id = t.id join texts_languages tl on t.id = tl.text_id where r.activo = 1 and t.value LIKE "%P__Viajar%"', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);
        })
    })
}

const getCineYSeriesQuestions = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT distinct t.id, t.value FROM casinodb_concurso.retos r join texts t on r.text_id = t.id join texts_languages tl on t.id = tl.text_id where r.activo = 1 and t.value LIKE "%P__Cine y series"', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);
        })
    })
}

const getQueSabesDeQuestions = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT distinct t.id, t.value FROM casinodb_concurso.retos r join texts t on r.text_id = t.id join texts_languages tl on t.id = tl.text_id where r.activo = 1 and t.value LIKE "%P__Que sabes de%"', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);
        })
    })
}

//POSTS
const addText = (req, res) => { 
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('INSERT INTO texts set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.json({ rows, message: "Text added" });
        })
    })
}

module.exports = {
    getAllTexts,
    addText,
    getLastId,
    getQuestionId,
    getQuizQuestions,
    getFlashQuestions,
    getChipsQuestions,
    getJuegosQuestions,
    getDeportesQuestions,
    getViajarQuestions,
    getCineYSeriesQuestions,
    getQueSabesDeQuestions,
}