const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");

GITHUB_CLIENT_ID = "8c3b80aac6c78657989d";
GITHUB_CLIENT_SECRET = "865c981e35743ea88219f065d2b8c312bc78ae95";

passport.use(
  new GithubStrategy(
    {
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
        return done(null, accessToken);
    }
  )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

