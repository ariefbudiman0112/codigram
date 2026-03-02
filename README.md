# codigram

## models

npx sequelize-cli model:generate --name User --attributes username:string,email:string,password:string,role:string

npx sequelize-cli model:generate --name Profile --attributes fullName:string,bio:text,avatarUrl:text,UserId:integer

npx sequelize-cli model:generate --name Category --attributes name:string,description:text

npx sequelize-cli model:generate --name Post --attributes caption:text,imageUrl:text,UserId:integer,CategoryId:integer

npx sequelize-cli model:generate --name Comment --attributes message:text,UserId:integer,PostId:integer

npx sequelize-cli model:generate --name Like --attributes UserId:integer,PostId:integer