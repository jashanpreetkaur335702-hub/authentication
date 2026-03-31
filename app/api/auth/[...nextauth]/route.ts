import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";


async function refreshAccessToken(token: any) {
  try {
    const res = await fetch("https://your-api.com/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken: token.refreshToken,
      }),
    });

    const refreshed = await res.json();

    if (!res.ok) throw refreshed;

    return {
      ...token,
      accessToken: refreshed.accessToken,
      accessTokenExpires: Date.now() + refreshed.expiresIn * 1000,
      refreshToken: refreshed.refreshToken ?? token.refreshToken,
    };
  } catch (error) {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}


export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "select_account",
        },
      },
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials) return null;

        const { email, password } = credentials;

        // Mock login
        if (email === "test@gmail.com" && password === "123456") {
          return {
            id: "1",
            name: "Test User",
            email: "test@gmail.com",
            accessToken: "mock-access-token",
            refreshToken: "mock-refresh-token",
            accessTokenExpires: Date.now() + 60 * 60 * 1000,
          };
        }

        return null;
      },
    }),
  ],

  pages: {
    signIn: "/",
  },

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      // First login
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.accessTokenExpires = user.accessTokenExpires;
      }

      // If token still valid
      if (Date.now() < (token.accessTokenExpires ?? 0)) {
        return token;
      }

      // Refresh token
      return await refreshAccessToken(token);
    },

    async session({ session, token }) {
      session.user = token;
      session.accessToken = token.accessToken;
      session.error = token.error;

      return session;
    },
  },
};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };