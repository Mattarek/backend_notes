const Note = require("../../db/models/note.js");

class NoteActions {
  async saveNote(req, res) {
    const title = req.body.title;
    const desc = req.body.desc;

    try {
      const note = new Note({ title, desc });
      await note.save();
      res.status(201).json(note);
    } catch (error) {
      return res.status(422).json({ message: error.message });
    }
  }
  // fetch all notes from db
  async getAllNotes(req, res) {
    const doc = await Note.find({});
    res.status(200).json(doc);
  }

  // fetch note from db
  async getNote(req, res) {
    const id = req.params.id;
    const note = await Note.findOne({ _id: id });
    res.status(200).json(note);
  }

  // update note in db
  async updateNote(req, res) {
    const id = req.params.id;
    const title = req.body.title;
    const desc = req.body.desc;

    const note = await Note.findOne({ _id: id });
    note.title = title;
    note.desc = desc;
    await note.save();

    res.status(201).json(note);
  }
  // delete note from db
  async deleteNote(req, res) {
    const id = req.params.id;
    await Note.deleteOne({ _id: id });
    res.sentStatus(204);
  }
}

module.exports = new NoteActions();
