import React from 'react';
import './Profile.css'; 
const Profile = () => {

  const posts = [
    {
      id: 1,
      content: '6 am? I was busy chasing my tail and achieving my cardio goals. Next time, join the feline workout routine! 🏃‍♂️😸 #CatFit',
      views: 50,
      createdAt: new Date('2023-01-15T12:30:00'),
    },
    {
      id: 2,
      content: 'Gourmet meal? I just knocked a plant off the shelf. Culinary skills level: Expert Gardener! 🌿😼 #CatChef',
      views: 30,
      createdAt: new Date('2023-01-16T09:45:00'),
    },
    {
      id: 3,
      content: 'Work-life balance, you say? How about nap-work-nap-nap-life balance? 😺💤 #CatLifeGoals',
      views: 59,
      createdAt: new Date('2023-01-17T07:47:00'),
    },
    {
      id: 4,
      content: 'French, you say? Im fluent in Meow-gnifique and Purr-sian. Lets have a multilingual conversation! 🐾😹 #PolyglotCat',
      views: 42,
      createdAt: new Date('2023-01-17T07:47:00'),
    },
  ];

  const profileData = {
    photo: 'https://placekitten.com/200/200',
    backgroundPhoto: 'https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=is&k=20&c=gFkR2a8msAThlYXscYqT9BNz9H7bm4vKpM6EH7HRHIc=',
    name: 'John Doe',
    bio: 'I am good and trustworthy in this chaotic world',
    followers: 100,
    following: 50,
    profileViews: 500,
    likes: 200,
    likedPosts: 10, 
  };

  return (
    <div className="profile-container">
      {/* Header Section */}
      <header className="header">
        <img src="https://asset.brandfetch.io/idbHZbvDnq/idI_cIuhCO.png" alt="Logo" className="logo" />
        <h1 className="header-title">TERRIBLY TINY TALES</h1>
      </header>

      {/* Profile Section */}
      <div className="cover-photo">
        <img
          src={profileData.photo}
          alt="Profile"
          className="profile-photo"
        />
      </div>
      <br /><br />

      {/* Profile Details Section */}
      <div className="profile-details">
        <h1>{profileData.name}</h1>
        <p className="bio">{profileData.bio}</p>
        <div className="followers-info">
          <span>Followers: {profileData.followers}</span>{'\u00A0'}{'\u00A0'}
          <span>Following: {profileData.following}</span>
        </div>
        <div className="stats">
          <span> 🌐 {profileData.profileViews} </span>
          <span>❤️{profileData.likes} </span>
          <span>🌟 {profileData.likedPosts} </span><br /><br />
          <span>Total Posts:📚 {posts.length} </span>
        </div>

        <div className="post-section">
          <h2>Posts</h2>
          <ul>
            {posts.map(post => (
              <li
                key={post.id}
                className="post-item"
              >
                <p>{post.content}</p>
                <div className="post-details">
                  <span>Views: {post.views}</span>
                  <span>
                    Posted on: {post.createdAt.toDateString()} at {post.createdAt.toLocaleTimeString()}
                  </span>
                </div>
              </li>
              
            ))}
          </ul>
        </div>
      </div>
      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2023 Terribly Tiny Tales. All rights reserved.</p>
      </footer>
    </div>

  );
};

export default Profile;