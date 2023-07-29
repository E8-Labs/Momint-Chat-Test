const host = "http://localhost:5001";
const registerRoute = `${host}/api/users/register`
const loginRoute = `${host}/api/users/login`
const allUsersRoute = `${host}/api/users`

const sendMessageRoute = `${host}/api/chats/chat`
const getMessagesRoute = `${host}/api/chats/messages_for_chat`
export {loginRoute, registerRoute, allUsersRoute, sendMessageRoute, getMessagesRoute}