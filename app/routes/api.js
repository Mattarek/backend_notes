const express = require("express");
const router = express.Router();
const noteActions = require("../actions/api/noteActions");

// fetch notes
router.get("/notes_class", noteActions.getAllNotes);

// fetch note
router.get("/notes_class/:id", noteActions.getNote);

// save note
router.post("/notes_class", noteActions.saveNote);

// edit note
router.put("/notes_class/:id", noteActions.updateNote);

// delete note
router.delete("/notes_class/:id", noteActions.deleteNote);

module.exports = router;
