const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User =  sequelize.define('user', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true, 
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING
	},
	email: {
		type: DataTypes.STRING,
		unique: true
	},
	password: {
		type: DataTypes.STRING
	},
	date: {
		type: DataTypes.DATE
	},
	type: {
		type: DataTypes.STRING
	},
	remained: {
		type: DataTypes.INTEGER
	},
	trainer: {
		type: DataTypes.STRING
	},
	role: {
		type: DataTypes.STRING, 
		defaultValue: "USER"
	},
	token: {
		type: DataTypes.STRING
	}
});

const Category = sequelize.define('cat_trainer', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	category: {
		type: DataTypes.STRING
	}
});

const Trainer = sequelize.define('trainer', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING
	},
	img: {
		type: DataTypes.STRING
	},
	complexity: {
		type: DataTypes.INTEGER
	},
	amount: {
		type: DataTypes.INTEGER
	},
	mode: {
		type: DataTypes.STRING
	},
	sub_des: {
		type: DataTypes.TEXT
	},
	target_num: {
		type: DataTypes.TEXT
	},
	action_num: {
		type: DataTypes.TEXT
	},
	description: {
		type: DataTypes.TEXT
	},
	rules_des: {
		type: DataTypes.TEXT
	},
	tech_num: {
		type: DataTypes.TEXT
	},
	tech_des: {
		type: DataTypes.TEXT
	},
	load_des: {
		type: DataTypes.TEXT
	},
	rules_num: {
		type: DataTypes.TEXT
	},
	category_id: {
		type: DataTypes.INTEGER
	}
});

const Day = sequelize.define('day', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING
	}
});

const Time = sequelize.define('time', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	time: {
		type: DataTypes.STRING
	}
});

//промежуточная сущность

const Schedule = sequelize.define('schedule', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	trainer: {
		type: DataTypes.STRING
	},
	place: {
		type: DataTypes.STRING
	},
	timeEnd: {
		type: DataTypes.STRING
	}
});

Day.belongsToMany(Time, {through: Schedule});
Time.belongsToMany(Day, {through: Schedule});

// Appeals
const Appeale = sequelize.define('appeal', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING
	},
	description: {
		type: DataTypes.TEXT
	},
	phone: {
		type: DataTypes.STRING
	}
});

module.exports = {
	User,
	Category,
	Trainer,
	Day,
	Time,
	Schedule,
	Appeale
};