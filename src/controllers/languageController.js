//GETS
const getAllLanguages = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM languages', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);

        })
    })
}

const getLanguageById = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM languages WHERE id = ?', [req.params.id], (err, rows) => {
            if (err) res.send(err)
            res.json(rows);
        })
    })
}

const getLastId = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT id FROM languages ORDER BY id DESC LIMIT 1', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);

        })
    })
}

const getNotAddedLanguages = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM languages WHERE is_added = 0', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);

        })
    })
}

const getAddedLanguages = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM languages WHERE is_added = 1', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);

        })
    })
}

const getActivedLanguages = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM languages WHERE is_active = 1', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);

        })
    })
}

//POSTS
// const addLanguage = (req, res) => { 
//     req.getConnection((err, conn) => {
//         if (err) return res.send(err)
//         console.log(req.body)
//         conn.query('INSERT INTO languages set ?', [req.body], (err, rows) => {
//             if (err) return res.send(err)
//             res.json({ rows, message: "Language added" });
//         })
//     })
// }

//PUTS
const updateLanguageState = (req, res) => {
    const { id, col, value } = req.body;

    if (!col || !value || !id) {
        if (value != 0)
            return res.status(400).json({ error: 'Se requieren todos los parámetros para la actualización. ', value, id, col });
    }

    req.getConnection((err, conn) => {
        if (err) return res.status(500).send(err);

        const updateQuery = 'UPDATE languages SET ?? = ? WHERE id = ?';

        conn.query(updateQuery, [col, value, id], (err, result) => {
            if (err) return res.status(500).send(err);

            res.json({ message: 'Actualización exitosa', affectedRows: result.affectedRows });
        });
    });
};

module.exports = {
    getAllLanguages,
    getLanguageById,
    getLastId,
    updateLanguageState,
    getAddedLanguages,
    getNotAddedLanguages,
    getActivedLanguages,
    // addLanguage,
}
