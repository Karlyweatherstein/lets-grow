const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Fitness' },
        { name: 'Nutrition' },
        { name: 'The Arts' },
        { name: 'School' },
        { name: 'Marketing' },
    ]);

    console.log('categories seeded');
    
    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            // Fitness
            name: 'Personal Trainer',
            description: 'Learn how to use your body in a safe/efficient way! Programming and hands on instruction included.',
            image:'',
            category: categories[0]._id,
            price: 45.00,
            quantity: 5
        },
        {
            // Fitness
            name: 'Weight-Lifting Coach',
            description: 'Programming provided with a monthly checkin to fine tune the following months programming. More than just picking things up and putting them back down.',
            image:'',
            category: categories[0]._id,
            price: 80.00,
            quantity: 5
        },   
        {
            // Nutrition
            name: 'Nutrition Coaching',
            description: 'Master the culinary arts for the everyday individual. Nutrition is the vital (often missing) piece to achieve the results you are looking for.',
            image:'',
            category: categories[1]._id,
            price: 40.00,
            quantity: 5
        },
        {
            // Arts
            name: 'Sheet Music/Band Asistance',
            description: 'Learn the art of reading music and how to bridge the gap between sheet music and your instrument!',
            image:'',
            category: categories[2]._id,
            price: 50.00,
            quantity: 5
        },
        {
            // Arts
            name: 'Choral Coach',
            description: 'Learn to properly warm up your vocal chords, harmonies, and carry a tune in a bucket full of holes! (not a mircale worker however)',
            image:'',
            category: categories[2]._id,
            price: 30.00,
            quantity: 5
        },
        {
            // Arts
            name: 'Painting Instructor',
            description: 'Experience the beauty that expressing yourself in paint form! (Happy little trees and birds not included)',
            image:'',
            category: categories[2]._id,
            price: 50.00,
            quantity: 5
        },
        {
            // Arts
            name: 'Graphic Design',
            description: 'Cutting edge art form that is very marketable these days!',
            image:'',
            category: categories[2]._id,
            price: 60.00,
            quantity: 5
        },
        {
            // School
            name: 'Math Tutor',
            description: 'Here to help with all your athrithmatic needs!',
            image:'',
            category: categories[3]._id,
            price: 40.00,
            quantity: 5
        },
        { 
            // School
            name: 'English Tutor',
            description: 'Here to help understand one of the most complex languages on the planet!',
            image:'',
            category: categories[3]._id,
            price: 40.00,
            quantity: 5
        },
        {
            // School
            name: 'Social Studies Tutor',
            description: 'Here to help with history, civics, or even just understanding our culture a little bit more!',
            image:'',
            category: categories[3]._id,
            price: 40.00,
            quantity: 5
        },
        {
            // School
            name: 'Science Tutor',
            description: 'The new frontier! Let me guide you into the complex maze that is SCIENCE!',
            image:'',
            category: categories[3]._id,
            price: 40.00,
            quantity: 5
        },
        {
            // School
            name: 'Computer Science Tutor',
            description: 'Are you stuck on an assignment or project and need some guidance to get over the hump? Tap me in coach because I am ready to help!',
            image:'',
            category: categories[3]._id,
            price: 40.00,
            quantity: 5
        },
        {
            // Marketing
            name: 'Marketing 101',
            description: 'Are you a small business or freelance worker who needs help getting exposure? Let us help you get your name out there without spending more than you need!',
            image:'',
            category: categories[4]._id,
            price: 100.00,
            quantity: 5
        },
        {
            // Marketing
            name: 'Content Creation',
            description: 'For the fledgling social media starlet who is trying to get out there. Sign up for best posting practices and trends coming to your platform!',
            image:'',
            category: categories[4]._id,
            price: 80.00,
            quantity: 5
        },
        {
            // Marketing
            name: 'SEO Optimization',
            description: 'For the fledgling social media starlet who is trying to get out there. Sign up for best posting practices and trends coming to your platform!',
            image:'',
            category: categories[4]._id,
            price: 80.00,
            quantity: 5
        }
    ]);

    console.log('products seeded!');

    await User.deleteMany();

    await User.create({
        email: 'jamesbelk@testemail.com',
        username: 'jamesbelk',
        password: 'password12345',
    });

    await User.create({
        email: 'karlyweatherstein@testemail.com',
        username: 'karlywetherstein',
        password: 'password12345',
    });

    await User.create({
        email: 'joshrodeheaver@testemail.com',
        username: 'joshrodeheaver',
        password: 'password12345',
    });

    await User.create({
        email: 'alejandrorestrepo@testemail.com',
        username: 'alejandrorestrepo',
        password: 'password12345',
    });

    console.log('users seeded');

    process.exit();
});