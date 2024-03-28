const express = require("express");
// const serverless = require('serverless-http');
const app = express();
const mongoose = require("mongoose");
const ScoreModel = require("./models/Scores");
const uri = "mongodb+srv://skyline96gtr:gZadT5QY58cyqaix@cluster0.u0tk2qn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Error connecting to MongoDB Atlas:', err));
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Connected to database successfully'))

app.get("/getScores", async (req, res) => {
    try {
      const result = await ScoreModel.find({});
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  });
app.get('/getScores/:id', async (req, res) => {
        try {
        let results = await ScoreModel.findById(req.params.id)
        if (!results) {
            return res.status(404).send({message: 'Note not found'})
        }
         return res.send(results)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})

app.post('/Scores', async (req, res) => {
    try {
        const { name, score } = req.body;

        if (!name || score === undefined || score === null) {
            return res.status(400).send({ message: 'Name and score are required' });
        }

        // Check if a record with the same name already exists
        let existingRecord = await ScoreModel.findOne({ name });

        if (existingRecord) {
            // If the existing score is less than the new score, update it
            if (existingRecord.score < score) {
                existingRecord.score = score;
                await existingRecord.save();
            }
        } else {
            // If no record found, create a new one
            let newScore = new ScoreModel({ name, score });
            await newScore.save();
        }

        return res.send({ message: 'Score updated successfully' });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
});

app.listen(5000, () => {
  console.log("SERVER RUNS");
});
// module.exports.handler = serverless(app);