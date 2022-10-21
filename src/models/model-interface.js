'use strict';

class ModelInterface {
  constructor(model) {
    this.model = model;
  }

  async read(id) {
    try {
      if (id) {
        return await this.model.findOne({ where: { id } });
      }
      else {
        return await this.model.findAll();
      }
    } catch (e) {
      console.error('Error in ModelInterface.prototype.read:', e.message);
      throw new Error(e);
    }
  }

  async create(record) {
    try {
      return await this.model.create(record);
    } catch (e) {
      console.error('Error in ModelInterface.prototype.create:', e.message);
      throw new Error(e);
    }
  }

  async update(id, data) {
    try {
      const record = await this.model.findOne({ where: { id } });
      return await record.update(data);
    } catch (e) {
      console.error('Error in ModelInterface.prototype.update:', e.message);
      throw new Error(e);
    }
  }

  async delete(id) {
    try {
      return await this.model.destroy({ where: { id } });
    } catch (e) {
      console.error('Error in ModelInterface.prototype.delete:', e.message);
      throw new Error(e);
    }
  }
}

module.exports = ModelInterface;
