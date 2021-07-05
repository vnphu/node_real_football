module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable('Users', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: { type: Sequelize.STRING, allowNull: false },
        mail: { type: Sequelize.STRING, allowNull: false },
        phone: Sequelize.STRING,
        address: Sequelize.STRING,
        account: { type: Sequelize.STRING, allowNull: false },
        password: Sequelize.STRING,
        activeCode: Sequelize.STRING,
        accessToken: Sequelize.STRING,
        refreshToken: Sequelize.INTEGER,
        roleId: Sequelize.INTEGER,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      })
      await queryInterface.createTable('Blog', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'id'
          }
        },
        image: {
          type: Sequelize.STRING
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false
        },
        content: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        status: Sequelize.INTEGER,
        slug: {
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      })
      await queryInterface.createTable('Category', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        type: Sequelize.STRING,
        name: Sequelize.STRING,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      })
      await queryInterface.createTable('Size', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: Sequelize.STRING,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      })
      await queryInterface.createTable('Products', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: Sequelize.STRING,
        description: Sequelize.TEXT,
        tradeMark: Sequelize.STRING,
        image: Sequelize.JSON,
        color: Sequelize.STRING,
        price: Sequelize.DOUBLE,
        tag: Sequelize.STRING,
        generation: Sequelize.STRING,
        sex: Sequelize.STRING,
        status: Sequelize.STRING,
        categoryId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Category',
            key: 'id'
          }
        },
        sizeId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Size',
            key: 'id'
          }
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      })

      await queryInterface.createTable('Inventory', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        productId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Products',
            key: 'id'
          }
        },
        quantity: Sequelize.INTEGER,
        onOrderQuantity: Sequelize.INTEGER,
        reorderLevel: Sequelize.INTEGER,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      })

      await queryInterface.createTable('Orders', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        deliveryAdress: Sequelize.STRING,
        receiverName: Sequelize.STRING,
        receiverPhone: Sequelize.STRING,
        totalAmount: Sequelize.DOUBLE,
        deliveryBy: Sequelize.STRING,
        status: Sequelize.INTEGER,
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'id'
          }
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      })
      await queryInterface.createTable('Invoices', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        invoiceCode: Sequelize.STRING,
        orderId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Orders',
            key: 'id'
          }
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      })

      await queryInterface.createTable('OrderItems', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        quantity: Sequelize.INTEGER,
        unitPrice: Sequelize.DOUBLE,
        unitTax: Sequelize.DOUBLE,
        totalAmount: Sequelize.DOUBLE,
        orderId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Orders',
            key: 'id'
          }
        },
        productId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Products',
            key: 'id'
          }
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      })

      await queryInterface.createTable('Ratings', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        review: Sequelize.STRING,
        rate: Sequelize.INTEGER,
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'id'
          }
        },
        productId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Products',
            key: 'id'
          }
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      })

      await queryInterface.createTable('StockInItems', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        supplier: Sequelize.STRING,
        quantity: Sequelize.INTEGER,
        totalAmount: Sequelize.DOUBLE,
        inventoryId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Inventory',
            key: 'id'
          }
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      })

      return Promise.resolve()
    } catch (e) {
      return Promise.reject(e)
    }
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.dropTable('Blog'),
      await queryInterface.dropTable('StockInItems'),
      await queryInterface.dropTable('Inventory'),
      await queryInterface.dropTable('OrderItems'),
      await queryInterface.dropTable('Ratings'),
      await queryInterface.dropTable('Products'),
      await queryInterface.dropTable('Category'),
      await queryInterface.dropTable('Invoices'),
      await queryInterface.dropTable('Orders'),
      await queryInterface.dropTable('Size'),
      await queryInterface.dropTable('Users')
    ])
  }
}
