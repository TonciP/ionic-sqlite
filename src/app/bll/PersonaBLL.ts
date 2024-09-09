import { DbService } from '../services/db.service';
export class PersonaBLL {
    public async insert(dbService: DbService, nombres: string, apellidos: string, edad: number, fechaNacimiento: string) {
        if (!dbService.database) {
            await dbService.createDb();
        }
        const sqlText = 'INSERT INTO personas(nombres, apellidos, edad, fechaNacimiento) VALUES (?, ?, ?, ?)';
        return await dbService.database.executeSql(sqlText, [nombres, apellidos, edad, fechaNacimiento])
            .catch((error) => {
                console.log('error al insertar', error);
            });
    }
    public async selectAll(dbService: DbService) {
        if (!dbService.database) {
            await dbService.createDb();
        }
        const sqlText = 'SELECT id, nombres, apellidos, edad, fechaNacimiento FROM personas';
        return await dbService.database.executeSql(sqlText, []).catch((error) => {
            console.log('error al selectAll', error);
        });;
    }
    public async selectById(dbService: DbService, id: string) {
        if (!dbService.database) {
            await dbService.createDb();
        }
        const sqlText = 'SELECT id, nombres, apellidos, edad, fechaNacimiento FROM personas WHERE id = ?';
        return await dbService.database.executeSql(sqlText, [id]).catch((error) => {
            console.log('error al selectById', error);
        });
    }
}
