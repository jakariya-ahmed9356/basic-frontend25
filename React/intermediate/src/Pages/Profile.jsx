// src/pages/Profile.jsx
import React from 'react';
import Card from "../components/Card";

export default function Profile() {
  return (
    <div className="mt-10">
      <Card
        img="https://randomuser.me/api/portraits/men/75.jpg"
        title="Jakariya Aman"
        desc="Frontend Developer & Content Creator"
        className="max-w-sm mx-auto bg-orange-100"
        actions={
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            View More →
          </button>
        }
      />
    </div>
  );
}