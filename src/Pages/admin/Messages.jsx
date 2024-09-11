import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/contact/messages');
        setMessages(response.data);
      } catch (err) {
        setError('Failed to load messages.');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Customer Messages</h2>
      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <ul className="space-y-4">
          {messages.map((message) => (
            <li key={message._id} className="border-b border-gray-300 pb-4">
              <p><strong>Name:</strong> {message.name}</p>
              <p><strong>Email:</strong> {message.email}</p>
              <p><strong>Phone:</strong> {message.phone}</p>
              <p><strong>Subject:</strong> {message.subject}</p>
              <p><strong>Message:</strong> {message.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Messages;
