const User = require('../models/User')

exports.user_list = async function(request,response) {
    const users = await User.findAll()
    response.send(users)
}

exports.user_detail = async function(request, response) {
    const requestdId = request.params.id
    const user = await User.findOne({where: { id: requestdId}})
    response.send(user)
}

exports.user_create = async function(request, response) {
    await User.create(request.body)
    response.send('user is inserted')
}

exports.user_put = async function(request, response) {
    const requestdId = request.params.id
    const user = await User.findOne({where: {id: requestdId}})
    user.username = request.body.username;
    response.send('updated')
    request
}

exports.user_delete = async function(request, response){
    const requestdId = request.params.id
    await User.destroy({where: {id: requestdId}})
    response.send('removed')
}