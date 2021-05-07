'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			const room = models.room;
			room.hasMany(User);
			User.belongsTo(room);
		}
	};
	User.init({
		roomId: DataTypes.STRING(45),
		username: DataTypes.STRING(100)
	}, {
		sequelize,
		modelName: 'user',
	});
	return User;
};
