import { DataSource } from "typeorm";
import { dataSourceOptions } from "./database.module";
import { CreateCoursesTable1753191937106 } from "src/migrations/1753191937106-CreateCoursesTable";
import { CreateTagsTable1753196144680 } from "src/migrations/1753196144680-CreateTagsTable";

export const dataSource = new DataSource({
    ...dataSourceOptions,
    synchronize: false,
    migrations: [CreateCoursesTable1753191937106, CreateTagsTable1753196144680],
})
