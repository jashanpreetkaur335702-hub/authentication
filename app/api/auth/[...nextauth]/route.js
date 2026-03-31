import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

async function refreshAccessToken(token) {
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

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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
        const { email, password } = credentials ;

      
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
  if (user) {
    return {
      ...token,
      ...user,
      accessToken: user.accessToken,
      refreshToken: user.refreshToken,
      accessTokenExpires: user.accessTokenExpires,
    };
  }

  if (Date.now() < token.accessTokenExpires) {
    return token;
  }

  return await refreshAccessToken(token);
},

    async session({ session, token }) {
      session.user = token ;
      session.accessToken = token.accessToken;
      session.error = token.error;

      return session;
    },
  },
});

export { handler as GET, handler as POST };