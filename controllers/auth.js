const bcrypt = require('bcrypt');
const { Users } = require('../models/index.js');

module.exports = {
    login : function(email, password){
        return Users.findOne({ 
            where: { email } 
        })
        .then(({dataValues}) => {
            bcrypt.compare(password, dataValues.password)
            .then(result => console.log(result))
        })
        .catch(err => console.log(err))
    },

    register : function(req, res){
   
        const { name, email, password, passwordConfirmacion } = req.body;
        Users.create({
            name: name,
            email: email,
            password: password
        })
        db.query('SELECT email FROM usuarios WHERE email = ?', [email], async(error, results) => {
            if (error) {
                console.log(error);
            }
    
            if (results.length > 0) {
                return res.render('register', {
                    message: 'El mail ya esta en uso'
                })
            } else if (password !== passwordConfirmacion) {
                return res.render('register', {
                    message: 'La password no coincide'
                });
            }
    
            let hashedPassword = await bcrypt.hash(password, 8);
            console.log(hashedPassword);
    
            db.query('INSERT INTO usuarios SET ?', { name: name, email: email, password: hashedPassword }, (error, resu) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(results);
                    return res.render('register', {
                        message: "El usuario a sido registrado"
                    });
                }
            })
        })
    }
}

/* const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
}); */

/*         db.query('SELECT * FROM usuarios WHERE email = ?', [email], async(error, results) => {
            console.log(results);
            if (!results || !(await bcrypt.compare(password, results[0].password))) {
                res.status(401).render('Login', {
                    message: 'Email o Password incorrecto'
                })
            } else {
                const id = results[0].id;

                const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });

                console.log("El token es: " + token);

                const cookieOptions = {
                    exprires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                }
                res.cookie('jwt', token, cookieOptions);
                res.status(200).redirect('/');
            }
        }) */