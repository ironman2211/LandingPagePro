import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import { connect } from "../../../../DB/mongodb";
import User from "../../../../DB/models/user";
import jwt from 'jsonwebtoken';


interface SignInResponse {
    user: {
        email: string;
        username: string;
        _id: string;
    };
    token: string;
}
// Environment variables for Google OAuth
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ account, profile }) {
            if (!profile?.email) {
                throw new Error('No profile email found');
            }


            return true;
        },
        async session({ session, token }) {
            return session;
        },
        async jwt({ token, user, account, profile }) {
            if (profile) {
                if (!user) {
                    throw new Error('No user found');
                }
                console.log(user, token.id);
                token.id = user.id;
            }
            return token;
        },
        async redirect({ url, baseUrl }) {
            return baseUrl + '/login'; // Redirect to the dashboard page
        },
    },
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
