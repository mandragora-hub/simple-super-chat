'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Message extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			const user = models.user;
			const room = models.room;
			room.belongsToMany(user, { through: Message, foreignKey: 'roomId'});
			user.belongsToMany(room, { through: Message, foreignKey: 'userId' });
		}
	};
	Message.init({
		roomId: DataTypes.INTEGER,
		userId: DataTypes.INTEGER,
		message: DataTypes.STRING(200),
		type: DataTypes.ENUM('text/plain', 'text/html', 'image/jpg'), 
	}, {
		sequelize,
		modelName: 'message',
	});
	return Message;
};
