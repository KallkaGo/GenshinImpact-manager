import Request from '../index'

const userLogin = (name: string, pwd: string) => {
    return Request.post({
        url: '/login',
        data: {
            username: name,
            password:pwd
        }
    })
    
}

export {
    userLogin
}