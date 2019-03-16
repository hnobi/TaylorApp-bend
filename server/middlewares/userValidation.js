

export default class UserValidation {

  static signupValidator(req, res, next) {
    const error = {}
    const { username, email, password } = req.body;
    const isEmail = /\S+@\S+\.\S+/.test(email);

    if (!username || !email || !password) {
      return res.send({ messeage: 'All or some field is empty' })
    }
    if (username.trim() !== '') {
      if (username.length < 3 || username.length > 15) {
        error.username = 'Username must be between 3 and 15 character'
      }
    } else {
      error.Username = 'Username must not be empty'
    }
    // Email validation
    if (email.trim() !== '') {
      if (!isEmail) {
        error.email = 'Please put in valid email'
      }
    } else {
      error.message = 'Email must not be empty'
    }
    //password
    if (password.trim() !== '') {
      if (password.length < 6 ) {
        error.username = 'Password must not be less than 6 character'
      }
    } else {
      error.Username = 'Password must not be empty'
    }
    Object.keys(error).length !== 0 ? res.send(error) :
      next()
  }

  /**
   *
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @returns
   * @memberof UserValidation
   */
  static loginValidator(req, res, next) {
    const error = {}
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.send({ messeage: 'All or some field is empty' })
    }

    if (username.trim() !== '') {
      if (username.length < 3 || username.length > 15) {
        error.username = 'Username must be between 3 and 15 character'
      }
    } else {
      error.Username = 'Username must not be empty'
    }

    //password
    if (password.trim() !== '') {
      if (password.length < 6 ) {
        error.username = 'Password must not be less than 6 character'
      }
    } else {
      error.Username = 'Password must not be empty'
    }
    Object.keys(error).length !== 0 ? res.send(error) :
      next()
  }
}


