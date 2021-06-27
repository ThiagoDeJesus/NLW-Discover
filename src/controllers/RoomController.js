const Database = require('../db/config');

module.exports = {
  async create(req, res) {
    const db = await Database();
    const pass = req.body.password;
    let roomId = '';
    let isRoom = true;
    while (isRoom) {
      /* Gera o numero da sala */
      for (var i = 0; i < 6; i++) {
        roomId += Math.floor(Math.random() * 10).toString()
      }

      /* Verificar se esse numero ja existi */
      const roomsExistIds = await db.all(`SELECT id FROM rooms`);
      isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId);

      if (!isRoom) {
        /* Inseri a sala no banco */
        await db.run(`INSERT INTO rooms (
                id,
                pass
            ) VAlUES (
                ${parseInt(roomId)},
                "${pass}"
            )`);
      }
    }

    await db.close();

    res.redirect(`/room/${roomId}`);
  },
  async open(req, res){
    const db = await Database();
    const roomId = req.params.room;

    const room = await db.all(`SELECT * FROM rooms WHERE id = ${roomId}`);
    if(room.length == 0){
      return res.redirect(`/?alert=roomInexistent&roomId=${roomId}`,);
    }

    const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} AND read = 0`);
    const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} AND read = 1`);
    let isQuestions = true;

    if(questions.length == 0 && questionsRead.length == 0){
      isQuestions = false;
    }

    res.render("room", {roomId : roomId, questions: questions, questionsRead: questionsRead, isQuestions: isQuestions});
  },
  async enter(req, res){
    const roomId = req.body.roomId;

    res.redirect(`/room/${roomId}`);
  }
}