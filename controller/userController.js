const UserInfo = require('../model/userModel.js')
const {StatusCodes} = require('http-status-codes')

const userController = {
    userInfo : async (req, res) => {
        try {
            const {name, email, mobile, message} = req.body

            const extEmail = await UserInfo.findOne({email})

            if(extEmail)
                return res.status(StatusCodes.CONFLICT).json({ msg : `${email} is already Exists`, success : false })

            let data = await UserInfo.create({
                name,
                email,
                mobile,
                message
            })

            res.status(StatusCodes.ACCEPTED).json({ msg : "Your Details Have Been Submiited, Faisal Will Contact you Asap", user: data, success : true })
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg : error.message, success : false })
        }
    }
}

module.exports = userController