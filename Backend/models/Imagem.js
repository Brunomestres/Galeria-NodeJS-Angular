const db = require('../config/DB');

class Imagem{

    static getTodos(cb)
    {
        let data = db.query("SELECT * FROM imagens", cb);
        return data;
    }
}