'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class UserRoom extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			const user = models.user;
			const room = models.room;
			room.belongsToMany(user, { through: UserRoom, foreignKey: 'roomId'});
			user.belongsToMany(room, { through: UserRoom, foreignKey: 'userId' });
		}
	};
	UserRoom.init({
		roomId: DataTypes.INTEGER,
		userId: DataTypes.INTEGER,
	}, {
		sequelize,
		modelName: 'user_room',
	});
	return UserRoom;
};
