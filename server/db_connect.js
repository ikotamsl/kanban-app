const {Sequelize} = require('sequelize');

module.exports = new Sequelize('postgres://waqggpur:jAzaDYTjWkNsxlvD4L1DbLlwv7ctg-qN@arjuna.db.elephantsql.com/waqggpur', {
    define: {
        timestamps: false
    }
});