module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.bulkInsert(
        'Blog',
        [
          {
            id: 1,
            title: 'Necessitatibus Saepe',
            image: 'https://codezeel.com/opencart/OPC01/OPC010013/image/cache/catalog/blog-6-890x620.jpg',
            content:
              ' The standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, used ',
            slug: 'necessitatibus-saepe',
            status: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: 2,
            title: 'Urna Curabitur',
            image: 'https://codezeel.com/opencart/OPC01/OPC010013/image/cache/catalog/blog-5-890x620.jpg',
            content:
              ' The standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, used ',
            slug: 'urna-curabitur',
            status: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: 3,
            title: 'Nullam ullamcorper',
            image: 'https://codezeel.com/opencart/OPC01/OPC010013/image/cache/catalog/blog-4-890x620.jpg',
            content:
              ' The standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, used ',
            slug: 'ullam-ullamcorper',
            status: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],
        {}
      ),
      await queryInterface.bulkInsert(
        'Users',
        [
          {
            id: 1,
            name: 'admin',
            mail: 'admin@gmail.com',
            account: 'admin',
            password: 'admin',
            roleId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: 2,
            name: 'Huy_Cuong',
            mail: 'huycuong10081996@gmail.com',
            account: 'huycuong10081996@gmail.com',
            password: '123',
            roleId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: 3,
            name: 'Thien_Tuong',
            mail: 'tuonglam.5998@gmail.com',
            account: 'tuonglam.5998@gmail.com',
            password: '123',
            roleId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],
        {}
      ),
      await queryInterface.bulkInsert('Category', [
        {
          id: 1,
          type: 'Football Boots',
          name: 'Nike Boots',
          image: 'https://www.lovellsoccer.co.uk/cms/graphics/FutureLab-Desktop-Product-Page.jpg',
          description:
            'Take your on-field performance to the next level with Nike Football boots from Lovell Soccer. Here you&apos;ll find classic Nike designs as well as the very latest boots - including Nike Phantom boots designed to make light work of artificial surfaces and Nike Mercurial and Tiempo precision-engineered to enhance the development of young players. Check out the Lovell Soccer Nike boots range.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          type: 'Football Boots',
          name: 'Addidas Boots',
          image: 'https://www.lovellsoccer.co.uk/cms/graphics/Pred-Shadowbeast-Mobile-Desktop-Product-Page.jpg',
          description:
            'Make your mark with adidas football boots from Lovell Soccer. We&apos;ve got an outstanding range of adidas boots for you to choose from - including adidas Nemeziz, Predator, X and more. We can&apos;t all be Lionel Messi himself, but we can try - and with adidas boots you&apos;ll soon see why they&apos;re worn by some of the world&apos;s elite footballers. Check out the full adidas football boots range at Lovell Soccer..279 products available',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          type: 'Football Boots',
          name: 'PUMA Boots',
          image: 'https://www.lovellsoccer.co.uk/cms/graphics/Puma-Spark-Desktop-Product-Page.jpg',
          description:
            'Lovell Soccer is proud to stock Football boots from Puma, widely recognised as one of the world&apos;s leading sportswear specialists. Among the Lovell Football Puma range you&apos;ll find Puma Future and One boots, utilising the very latest technology to deliver natural power on artificial surfaces. Browse the Puma Football boots range at Lovell Soccer today.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          type: 'Football Boots',
          name: 'New Balance Boots',
          image: '',
          description:
            ' For outstanding comfort and even better performance, choose New Balance boots from Lovell Soccer. The New Balance Furon is designed to enhance pace and finishing, while the Tekela boot offers a unique feel that&apos;s ideal for creative playmakers. We&apos;ve got New Balance boots for kids and adults at all levels. Take a look at the full New Balance football boots range at Lovell Soccer today.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          type: 'Football Boots',
          name: 'Mizuno Boots',
          image: '',
          description:
            'Find the boots you need to enhance your game in the range of Mizuno football boots here at Lovell Soccer. The legendary Japanese brand&apos;s boots - including the popular Mizuno Morelia - are designed to guarantee comfort while at the same time providing you with greater speed and control. Check out the selection of Mizuno boots here at Lovell Soccer.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 6,
          type: 'Football Boots',
          name: 'Under Armour Boots',
          image: '',
          description:
            ' Take your game forward with Under Armour football boots from Lovell Soccer. Whatever level you&apos;re at and whatever your individual style, we&apos;ve got Under Armour boots that are perfect for you - including Magnetico and Spotlight boots, designed to provide enhanced ball control and comfort. Take a look at the full range of Under Armour boots at Lovell Soccer today.',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]),

      await queryInterface.bulkInsert('Products', [
        {
          id: 1,
          name: 'Nike Boots 1',
          description:
            ' The standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, used ',
          tradeMark: 'Nike',
          image: JSON.stringify(['https://codezeel.com/opencart/OPC01/OPC010013/image/cache/catalog/blog-6-890x620.jpg']),
          color: 'pink',
          price: 69.6,
          tag: 'boots',
          generation: 'adult',
          sex: 'male',
          status: 'active',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: 2,
          name: 'Nike Boots 2',
          description:
            ' The standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, used ',
          tradeMark: 'Nike',
          image: JSON.stringify(['https://codezeel.com/opencart/OPC01/OPC010013/image/cache/catalog/blog-6-890x620.jpg']),
          color: 'pink',
          price: 69.6,
          tag: 'boots',
          generation: 'adult',
          sex: 'male',
          status: 'active',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: 3,
          name: 'Addidas Boots 1',
          description:
            ' The standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, used ',
          tradeMark: 'Addidas',
          image: JSON.stringify(['https://codezeel.com/opencart/OPC01/OPC010013/image/cache/catalog/blog-6-890x620.jpg']),
          color: 'blue',
          price: 71.4,
          tag: 'boots',
          generation: 'adult',
          sex: 'male',
          status: 'active',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          name: 'Addidas Boots 2',
          description:
            ' The standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, used ',
          tradeMark: 'Addidas',
          image: JSON.stringify(['https://codezeel.com/opencart/OPC01/OPC010013/image/cache/catalog/blog-6-890x620.jpg']),
          color: 'blue',
          price: 71.4,
          tag: 'boots',
          generation: 'adult',
          sex: 'male',
          status: 'active',
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: 5,
          name: 'PUMA Boots 1',
          description:
            ' The standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, used ',
          tradeMark: 'PUMA',
          image: JSON.stringify(['https://codezeel.com/opencart/OPC01/OPC010013/image/cache/catalog/blog-6-890x620.jpg']),
          color: 'red',
          price: 78.9,
          tag: 'boots',
          generation: 'adult',
          sex: 'male',
          status: 'active',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: 6,
          name: 'PUMA Boots 2',
          description:
            ' The standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, used ',
          tradeMark: 'PUMA',
          image: JSON.stringify(['https://codezeel.com/opencart/OPC01/OPC010013/image/cache/catalog/blog-6-890x620.jpg']),
          color: 'red',
          price: 78.9,
          tag: 'boots',
          generation: 'adult',
          sex: 'male',
          status: 'active',
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: 7,
          name: 'New Balance Boots 1',
          description:
            ' The standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, used ',
          tradeMark: 'New Balance',
          image: JSON.stringify(['https://codezeel.com/opencart/OPC01/OPC010013/image/cache/catalog/blog-6-890x620.jpg']),
          color: 'yellow',
          price: 92.4,
          tag: 'boots',
          generation: 'adult',
          sex: 'male',
          status: 'active',
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: 8,
          name: 'New Balance Boots 2',
          description:
            ' The standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, used ',
          tradeMark: 'New Balance',
          image: JSON.stringify(['https://codezeel.com/opencart/OPC01/OPC010013/image/cache/catalog/blog-6-890x620.jpg']),
          color: 'yellow',
          price: 92.4,
          tag: 'boots',
          generation: 'adult',
          sex: 'male',
          status: 'active',
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: 9,
          name: 'Mizuno Boots 1',
          description:
            ' The standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, used ',
          tradeMark: 'Mizuno',
          image: JSON.stringify(['https://codezeel.com/opencart/OPC01/OPC010013/image/cache/catalog/blog-6-890x620.jpg']),
          color: 'pink',
          price: 52.4,
          tag: 'boots',
          generation: 'adult',
          sex: 'male',
          status: 'active',
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: 10,
          name: 'Mizuno Boots 2',
          description:
            ' The standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, used ',
          tradeMark: 'Mizuno',
          image: JSON.stringify(['https://codezeel.com/opencart/OPC01/OPC010013/image/cache/catalog/blog-6-890x620.jpg']),
          color: 'pink',
          price: 52.4,
          tag: 'boots',
          generation: 'adult',
          sex: 'male',
          status: 'active',
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: 11,
          name: 'Mizuno Boots 3',
          description:
            ' The standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, used ',
          tradeMark: 'Mizuno',
          image: JSON.stringify(['https://codezeel.com/opencart/OPC01/OPC010013/image/cache/catalog/blog-6-890x620.jpg']),
          color: 'pink',
          price: 52.4,
          tag: 'boots',
          generation: 'adult',
          sex: 'male',
          status: 'active',
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: 12,
          name: 'Under Armour Boots 1',
          description:
            ' The standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, used ',
          tradeMark: 'Under Armour',
          image: JSON.stringify(['https://codezeel.com/opencart/OPC01/OPC010013/image/cache/catalog/blog-6-890x620.jpg']),
          color: 'pink',
          price: 90.4,
          tag: 'boots',
          generation: 'adult',
          sex: 'male',
          status: 'active',
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: 13,
          name: 'Under Armour Boots 2',
          description:
            ' The standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, usedThe standard Lorem Ipsum passage, used since the 1500s"Lorem The standard Lorem Ipsum passage, used since the 1500s"LoremThe standard Lorem Ipsum passage,  used since the 1500s"LoremThe standard Lorem Ipsum passage, used ',
          tradeMark: 'Under Armour',
          image: JSON.stringify(['https://codezeel.com/opencart/OPC01/OPC010013/image/cache/catalog/blog-6-890x620.jpg']),
          color: 'pink',
          price: 90.4,
          tag: 'boots',
          generation: 'adult',
          sex: 'male',
          status: 'active',
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
    ])
  },
  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.bulkDelete('Blog', null, {}),
      await queryInterface.bulkDelete('Users', null, {}),
      await queryInterface.bulkDelete('Category', null, {}),
      await queryInterface.bulkDelete('Products', null, {})
    ])
  }
}
