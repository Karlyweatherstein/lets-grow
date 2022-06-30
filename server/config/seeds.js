const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Tutor' },
        { name: 'Arts' },
        { name: 'Life-Style' },
        { name: 'Trade Skills' },
    ]);

    console.log('categories seeded');
    
    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            // Tutor
            name: 'Math Tutor',
            description: 'Here to help with all your athrithmatic needs!',
            image:'',
            category: categories[0]._id,
            price: 40.00,
            quantity: 5
        },
        { 
            // Tutor
            name: 'English Tutor',
            description: 'Here to help understand one of the most complex languages on the planet!',
            image:'',
            category: categories[0]._id,
            price: 40.00,
            quantity: 5
        },
        {
            // Tutor
            name: 'Social Studies Tutor',
            description: 'Here to help with history, civics, or even just understanding our culture a little bit more!',
            image:'',
            category: categories[0]._id,
            price: 40.00,
            quantity: 5
        },
        {
            // Tutor
            name: 'Science Tutor',
            description: 'The new frontier! Let me guide you into the complex maze that is SCIENCE!',
            image:'',
            category: categories[0]._id,
            price: 40.00,
            quantity: 5
        },
        {
            // Arts
            name: 'Sheet Music/Band Asistance',
            description: 'Learn the art of reading music and how to bridge the gap between sheet music and your instrument!',
            image:'',
            category: categories[1]._id,
            price: 50.00,
            quantity: 5
        },
        {
            // Arts
            name: 'Choral Coach',
            description: 'Learn to properly warm up your vocal chords, harmonies, and carry a tune in a bucket full of holes! (not a mircale worker however)',
            image:'',
            category: categories[1]._id,
            price: 30.00,
            quantity: 5
        },
        {
            // Arts
            name: 'Painting Instructor',
            description: 'Experience the beauty that expressing yourself in paint form! (Happy little trees and birds not included)',
            image:'',
            category: categories[1]._id,
            price: 50.00,
            quantity: 5
        },
        {
            // Arts
            name: 'Graphic Design',
            description: 'Cutting edge art form that is very marketable these days!',
            image:'',
            category: categories[1]._id,
            price: 60.00,
            quantity: 5
        },
    ])
})