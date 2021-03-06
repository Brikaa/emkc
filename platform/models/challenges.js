const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class challenges extends Sequelize.Model { }

    challenges.init(
        {
            challenge_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            difficulty: DataTypes.INTEGER,
            points: DataTypes.INTEGER,
            folder: DataTypes.STRING,
            name: DataTypes.STRING,
            description: DataTypes.STRING,

            // getters
            difficulty_name: {
                type: DataTypes.VIRTUAL,
                get() {
                    return {
                        [constant.challenges.difficulty.easy]: 'easy',
                        [constant.challenges.difficulty.medium]: 'medium',
                        [constant.challenges.difficulty.hard]: 'hard',
                    }[this.difficulty] || null;
                }
            },
            difficulty_name_upper: {
                type: DataTypes.VIRTUAL,
                get() {
                    return {
                        [constant.challenges.difficulty.easy]: 'Easy',
                        [constant.challenges.difficulty.medium]: 'Medium',
                        [constant.challenges.difficulty.hard]: 'Hard',
                    }[this.difficulty] || null;
                }
            },
        },
        {
            sequelize,
            modelName: 'challenges',
            freezeTableName: true,
            hooks: {}
        }
    );

    return challenges;
};
