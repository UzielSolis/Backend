import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import passport, { session } from 'passport';
import { Strategy } from 'passport-google-oauth20';
import expressSession from 'express-session';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(expressSession({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true
}));

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((user, cb) => {
    cb(null, user);
});

app.use(passport.initialize());
app.use(passport.session());



passport.use(new Strategy({
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
},
function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //     return cb(err, user);
    // });

    // Validar si el usuario existe
    return cb(null, profile);
}));

app.get('/', (req: Request, res: Response) => {
    console.log('Usuario: ', req.user)
    res.send('Hello World');
});

app.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.get('/logout', (req: Request, res: Response) => {
    res.send('Vamos a cerrar sesión');
});

app.get('/google/callback', passport.authenticate('google', {failureRedirect: '/login'}), (req: Request, res: Response) => {
    res.redirect('/');
}
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});