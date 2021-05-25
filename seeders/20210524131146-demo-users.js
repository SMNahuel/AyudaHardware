'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [    {
      name: 'Gustavo',      
      email: 'Gustavo@test.com',
      // Important: Password not encrypted yet! 
      password: '$2b$10$CO4FJCSv3mdDleo0m41vaeXG5AZOcyVx2QiSmsTZdi/IQZWB.lG06',
      createdAt: new Date,
      updatedAt: new Date
  },
  {
      name: 'Jack',      
      email: 'Jack@test.com',
      // Important: Password not encrypted yet! 
      password: '$2b$10$CO4FJCSv3mdDleo0m41vaeXG5AZOcyVx2QiSmsTZdi/IQZWB.lG06',
      createdAt: new Date,
      updatedAt: new Date
  },
  {
      name: 'Peter',      
      email: 'Peter@test.com',
      // Important: Password not encrypted yet! 
      password: '$2b$10$CO4FJCSv3mdDleo0m41vaeXG5AZOcyVx2QiSmsTZdi/IQZWB.lG06',
      createdAt: new Date,
      updatedAt: new Date
  },
  {
      name: 'Fabricio',      
      email: 'Fabricio@test.com',
      // Important: Password not encrypted yet! 
      password: '$2b$10$CO4FJCSv3mdDleo0m41vaeXG5AZOcyVx2QiSmsTZdi/IQZWB.lG06',
      createdAt: new Date,
      updatedAt: new Date
  },
  {
      name: 'Victoria',      
      email: 'Victoria@test.com',
      // Important: Password not encrypted yet! 
      password: '$2b$10$CO4FJCSv3mdDleo0m41vaeXG5AZOcyVx2QiSmsTZdi/IQZWB.lG06',
      createdAt: new Date,
      updatedAt: new Date
  },
  {
      name: 'Celeste',      
      email: 'Celeste@test.com',
      // Important: Password not encrypted yet! 
      password: '$2b$10$CO4FJCSv3mdDleo0m41vaeXG5AZOcyVx2QiSmsTZdi/IQZWB.lG06',
      createdAt: new Date,
      updatedAt: new Date
  },
  {
      name: 'Rick',      
      email: 'Rick@test.com',
      // Important: Password not encrypted yet! 
      password: '$2b$10$CO4FJCSv3mdDleo0m41vaeXG5AZOcyVx2QiSmsTZdi/IQZWB.lG06',
      createdAt: new Date,
      updatedAt: new Date
  },
  {
      name: 'Sergio',      
      email: 'Sergio@test.com',
      // Important: Password not encrypted yet! 
      password: '$2b$10$CO4FJCSv3mdDleo0m41vaeXG5AZOcyVx2QiSmsTZdi/IQZWB.lG06',
      createdAt: new Date,
      updatedAt: new Date
  },
  {
      name: 'Esteban',      
      email: 'Esteban@test.com',
      // Important: Password not encrypted yet! 
      password: '$2b$10$CO4FJCSv3mdDleo0m41vaeXG5AZOcyVx2QiSmsTZdi/IQZWB.lG06',
      createdAt: new Date,
      updatedAt: new Date
  },
  {
      name: 'David',      
      email: 'David@test.com',
      // Important: Password not encrypted yet! 
      password: '$2b$10$CO4FJCSv3mdDleo0m41vaeXG5AZOcyVx2QiSmsTZdi/IQZWB.lG06',
      createdAt: new Date,
      updatedAt: new Date
  },
  //User rol ID 2
  {
      name: 'Victor',      
      email: 'Victor@test.com',
      // Important: Password not encrypted yet! 
      password: '$2b$10$CO4FJCSv3mdDleo0m41vaeXG5AZOcyVx2QiSmsTZdi/IQZWB.lG06',
      createdAt: new Date,
      updatedAt: new Date
  },
  {
      name: 'Luis',      
      email: 'Luis@test.com',
      // Important: Password not encrypted yet! 
      password: '$2b$10$CO4FJCSv3mdDleo0m41vaeXG5AZOcyVx2QiSmsTZdi/IQZWB.lG06',
      createdAt: new Date,
      updatedAt: new Date
  },
  {
      name: 'Homer',      
      email: 'Homer@test.com',
      // Important: Password not encrypted yet! 
      password: '$2b$10$CO4FJCSv3mdDleo0m41vaeXG5AZOcyVx2QiSmsTZdi/IQZWB.lG06',
      createdAt: new Date,
      updatedAt: new Date
  },
  {
      name: 'Ignacion',      
      email: 'Ignacion@test.com',
      // Important: Password not encrypted yet! 
      password: '$2b$10$CO4FJCSv3mdDleo0m41vaeXG5AZOcyVx2QiSmsTZdi/IQZWB.lG06',
      createdAt: new Date,
      updatedAt: new Date
  },
  {
      name: 'Antonela',      
      email: 'Antonela@test.com',
      // Important: Password not encrypted yet! 
      password: '$2b$10$CO4FJCSv3mdDleo0m41vaeXG5AZOcyVx2QiSmsTZdi/IQZWB.lG06',
      createdAt: new Date,
      updatedAt: new Date
  },
  {
      name: 'Virginia',      
      email: 'Virginia@test.com',
      // Important: Password not encrypted yet! 
      password: '$2b$10$CO4FJCSv3mdDleo0m41vaeXG5AZOcyVx2QiSmsTZdi/IQZWB.lG06',
      createdAt: new Date,
      updatedAt: new Date
  },
  {
      name: 'Selene',      
      email: 'Selene@test.com',
      // Important: Password not encrypted yet! 
      password: '$2b$10$CO4FJCSv3mdDleo0m41vaeXG5AZOcyVx2QiSmsTZdi/IQZWB.lG06',
      createdAt: new Date,
      updatedAt: new Date
  },
  {
      name: 'Clarisa',      
      email: 'Clarisa@test.com',
      // Important: Password not encrypted yet! 
      password: '$2b$10$CO4FJCSv3mdDleo0m41vaeXG5AZOcyVx2QiSmsTZdi/IQZWB.lG06',
      createdAt: new Date,
      updatedAt: new Date
  },
  {
      name: 'Genaro',      
      email: 'Genaro@test.com',
      // Important: Password not encrypted yet! 
      password: '$2b$10$CO4FJCSv3mdDleo0m41vaeXG5AZOcyVx2QiSmsTZdi/IQZWB.lG06',
      createdAt: new Date,
      updatedAt: new Date
  },
  {
      name: 'Hector',      
      email: 'Hector@test.com',
      // Important: Password not encrypted yet! 
      password: '$2b$10$CO4FJCSv3mdDleo0m41vaeXG5AZOcyVx2QiSmsTZdi/IQZWB.lG06',
      createdAt: new Date,
      updatedAt: new Date
  }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
