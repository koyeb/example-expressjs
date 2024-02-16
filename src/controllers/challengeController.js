//GETS
const getAllChallenges = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM retos', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);
        })
    })
}

const getChallengeById = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM retos WHERE id = ?', [req.params.id], (err, rows) => {
            if (err) res.send(err)
            res.json(rows);
        })
    })
}

const getLastId = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT MAX(id) as id FROM retos', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);
        })
    })
}

const getChallengesToShow = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT r.id AS id_challenge, tl.value AS question, tl.language_id As language_id, g.name AS gameName, t.name AS themeName, r.activo as is_active FROM retos r JOIN games g ON r.game_id = g.id JOIN tematicas t ON r.tematica_id = t.id JOIN texts_languages tl ON r.text_id = tl.text_id ORDER BY r.id', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);
        })
    })
}

const getChipsToShow = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT r.id AS id_challenge, tl.value AS question, tl.language_id As language_id, t.name AS themeName, r.activo as is_active FROM retos r JOIN games g ON r.game_id = g.id JOIN tematicas t ON r.tematica_id = t.id JOIN texts_languages tl ON r.text_id = tl.text_id where g.id = 0 and r.activo = 1 ORDER BY r.id ', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);
        })
    })
}

const getFlashToShow = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT r.id AS id_challenge, tl.value AS question, tl.language_id As language_id, t.name AS themeName, r.activo as is_active FROM retos r JOIN games g ON r.game_id = g.id JOIN tematicas t ON r.tematica_id = t.id JOIN texts_languages tl ON r.text_id = tl.text_id where g.id = 1 and r.activo = 1 ORDER BY r.id', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);
        })
    })
}

const getQuizToShow = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT r.id AS id_challenge, tl.value AS question, tl.language_id As language_id, t.name AS themeName, r.activo as is_active FROM retos r JOIN games g ON r.game_id = g.id JOIN tematicas t ON r.tematica_id = t.id JOIN texts_languages tl ON r.text_id = tl.text_id where g.id = 2 and r.activo = 1 ORDER BY r.id', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);
        })
    })
}

const getActivedChallenges = (req, res) => {   
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM retos WHERE activo = 1', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);
        })
    })
}

//POSTS
const addChallenge = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        console.log(req.body)
        conn.query('INSERT INTO retos set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.json({ rows, message: "Challenge added" });
        })
    })
}

//PUTS
const updateChallenge = (req, res) => {   
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('UPDATE retos set ? WHERE id = ?', [req.body, req.params.id], (err, rows) => {
            if (err) return res.send(err)
            res.json({ rows, message: "Challenge updated" });
        })
    })
}

const updateChallengeState = (req, res) => {
    const { value, id } = req.body;

    if (!id || !value){
        if (value != 0)
            return res.status(400).json({ error: 'se requieren todos los parámetros para la actualización. ', value, id });
    }
    
    req.getConnection((err, conn) => {
        if (err) return res.status(500).send(err);
        const updateQuery = 'UPDATE retos SET activo = ? WHERE id = ?';
        conn.query(updateQuery, [value, id], (err, result) => {
            if (err) return res.status(500).send(err);
            res.json({ message: 'Actualización exitosa', affectedRows: result.affectedRows });
        });
    });
} 

/*
SELECT
    r.id AS id_challenge,
    tl.value AS question,
    tl.language_id As id_language,
    g.name AS gameName,
    t.name AS themeName
FROM retos r
JOIN games g ON r.game_id = g.id
JOIN tematicas t ON r.tematica_id = t.id
JOIN texts_languages tl ON r.text_id = tl.text_id
*/

module.exports = {
    getAllChallenges,
    updateChallenge,
    addChallenge,
    getLastId,
    getChallengeById,
    getChallengesToShow,
    updateChallengeState,
    getActivedChallenges,
    getChipsToShow,
    getFlashToShow,
    getQuizToShow
}