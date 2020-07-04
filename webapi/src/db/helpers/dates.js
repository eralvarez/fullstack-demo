'use strict';

// By default sequelize does't add createdAt/updatedAt columns,
// with this helper we add them

module.exports = {
    addDatesToModel: (model) => {
        model.createdAt = new Date();
        model.updatedAt = new Date();
        return model;
    },
    addDatesToModelList: (modelList) => {
        return modelList.map((model) => {
            model.createdAt = new Date();
            model.updatedAt = new Date();
            return model;
        });
    }
};
