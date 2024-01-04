import React, { FC } from 'react';
import './profile.css';

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => (
  <div className="profile" data-testid="Profile">
    Profile Component
  </div>
);

export default Profile;
