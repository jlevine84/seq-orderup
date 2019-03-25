module.exports = (sequelize, DataTypes)=>{
    const Order = sequelize.define("Order", {
        fullorder: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    })
    return Order
}