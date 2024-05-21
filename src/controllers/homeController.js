import pool from "../configs/connectDb";

let getHomepage = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM users");

  return res.render("index.ejs", { users: rows });
};
let addUser = async (req, res) => {
  let { name } = req.body;
  await pool.execute("insert into users(name) values ( ?)", [name]);
  return res.redirect("/");
};
let deleteUser = async (req, res) => {
  let userId = req.body.userId;
  await pool.execute("delete from users where id = ?", [userId]);
  return res.redirect("/");
};
let getEditPage = async (req, res) => {
  let id = req.params.id;
  let [user] = await pool.execute("Select * from users where id = ?", [id]);
  return res.render("update.ejs", { dataUser: user[0] }); // x <- y
};

let postUpdateUser = async (req, res) => {
  let { name, id } = req.body;
  await pool.execute("update users set name = ? where id = ?", [name, id]);

  return res.redirect("/");
};

module.exports = {
  getHomepage,
  addUser,
  deleteUser,
  getEditPage,
  postUpdateUser,
};
