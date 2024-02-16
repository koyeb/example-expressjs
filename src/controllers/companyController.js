//GETS
const getAllCompanies = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM company', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);

        })
    })
}

const getCompanyById = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM company WHERE id = ?', [req.params.id], (err, rows) => {
            if (err) res.send(err)
            res.json(rows);
        })
    })
}

const getLastId = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT MAX(id) as id FROM company', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);

        })
    })
}

const addCompany = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        console.log(req.body)
        conn.query('INSERT INTO company set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.json({ rows, message: "Company added" });
        })
    })
}

const getActivedCompanies = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM company WHERE is_active = 1', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows);
        })
    })
}

//PUTS
const updateCompany = (req, res) => {
    const { name, fileName, id } = req.body;

    if (!id || !name || !fileName) {
        return res.status(400).json({ error: 'quieren todos los parámetros para la actualización. ', id, name, fileName });
    }

    req.getConnection((err, conn) => {
        if (err) return res.status(500).send(err);

        const updateQuery = 'UPDATE company SET name = ?, fileName = ? WHERE id = ?';

        conn.query(updateQuery, [name, fileName,id], (err, result) => {
            if (err) return res.status(500).send(err);

            res.json({ message: 'Actualización exitosa', affectedRows: result.affectedRows });
        });
    });
};

const updateCompanyState = (req, res) => {
    const { value, id } = req.body;

    if (!value || !id) {
        if (value != 0)
            return res.status(400).json({ error: 'Se requieren todos los parámetros para la actualización. ', value, id });
    }

    req.getConnection((err, conn) => {
        if (err) return res.status(500).send(err);

        const updateQuery = 'UPDATE company SET is_active = ? WHERE id = ?';

        conn.query(updateQuery, [value, id], (err, result) => {
            if (err) return res.status(500).send(err);

            res.json({ message: 'Actualización exitosa', affectedRows: result.affectedRows });
        });
    });
};

// const updateCompany = (req, res) => {   
//     req.getConnection((err, conn) => {
//         if (err) return res.send(err)
//         conn.query('UPDATE companies set ? WHERE id = ?', [req.body], (err, rows) => {
//             if (err) return res.send(err)
//             res.json({ rows, message: "Company updated" });
//         })
//     })
// }

module.exports = {
    getAllCompanies,
    getCompanyById,
    getLastId,
    addCompany,
    updateCompany,
    updateCompanyState,
    getActivedCompanies
}