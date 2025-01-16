/* eslint-disable @typescript-eslint/no-require-imports */
console.log(
  '\x1b[36m%s\x1b[0m',
  `
══════════════════════════════════════
                                     
          Setting Up Database          
                                      
══════════════════════════════════════`
);

require('dotenv').config();
const mongoose = require('mongoose');

async function setupBlogData() {
  console.log(
    '\x1b[36m%s\x1b[0m',
    `
  ╔════════════════════════════════╗
  ║      Setting Up Blog Data      ║
  ╚════════════════════════════════╝`
  );

  /* === DO SOMETHING === */

  await new Promise((resolve) => setTimeout(resolve, 1000));
}

async function setupProjectData() {
  /* === DO SOMETHING === */
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

async function setupContactData() {
  /* === DO SOMETHING === */
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    await setupBlogData();
    await setupProjectData();
    await setupContactData();

    console.log(
      '\x1b[36m%s\x1b[0m',
      `
══════════════════════════════════════
                                      
  Setting Up Database Successfully
                                      
══════════════════════════════════════`
    );
  })
  .finally(() => {
    mongoose.disconnect();
    process.exit(0);
  });
