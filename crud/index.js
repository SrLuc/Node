const express = require("express");
const app = express();

app.use(express.json());

const courses = ["React", "Node", "Express", "MongoDB"];

app.get("/course", (req, res) => {
  res.json(courses);
});

app.get("/course/:id", (req, res) => {
  const { id } = req.params;
  res.json(courses[id-1]);
});

app.post("/course", (req, res) => {
    const {name} = req.body;
    courses.push(name);
    res.json(courses);
})
  
app.put("/course/:id", (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    courses[id-1] = name
    res.json(courses);
})

app.delete("/course/:id", (req, res) => {
    const {id} = req.params;
    const course = courses.splice(id-1, 1);
    res.json(course);
})

app.listen(3000, () => console.log("Server running on port 3000"));
