import { Client, Account, Databases } from 'appwrite';
import { type Models } from 'appwrite';

const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '');

export const account = new Account(client);
export const database = new Databases(client);
export default client;

export async function signInWithEmail(email: string, password: string) {
    const authUser: Models.Session = await account.createEmailPasswordSession(email, password);
    return authUser;
}