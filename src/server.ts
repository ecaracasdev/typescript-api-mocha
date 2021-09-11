import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// import routes
import indexRoutes from './routes/indexRoutes';
import PostRoutes from './routes/PostRoutes';
import UserRoutes from './routes/UserRoutes';

const app = express();

app.set("port", process.env.PORT || 4000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/', indexRoutes);
app.use('/posts', PostRoutes);
app.use('/users', UserRoutes);

export default app;