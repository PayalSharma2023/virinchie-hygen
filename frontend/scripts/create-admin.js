// scripts/create-admin.js
// Run this script to create your first admin user
// Usage: node scripts/create-admin.js

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

async function createAdmin() {
  try {
    console.log('\n=== Blog Admin User Setup ===\n');

    // Get MongoDB URI
    const mongoUri = await question('Enter MongoDB URI (or press Enter for default: mongodb://localhost:27017/blog-platform): ');
    const uri = mongoUri.trim() || 'mongodb://localhost:27017/blog-platform';

    // Connect to MongoDB
    console.log('\nConnecting to MongoDB...');
    await mongoose.connect(uri);
    console.log('✓ Connected to MongoDB\n');

    // Get admin details
    const name = await question('Admin Name: ');
    const email = await question('Admin Email: ');
    const password = await question('Admin Password: ');

    if (!name || !email || !password) {
      console.log('\n❌ All fields are required!');
      process.exit(1);
    }

    // Hash password
    console.log('\nCreating admin user...');
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create admin schema if not exists
    const AdminSchema = new mongoose.Schema({
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      name: { type: String, required: true },
      createdAt: { type: Date, default: Date.now }
    });

    const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      console.log('\n⚠️  Admin with this email already exists!');
      const overwrite = await question('Do you want to update the password? (yes/no): ');
      
      if (overwrite.toLowerCase() === 'yes' || overwrite.toLowerCase() === 'y') {
        existingAdmin.password = hashedPassword;
        existingAdmin.name = name;
        await existingAdmin.save();
        console.log('\n✓ Admin user updated successfully!');
      } else {
        console.log('\n❌ Operation cancelled.');
      }
    } else {
      // Create new admin
      await Admin.create({
        email,
        password: hashedPassword,
        name,
      });
      console.log('\n✓ Admin user created successfully!');
    }

    console.log('\n=== Login Credentials ===');
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log('\nYou can now login at: http://localhost:3000/admin/login\n');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
  } finally {
    await mongoose.disconnect();
    rl.close();
    process.exit(0);
  }
}

createAdmin();