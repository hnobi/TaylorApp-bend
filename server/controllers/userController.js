import db from './../models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

require('dotenv').config();

const { User } = db;

export default class UserController {

  /**
   *
   *
   * @param {obj} req
   * @param {obj} res
   * @param {func} next
   * @memberof userController
   *  @return {obj} for registering users
   */
  static signup(req, res) {
    const { username, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    User.create({
      username,
      email,
      password: hashedPassword,
    }).then(user => {

      return res.status(201)
        .send({
          status:'success',
          message: 'Successfully created TaylorApp account',
          data: {
            username: user.username,
            email: user.email,
          }
        });
    }).catch(e => console.log(e));
  }


  /**
   *
   * @static
   * @param {obj} req
   * @param {obj} res
   * @return {JSON} Login users  and return success or error 
   * @memberof UserController
   */
  static login(req, res) {
    const { username, password } = req.body;
    User.findOne({
      where: { username }
    }).then(foundUser => {

      if (!foundUser) {
        return res.status(400)
          .json({
            status: 'error',
            message: 'Invalid user credentials'
          });
      }
      const isValidPassword = bcrypt.compareSync(password, foundUser.password),
        { role, id, email} = foundUser;

      if (!isValidPassword) {
        return res.status(401).json({
          status: 'error',
          message: 'Invalid user credentials'
        });
      }
      const token = jwt.sign({ role, userID: id }, process.env.secretKey, { expiresIn: '24h' });
      return res.send({
        token,
        status: 'success',
        message: 'Successfully login',
        data:{
          email,
          username
        }
      })
    }).catch(err => console.log(err));
  }
}