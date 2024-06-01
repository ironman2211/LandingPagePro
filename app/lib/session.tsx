import { User, getServerSession } from 'next-auth'

export const session = async ({ session, token }: any) => {
  console.log(session+".....⚡⚡⚡⚡");
  
  session.user.id = token.id
  return session
}

export const getUserSession = async (): Promise<User> => {
  const authUserSession = await getServerSession({
    callbacks: {
      session,
    },
  })
  return authUserSession?.user
}