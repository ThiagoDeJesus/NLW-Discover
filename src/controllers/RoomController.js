const Database = require('../db/config');

module.exports = {
  async create(req, res){
    const db = await Database();

    const password = req.body.password;

    let roomId = '';

    for(let i = 0; i < 6; i++){
      roomId += Math.ceil(Math.random() * 10).toString();
    }

    await db.run(`INSERT INTO rooms (
      id,
      pass
    ) VALUES (
      ${parseInt(roomId)},
      "${password}"
    )`);

    await db.close();

    res.redirect(`room/${roomId}`)
  },
}