const express = require("express");
const app = express();
const mongoose = require("mongoose");
const NoteModel = require("./models/Notes");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/notes_db');
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Connected to database successfully'))

app.get("/getNotes", async (req, res) => {
    try {
      const result = await NoteModel.find({});
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  });
app.get('/getNotes/:id', async (req, res) => {
        try {
        let results = await NoteModel.findById(req.params.id)
        if (!results) {
            return res.status(404).send({message: 'Note not found'})
        }
         return res.send(results)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})

  app.post('/createNote', async (req, res) => {
   
    try {
        if (req.body.title == null) {
            return res.status(400).send({message: 'Book title is required'})
        }
        let note = new NoteModel(req.body)

        await note.save()
        return res.send(note)
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
})
app.delete('/deleteNote/:id', async (req, res) => {
   
    try {
       

        await NoteModel.findByIdAndDelete(req.params.id)
        return res.send({message: 'Book deleted successfully'})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
})

app.listen(3001, () => {
  console.log("SERVER RUNS");
});