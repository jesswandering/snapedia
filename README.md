<p align="center">
<img width="177" alt="Screenshot 2023-08-15 at 5 57 21 PM" src="https://github.com/jesswandering/snapedia/assets/126031278/cfc0bc57-97e2-414e-88aa-35920ca3bf00">
</p>

## About
**Snapedia** is a web application designed to be a hub for all your social media needs, combining the features of platforms like Snapchat and Wikipedia. With Snapedia, you can connect with friends, share pictures, create posts, and interact with the content of others.

## Features
**User Registration and Profile:** Users can sign up for an account on Snapedia, complete their profile, and upload a profile picture. Additionally, they can link their other social media accounts for a comprehensive online presence.

**Picture Posts:** Users can create and share picture posts with descriptive captions. These posts will be visible in the main feed and on their profile.

**Friend Connections:** Snapedia allows users to connect with their friends by adding a user to your Friend's List. Once connected, users can view their friends' posts in their news feed.

**News Feed:** The news feed displays a curated collection of posts from the user's friends. Users can easily keep up to date with the latest content from their social circle.

**Interactions:** Users can like and comment on posts shared by their friends. This encourages interaction and engagement among the user community.

## Built With
**Snapedia** is a full-stack social media web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. 
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
<br>
It also utilizes: ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

## Getting Started
### Prerequisites
* Node.js
* MongoDB database - local install
* A courier API Key

### Backend
1. Fork and Clone this repository:
`git clone https://github.com/your-username/RxReMinder-BE.git
cd snapedia-backend`
2. Install dependencies with:  `npm install`
3. Create a `.env` file in the repository root.
4. Start the backend server `nodemon`

## Code Snippets
### Frontend 
Light and Dark Mode in the Navigation bar:
```
const Navbar = () => {
    const theme = useTheme();
    const neutralLight = theme.palette.neutral.light;
    const dark = theme.palette.neutral.dark;
    const background = theme.palette.background.default;
    const primaryLight = theme.palette.primary.light;
    const alt = theme.palette.background.alt;

    const fullName = `${user.firstName} ${user.lastName}`;
```
### Backend
Create a new post with option to drag and drop an image:
```
export const createPost = async (req, res) => {
    try {
        const { userId, description, picturePath } = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: [],
        });
        await newPost.save();

        const post = await Post.find();
        res.status(201).json(post);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};
```

## Wireframe
<img width="978" alt="user-page" src="https://github.com/jesswandering/snapedia/assets/126031278/fbcdb9f6-1737-4057-aeb1-125878b052ea">

<img width="978" alt="homepage" src="https://github.com/jesswandering/snapedia/assets/126031278/f2034d71-deee-41dd-a8e5-d3713cee9193">

## Data Model
<img width="945" alt="data-model" src="https://github.com/jesswandering/snapedia/assets/126031278/867a51b3-8ca8-4482-97de-9d40d3443c28">

## Previews
### Register Page
<img width="1512" alt="register" src="https://github.com/jesswandering/snapedia/assets/126031278/6fdc4e3e-ab1a-43c9-8160-ec05a963c0be">

### Login Page
<img width="1512" alt="login" src="https://github.com/jesswandering/snapedia/assets/126031278/6946abc3-87e2-4b20-80dc-ef5db0b30e68">

### Homepage
<img width="1511" alt="home" src="https://github.com/jesswandering/snapedia/assets/126031278/91f971a8-669d-4647-a83d-a8d78a712fc8">

### User Page
<img width="1512" alt="user" src="https://github.com/jesswandering/snapedia/assets/126031278/e570e763-ec2b-4bca-b551-3967faa6f7d2">

## Future Enhancments
* Complete logic for notifications.
* Complete form for users to post comments on other's posts.
* Allow User to edit User page.
