//GETS
const getAllThemes = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM tematicas', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);

        })
    })
}

const getThemeById = (req, res) => { 
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM tematicas WHERE id = ?', [req.params.id], (err, rows) => {
            if (err) res.send(err)
            res.json(rows);
        })
    })
}

const getLastId = (req, res) => {  
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT MAX(id) as id FROM tematicas', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);

        })
    })
}

const getActivedThemes = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM tematicas WHERE is_active = 1', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);
        })
    })
}

//POSTS
const addTheme = (req, res) => { 
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('INSERT INTO tematicas set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.json({ rows, message: "Theme added" });
        })
    })
}

//PUTS
const updateTheme = (req, res) => {
    const { name, id } = req.body;

    if (!id || !name) {
            return res.status(400).json({ error: 'Se requieren todos los parámetros para la actualización.', name, id });
    }

    req.getConnection((err, conn) => {
        if (err) return res.status(500).send(err);

        const updateQuery = 'UPDATE tematicas SET name = ? WHERE id = ?';

        conn.query(updateQuery, [name, id], (err, result) => {
            if (err) return res.status(500).send(err);

            res.json({ message: 'Actualización exitosa', affectedRows: result.affectedRows });
        });
    });
};

const updateThemeState = (req, res) => {
    const { value, id } = req.body;

    if ( !value || !id ) {
        if (value != 0)
            return res.status(400).json({ error: 'Se requieren todos los parámetros para la actualización.', value});
    }

    req.getConnection((err, conn) => {
        if (err) return res.status(500).send(err);

        const updateQuery = 'UPDATE tematicas SET is_active = ? WHERE id = ?';

        conn.query(updateQuery, [value, id], (err, result) => {
            if (err) return res.status(500).send(err);

            res.json({ message: 'Actualización exitosa', affectedRows: result.affectedRows });
        });
    });
};

module.exports = {
    getAllThemes,
    getThemeById,
    getLastId,
    addTheme,
    updateTheme,
    updateThemeState,
    getActivedThemes
}

