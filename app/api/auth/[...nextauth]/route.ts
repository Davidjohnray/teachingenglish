import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials", // ✅ NOT admin-only
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials) return null;

        // ✅ ADMIN LOGIN
        if (
          credentials.username === "admin" &&
          credentials.password === "admin123"
        ) {
          return {
            id: "1",
            name: "Admin",
            role: "admin",
          };
        }

        // ✅ GUEST / STUDENT LOGIN (details given by you later)
        if (
          credentials.username === "guest" &&
          credentials.password === "guest123"
        ) {
          return {
            id: "2",
            name: "Guest",
            role: "guest",
          };
        }

        return null;
      },
    }),
  ],

  pages: {
    signIn: "/login", // ✅ ONE login page for everyone
  },

  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }: any) {
      session.user.role = token.role;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
