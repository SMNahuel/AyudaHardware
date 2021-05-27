exports.performance = (req, res) => {

    const {arquitectura, software } = req.body;
    const elementos = [arquitectura, software]
    res.status(200).send(elementos)

}

