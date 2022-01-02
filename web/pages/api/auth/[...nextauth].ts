import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import TwitterProvider from 'next-auth/providers/twitter';

const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_CONSUMER_KEY || '',
            clientSecret: process.env.TWITTER_CONSUMER_SECRET || '',
        }),
    ],
    pages: {
        signIn: '/login',
    }
}

export default (req: NextApiRequest, res: NextApiResponse<any>) => NextAuth(req, res, options);