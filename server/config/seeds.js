const db = require("./connection");
const { User, Product, Category, Trainer } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Fitness" },
    { name: "Nutrition" },
    { name: "The Arts" },
    { name: "School" },
    { name: "Marketing" },
    { name: "Crafting" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      // Fitness - 0
      name: "Personal Trainer",
      description:
        "Learn how to use your body in a safe/efficient way! Programming and hands on instruction included.",
      image: "",
      category: categories[0]._id,
      price: 45.0,
      quantity: 5,
    },
    {
      // Fitness - 1
      name: "Weightlifting Coach",
      description:
        "Programming provided with a monthly check-in to fine tune the following months programming. More than just picking things up and putting them back down.",
      image: "",
      category: categories[0]._id,
      price: 80.0,
      quantity: 5,
    },
    {
      // Nutrition - 2
      name: "Nutrition Coaching",
      description:
        "Master the culinary arts for the everyday individual. Nutrition is the vital (often missing) piece to achieve the results you are looking for.",
      image: "",
      category: categories[1]._id,
      price: 40.0,
      quantity: 5,
    },
    {
      // Arts - 3
      name: "Sheet Music/Band Assistance",
      description:
        "Learn the art of reading music and how to bridge the gap between sheet music and your instrument!",
      image: "",
      category: categories[2]._id,
      price: 50.0,
      quantity: 5,
    },
    {
      // Arts- 4
      name: "Choral Coach",
      description:
        "Learn to properly warm up your vocal chords, harmonies, and carry a tune in a bucket full of holes! (not a miracle worker however)",
      image: "",
      category: categories[2]._id,
      price: 30.0,
      quantity: 5,
    },
    {
      // Arts -5
      name: "Painting Instructor",
      description:
        "Experience the beauty that expressing yourself in paint form! (Happy little trees and birds not included)",
      image: "",
      category: categories[2]._id,
      price: 50.0,
      quantity: 5,
    },
    {
      // Arts -6
      name: "Graphic Design",
      description: "Cutting edge art form that is very marketable these days!",
      image: "",
      category: categories[2]._id,
      price: 60.0,
      quantity: 5,
    },
    {
      // School - 7
      name: "Math Tutor",
      description: "Here to help with all your arithmetic needs!",
      image: "",
      category: categories[3]._id,
      price: 40.0,
      quantity: 5,
    },
    {
      // School - 8
      name: "English Tutor",
      description:
        "Here to help understand one of the most complex languages on the planet!",
      image: "",
      category: categories[3]._id,
      price: 40.0,
      quantity: 5,
    },
    {
      // School - 9
      name: "Social Studies Tutor",
      description:
        "Here to help with history, civics, or even just understanding our culture a little bit more!",
      image: "",
      category: categories[3]._id,
      price: 40.0,
      quantity: 5,
    },
    {
      // School - 10
      name: "Science Tutor",
      description:
        "The new frontier! Let me guide you into the complex maze that is SCIENCE!",
      image: "",
      category: categories[3]._id,
      price: 40.0,
      quantity: 5,
    },
    {
      // School - 11
      name: "Computer Science Tutor",
      description:
        "Are you stuck on an assignment or project and need some guidance to get over the hump? Tap me in coach because I am ready to help!",
      image: "",
      category: categories[3]._id,
      price: 40.0,
      quantity: 5,
    },
    {
      // Marketing - 12
      name: "Marketing 101",
      description:
        "Are you a small business or freelance worker who needs help getting exposure? Let us help you get your name out there without spending more than you need!",
      image: "",
      category: categories[4]._id,
      price: 100.0,
      quantity: 5,
    },
    {
      // Marketing - 13
      name: "Content Creation",
      description:
        "For the fledgling social media starlet who is trying to get out there. Sign up for best posting practices and trends coming to your platform!",
      image: "",
      category: categories[4]._id,
      price: 80.0,
      quantity: 5,
    },
    {
      // Marketing - 14
      name: "SEO Optimization",
      description:
        "For the fledgling social media starlet who is trying to get out there. Sign up for best posting practices and trends coming to your platform!",
      image: "",
      category: categories[4]._id,
      price: 80.0,
      quantity: 5,
    },
    {
      // Crafting - 15
      name: "Underwater Basket Weaving",
      description: "Skill as old as time. Let me teach you my ways.",
      image: "",
      category: categories[5]._id,
      price: 1000.0,
      quantity: 5,
    },
  ]);

  console.log("products seeded!");

  await Trainer.deleteMany();

    const trainer = await Trainer.insertMany([
        { 
            name: 'James Belk',
            description: 'Here to help you reach all of your fitness dreams!',
            image: 'https://picsum.photos/id/177/269/194',
            category: [categories[0]._id, categories[5]._id],
            products: [products[0]._id, products[15]._id]
        },
        { 
            name: 'Eddie Coan',
            description: 'World respected power-lifter. Guaranteed to get you strong as an ox.',
            image: 'https://picsum.photos/id/883/269/194',
            category: categories[0]._id,
            products: [products[0]._id, products[1]._id],
        },
        { 
            name: 'Chris Blossom',
            description: 'Nutrition is key! Let me help you with the kitchen.',
            image: 'https://picsum.photos/id/835/269/194',
            product: products[2]._id,
            category: categories[1]._id
        },
        { 
            name: 'Alex Restrepo',
            description: 'Here to help you carry a tune inside and outside of a bucket!',
            image: 'https://picsum.photos/id/453/269/194',
            product: [products[3]._id, products[4]._id],
            category: categories[2]._id
        },
        { 
            name: 'Vincent van Gogh',
            description: 'While blue might be my favorite color, let me teach you ways without talking your ear off!',
            image: 'https://picsum.photos/id/869/269/194',
            product: [products[5]._id, products[6]._id],
            category: categories[2]._id
        },
        { 
            name: 'Josh Rodeheaver',
            description: 'Learning! Come get all your learnin!',
            image: 'https://picsum.photos/id/1/269/194',
            product: [products[7]._id, products[8]._id, products[9]._id],
            category: categories[3]._id
        },
        { 
            name: 'Albert Einstein',
            description: 'I may not know how to use conditioner but... SCIENCE!',
            image: 'https://picsum.photos/id/967/269/194',
            product: [products[9]._id, products[10]._id, products[11]._id],
            category: categories[3]._id
        },
        { 
            name: 'Karly Weatherstein',
            description: 'Content creation and getting noticed, here for it',
            image:'https://picsum.photos/id/628/269/194',
            product: [products[12]._id, products[13]._id, products[14]._id],
            category: categories[4]._id
        }
    ]);

  console.log("trainers seeded!");

  await User.deleteMany();

  // await User.create({
  //     username: 'jamesbelk',
  //     email: 'jamesbelk@testemail.com',
  //     password: 'password12345',
  // });

  // await User.create({
  //     username: 'karlywetherstein',
  //     email: 'karlyweatherstein@testemail.com',
  //     password: 'password12345',
  // });

  // await User.create({
  //     username: 'joshrodeheaver',
  //     email: 'joshrodeheaver@testemail.com',
  //     password: 'password12345',
  // });

  // await User.create({
  //     username: 'alejandrorestrepo',
  //     email: 'alejandrorestrepo@testemail.com',
  //     password: 'password12345',
  // });

  // console.log('users seeded');

  process.exit();
});
