import app from './server';
import { openConneciton, closeConnection} from "./database";

openConneciton('mongodb://localhost/restapits')
console.log('succesfully connected')

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
})
